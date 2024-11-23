import { useState, useEffect } from 'react';
import axios from 'axios';

const UseComments = (taskId) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchComments = async () => {
            setLoading(true);
            const { data } = await axios.get(`/api/comments/${taskId}`);
            setComments(data);
            setLoading(false);
        };

        fetchComments();
    }, [taskId]);

    const createComment = async (commentData) => {
        const { data } = await axios.post('/api/comments', commentData);
        setComments([...comments, data]);
    };

    return { comments, loading, createComment };
};

export default UseComments;
