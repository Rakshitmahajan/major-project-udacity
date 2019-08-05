import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/homepage/HomePage';
import Course from './components/coursepage/CoursePage';
import Lesson from './components/lessonpage/LessonPage';
import Login from './components/userpage/Login';
import Signup from './components/userpage/Signup';
import Knowledge from './components/knowledgepage/KnowledgePage';
import Activity from './components/knowledgepage/ActivityPage';
import Post from './components/knowledgepage/Post';
import PostDisplay from './components/knowledgepage/PostDisplay';
import SubmissionPage from './components/projectSubmission/submissionpage';
import SubmitZip from './components/projectSubmission/submit-zip';
// import Notfound from './components/Notfound';
import SubmissionView from './components/projectSubmission/submissionView'
import { connect } from 'react-redux';

class Routes extends Component {
  state = {}
  render() {
    return (
      <div>
        <Route exact path='/home' component={Home} />
        <Route exact path='/course' component={Course} />
        <Route exact path='/lesson' component={Lesson} />
        <Route exact path="/knowledge" component={Knowledge} />
        <Route exact path="/activity" component={Activity} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/" component={Login} />
        <Route exact path='/postdisplay' component={PostDisplay} />
        <Route exact path="/submissionpage" component={SubmissionPage} />
        <Route exact path="/submit-zip" component={SubmitZip} />
        <Route exact path="/submissionview" component={SubmissionView} />

        {/* {localStorage.getItem('jwtToken') ? (
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/submissionpage" component={SubmissionPage} />
        <Route exact path="/submit-zip" component={SubmitZip} />
        <Route exact path="/submissionview" component={SubmissionView} />
        {/*localStorage.getItem('jwtToken') ? (
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/course' component={Course} />
            <Route exact path='/lesson' component={Lesson} />
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route component={Home} />
          </Switch>
        ) : (
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route component={Login} />
            </Switch>
          )} */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.user,
});

export default connect(
  mapStateToProps,
  null,
)(Routes);
