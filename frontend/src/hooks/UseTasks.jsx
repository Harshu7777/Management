import { useState, useEffect } from 'react';
import axios from 'axios';

const UseTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);
            const { data } = await axios.get('/api/tasks');
            setTasks(data);
            setLoading(false);
        };

        fetchTasks();
    }, []);

    const createTask = async (taskData) => {
        const { data } = await axios.post('/api/tasks', taskData);
        setTasks([...tasks, data]);
    };

    const updateTask = async (taskId, taskData) => {
        const { data } = await axios.put(`/api/tasks/${taskId}`, taskData);
        setTasks(tasks.map((task) => (task._id === taskId ? data : task)));
    };

    const deleteTask = async (taskId) => {
        await axios.delete(`/api/tasks/${taskId}`);
        setTasks(tasks.filter((task) => task._id !== taskId));
    };

    return { tasks, loading, createTask, updateTask, deleteTask };
};

export default UseTasks;
