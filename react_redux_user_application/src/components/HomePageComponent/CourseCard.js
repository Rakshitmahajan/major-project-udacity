import React from 'react';
import { Link } from "react-router-dom";
class CourseCard extends React.Component {
  state = {}
  render() {
    return (
      <div className="card col col-sm-12 p-0 rounded-lg">
        <Link className='col-sm-12' to={{ pathname: "/course/" + this.props.course.courseId, state: { courseId: this.props.course.courseId } }}>
          <div className="card-body row col-sm-12 ">
            <div className="flex-col col-sm-9 pl-4">
              <p className="card-title col col-sm-12 h4 p-0 d-flex flex-column">{this.props.course.courseType}</p>
              <p className="card-title col col -sm-12 h3 p-0 d-flex flex-column">{this.props.course.courseTitle}</p>
              <p className="card-text text-secondary col col-sm-12 p-0 d-flex flex-column">{this.props.course.courseDescp}</p>
            </div>
            <div className="col col-sm-3 d-inline-flex align-items-center">
              <button className="col-sm-12 text-primary btn btn-light btn-outline-primary float-right center">Program Home -></button>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CourseCard;