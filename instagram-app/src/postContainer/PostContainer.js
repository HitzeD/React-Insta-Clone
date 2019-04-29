import React from 'react';
import CommentSection from '../commentSection/CommentSection';
import './postContainer.css'

const PostContainer = props => {
    return(
        <>
            {props.info.map((post, index) => (
                <div key={index}>
                    <div className="user-img">
                        <img src={post.thumbnailUrl} alt="user"/>
                        <p>{post.username}</p>
                    </div>
                    <img className="user-post" src={post.imageUrl} alt="user post"/>
                    <div className="post-clicks">
                        <img src="#" alt="heart"/>
                        <img src="#" alt="comment"/>
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

export default PostContainer;