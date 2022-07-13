const express = require('express');
const router = express.Router();
const { registerUser, loginUser, userDetails } = require('../controller/userController');
const { protect } = require('../middleware/authMiddleware');


//register user
router.post('/', registerUser);

//login user
router.post('/login', loginUser);

//get user info
router.get('/me', protect, userDetails);

module.exports = router;