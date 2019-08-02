import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CourseSideBar from './CourseSideBar';
import CourseCard from './CourseCard';
import { readCourse } from '../../actions/courseAction';

import './HomePage.css';
class HomePage extends React.Component {
    componentWillMount() {
        this.props.readCourse(this.props.userData.email);
    }
    render() {
        return (
            <div className="row col-sm-11">

                <CourseSideBar />

                <div className='row col-sm-10 content'>

                    <div className='col col-sm-1'></div>
                    <div className='col pt-5'>
                        <div className='pb-3'>
                            <p className='h5 pb-4 breadcrumb-item active'><a href="#nanodegree" className="text-decoration-none">NANODEGREE</a>  |  <a href="#courses" className="text-decoration-none">COURSES</a></p>
                        </div>
                        <div className='pb-3 pt-2'>
                            {/* <p className='h6'>LATEST ACTIVITY</p> */}
                            {/* <CourseCard /> */}
                        </div>
                        <div className='pb-3 pt-2'>
                            <p className='h6' id="nanodegree">CURRENT NANODEGREE ENROLLMENTS</p>
                            <div className="col-sm-12 p3">
                                {this.props.courseData.nanodegreeCourse.map(data => (
                                    <div key={data.courseId} className=" courseCardHome"><CourseCard course={data} /></div>
                                ))}
                            </div>
                        </div>
                        <div className='pb-3 pt-2'>
                            <p className='h6' id='courses'>CURRENT COURSE ENROLLMENTS</p>
                            <div className="col-sm-12 p3">
                                {this.props.courseData.freeCourse.map(data => (
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
const mapsStatesToProps = state => ({ courseData: state.courseData, userData: state.userData });
HomePage.propTypes = { readCourse: PropTypes.func.isRequired };
export default connect(mapsStatesToProps, { readCourse })(HomePage);