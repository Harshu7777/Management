const express = require('express');
const { createSubtask, updateSubtask } = require('../controllers/subTaskController');
const router = express.Router();

router.post('/', createSubtask);         // Create a new subtask
router.put('/:id', updateSubtask);       // Toggle subtask completion

module.exports = router;
