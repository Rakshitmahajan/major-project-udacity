import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import './LessonTopbar.css'
class CourseTopBar extends Component {
  render() {
    return (
      <div className="_layout-module--title-area--1yynf">
        <div className="_header-module--header--1boX-">
          <div>
            <div data-test="course-header">
              <div className="index--container--GSOp4">
                <div className="index--lesson-info--3UNsy shared--outer-container--3eppq">
                  <div className="index--title-container--2XSQg">
                    {this.props.lastLesson ? (
                      <h5 className="index--lesson-subtitle--2WJbh shared--header-meta--19afO">Lesson {this.props.lastLesson.lessonNumber}</h5>
                    ) : null}
                    {this.props.lastLesson ? (
                      <h3 className="index--lesson-title--3nKEi shared--header-small--1fJEM">{this.props.lastLesson.lessonTitle}</h3>
                    ) : null}
                  </div>
                </div>
                <div className="index--deadline-bar--2_LhW ">
                  <div className="deadline-bar--container--djlS_">
                    <div className="deadline-bar--content--X6Lwt shared--outer-container--3eppq ">
                      <p className="deadline-bar--large-info--3EH-W">{this.props.currentCourse.courseTitle}</p>
                      <p className="deadline-bar--large-info--3EH-W">All Lessons</p>
                      <div className="deadline-bar--inner-content-container--ofeiZ">
                        <div className="deadline-bar--content-context-label--1mbKu"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
const mapsStateToProps = state => ({ currentCourse: state.course.currentCourse, lastLesson: state.lesson.lastLesson });
// CourseTopBar.propTypes = { readLesson: PropTypes.func.isRequired };
export default connect(mapsStateToProps, null)(CourseTopBar);