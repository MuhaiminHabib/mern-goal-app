const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { findById } = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if( !name || !email || !password ) {
        res.status(400);
        throw new Error('Please provide all the information');
    }

    //Check if the a user with the email already exists
    const user = await User.findOne({ email });

    if(user) {
        res.status(401);
        throw new Error('An user with this email already exists!')
    }

    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create user
    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if(newUser) {
        res.status(201).json({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            token: generateToken(newUser.id)
        })
    } else {
        res.status(400);
        throw new Error('User not created')
    }
})


const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        res.status(400);
        throw new Error('Please provide all the information');
    }

    //check if the user exist
    const user = await User.findOne({ email });

    if(!user) {
        res.status(401);
        throw new Error('User does not exist')
    }
    if(user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(401)
        throw new Error('Passwords did not match')
    }
})


const userDetails = asyncHandler(async (req, res) => {
   const user = await User.findById(req.user);
   res.status(200).json({
    _id: user.id,
    name: user.name,
    email: user.email
   })
})

const generateToken = (id) => {
    console.log(id);
    return jwt.sign({id: id}, process.env.JWT_SECRET);

}

module.exports = {
    registerUser,
    loginUser,
    userDetails
}