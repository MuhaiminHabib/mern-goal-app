const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({message : "getting all goals"});
})

router.post('/', (req, res) => {
    res.status(200).json({message : "creating a goal"});
})

router.put('/:id', (req, res) => {
    res.status(200).json({message : "updating a goal"});
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message : "deleting a goal"});
})

module.exports = router;