const express = require('express');
const router = express.Router();


//register user
router.post('/', (req, res) => {
    res.status(200).json({message: "registered user"});
})

//login user
router.post('/login', (req, res) => {
    res.status(200).json({message: "login user"});
})

//get user info
router.get('/me', (req, res) => {
    res.status(200).json({message: "get user info"});
})

module.exports = router;