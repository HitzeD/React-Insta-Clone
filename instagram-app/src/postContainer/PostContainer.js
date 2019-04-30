import React from 'react';
import CommentSection from '../commentSection/CommentSection';
import PropTypes from 'prop-types';
import './postContainer.css'

const PostContainer = props => {
    return(
        <>
            {props.info.map((post, index) => (
                <div className="post-wrap" key={index}>
                    <div className="user-img">
                        <img src={post.thumbnailUrl} alt="user"/>
                        <p>{post.username}</p>
                    </div>
                    <img className="user-post" src={post.imageUrl} alt="user post"/>
                    <div className="post-clicks">
                        <i className="fas fa-heart"></i>
                        <i className="fas fa-comment"></i>
                    </div>
                    <div>
                        <p className="bottom-sec">{post.likes} likes</p>
                        <CommentSection comment={post.comments} />
                        <p className="bottom">{post.timestamp}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

PostContainer.propTypes = {
    post: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.inRequired,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf({
                username: PropTypes.string,
                text: PropTypes.string,
            }),
        })
    ).isRequired
}
  
PostContainer.defaultProps = {
    post: [],
};

export default PostContainer;