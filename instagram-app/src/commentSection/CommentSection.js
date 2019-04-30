import React from 'react';
import  './commentSection.css';
import PropTypes from 'prop-types';

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

CommentSection.propTypes = {
    words: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}

export default CommentSection;