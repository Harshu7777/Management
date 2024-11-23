import axios from 'axios';

const API_URL = '/api/subtasks';

const getSubtasks = async (taskId) => {
    const { data } = await axios.get(`${API_URL}/${taskId}`);
    return data;
};

const createSubtask = async (subtaskData) => {
    const { data } = await axios.post(API_URL, subtaskData);
    return data;
};

const toggleSubtask = async (subtaskId) => {
    const { data } = await axios.put(`${API_URL}/${subtaskId}`);
    return data;
};

export { getSubtasks, createSubtask, toggleSubtask };
