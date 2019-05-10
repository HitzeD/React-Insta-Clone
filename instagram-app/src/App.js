import React from 'react';
import './App.css';
import PostPage from './postContainer/PostPage';




class App extends React.Component {

  // searching = (e) => {
  //   console.log(e.target.value);
  //   e.preventDefault();
  //   this.state.data.filter(post => {
  //     if(post.username.includes(e.target.value)){
  //       this.setState({
  //         write: e.target.value,
  //       })
  //     }
  //   })
  // }

  render(){
    return (
      <div className="App">
          <PostPage />
      </div>
    );
  }
}

export default App;
