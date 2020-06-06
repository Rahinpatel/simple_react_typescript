import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Todolist from './components/Todolist';



 class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todolist preview="Click me">
          dsadsadas
          dsadsadasdas
          dsadsadasdasd
          </Todolist>
          </header>
      </div>
    );
  }
}

export default App;
