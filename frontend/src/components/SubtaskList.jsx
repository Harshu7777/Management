import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubtaskList = ({ taskId }) => {
    const [subtasks, setSubtasks] = useState([]);
    const [newSubtask, setNewSubtask] = useState('');

    useEffect(() => {
        const fetchSubtasks = async () => {
            const res = await axios.get(`/api/subtasks/${taskId}`);
            setSubtasks(res.data);
        };
        fetchSubtasks();
    }, [taskId]);

    const createSubtask = async () => {
        await axios.post('/api/subtasks', { title: newSubtask, taskId });
        setNewSubtask('');
    };

    const toggleSubtask = async (id) => {
        await axios.put(`/api/subtasks/${id}`);
    };

    return (
        <div>
            <h3>Subtasks</h3>
            <ul>
                {subtasks.map(subtask => (
                    <li key={subtask._id}>
                        <input
                            type="checkbox"
                            checked={subtask.isCompleted}
                            onChange={() => toggleSubtask(subtask._id)}
                        />
                        {subtask.title}
                    </li>
                ))}
            </ul>
            <input value={newSubtask} onChange={(e) => setNewSubtask(e.target.value)} />
            <button onClick={createSubtask}>Add Subtask</button>
        </div>
    );
};

export default SubtaskList;
