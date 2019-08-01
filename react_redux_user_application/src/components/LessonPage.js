import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ChapterSidebar from './LessonPageComponent/ChapterSidebar';
// import ChapterTopbar from './LessonPageComponent/ChapterTopbar';
import Content from './ContentPage';
import { readConcept } from '../actions/contentAction';
import { readAllConcept } from '../actions/contentTitleAction';
class ChapterPage extends React.Component {
  componentWillMount() {
    // console.log(this.props);
    this.props.readAllConcept(this.props.location.state.courseId, this.props.location.state.lesson.lessonId);
    this.props.readConcept(this.props.location.state.courseId, this.props.location.state.lesson.lessonId);
  }
  read = (courseId, lessonId) => {
    console.log(courseId, lessonId);
    this.props.readConcept(courseId, lessonId);
  }
  render() {
    // console.log('lesson props', this.props);
    return (
      <div className="col col-sm-12">
        <div className='col col-sm-12'>
          {/* <ChapterTopbar /> */}
        </div>
        <div className='col col-sm-12'>
          <div className='col-sm-12 pb-4'>
            {console.log(this.props.contentTitle)}
            {this.props.contentTitle.map((data, key) => (
              <Link key={key} className=' text-decoration-none' to={{ pathname: "/course/" + data.courseId + "/" + data.lessonId, state: { courseId: data.courseId, lessonId: data.lessonId } }}>{data.conceptTitle}</Link>
              // <Link key={key} className=' text-decoration-none' to="/course/${data.courseId}/${data.lessonId}/${data.conceptTitle}">{data.conceptTitle}</Link>
            ))}
          </div>
          <div className='row col-sm-12 pt-5 pl-5'>
            <div className="col-sm-12 p3">
              <div className="col col-sm-8 pb-3 pt-3 m-0">
                {this.props.contentData.map((data, key) => (
                  <Content key={key} type={data.type} data={data.data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapsStatesToProps = state => ({ contentData: state.contentData, contentTitle: state.contentTitle });
ChapterPage.propTypes = { readConcept: PropTypes.func.isRequired, readAllConcept: PropTypes.func.isRequired };
export default connect(mapsStatesToProps, { readConcept, readAllConcept })(ChapterPage);