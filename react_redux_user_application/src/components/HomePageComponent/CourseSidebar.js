/// https://bootstrapious.com/p/bootstrap-sidebar
// <Link className="h3 badge badge-success float-right" to={{ pathname: "updategame/" + data.title, state: { data } }}>u</Link>
import React from 'react';
import { Link } from "react-router-dom";
import './CourseSidebar.css';
class CourseSidebar extends React.Component {
  render() {
    return (
      <div className='sidenav'>
        <Link to='/home'>Home</Link>
        <Link to='catalog'>Catalog</Link>
        <Link to='careerPortal'>career Portal</Link>
        <Link to='setting'>Setting</Link>
        <Link to='logout'>Logout</Link>
      </div>
    );
  }
}

export default CourseSidebar;
