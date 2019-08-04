import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Login from './UserPageComponent/login';
import Signup from './UserPageComponent/signup';
import HomePage from './HomePageComponent/HomePage';
import CoursePage from './CoursePageComponent/CoursePage';
import LessonPage from './LessonPageComponent/LessonPage';
import Logout from './UserPageComponent/Logout';
import NotFound from './Notfound.js';
class Routes extends React.Component {
  render() {
    if (localStorage.getItem('jwtToken')) {
      return (
        <Router>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route path='/home' component={HomePage} />
          <Route exact path='/course/:courseId' component={CoursePage} />
          <Route exact path='/course/:courseId/:lessonId' component={LessonPage} />
          <Route exact path='/course/:courseId/:lessonId/:concept' component={LessonPage} />
          <Route exact path='/logout' component={Logout} />
        </Router>
      );
    }
    else {
      return(
        <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Router>
      )
    }
  }
}
const mapStateToProps = state => ({ auth: state.userData });

export default connect(mapStateToProps, null)(Routes);

// export default Routes;