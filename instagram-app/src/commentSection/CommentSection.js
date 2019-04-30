import React from 'react';
import  './commentSection.css';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comment: [],
        }
    }

    componentDidMount() {
        this.setState({
            comment: this.props.comment,
        })
        console.log(this.state.comment);
    }

    addNewComment = e => {
        
    }

    render(){
        return (
            <>
                {this.state.comment.map((words, index) => (
                    <div className="comments" key={index}>
                        <p><strong>{words.username}</strong> {words.text}</p>
                    </div>
                ))}
                <input types="text" placeholder="Comment Here..." />
            </>
        );
    }
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