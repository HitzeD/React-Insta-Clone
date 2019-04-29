import React from 'react';

const CommentSection = props => {
    return (
        <>
            {props.comment.map((words, index) => (
                <div className="comments" key={index}>
                    <h6>{words.username}</h6>
                    <p>{words.text}</p>
                </div>
            ))}
        </>
    );
}

export default CommentSection;