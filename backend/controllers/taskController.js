const Task = require('../models/taskModel');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createTask = async (req, res) => {
    try {
        const { title, description, category, dueDate, priority } = req.body;
        const task = await Task.create({ user: req.user.id, title, description, category, dueDate, priority });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task' });
    }
};

exports.assignTask = async (req, res) => {
    try {
        const { taskId, assignedTo } = req.body;
        const task = await Task.findById(taskId);

        if (!task) return res.status(404).json({ message: 'Task not found' });

        task.assignedTo = assignedTo;
        await task.save();

        res.status(200).json({ message: 'Task assigned successfully', task });
    } catch (error) {
        res.status(500).json({ message: 'Error assigning task' });
    }
};


// Similarly, define updateTask and deleteTask
