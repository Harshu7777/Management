import React, { useState } from 'react';
import UseTasks from '../hooks/UseTasks';

const TaskListPage = () => {
    const { tasks, loading, createTask } = UseTasks();
    const [newTask, setNewTask] = useState('');

    const handleCreateTask = () => {
        createTask({ title: newTask });
        setNewTask('');
    };

    if (loading) return <p>Loading tasks...</p>;

    return (
        <div>
            <h1>Task List</h1>
            <input 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="Enter task" 
            />
            <button onClick={handleCreateTask}>Create Task</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskListPage;
