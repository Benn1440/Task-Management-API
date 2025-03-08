const express = require('express');
// const Tasks = require('../models/task');
// const authMiddleware = require('../middleware/authMiddleware');
const { createTask, getAllTasks, getSingleTask, updateTask, deleteTask } = require('../controllers/task-controller');
// app.use = express();

//Creating Required Routes
const router = express.Router();


//Retrieve all tasks
router.get('/get', getAllTasks);
//Retrieve single task
router.get('/get/:id', getSingleTask);
//Create new task]
router.post('/add', createTask);
//Update a task
router.put('/update/:id', updateTask);
//Delete a task]
router.delete('/delete/:id', deleteTask);

// router.use(authMiddleware);


module.exports = router;
