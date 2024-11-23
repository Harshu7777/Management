import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import UsesubTasks from '../hooks/UsesubTasks';
import UseComments from '../hooks/UseComments';

const TaskDetailPage = () => {
    const { taskId } = useParams();
    const { subtasks, createSubtask, toggleSubtask } = UsesubTasks(taskId);
    const { comments, createComment } = UseComments(taskId);

    const [newSubtask, setNewSubtask] = useState('');
    const [newComment, setNewComment] = useState('');

    const handleCreateSubtask = () => {
        createSubtask({ title: newSubtask, taskId });
        setNewSubtask('');
    };

    const handleCreateComment = () => {
        createComment({ text: newComment, taskId });
        setNewComment('');
    };

    return (
        <div>
            <h1>Task Details</h1>

            {/* Subtask Section */}
            <div>
                <h3>Subtasks</h3>
                <input 
                    value={newSubtask} 
                    onChange={(e) => setNewSubtask(e.target.value)} 
                    placeholder="Enter subtask" 
                />
                <button onClick={handleCreateSubtask}>Add Subtask</button>

                <ul>
                    {subtasks.map((subtask) => (
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
            </div>

            {/* Comments Section */}
            <div>
                <h3>Comments</h3>
                <textarea 
                    value={newComment} 
                    onChange={(e) => setNewComment(e.target.value)} 
                    placeholder="Enter comment"
                />
                <button onClick={handleCreateComment}>Post Comment</button>

                <ul>
                    {comments.map((comment) => (
                        <li key={comment._id}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskDetailPage;
