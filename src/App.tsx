import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Todolist from './components/Todolist';


 class App extends Component {
  render() {
    return (
      <div>
        <Todolist text="rahin"/>
      </div>
    );
  }
}

export default App;