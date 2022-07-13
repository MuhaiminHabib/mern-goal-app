const Goal = require('../models/goalModel');
const asyncHandler = require('express-async-handler');


//@desc     Get all the goals
//@route    GET /api/goals/
//@access   Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find( {id: req.user} );
    res.status(200).json(goals)
})


//@desc     Create a goal
//@route    POST /api/goals/
//@access   Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('You need to add a text field')
    }

    try {
        const newGoal = await Goal.create(req.body);
        res.status(200).json(newGoal);
    } catch (err) {
        res.status(400)
        throw new Error("Could not create the goal")
    }
})

//@desc     Update a goal
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = asyncHandler(async (req, res) => {
    //Retreive the goal
    const goal = await Goal.findById(req.params.id);

    //Check if goal exists
    if(!goal) {
        res.status(400)
        throw new Error('Did not get the requested goal')
    }

    //Check if the user requesting as the same as goal user
    if(goal.user.toString() !== req.user) {
        res.status(401);
        throw new Error('Not authorized to update the goal')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedGoal);
})


//@desc     Delete a goal
//@route    DELETE /api/goals/:id
//@access   Private
const deleteGoal = asyncHandler(async (req, res) => {

     //Retreive the goal
     const goal = await Goal.findById(req.params.id);
     // res.json(goal)
 
     //Check if goal exists
     if(!goal) {
         res.status(400)
         throw new Error('Did not get the requested goal')
     }

     //Check if the user requesting as the same as goal user
    if(goal.user.toString() !== req.user) {
        res.status(401);
        throw new Error('Not authorized to delete the goal')
    }

    await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({id : req.params.id});
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}