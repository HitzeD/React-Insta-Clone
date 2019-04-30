import React from 'react';
import  './commentSection.css';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [],
            comment: '',
        }
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comment,
            comment: '',
        })
    }

    changeHandler = e => {
        this.setState({
            comment: {
                ...this.state.comment,
                text: e.target.value,
            }
        })
    }

    addNewComment = (e, index) => {
        e.preventDefault();
        const newComment = {username: 'skippyLong', text: this.state.comment.text}
        this.setState({
            comments: [...this.state.comments, newComment],
            comment: {
                text: '',
            }
        })
    }

    render(){
        return (
            <>
                {this.state.comments.map((words, index) => (
                    <div className="comments" key={index}>
                        <p><strong>{words.username}</strong> {words.text}</p>
                    </div>
                ))}
                <form onSubmit={this.addNewComment}>
                    <input types="text" placeholder="Comment Here..." onChange={this.changeHandler} />
                </form>
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