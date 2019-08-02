import { connect } from 'react-redux';
import React, { Component } from 'react';
import { logout } from '../../actions/userAction';
import PropTypes from 'prop-types';

class Logout extends Component {
  state = {};
  componentDidMount() {
    this.props.logout();
  }
  render() {
    return (
      <div>
        {/* {this.props.history.push('/login')} */}
        {/* <li className="nav-item">
          <a className="nav-link" href="/" onClick={this.props.logout}>
            SignOut
          </a>
        </li> */}
      </div>
    );
  }
}
Logout.propTypes = { logout: PropTypes.func.isRequired };
export default connect(null, { logout })(Logout);
