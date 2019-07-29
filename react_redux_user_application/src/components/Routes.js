import React from 'react';
import { Route } from "react-router-dom";
// import { connect } from 'react-redux';

import HomePage from './HomePage';
import CoursePage from './CoursePage';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/course' component={CoursePage} />
      </div>

    );
  }
}

export default Routes;