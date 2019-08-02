import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { readConcept } from '../../actions/contentAction';
import { readAllConcept } from '../../actions/contentTitleAction';
import './conceptsSideBar.css';
import './conceptsTopBar.css';
class ChapterPage extends React.Component {
  componentDidMount() {
    this.props.readAllConcept(this.props.location.state.lesson.courseId, this.props.location.state.lesson.lessonId);
  }
  render() {
    return (
      <div>
        {this.props.contentTitle.map((data, key) => (
          <div key={key}>
            <Link key={key} className=' text-decoration-none'
              to={{
                pathname: "/course/" + data.courseId + '/' + data.lessonId + '/' + data.conceptTitle,
                state: { data: data }
              }}>{data.conceptTitle}</Link>
          </div>
        ))}
      </div>
    );
  }
}
const mapsStatesToProps = state => ({ contentData: state.contentData, contentTitle: state.contentTitle });
ChapterPage.propTypes = { readConcept: PropTypes.func.isRequired, readAllConcept: PropTypes.func.isRequired };
export default connect(mapsStatesToProps, { readConcept, readAllConcept })(ChapterPage);