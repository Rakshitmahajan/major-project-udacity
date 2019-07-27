import React from 'react';
class CourseCard extends React.Component {
  state = {}
  render() {
    return (
      <div className="pb-3 pt-3 m-0">
        <div className="card col col-sm-12 p-0 rounded-lg">
          <div className="card-body row col-sm-12 ">
            <div className="flex-col col-sm-9 pl-4">
              <p className="card-title col col-sm-12 h4 p-0 d-flex flex-column">Course Type</p>
              <p className="card-title col col -sm-12 h3 p-0 d-flex flex-column">Course Title</p>
              <p className="card-text text-secondary col col-sm-12 p-0 d-flex flex-column">
                Git is a distributed version-control system for tracking changes in source code during software development.It is designed for
                coordinating work among programmers, but it can be used to track changes in any set of files.
               Its goals include speed, data integrity,and support for distributed, non-linear workflows.</p>
            </div>
            <div className="col col-sm-3 d-inline-flex align-items-center">
              <a className="col-sm-12 text-primary btn btn-light btn-outline-primary float-right center">Program Home -></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCard;