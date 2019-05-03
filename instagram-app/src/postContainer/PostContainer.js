import React from 'react';
import CommentSection from '../commentSection/CommentSection';
import PropTypes from 'prop-types';
import './postContainer.css'

const PostContainer = props => {
    console.log(props.likes)
    return(
        <>
            <div className="post-wrap">
                <div className="user-img">
                    <img src={props.post.thumbnailUrl} alt="user"/>
                    <p>{props.post.username}</p>
                </div>
                <img className="user-post" src={props.post.imageUrl} alt="user post"/>
                <div className="post-clicks">
                    <i onClick={props.likes} className="fas fa-heart"></i>
                       <i className="fas fa-comment"></i>
                </div>
                <div>
                    <p className="bottom-sec">{props.post.likes} likes</p>
                    <CommentSection comment={props.post.comments} />
                    <p className="bottom">{props.post.timestamp}</p>
                </div>
            </div>
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