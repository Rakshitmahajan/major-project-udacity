import React, { Component } from 'react';
import './conceptsSideBar.css';
class Sidebar extends Component {
  state = {}
  render() {
    return (
      <div className="sidenav">
        <a href="#" className="back">LESSON 1<i className="fa fa-arrow-left" aria-hidden="true"></i>
        </a>
        <a href="#">SEARCH<i className="fa fa-search "></i></a>
        <button className="dropdown-btn">RESOURCES
            <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <button className="dropdown-btn">CONCEPTS
            <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    );
  }
}

export default Sidebar;