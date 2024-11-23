import { useState, useEffect } from 'react';
import axios from 'axios';

const UsesubTasks = (taskId) => {
    const [subtasks, setSubtasks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSubtasks = async () => {
            setLoading(true);
            const { data } = await axios.get(`/api/subtasks/${taskId}`);
            setSubtasks(data);
            setLoading(false);
        };

        fetchSubtasks();
    }, [taskId]);

    const createSubtask = async (subtaskData) => {
        const { data } = await axios.post('/api/subtasks', subtaskData);
        setSubtasks([...subtasks, data]);
    };

    const toggleSubtask = async (subtaskId) => {
        const { data } = await axios.put(`/api/subtasks/${subtaskId}`);
        setSubtasks(subtasks.map((subtask) => (subtask._id === subtaskId ? data : subtask)));
    };

    return { subtasks, loading, createSubtask, toggleSubtask };
};

export default UsesubTasks;
