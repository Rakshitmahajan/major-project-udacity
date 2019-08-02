import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './conceptsSideBar.css';
class Sidebar extends Component {
  state = {}
  dropDown = () => {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }
  render() {
    return (
      <div className="sidenav">
        <Link className='back' to={{ pathname: "/home", state: { course: { courseId: this.props.courseId } } }}>HOME<i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
        <a href="#">SEARCH<i className="fa fa-search "></i></a>
        <button className="dropdown-btn">RESOURCES
            <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <button className="dropdown-btn" onClick={this.dropDown}>CONCEPTS
            <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
          {this.props.contentTitle.map((data, key) => (
            <Link key={key} className=' text-decoration-none'
              to={{
                pathname: "/course/" + data.courseId + '/' + data.lessonId + '/' + data.conceptTitle,
                state: { data: data }
              }}>{data.conceptTitle}</Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Sidebar;