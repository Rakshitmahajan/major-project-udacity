// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_shrink_scroll
// <Link className='col-sm-12' to={{ pathname: "/course/" + this.props.courseId + "/" + this.props.lesson.lessonId, state: { courseId: this.props } }}>
import React from 'react';
import { Link } from "react-router-dom";
import './LessonCard.css';
class LessonCard extends React.Component {
  render() {
    return (
      <div className="">
        <div>
          <div
            className="index--lesson-card--mwX1V index--card-interactive--1EHiQ shared--card-interactive--2Jtvl shared--card--3X88h">
            <button className="index--curtain--3sKxm shared--curtain--2_FSP btn btn-primary-outline p-0"
              href="#">View</button>
            <div className="index--container--1pEmR"><span
              id="lesson-card-scroll-target-edde9226-f71c-4a81-a858-4c83e4c7b664"
              className="index--scroll-target--kzi6f"></span>
              <div
                className="_lesson-expanded--lesson-expanded--1F90t _lesson-expanded--_lesson-expanded--12yZy">
                <span
                  id="lesson-card-scroll-target-edde9226-f71c-4a81-a858-4c83e4c7b664"></span>
                <div className="_lesson-expanded--details--2ORBR">
                  <div className="_lesson-expanded--text--1jM3p">
                    <div className="_lesson-expanded--header--rATlm">
                      <div className="_lesson-expanded--tag-container--Fn1Eu">
                        <h5 className="_lesson-expanded--tag--Dx7Iu shared--header-meta--19afO">
                          lesson 1</h5>
                      </div>
                      <h4>Working With Remotes</h4>
                    </div>
                    <div className="_lesson-expanded--summary--UWDE8">
                      <div className="index-module--markdown--2MdcR ureact-markdown ">
                        <p>You'll learn how to create remote repositories on GitHub and how to
                                                  get and send changes to the remote repository.</p>
                      </div>
                    </div>
                  </div>
                  <div className="_lesson-expanded--actions--KkY9y">
                    <div className="_lesson-expanded--action-info--3kCSZ"><button
                      className="vds-button vds-button--secondary vds-button--small vds-button__icon vds-button__icon--right"
                      aria-busy="false" type="button"><span className="vds-button__content"><i
                        className="vds-icon" role="img" aria-hidden="true"><svg
                          viewBox="0 0 32 32">
                          <path
                            d="M22.586 17H7a1 1 0 0 1 0-2h15.586l-6.293-6.293a1 1 0 1 1 1.414-1.414l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L22.586 17z"
                            fillRule="nonzero"></path>
                        </svg></i>View Lesson</span></button></div>
                    <div className="_lesson-expanded--progress--16Jyl">
                      <div className="_progress-bar--progress-bar-container--3ckXh">
                        
                      </div><button
                        className="_lesson-expanded--collapse-card--20QRG shared--subtitle-small--1lMk2 btn btn-primary-outline"
                        href="#">Shrink Card</button>
                    </div>
                  </div>
                </div>
                <div
                  className="_lesson-expanded--image--1FBdG index-module--pre-loaded--1ekn9 index-module--_container--2jdEh">
                  <div className="index-module--thumb--3ud4h index-module--_image--3QmIX" style={{backgroundImage: 'url(https://s3.amazonaws.com/video.udacity-data.com/topher/2017/August/59a3a294_2-8-working-with-remotes2x/2-8-working-with-remotes2x.jpg)'}}>
                    
                  </div>
                  <div className="index-module--full--3vMOI index-module--_image--3QmIX " style={{backgroundImage: 'url(https://s3.amazonaws.com/video.udacity-data.com/topher/2017/August/59a3a294_2-8-working-with-remotes2x/2-8-working-with-remotes2x.jpg)'}}>
                    
                    
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

export default LessonCard;

/* <div classNameName="card-body flex-col col-sm-12 pl-4 pb-5">
              <p classNameName="card-title col col-sm-12 h6 p-0 d-flex flex-column">Lesson {this.props.lesson.lessonNumber}</p>
              <p classNameName="card-title col col-sm-12 h3 p-0 d-flex flex-column">{this.props.lesson.lessonTitle}</p>
              <p classNameName="card-text text-secondary col col-sm-12 p-0 d-flex flex-column">{this.props.lesson.lessonDescp}</p>
              <button classNameName=" text-info btn btn-light btn-outline-info float-left p-1 m-0">VIEW LESSON -></button>
            </div>

            <div classNameName="card-body row col-sm-12 pt-2 pl-5 pb-1 pr-5 m-0 d-flex justify-content-between border-top">
            <p classNameName=" text-dark">100% VIEWED</p>
            <button classNameName="btn text-primary">SHRINK CARD</button>
          </div>
        </div>
        <div classNameName="col col-sm-3 d-inline-flex align-items-center">
          <img classNameName="rounded img-fluid col-sm-12 p-0 m-0" src='/card.jpg' alt={this.props.lesson.lessonImage}></img>
        </div>*/