exports.createComment = async (req, res) => {
    try {
        const { text, taskId } = req.body;
        const comment = await Comment.create({
            text,
            taskId,
            user: req.user._id,
        });
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating comment' });
    }
};

exports.getCommentsForTask = async (req, res) => {
    try {
        const comments = await Comment.find({ taskId: req.params.taskId }).populate('user', 'username');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching comments' });
    }
};
