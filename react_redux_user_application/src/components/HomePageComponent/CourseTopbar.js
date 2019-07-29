import React from 'react';
import { Link } from "react-router-dom";
class HomeTopBar extends React.Component {
  state = {}
  render() {
    return (
      <nav class="navbar fixed-top navbar-light bg-light col-sm-12">
        <Link to='/home' className='navbar-brand'>Home</Link>
      </nav>
    );
  }
}

export default HomeTopBar;