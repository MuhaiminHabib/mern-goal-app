const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');

const connectDB = require('./config/db');
const port = process.env.port || 8000;

connectDB();
const app = express();

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, () => {
    console.log(`Server stated on port ${port}`)
})