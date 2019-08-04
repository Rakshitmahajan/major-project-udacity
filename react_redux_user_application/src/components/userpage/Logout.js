import { connect } from 'react-redux';
import React, { Component } from 'react';
import { logoutUser } from '../../actions/UserAction';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'

class Logout extends Component {
  constructor(){
    super();
    this.state = {
        redirect:false
    }
}
onClick = () => {
    localStorage.removeItem('jwtToken');
    this.setState({
        redirect:true
    })
}
  render() {
    if(this.state.redirect === true)
        {
            return <Redirect to="/" />
        }
    return (
      <div>
        <li className="nav-item">
        <button onClick={this.onClick}> Logout </button>
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
