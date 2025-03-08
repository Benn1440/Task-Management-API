const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'User title is a required field'],
        trim: true,
        maxLength: [70, 'Kindly input characters below 70'],
    },
    description: {
        type: String,
        required: [true, 'Description is a required field'],
        trim: true,
    },
    dueDate: {
        type: Date,
        required: [true, 'You need to specify a Due Date'],
        // validate: {
        //     validator: function (value) {
        //         const today = new Date();
        //         const minDate = new Date();
        //         minDate.setDate(today.getDate() + 1); // Minimum: Tomorrow
        //         const maxDate = new Date();
        //         maxDate.setDate(today.getDate() + 30); // Maximum: 30 days from today
    
        //         return value >= minDate && value <= maxDate;
        //     },
        //     message: 'Due date must be between 1 and 30 days from today',
        // },
        // min: [30, 'You need to specify a Due Date in less than 30days'],
        // max: [new Date().getFullYear(), 'You need to specify a Due Date'],
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'], 
        required: [true, 'Kindly specify between Low, Medium or High'],
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed'], 
        default: 'Pending',
        required: [true, 'Kindly specify between Pending or Completed'],
    },
    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: {type: Date,  default: Date.now }
});

// Create a model from the schema
module.exports = mongoose.model("Task", TaskSchema);
