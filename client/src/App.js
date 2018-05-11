import React, { Component } from 'react';
import './App.css';
import SignupForm from './SignupForm'
import SignupList from './SignupList';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <div className="App-header">
          <h2>Crypto chart</h2>
        </div>

        <SignupForm />

        <SignupList />
      </div>
    );
  }
}

export default App;
