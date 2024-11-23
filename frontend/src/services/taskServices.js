import axios from 'axios';

const API_URL = '/api/tasks';

const getTasks = async () => {
    const { data } = await axios.get(API_URL);
    return data;
};

const createTask = async (taskData) => {
    const { data } = await axios.post(API_URL, taskData);
    return data;
};

const updateTask = async (taskId, taskData) => {
    const { data } = await axios.put(`${API_URL}/${taskId}`, taskData);
    return data;
};

const deleteTask = async (taskId) => {
    await axios.delete(`${API_URL}/${taskId}`);
};

export { getTasks, createTask, updateTask, deleteTask };
