import React from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import ChapterSidebar from './LessonPageComponent/ChapterSidebar';
// import ChapterTopbar from './LessonPageComponent/ChapterTopbar';
import Content from './ContentPage';
class ChapterPage extends React.Component {
  componentDidMount() {
    console.log('lesson page', this.props);
  }
  render() {
    return (
      <div className="col col-sm-12">
        <div className='col col-sm-12'>
          {/* <ChapterTopbar /> */}
        </div>
        <div className='col col-sm-12'>
          <div className='col-sm-12 pb-4'>
            {/* <ChapterSidebar /> */}
          </div>
          <div className='row col-sm-8 pt-5 pl-5'>
            <div className='col-sm-1'></div>
            <div className="col-sm-10 p3">
              <div className="col col-sm-12 pb-3 pt-3 m-0">
                <p>sdcsdvvfvsvsvsvsvsvsvcsvcsvsdfghjklkjhgfdfghjkl;lkjhygtfd</p>
                <Content />
              </div>
              {/* {this.props.lessonData.map(data => (
                <div key={data.lessonId} className="col col-sm-12 pb-3 pt-3 m-0"><LessonCard lesson={data} /></div>
              ))} */}
            </div>
            <div className='col-sm-1'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChapterPage;