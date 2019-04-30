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

  likeMe = (e) => {
    console.log('it works');
    
  }

  searching = (e) => {
    console.log(e.target.value)
  }

  render(){
    return (
      <div className="App">
          <SearchBar search={this.searching} />
          <PostContainer info={this.state.data} like={this.likeMe}/>
      </div>
    );
  }
}

export default App;
