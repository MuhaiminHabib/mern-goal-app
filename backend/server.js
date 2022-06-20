const express = require('express');
const dotenv = require('dotenv').config();

const port = process.env.port || 8000;
const app = express();

app.use('/api/goals', require('./routes/goalRoutes'));

// app.get('/', (req, res) => {
//     res.status(200).json({message : "getting all goals"});
// })

app.listen(port, () => {
    console.log(`Server stated on port ${port}`)
})