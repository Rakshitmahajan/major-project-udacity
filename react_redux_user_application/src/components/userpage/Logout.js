import { connect } from 'react-redux';
import React, { Component } from 'react';
import { logoutUser } from '../../actions/UserAction';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'

class Logout extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
  }
  onClick = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    this.setState({
      redirect: true
    })
  }
  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <li className="nav-item">
          <button className='btn btn-dark' onClick={this.onClick}> <i className="vds-icon vds-icon--lg"
            role="img"><span className="vds-visually-hidden"></span><svg viewBox="0 0 32 32">
              <path
                d="M9.414 15H21a1 1 0 0 1 0 2H9.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L9.414 15zM24 8h-4v2a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v2h4V8z"
                fillRule="nonzero"></path>
            </svg></i>Logout </button>
        </li>
      </div>
    );
  }
}
Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};
export default connect(
  null,
  { logoutUser },
)(Logout);
