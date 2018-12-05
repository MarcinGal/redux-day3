import React, { Component } from 'react';
import Counter from './Counter'
import RandomUsers from './RandomUsers'

class App extends Component {
  render() {
    return (
      <div className="App">
      <RandomUsers />
      </div>
    )
  }
}

export default App;
