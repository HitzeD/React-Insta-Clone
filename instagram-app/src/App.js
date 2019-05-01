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
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  likeMe = arg => {
    console.log(arg)
    this.setState({
      data: this.state.data.map(post => post.username === arg ? {...post, likes: post.likes + 1} : post)
    })
    
  }

  searching = (e) => {
    this.setState({
      data: this.state.data.filter()
    })
  }

  render(){
    return (
      <div className="App">
          <SearchBar search={this.searching} />
          <PostContainer info={this.state.data} like={this.likeMe} />
      </div>
    );
  }
}

export default App;
