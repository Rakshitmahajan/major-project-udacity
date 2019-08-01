import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import ChapterSidebar from './LessonPageComponent/ChapterSidebar';
// import ChapterTopbar from './LessonPageComponent/ChapterTopbar';
import Content from './ContentPage';
import Image from './ContentPageComponent/Image';
import Video from './ContentPageComponent/Video';
import { readConcept } from '../actions/contentAction';
import { readAllConcept } from '../actions/contentTitleAction';
class ChapterPage extends React.Component {
  componentWillMount() {
    console.log('lesson Page', this.props.location.state);
    this.props.readAllConcept(this.props.location.state.lesson.courseId, this.props.location.state.lesson.lessonId);
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
        <div className="sidenav">

        </div>
        <div className="">
          <Image src="https://d17h27t6h515a5.cloudfront.net/topher/2017/April/58f7d44c_ud456-l1-git-remote-shortname/ud456-l1-git-remote-shortname.png"
            alt="The Terminal application running the `git remote` command. It outputs the word `origin`."
            caption="The Terminal application running the `git remote` command. It outputs the word `origin`." />

          <Video src="https://www.youtube.com/embed/myuGLZLYpYY?showinfo=0&amp;rel=0&amp;autohide=1&amp;vq=hd720&amp;hl=en-gb&amp;cc_load_policy=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2FclassNameroom.udacity.com&amp;widgetid=5" />
          {this.props.contentData.map((data, key) => (
            <Content key={key} type={data.type} data={data.data} />
          ))}
          <div className="_main--footer-container--3vC-_">
            <button className="vds-button vds-button--secondary" aria-busy="false" type="button">
              <span className="vds-button__content">Next</span>
            </button></div>
        </div>
      </div>
      //   <div className="main">
      //     <Comment />
      //     <Code />
      //     <Image src="https://d17h27t6h515a5.cloudfront.net/topher/2017/April/58f7d44c_ud456-l1-git-remote-shortname/ud456-l1-git-remote-shortname.png"
      //       alt="The Terminal application running the `git remote` command. It outputs the word `origin`." />
      //     <Text />
      //     {/* <Form /> */}
      //     <Video src="https://www.youtube.com/embed/myuGLZLYpYY?showinfo=0&amp;rel=0&amp;autohide=1&amp;vq=hd720&amp;hl=en-gb&amp;cc_load_policy=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2FclassNameroom.udacity.com&amp;widgetid=5" />
      //   </div>
    );
  }
}
const mapsStatesToProps = state => ({ contentData: state.contentData, contentTitle: state.contentTitle });
ChapterPage.propTypes = { readConcept: PropTypes.func.isRequired, readAllConcept: PropTypes.func.isRequired };
export default connect(mapsStatesToProps, { readConcept, readAllConcept })(ChapterPage);