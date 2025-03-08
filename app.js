require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3200;
const databaseConnection = require('./database/database');
const taskRoutes = require('./routes/task-routes');



//Make connection to DataBase
databaseConnection();

//Using express as Middleware
app.use(express.json());

//Create Routes
app.use('/api/tasks', taskRoutes);


app.listen(PORT, () => {
    console.log(`Task Management API app listening on port ${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Please use a different port.`);
    } else {
        console.error('Server error:', err);
      }
        process.exit(1);
 });


