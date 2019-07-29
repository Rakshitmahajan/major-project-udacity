import React from 'react';
import { Link } from "react-router-dom";
import './LessonSidebar.css';
class LessonSidebar extends React.Component {
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

export default LessonSidebar;