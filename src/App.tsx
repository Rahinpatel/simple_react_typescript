import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Todolist from './components/Todolist';
import {Add,AddOption} from './components/Demo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RouterDemo from './Router/Router';
import form from './components/form';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
              <Route path="/demo123" component={RouterDemo} />
              <Route path="/form" component={form} />
        </Router>
        <Add />
      {/* <AddOption /> */}
      </div>
    );
  }
}


export default App;
