import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
import CourseForm from './components/courseForm'
import LessonForm from './components/lessonForm'
import CourseList from './components/courseList'
import MainForm from './components/concept/mainForm'
import LessonList from './components/lessonList'
import Home from './components/home'
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/courseForm" component={CourseForm}></Route>
        <Route path="/lessonForm" component={LessonForm}></Route>
        <Route path="/courseList" component={CourseList}></Route>
        <Route path="/mainForm" component={MainForm}></Route>
        <Route path="/lessonList" component={LessonList}></Route>
      </Router>
    );
  }
}

export default App;
