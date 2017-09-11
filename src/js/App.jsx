import React, { Component } from 'react';
import Tasks from './Tasks.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Mastery Challenge part 1</h2>
        </div>
          <Tasks />
      </div>
    );
  }
}

export default App;
