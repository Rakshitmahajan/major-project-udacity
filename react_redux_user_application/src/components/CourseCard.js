import React from 'react';
class CourseCard extends React.Component {
  state = {}
  render() {
    return (
      <div className="card col col-sm-8">
        <div className="card-body row col-sm-12">
          <div className="col-sm-9">
            <p className="card-title h3">Course Type</p>
            <p className="card-title h2">Course Title</p>
            <p className="card-text col-sm-9">Course Description</p>
          </div>
          <div className="col col-sm-3 d-flex align-items-center">
            <a href="#" className="col-sm-12 btn btn-primary float-right center">Program Home -></a>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCard;