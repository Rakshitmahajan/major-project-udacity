/// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_shrink_scroll

//https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
import React from 'react';
import './LessonTopbar.css'
class CourseTopBar extends React.Component {
  render() {
    return (
      <div className="_layout-module--title-area--1yynf">
        <div className="_header-module--header--1boX-">
          <div>
            <div data-test="course-header">
              <div className="index--container--GSOp4">
                <div className="index--lesson-info--3UNsy shared--outer-container--3eppq">
                  <div className="index--title-container--2XSQg">
                    <h5 className="index--lesson-subtitle--2WJbh shared--header-meta--19afO">Course</h5>
                    <h3 className="index--lesson-title--3nKEi shared--header-small--1fJEM">GitHub & Collaboration</h3>
                  </div>

                </div>
                <div className="index--deadline-bar--2_LhW ">
                  <div className="deadline-bar--container--djlS_">
                    <div className="deadline-bar--content--X6Lwt shared--outer-container--3eppq ">
                      <p className="deadline-bar--large-info--3EH-W">All Lessons</p>
                      <div className="deadline-bar--inner-content-container--ofeiZ">
                        <div className="deadline-bar--content-context-label--1mbKu">

                        </div>
                      </div>
                    </div>
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

export default CourseTopBar;