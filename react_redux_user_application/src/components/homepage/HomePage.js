import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import HomeSidebar from './Sidebar';
import CourseCard from './CourseCard';
import { readCourse, clearCourse } from '../../actions/CourseAction';
import { clearLesson } from '../../actions/LessonAction';
class HomePage extends Component {
  state = {};
  componentDidMount() {
    this.props.clearLesson();
    this.props.clearCourse();
    this.props.readCourse(this.props.user.email);
  }
  render() {
    return (
      <div className="row col-sm-11">
        <HomeSidebar />
        <div className='row col-sm-10 content'>
          <div className='col col-sm-1'></div>
          <div className='col pt-5'>
            <div className='pb-3'>
              <p className='h5 pb-4 breadcrumb-item active'><a href="#nanodegree" className="text-decoration-none">NANODEGREE</a>  |  <a href="#courses" className="text-decoration-none">COURSES</a></p>
            </div>
            {this.props.course.lastCourse ? (
              <div className='pb-3 pt-2'>
                <p className='h6'>LATEST ACTIVITY</p>
                <div className="col-sm-12 p3">
                  <div>
                    <CourseCard course={this.props.course.lastCourse} />
                  </div>
                </div>
              </div>
            ) : (null)}
            <div className='pb-3 pt-2'>
              <p className='h6' id="nanodegree">CURRENT NANODEGREE ENROLLMENTS</p>
              <div className="col-sm-12 p3">
                {this.props.course.nanoDegree.map(data => (
                  <div key={data.courseId} className=" courseCardHome"><CourseCard course={data} /></div>
                ))}
              </div>
            </div>
            <div className='pb-3 pt-2'>
              <p className='h6' id='courses'>CURRENT COURSE ENROLLMENTS</p>
              <div className="col-sm-12 p3">
                {this.props.course.freeCourse.map(data => (
                  <div key={data.courseId} className=" courseCardHome"><CourseCard course={data} /></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapsStatesToProps = state => ({ course: state.course, user: state.user.user });
HomePage.propTypes = {
  readCourse: PropTypes.func.isRequired, clearLesson: PropTypes.func.isRequired,
  clearCourse: PropTypes.func.isRequired
};
export default connect(mapsStatesToProps, { readCourse, clearLesson, clearCourse })(HomePage);