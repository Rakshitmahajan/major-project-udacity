import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Sidebar from './Sidebar';
import Content from '../ContentPage/ContentPage';
import { currentChapter } from '../../actions/ChapterAction';
import { readConcept } from '../../actions/ContentAction';
import './conceptsSideBar.css';
import './conceptsTopBar.css';
class LessonPage extends Component {
  state = {}
  componentWillReceiveProps(props) {
    if (this.props.chapter === null) {
      this.props.currentChapter(this.props.course.courseId, this.props.lesson.lessonId, props.chapter.conceptTitle)
      this.props.readConcept(this.props.course.courseId, this.props.lesson.lessonId, props.chapter.conceptTitle)
    }
  }
  render() {
    // console.log(this.state);
    return (
      <div>
        <Sidebar />
        <div className='main'>
          <div className="navbar">
            <a className='' href="#">{this.props.chapter ? this.props.chapter.conceptTitle : null}</a>
          </div>
          {this.props.content.map((data, key) => (
            <Content key={key} type={data.type} data={data} />
          ))}
        </div>

      </div>
    );
  }
}
const mapsStatesToProps = state => ({
  course: state.course.currentCourse,
  lesson: state.lesson.currentLesson,
  chapter: state.chapter.currentChapter,
  allchapter: state.chapter.allchapter,
  content: state.content
});
LessonPage.propTypes = { currentChapter: PropTypes.func.isRequired, readConcept: PropTypes.func.isRequired };
export default connect(mapsStatesToProps, { currentChapter, readConcept })(LessonPage);
