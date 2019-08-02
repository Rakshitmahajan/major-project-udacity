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
    console.log(this.props.match.path);
    if (this.props.match.path === '/course/:courseId/:lessonId') {
      this.props.readAllConcept(this.props.location.state.lesson.courseId, this.props.location.state.lesson.lessonId);
      this.props.readConcept(this.props.location.state.lesson.courseId, this.props.location.state.lesson.lessonId, 'Git demmo');
    } else {
      console.log(this.props.location.state.data.conceptTitle);
      this.props.readConcept(this.props.location.state.data.courseId, this.props.location.state.data.lessonId, this.props.location.state.data.conceptTitle);
    }
  }
  render() {

    return (
      <div>
        <Sidebar contentTitle={this.props.contentTitle} />
        <div className='main'>
          <div className="navbar">
            {/* {console.log('dcsd', this.props.contentData)} */}
            <a href="#">{this.props.contentData.conceptTitle}</a>
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