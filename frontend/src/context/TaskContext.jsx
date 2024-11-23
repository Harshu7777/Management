import { createContext, useReducer } from 'react';
import axios from 'axios';

const TaskContext = createContext();

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TASKS':
            return { ...state, tasks: action.payload };
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        default:
            return state;
    }
};

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, { tasks: [] });

    const fetchTasks = async () => {
        const res = await axios.get('/api/tasks');
        dispatch({ type: 'SET_TASKS', payload: res.data });
    };

    const addTask = async (task) => {
        const res = await axios.post('/api/tasks', task);
        dispatch({ type: 'ADD_TASK', payload: res.data });
    };

    return (
        <TaskContext.Provider value={{ tasks: state.tasks, fetchTasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;
