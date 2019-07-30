import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LessonSidebar from './CoursePageComponent/LessonSidebar';
// import LessonTopbar from './CoursePageComponent/LessonTopbar';
import LessonCard from './CoursePageComponent/LessonCard';
import { readLesson } from '../actions/lessonAction';
class CoursePage extends React.Component {
  componentWillMount() {
    this.props.readLesson(this.props.location.state.courseId);
  }
  render() {
    return (
      <div className="row col-sm-12 bg-light">
        <div className='col col-sm-1'>
          <LessonSidebar />
        </div>
        <div className='row col-sm-11'>
          <div className='col-sm-12 pb-5'>{/*<LessonTopbar />*/}</div>
          <div className='row col-sm-12 pt-5 pl-5'>
            <div className='col-sm-1'></div>
            <div className="col-sm-10 p3">
              {this.props.lessonData.map(data => (
                <div key={data.lessonId} className="col col-sm-12 pb-3 pt-3 m-0"><LessonCard lesson={data} courseId={this.props.location.state.courseId} /></div>
              ))}
            </div>
            <div className='col-sm-1'></div>
          </div>
        </div>
      </div>
    );
  }
}
const mapsStateToProps = state => ({ lessonData: state.lessonData });
CoursePage.propTypes = { readLesson: PropTypes.func.isRequired };
export default connect(mapsStateToProps, { readLesson })(CoursePage);