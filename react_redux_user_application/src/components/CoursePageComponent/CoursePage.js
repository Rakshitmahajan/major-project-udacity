import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LessonSidebar from './LessonSidebar';
import LessonTopbar from './LessonTopbar';
import LessonCard from './LessonCard';
import { readLesson } from '../../actions/lessonAction';

class CoursePage extends React.Component {
    componentWillMount() {
        this.props.readLesson(this.props.location.state.course.courseId);
    }
    render() {
        return (
            <div className="bg-light ">

                <div className='w-100'>
                    <div className=''>
                        <LessonTopbar course={this.props.location.state.course} />
                    </div>
                    <div className='row pl-2 w-100'>
                        <div className='col-sm-1'>
                            <LessonSidebar />
                        </div>
                        <div className="col-sm-10 pt-5 p3">
                            {this.props.lessonData.map(data => (
                                <div key={data.lessonId} className=""><LessonCard lesson={data} /></div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
const mapsStateToProps = state => ({ lessonData: state.lessonData });
CoursePage.propTypes = { readLesson: PropTypes.func.isRequired };
export default connect(mapsStateToProps, { readLesson })(CoursePage);