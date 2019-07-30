// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_shrink_scroll

import React from 'react';
import { Link } from "react-router-dom";
class LessonCard extends React.Component {
  render() {
    return (
      <div className="card flex-row col-sm-12 p-0 m-0 rounded-lg">
        <div className="flex-col col-sm-9 p-0 pl-3 m-0">
          <Link className='col-sm-12' to={{ pathname: "/course/" + this.props.courseId + "/" + this.props.lesson.lessonId, state: { courseId: this.props } }}>
            <div className="card-body flex-col col-sm-12 pl-4 pb-5">
              <p className="card-title col col-sm-12 h6 p-0 d-flex flex-column">Lesson {this.props.lesson.lessonNumber}</p>
              <p className="card-title col col-sm-12 h3 p-0 d-flex flex-column">{this.props.lesson.lessonTitle}</p>
              <p className="card-text text-secondary col col-sm-12 p-0 d-flex flex-column">{this.props.lesson.lessonDescp}</p>
              <button className=" text-info btn btn-light btn-outline-info float-left p-1 m-0">VIEW LESSON -></button>
            </div>
          </Link>
          <div className="card-body row col-sm-12 pt-2 pl-5 pb-1 pr-5 m-0 d-flex justify-content-between border-top">
            <p className=" text-dark">100% VIEWED</p>
            <button className="btn text-primary">SHRINK CARD</button>
          </div>
        </div>
        <div className="col col-sm-3 d-inline-flex align-items-center">
          <img className="rounded img-fluid col-sm-12 p-0 m-0" src='/card.jpg' alt={this.props.lesson.lessonImage}></img>
        </div>
      </div>
    );
  }
}

export default LessonCard;