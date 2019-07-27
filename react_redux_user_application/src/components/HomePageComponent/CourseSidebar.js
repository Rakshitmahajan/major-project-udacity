/// https://bootstrapious.com/p/bootstrap-sidebar

import React from 'react';
import './CourseSidebar.css';
class CourseSidebar extends React.Component {
  render() {
    return (
      <div className='sidenav'>
        <a href="#/home">Home</a>
        <a href="#/catalog">Catalog</a>
        <a href="#/carrerPortal">Career Portal</a>
        <a href="#/setting">Setting</a>
        <a href="#/logout">Logout</a>
      </div>
    );
  }
}

export default CourseSidebar;
