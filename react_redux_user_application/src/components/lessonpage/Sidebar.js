import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { currentChapter } from '../../actions/ChapterAction';
import { readConcept } from '../../actions/ContentAction';
import './conceptsSideBar.css';
class Sidebar extends Component {
  state = {}
  changeChapter = (data) => {
    this.props.currentChapter(data.courseId, data.lessonId, data.conceptTitle);
    this.props.readConcept(data.courseId, data.lessonId, data.conceptTitle)
  }
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
        <Link className='back' to='/course'>COURSES<i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
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
          {this.props.allchapter.map((data, key) => (
            <Link key={key} className='back' to='/lesson' onClick={() => this.changeChapter(data)}>{data.conceptTitle}</Link>
          ))}
        </div>
      </div>
    );
  }
}

// export default Sidebar;
const mapsStatesToProps = state => ({ allchapter: state.chapter.allChapter });
Sidebar.propTypes = { currentChapter: PropTypes.func.isRequired, readConcept: PropTypes.func.isRequired };
export default connect(mapsStatesToProps, { currentChapter, readConcept })(Sidebar);
