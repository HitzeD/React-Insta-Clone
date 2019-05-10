import React from 'react';
import dummyData from '../dummy-data';
import SearchBar from '../searchBar/SearchBar';
import PostContainer from '../postContainer/PostContainer';

class PostPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            searchText: '',
            likes: 0,
        }
    }
        componentDidMount() {
            this.setState({
              data: dummyData,
              likes: this.state.data.likes,
            })
            console.log(this.state.likes);
        }

        likeMe = (e) => {
            this.setState(data => ({
                likes: this.state.data.likes + 1,
            }))
        }

        handleChanges = (e) => {
            console.log(e.target.value)
            e.preventDefault();
            this.setState({
              searchText: e.target.value,
            })
        }

        searching = (e) => {
            console.log(e.target.value);
            e.preventDefault();
            this.state.data.filter(post => {
              if(post.username.includes(e.target.value)){
                this.setState({
                  searchText: e.target.value,
                })
              }
            })
          }

    render(props){
        return(
            <div>
                <SearchBar search={this.handleChanges} write={this.state.searchText} />
                {this.state.data.map((post, index) => (
                    <PostContainer post={post} index={index} key={index} likes={this.likeMe} />
                ))}
            </div>
        )
    }
} // end of class component


export default PostPage;