import React, { useContext, useEffect } from 'react';
import TaskContext from '../context/TaskContext';

const TaskList = () => {
    const { tasks, fetchTasks } = useContext(TaskContext);

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Your Tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
