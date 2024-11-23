const mongoose = require('mongoose');

const subtaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
}, { timestamps: true });

const Subtask = mongoose.model('Subtask', subtaskSchema);
module.exports = Subtask;
