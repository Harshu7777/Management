const express = require('express');
const { createComment, getCommentsForTask } = require('../controllers/commentController');
const router = express.Router();

const { protect } = require('../middlewares/authMiddleware');

router.route('/:taskId').get(getCommentsForTask); // Fetch comments for a specific task
router.route('/').post(protect, createComment);    // Create a new comment

module.exports = router;
