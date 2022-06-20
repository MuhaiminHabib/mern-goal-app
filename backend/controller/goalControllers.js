const getGoals = (req, res) => {
    res.status(200).json({message : "getting all goals"});
}

const setGoal = (req, res) => {
    res.status(200).json({message : "creating a goal"});
}
const updateGoal = (req, res) => {
    res.status(200).json({message : "updating a goal"});
}

const deleteGoal = (req, res) => {
    res.status(200).json({message : "deleting a goal"});
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}