import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
      </Router>
    );
  }
}

export default App;
