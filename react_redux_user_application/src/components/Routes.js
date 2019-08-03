import React from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import Login from './UserPageComponent/login';
import Signup from './UserPageComponent/signup';
import HomePage from './HomePageComponent/HomePage';
import CoursePage from './CoursePageComponent/CoursePage';
import LessonPage from './LessonPageComponent/LessonPage';
import Lesson from './LessonPageComponent/lesson';
import Logout from './UserPageComponent/Logout';
// import NotFound from './Notfound.js';
class Routes extends React.Component {
  render() {
    if (localStorage.getItem('jwtToken')) {
      return (
        <div className=' ' >
          {/* {console.log(this.props.auth, localStorage.token)}
          {this.props.auth.email === null &&
            localStorage.token === undefined ? (<Switch> */}
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
          {/* <Route component={Login} /> */}
          {/* </Switch>) : (<Switch> */}
          <Route path='/home' component={HomePage} />
          <Route exact path='/course/:courseId' component={CoursePage} />
          <Route exact path='/course/:courseId/:lessonId' component={LessonPage} />
          <Route exact path='/course/:courseId/:lessonId/:concept' component={LessonPage} />
          <Route exact path='/logout' component={Logout} />
          {/* <Route component={Login} />
            </Switch>)} */}
        </div>
      );
    }
    else {
      <div className=' ' >
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={Signup} />
<<<<<<< HEAD
=======
        {/* <Route component={Login} /> */}
        {/* </Switch>) : (<Switch> */}
        <Route path='/home' component={HomePage} />
        <Route exact path='/course/:courseId' component={CoursePage} />
        <Route exact path='/course/:courseId/:lessonId' component={Lesson} />
        <Route exact path='/course/:courseId/:lessonId/:concept' component={LessonPage} />
        <Route exact path='/logout' component={Logout} />
        {/* <Route component={Login} />
          </Switch>)} */}
>>>>>>> 705fba8d7791dcf835d2a91102cb5b015e51d1c2
      </div>
    }
  }
}
const mapStateToProps = state => ({ auth: state.userData });

export default connect(mapStateToProps, null)(Routes);

// export default Routes;