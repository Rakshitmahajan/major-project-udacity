import React from 'react';
import CourseSidebar from './HomePageComponent/CourseSidebar';
import CourseTopbar from './HomePageComponent/CourseTopbar';
import CourseCard from './HomePageComponent/CourseCard';
class HomePage extends React.Component {
  state = {}
  render() {
    return (
      <div className="row col-sm-12 bg-light">
        <div className='col col-sm-2'>
          <CourseSidebar />
        </div>
        <div className='row col-sm-10'>
          {/* <div className='col-sm-12 pb-5'><CourseTopbar /></div> */}
          <div className='col col-sm-1'></div>
          <div className='col pt-5'>
            <div className='pb-3'>
              <p className='h5 pb-4 breadcrumb-item active'><a href="#nanodegree">NAMODEGREE</a>  |  <a href="#courses">COURSES</a></p>
            </div>
            <div className='pb-3 pt-2'>
              <p className='h6'>LATEST ACTIVITY</p>
              <CourseCard />
            </div>
            <div className='pb-3 pt-2'>
              <p className='h6' id="nanodegree">CURRENT NANODEGREE ENROLLMENTS</p>
              <CourseCard />
              <CourseCard />
            </div>
            <div className='pb-3 pt-2'>
              <p className='h6' id='courses'>CURRENT COURSE ENROLLMENTS</p>
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;