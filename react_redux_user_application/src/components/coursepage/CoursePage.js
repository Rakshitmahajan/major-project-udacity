import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LessonSidebar from './LessonSidebar';
import LessonTopbar from './LessonTopbar';
import LessonCard from './LessonCard';
import { readLesson } from '../../actions/LessonAction';
import { clearChapter } from '../../actions/ChapterAction';
class CoursePage extends Component {
  state = {}
  componentDidMount() {
    this.props.clearChapter();
    this.props.readLesson(this.props.course.courseId);
  }
  render() {
    return (
      <div className="bg-light ">
        <div className='w-100'>
          <div className=''>
            <LessonTopbar course={this.props.course} />
          </div>
          <div className='row pl-2 w-100'>
            <div className='col-sm-1'>
              <LessonSidebar />
            </div>
            <div className="col-sm-10 pt-5 p3">
              {this.props.lesson.map(data => (
                <div key={data.lessonId} className=""><LessonCard lesson={data} /></div>
              ))}
            </div>

          </div>
        </div>
      </div>
    );
  }
}
const mapsStateToProps = state => ({ course: state.course.currentCourse, lesson: state.lesson.allLesson });
CoursePage.propTypes = { readLesson: PropTypes.func.isRequired, clearChapter: PropTypes.func.isRequired };
export default connect(mapsStateToProps, { readLesson, clearChapter })(CoursePage);