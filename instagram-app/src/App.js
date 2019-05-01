import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './searchBar/SearchBar';
import PostContainer from './postContainer/PostContainer';




class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      filteredPosts: [],
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  likeMe = arg => {
    this.setState({
      data: this.state.data.map(post => post.username === arg ? {...post, likes: post.likes + 1} : post)
    })
  }

  searching = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    const search = this.state.data.filter(post => {
      if(post.username.includes(e.target.value)){
        return post
      }
      this.setState({
        filteredPosts: search,
      })
    })
  }

  render(){
    return (
      <div className="App">
          <SearchBar search={this.searching}/>
          <PostContainer info={this.state.data} like={this.likeMe} />
      </div>
    );
  }
}

export default App;
