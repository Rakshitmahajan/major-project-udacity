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
  componentDidMount() {
    this.props.readConcept(this.props.location.state.data.courseId, this.props.location.state.data.lessonId, this.props.location.state.data.conceptTitle);
  }
  render() {
    return (
      <div>
        <Sidebar contentTitle={this.props.contentTitle} />
        {console.log(this.props.location.state.data)}
        <div className='main'>
          <div className="navbar">
            <a className='' href="#">{this.props.location.state.data.conceptTitle}</a>

          </div>
          {this.props.contentData.map((data, key) => (
            <Content key={key} type={data.type} data={data.data} />
          ))}
        </div>

      </div>
    );
  }
}
const mapsStatesToProps = state => ({ contentData: state.contentData, contentTitle: state.contentTitle });
ChapterPage.propTypes = { readConcept: PropTypes.func.isRequired, readAllConcept: PropTypes.func.isRequired };
export default connect(mapsStatesToProps, { readConcept, readAllConcept })(ChapterPage);