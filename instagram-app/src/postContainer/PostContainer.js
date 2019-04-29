import React from 'react';
import CommentSection from '../commentSection/CommentSection';

const PostContainer = props => {
    return(
        <div>
            {props.info.map(post => (
                <div>
                    <div>
                        <img src={post.thumbnailUrl} alt="user"/>
                        <p>{post.username}</p>
                    </div>
                    <img src={post.imageUrl} alt="user post"/>
                    <div>
                        <img src="#" alt="heart"/>
                        <img src="#" alt="comment"/>
                    </div>
                    <p>{post.likes}</p>
                    <CommentSection comment={post.comments} />
                </div>
            ))}
        </div>
    );
}

export default PostContainer