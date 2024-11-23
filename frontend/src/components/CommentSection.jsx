import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ taskId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            const res = await axios.get(`/api/comments/${taskId}`);
            setComments(res.data);
        };
        fetchComments();
    }, [taskId]);

    const handleCommentSubmit = async () => {
        await axios.post('/api/comments', { text: newComment, taskId });
        setNewComment('');
    };

    return (
        <div>
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment._id}>
                        <strong>{comment.user.username}</strong>: {comment.text}
                    </li>
                ))}
            </ul>
            <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} />
            <button onClick={handleCommentSubmit}>Post Comment</button>
        </div>
    );
};

export default CommentSection;
