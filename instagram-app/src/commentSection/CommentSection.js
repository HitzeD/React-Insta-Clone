import React from 'react';
import  './commentSection.css';

const CommentSection = props => {
    return (
        <>
            {props.comment.map((words, index) => (
                <div className="comments" key={index}>
                    <p><strong>{words.username}</strong> {words.text}</p>
                </div>
            ))}
        </>
    );
}

export default CommentSection;