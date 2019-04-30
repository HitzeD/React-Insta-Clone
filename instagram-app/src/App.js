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

  render(){
    return (
      <div className="App">
          <SearchBar />
          <PostContainer info={this.state.data} />
      </div>
    );
  }
}

export default App;
