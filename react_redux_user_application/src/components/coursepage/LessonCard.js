import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import './LessonCard.css';
import { currentLesson } from '../../actions/LessonAction';
import { readChapters } from '../../actions/ChapterAction';
class LessonCard extends React.Component {
  lessonFunction = () => {
    this.props.currentLesson(this.props.lesson);
    this.props.readChapters(this.props.course.courseId, this.props.lesson.lessonId)
  }
  render() {
    return (
      <div className="">
        <Link className='col-sm-12 text-decoration-none' to='/lesson' onClick={this.lessonFunction}>
          <div>
            <div className="index--lesson-card--mwX1V index--card-interactive--1EHiQ shared--card-interactive--2Jtvl shared--card--3X88h text-decoration-none">
              <button className="index--curtain--3sKxm shared--curtain--2_FSP btn btn-primary-outline p-0"
                href="#">View</button>
              <div className="index--container--1pEmR">
                <span id="lesson-card-scroll-target-edde9226-f71c-4a81-a858-4c83e4c7b664" className="index--scroll-target--kzi6f"></span>
                <div className="_lesson-expanded--lesson-expanded--1F90t _lesson-expanded--_lesson-expanded--12yZy">
                  <span id="lesson-card-scroll-target-edde9226-f71c-4a81-a858-4c83e4c7b664"></span>
                  <div className="_lesson-expanded--details--2ORBR">
                    <div className="_lesson-expanded--text--1jM3p">
                      <div className="_lesson-expanded--header--rATlm">
                        <div className="_lesson-expanded--tag-container--Fn1Eu">
                          <h5 className="_lesson-expanded--tag--Dx7Iu shared--header-meta--19afO text-decoration-none">lesson {this.props.lesson.lessonNumber}</h5>
                        </div>
                        <h4 className="text-decoration-none">{this.props.lesson.lessonTitle}</h4>
                      </div>
                      <div className="_lesson-expanded--summary--UWDE8">
                        <div className="index-module--markdown--2MdcR ureact-markdown ">
                          <p className="text-decoration-none">{this.props.lesson.lessonDescp}</p>
                        </div>
                      </div>
                    </div>
                    <div className="_lesson-expanded--actions--KkY9y">
                      <div className="_lesson-expanded--action-info--3kCSZ">
                        <button className="vds-button vds-button--secondary vds-button--small vds-button__icon vds-button__icon--right" aria-busy="false" type="button">
                          <span className="vds-button__content">
                            <i className="vds-icon" role="img" aria-hidden="true"><svg viewBox="0 0 32 32">
                              <path d="M22.586 17H7a1 1 0 0 1 0-2h15.586l-6.293-6.293a1 1 0 1 1 1.414-1.414l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L22.586 17z"
                                fillRule="nonzero"></path>
                            </svg></i>View Lesson</span>
                        </button>
                      </div>
                      <div className="_lesson-expanded--progress--16Jyl">
                        <div className="_progress-bar--progress-bar-container--3ckXh"></div>
                        <button className="_lesson-expanded--collapse-card--20QRG shared--subtitle-small--1lMk2 btn btn-primary-outline" href="#">Shrink Card</button>
                      </div>
                    </div>
                  </div>
                  <div className="_lesson-expanded--image--1FBdG index-module--pre-loaded--1ekn9 index-module--_container--2jdEh">
                    <div className="index-module--thumb--3ud4h index-module--_image--3QmIX" style={{ backgroundImage: 'url(https://s3.amazonaws.com/video.udacity-data.com/topher/2017/August/59a3a294_2-8-working-with-remotes2x/2-8-working-with-remotes2x.jpg)' }}>
                    </div>
                    <div className="index-module--full--3vMOI index-module--_image--3QmIX " style={{ backgroundImage: `url(${this.props.lesson.lessonImage})` }}>                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div >
    );
  }
}
const mapsStatesToProps = state => ({ course: state.course.currentCourse, chapter: state.chapter.allChapter });
LessonCard.propTypes = { currentLesson: PropTypes.func.isRequired, readChapters: PropTypes.func.isRequired };
export default connect(mapsStatesToProps, { currentLesson, readChapters })(LessonCard);