import React from 'react';
import CommentSection from '../commentSection/CommentSection';

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
                    <p>{post.likes}</p>
                    <CommentSection comment={post.comments} />
                    <p>{post.timestamp}</p>
                </div>
            ))}
        </>
    );
}

export default PostContainer;