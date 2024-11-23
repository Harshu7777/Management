import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskAssign = ({ taskId }) => {
    const [users, setUsers] = useState([]);
    const [assignedTo, setAssignedTo] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('/api/users');  // Assume we have an endpoint to get all users
            setUsers(res.data);
        };
        fetchUsers();
    }, []);

    const handleAssign = async () => {
        await axios.put('/api/tasks/assign', { taskId, assignedTo });
        alert('Task assigned successfully');
    };

    return (
        <div>
            <h3>Assign Task</h3>
            <select onChange={(e) => setAssignedTo(e.target.value)} value={assignedTo}>
                <option value="">Select a user</option>
                {users.map(user => (
                    <option key={user._id} value={user._id}>{user.username}</option>
                ))}
            </select>
            <button onClick={handleAssign}>Assign</button>
        </div>
    );
};

export default TaskAssign;
