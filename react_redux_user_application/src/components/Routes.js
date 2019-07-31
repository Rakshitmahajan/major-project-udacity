import React from 'react';
import { Route } from "react-router-dom";
// import { connect } from 'react-redux';

import HomePage from './HomePage';
import CoursePage from './CoursePage';
import LessonPage from './LessonPage';
class Routes extends React.Component {
  render() {
    return (
      <div className=' ' >
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/course/:id' component={CoursePage} />
        <Route exact path='/course/:id/:id' component={LessonPage} />
      </div>

    );
  }
}

export default Routes;