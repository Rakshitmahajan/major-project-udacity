import React, { Component } from 'react';
import './conceptsSideBar.css';
class Sidebar extends Component {
  state = {}
  render() {
    return (
      <div class="sidenav">
        <a href="#" class="back">LESSON 1<i class="fa fa-arrow-left" aria-hidden="true"></i>
        </a>
        <a href="#">SEARCH<i class="fa fa-search "></i></a>
        <button class="dropdown-btn">RESOURCES
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <button class="dropdown-btn">CONCEPTS
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    );
  }
}

export default Sidebar;