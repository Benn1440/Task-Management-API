const express = require('express');
const { createTask, getAllTasks, getSingleTask, updateTask, deleteTask } = require('../controllers/task-controller');
//Creating express router info
const router = express.Router()

// Specified routes
router.get('/get', getAllTasks)
router.get('/get/:id', getSingleTask)
router.post('/add', createTask )
router.put('/update/:id', updateTask)
router.delete('/delete/:id', deleteTask)

module.exports = router;