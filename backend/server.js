const express = require('express');
const cors = require('cors');
const commentRoutes = require('./routes/commentRoutes'); // Assuming your comment routes are in a folder named "routes"
const subtask = require("./routes/subTaskRoutes");
const task = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json());

// Routes
app.use('/api/comments', commentRoutes); 
app.use('/api/subtask', subtask);
app.use('/api/task', task); 

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
