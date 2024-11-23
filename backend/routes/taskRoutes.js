const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { getTasks, createTask, updateTask, deleteTask, assignTask } = require('../controllers/taskController'); // Make sure assignTask is imported here
const router = express.Router();

router.route('/')
    .get(protect, getTasks)           // Fetch tasks for the logged-in user
    .post(protect, createTask);       // Create a new task

router.route('/:id')
    // .put(updateTask)        
    // .delete(deleteTask);     

router.route('/assign')
    // .put(protect, assignTask);        // Assign tasks to other users (protected route)

module.exports = router;
