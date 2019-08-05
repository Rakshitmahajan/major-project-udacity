import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";


import './ProjectCard.css';
import { currentLesson } from '../../actions/LessonAction';
import { readChapters } from '../../actions/ChapterAction';
class ProjectCard extends React.Component {
    lessonFunction = () => {
        this.props.currentLesson(this.props.lesson);
        this.props.readChapters(this.props.course.courseId, this.props.lesson.lessonId)
    }
    render() {
        return (
            <div className="">
                <Link className='col-sm-12 text-decoration-none' to='/submissionpage'>
                    <div><div className="index--lesson-card--mwX1V index--card-interactive--1EHiQ shared--card-interactive--2Jtvl shared--card--3X88h"><p className="index--curtain--3sKxm shared--curtain--2_FSP"> </p><div className="index--container--1pEmR"><span id="lesson-card-scroll-target-6745394898239847" className="index--scroll-target--kzi6f"></span><div className="_lesson-expanded--lesson-expanded-project--1Mc1u _lesson-expanded--_lesson-expanded--12yZy">
                        <span id="lesson-card-scroll-target-6745394898239847"></span><div className="_lesson-expanded--details--2ORBR"><div className="_lesson-expanded--text--1jM3p"><div className="_lesson-expanded--header--rATlm"><div className="_lesson-expanded--tag-container--Fn1Eu"><i className="vds-icon vds-icon--sm" role="img" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M9 9v14h6a1 1 0 0 1 0 2H8.877C7.811 25 7 24.082 7 23.007V8.993C7 7.918 7.807 7 8.876 7h12.248C22.191 7 23 7.917 23 8.996V14a1 1 0 0 1-2 0V9H9zm3 4a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2h-6zm0 4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-4zm0 4a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2h-3zm6-2.01c0-1.097.897-1.99 1.99-1.99h4.02c1.097 0 1.99.897 1.99 1.99v4.02c0 1.097-.897 1.99-1.99 1.99h-4.02A1.996 1.996 0 0 1 18 23.01v-4.02zM20 23h4v-4h-4v4z" fillRule="nonzero"></path></svg></i> <h5 className="_lesson-expanded--tag--Dx7Iu shared--header-meta--19afO">project</h5></div><h4>(v1) Tour Guide App</h4></div><div className="_lesson-expanded--summary--UWDE8"><div className="index-module--markdown--2MdcR ureact-markdown "><p>Create an app to guide a user around a city or location of your choice!</p>
                        </div></div>
                        </div>
                            <div className="_lesson-expanded--actions--KkY9y">
                                <div className="_lesson-expanded--action-info--3kCSZ">
                                    <button className="vds-button vds-button--secondary vds-button--small vds-button__icon vds-button__icon--right" aria-busy="false" type="button">
                                        <span className="vds-button__content"><i className="vds-icon" role="img" aria-hidden="true">
                                            <svg viewBox="0 0 32 32"><path d="M22.586 17H7a1 1 0 0 1 0-2h15.586l-6.293-6.293a1 1 0 1 1 1.414-1.414l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L22.586 17z" fillRule="nonzero">
                                            </path></svg></i>Continue</span></button></div><div className="_lesson-expanded--progress--16Jyl"><p className="_lesson-status--started--1SH-i _lesson-status--_status--3VPMN shared--subtitle-small--1lMk2">Started</p><noscript></noscript></div></div></div><div className="_lesson-expanded--image--1FBdG index-module--pre-loaded--1ekn9 index-module--_container--2jdEh"><div className="index-module--thumb--3ud4h index-module--_image--3QmIX"
                                                style={{ backgroundImage: 'url(https://s3.amazonaws.com/video.udacity-data.com/topher/2017/June/594980b9_3-8-tour-guide-app2x/3-8-tour-guide-app2x.jpg)' }}></div>

                            <div className="index-module--full--3vMOI index-module--_image--3QmIX" style={{ backgroundImage: 'url(https://s3.amazonaws.com/video.udacity-data.com/topher/2017/June/594980b9_3-8-tour-guide-app2x/3-8-tour-guide-app2x.jpg)' }}></div>
                        </div></div>
                    </div></div></div>
                </Link>
            </div >
        );
    }
}
const mapsStatesToProps = state => ({ course: state.course.currentCourse, chapter: state.chapter.allChapter });
ProjectCard.propTypes = { currentLesson: PropTypes.func.isRequired, readChapters: PropTypes.func.isRequired };
export default connect(mapsStatesToProps, { currentLesson, readChapters })(ProjectCard);


