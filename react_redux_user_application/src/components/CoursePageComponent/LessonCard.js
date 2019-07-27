import React from 'react';
class LessonCard extends React.Component {
  render() {
    return (
      <div className="col col-sm-12 pb-3 pt-3 m-0">
        <div className="card flex-row col-sm-12 p-0 m-0 rounded-lg">
          <div className="flex-col col-sm-9 p-0 pl-3 m-0">
            <div className="card-body flex-col col-sm-12 pl-4 pb-5">
              <p className="card-title col col-sm-12 h6 p-0 d-flex flex-column">Lesson Number</p>
              <p className="card-title col col-sm-12 h3 p-0 d-flex flex-column">Lesson Title</p>
              <p className="card-text text-secondary col col-sm-12 p-0 d-flex flex-column">
                Git is a distributed version-control system for tracking changes in source code during software
                development.It is designed for coordinating work among programmers, but it can be used to track
                changes in any set of files.Its goals include speed, data integrity,and support for distributed,
                non-linear workflows.</p>
              <a className=" text-info btn btn-light btn-outline-info float-left p-1 m-0">VIEW LESSON -></a>
            </div>
            <div className="card-body row col-sm-12 pt-2 pl-5 pb-1 pr-5 m-0 d-flex justify-content-between border-top">
              <p className=" text-dark">100% VIEWED</p>
              <button className="btn text-primary">SHRINK CARD</button>
            </div>
          </div>
          <div className="col col-sm-3 d-inline-flex align-items-center">
            <img className="rounded img-fluid col-sm-12 p-0 m-0" src='card.jpg' alt=" "></img>
          </div>
        </div>
      </div>
    );
  }
}

export default LessonCard;