require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.port || 4000;
const databaseConnection = require('./Database/tsmdb');
const taskRoute = require('./Routes/task-route');
// const Tasks = require('../models/task');

//make connection to DataBase
databaseConnection();

//Using express as Middleware
app.use(express.json());

//Create Routes here
app.use("/api/tasks", taskRoute);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.listen(port, () => {
    console.log(`Task Management API app listening on port ${port}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Please use a different port.`);
    } else {
        console.error('Server error:', err);
    }
    process.exit(1);
});

