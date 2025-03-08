const Tasks = require('../models/task');

// Create a new Tasks
const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;
    // Validate if required fields are present
    if (!title || !description || !dueDate || !priority || !status) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    // Create a new task using the validated data
    const newTask = new Tasks({
      title,
      description,
      dueDate,
      priority,
      status,
      // user: req.userId // Assuming userId is in req.userId
    });

    // Save the task to the database
    const recentTask = await newTask.save();
    res.status(201).json({
      success: true,
      message: 'New task created!',
      data: recentTask
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// const createTask = async (req, res) => {
//   // const { title, description, dueDate, priority, status } = req.body;
//   try {
//     // const task = new Task({ title, description, dueDate, priority, status, user: req.userId });
//     const newTask = req.body;
//     const recentTask = await Tasks.create(newTask);
//     if(newTask){
//       res.status(201).json({
//         success : true,
//         message: 'New task created!',
//         data : recentTask,
//       });
//     }
//     // await task.save(); 
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };


// Get all Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({ user: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Single Task by Id
const getSingleTask = async (req, res) => {
  try {
    const task = await Tasks.findOne({ _id: req.params.id, user: req.userId });
    if (!task) return res.status(404).json({ error: 'Task with this ID is not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a Task
const updateTask = async (req, res) => {
  try {
    const task = await Tasks.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a Task
const deleteTask = async (req, res) => {
  try {
    const task = await Tasks.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// module.exports = { createTask };
module.exports = { createTask, getAllTasks, getSingleTask, updateTask, deleteTask };