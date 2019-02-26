const mongoose = require('mongoose');

const Todo = mongoose.model('todos', {
    taskNo: {
        required: true,
        type: Number,
        minlength: 1,
        trim: true,
        default: null
    }, 
    Description: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        default: "Kill some time..."
    }
});

module.exports = {Todo};