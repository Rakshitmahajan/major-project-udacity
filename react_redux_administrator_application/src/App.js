import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import CourseForm from './components/courseForm';
import LessonForm from './components/lessonForm';
import CourseList from './components/courseList';
import MainForm from './components/concept/mainForm';
import LessonList from './components/lessonList';
import ConceptList from './components/conceptList';
import Home from './components/home';

class App extends Component {
    constructor() {
        super();
        this.state = {
            auth: false
        }
    }
    onLogin() {
        if (localStorage.getItem('jwtToken')) {
            console.log('1');
            this.setState({
                auth: true
            })
        }
    }
    render() {
        {
            if (localStorage.getItem('jwtToken')) {
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
                        <Route path="/conceptList" component={ConceptList}></Route>
                    </Router>
                );
            }
            else {
                return (
                    <Router>
                        
                        <Route exact path="/" component={Login}></Route>
                        <Route path="/signup" component={Signup}></Route>

                    </Router>

                );
            }
        }
    }

}

export default App;
