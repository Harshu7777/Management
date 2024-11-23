const subtaskSchema = require("../models/subTaskModel")

exports.createSubtask = async (req, res) => {
    try {
        const { title, taskId } = req.body;
        const subtask = await Subtask.create({ title, taskId });
        res.status(201).json(subtask);
    } catch (error) {
        res.status(500).json({ message: 'Error creating subtask' });
    }
};

exports.updateSubtask = async (req, res) => {
    try {
        const subtask = await Subtask.findById(req.params.id);
        subtask.isCompleted = !subtask.isCompleted;
        await subtask.save();
        res.status(200).json(subtask);
    } catch (error) {
        res.status(500).json({ message: 'Error updating subtask' });
    }
};
