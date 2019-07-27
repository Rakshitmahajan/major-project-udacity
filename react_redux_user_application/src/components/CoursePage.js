import React from 'react';
import LessonSidebar from './CoursePageComponent/LessonSidebar';
import Lessoncard from './CoursePageComponent/LessonCard';

class CoursePage extends React.Component {
  render() {
    return (
      <div className="row col-sm-12 bg-light">
        <div className='col col-sm-1'>
          <LessonSidebar />
        </div>
        <div className='row col-sm-12'>
          {/* <div className='col-sm-12 pb-5'><HomeTopbar /></div> */}
          <div className='col col-sm-1'></div>
          <div className='col col-sm-10 pt-5'>
            <div className='col col-sm-12 pb-3'>
              <Lessoncard />
              <Lessoncard />
              <Lessoncard />
              <Lessoncard />
              <Lessoncard />
            </div>
          </div>
          <div className='col col-sm-1'></div>
        </div>
      </div>
    );
  }
}

export default CoursePage;