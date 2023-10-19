const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Vui lòng nhập tên task!'],
        unique: false
    },
    projectName: {
        type: String,
        required: [true, 'Vui lòng nhập tên project!'],
    },
    isDone: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

const todoList = mongoose.model('todoList', todoListSchema);

module.exports = todoList;
