import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Content from '../ContentPageComponent/ContentPage';
import Sidebar from './sidebar';
import { readConcept } from '../../actions/contentAction';
import { readAllConcept } from '../../actions/contentTitleAction';
import './conceptsSideBar.css';
import './conceptsTopBar.css';
class ChapterPage extends React.Component {
  componentWillMount() {
    console.log('lesson Page', this.props.location.state);
    this.props.readAllConcept(this.props.location.state.lesson.courseId, this.props.location.state.lesson.lessonId);
    console.log('lesson Page', this.props);
    this.props.readConcept(this.props.location.state.lesson.courseId, this.props.location.state.lesson.lessonId, 'Git demmo');
    // this.props.readConcept(this.props.contentTitle[0].courseId, this.props.contentTitle[0].lessonId, this.props.contentTitle[0].conceptTitle);
  }
  read = (courseId, lessonId, conceptTitle) => {
    console.log(courseId, lessonId);
    this.props.readConcept(courseId, lessonId, conceptTitle);
  }
  render() {
    return (
      <div>
        <Sidebar />
        <div className='main'>
          <div className="navbar">
            <a href="#">Remote Repositories</a>
          </div>
          {this.props.contentData.map((data, key) => (
            <Content key={key} type={data.type} data={data.data} />
          ))}
          <div className="_main--footer-container--3vC-_">
            <button className="vds-button vds-button--secondary" aria-busy="false" type="button">
              <span className="vds-button__content">Next</span>
            </button>
          </div>
        </div>

      </div>
    );
  }
}
const mapsStatesToProps = state => ({ contentData: state.contentData, contentTitle: state.contentTitle });
ChapterPage.propTypes = { readConcept: PropTypes.func.isRequired, readAllConcept: PropTypes.func.isRequired };
export default connect(mapsStatesToProps, { readConcept, readAllConcept })(ChapterPage);