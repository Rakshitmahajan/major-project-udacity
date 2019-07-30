import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

 import CourseSideBar from './HomePageComponent/CourseSideBar';
import CourseCard from './HomePageComponent/CourseCard';
import { readCourse } from '../actions/courseAction';

import './HomePage.css';
class HomePage extends React.Component {
<<<<<<< HEAD
    componentWillMount() {
        this.props.readCourse(this.props.userData.email);
    }
    render() {
        return (
            <div className="row col-sm-12 bg-light">
                
                    <CourseSideBar/>
                
                <div className='row col-sm-10 content'>
                    
                    <div className='col col-sm-1'></div>
                    <div className='col pt-5'>
                        <div className='pb-3'>
                            <p className='h5 pb-4 breadcrumb-item active'><a href="#nanodegree" className="text-decoration-none">NANODEGREE</a>  |  <a href="#courses" className="text-decoration-none">COURSES</a></p>
                        </div>
                        <div className='pb-3 pt-2'>
                            <p className='h6'>LATEST ACTIVITY</p>
                            {/* <CourseCard /> */}
                        </div>
                        <div className='pb-3 pt-2'>
                            <p className='h6' id="nanodegree">CURRENT NANODEGREE ENROLLMENTS</p>
                            <div className="col-sm-12 p3">
                                {this.props.courseData.map(data => (
                                    <div key={data.courseId} className=" courseCardHome"><CourseCard course={data} /></div>
                                ))}
                            </div>
                        </div>
                        <div className='pb-3 pt-2'>
                            <p className='h6' id='courses'>CURRENT COURSE ENROLLMENTS</p>
                            <div className="col-sm-12 p3">
                                {this.props.courseData.map(data => (
                                    <div key={data.courseId} className=" courseCardHome"><CourseCard course={data} /></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
=======
  componentDidMount() {
    this.props.readCourse(this.props.userData.email);
  }
  render() {
    return (
      <div className="row col-sm-12 bg-light">
        <div className='col col-sm-2'>
          <CourseSidebar />
        </div>
        <div className='row col-sm-10'>
          <div className='col-sm-12 pb-5'>{/*<CourseTopbar />*/}</div>
          <div className='col col-sm-1'></div>
          <div className='col pt-5'>
            <div className='pb-3'>
              <p className='h5 pb-4 breadcrumb-item active'><a href="#nanodegree">NAMODEGREE</a>  |  <a href="#courses">COURSES</a></p>
            </div>
            <div className='pb-3 pt-2'>
              <p className='h6'>LATEST ACTIVITY</p>
              {/* <CourseCard /> */}
            </div>
            <div className='pb-3 pt-2'>
              <p className='h6' id="nanodegree">CURRENT NANODEGREE ENROLLMENTS</p>
              <div className="col-sm-12 p3">
                {this.props.courseData.nanodegreeCourse.map(data =>
                  <div key={data.courseId} className="pb-3 pt-3 m-0"><CourseCard course={data} /></div>
                )}
              </div>
            </div>
            <div className='pb-3 pt-2'>
              <p className='h6' id='courses'>CURRENT COURSE ENROLLMENTS</p>
              <div className="col-sm-12 p3">
                {this.props.courseData.freeCourse.map(data => (
                  <div key={data.courseId} className="pb-3 pt-3 m-0"><CourseCard course={data} /></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
>>>>>>> 72d2fb7f0c7756aaf4620197ad9a2146b4597a5b
}
const mapsStatesToProps = state => ({ courseData: state.courseData, userData: state.userData });
HomePage.propTypes = { readCourse: PropTypes.func.isRequired };
export default connect(mapsStatesToProps, { readCourse })(HomePage);