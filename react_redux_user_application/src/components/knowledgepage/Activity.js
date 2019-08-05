import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import QuestionCard from './PostCard';
import './Activity.css'
class ActivityPage extends Component {
  state = {
    data: this.props.myPost
  }
  componentWillMount() {
    this.setState({
      data: this.props.myPost
    })
  }
  handleMyAnswer = () => {
    this.setState({
      data: this.props.myAnswer
    })
  }
  handleMyPost = () => {
    this.setState({
      data: this.props.myPost
    })
  }
  render() {
    return (
      <div>
        <div className="activity_activity-content-wrapper__3MRVD">
          <div className="contentWrapper_content-wrapper__19WZ6">
            <div className="activity_activity-wrapper__Tjc5E">
              <div className="activity_stats-wrapper__3y9M4">
                <div className="activity_header-wrapper__Ihr3Q">
                  <div className="vds-spacing vds-spacing--stack-3x">
                    <h2 className="vds-heading--h2 vds-spacing--stack-3x">My Activity</h2>
                  </div>
                </div>
                <dl className="userActivityStats_user-post-stats-wrapper__1ajmj" data-ref="user-post-stats-wrapper">
                  <dt className="userActivityStats_title__3Bhh5">
                    <h4 className="vds-heading--h4 vds-spacing--stack-3x">{this.props.user.upvotesReceived}</h4>
                  </dt>
                  <dd className="userActivityStats_title__3Bhh5">
                    <div className="vds-spacing vds-spacing--stack-4x">
                      <p className="vds-text--sm vds-spacing--stack-3x">upvotes received</p>
                    </div>
                  </dd>
                  <dt className="userActivityStats_title__3Bhh5">
                    <h4 className="vds-heading--h4 vds-spacing--stack-3x">{this.props.user.answerPost}</h4>
                  </dt>
                  <dd className="userActivityStats_title__3Bhh5">
                    <div className="vds-spacing vds-spacing--stack-4x">
                      <p className="vds-text--sm vds-spacing--stack-3x">answers posted</p>
                    </div>
                  </dd>
                  <dt className="userActivityStats_title__3Bhh5">
                    <h4 className="vds-heading--h4 vds-spacing--stack-3x">{this.props.user.answerAccepted}</h4>
                  </dt>
                  <dd className="userActivityStats_title__3Bhh5">
                    <div className="vds-spacing vds-spacing--stack-4x">
                      <p className="vds-text--sm vds-spacing--stack-3x">answers accepted</p>
                    </div>
                  </dd>
                  <dt className="userActivityStats_title__3Bhh5">
                    <h4 className="vds-heading--h4 vds-spacing--stack-3x">{this.props.user.upvotesGiven}</h4>
                  </dt>
                  <dd className="userActivityStats_title__3Bhh5">
                    <div className="vds-spacing vds-spacing--stack-4x">
                      <p className="vds-text--sm vds-spacing--stack-3x">upvotes given</p>
                    </div>
                  </dd>
                </dl>
              </div>
              <div className="activity_activity-dash-wrapper__xUDJb">
                <article className="tabList_tab-list__2Eyro">
                  <button className="tabItem_tab__ESJTT tabItem_selected__3lCZd" data-ref="tab-button">
                    <span className="tabItem_tab-text__wyfIW">
                      <h6 className="vds-heading--h6 vds-spacing--stack-3x">My Questions</h6>
                    </span>
                  </button>
                  <button className="tabItem_tab__ESJTT" data-ref="tab-button">
                    <span className="tabItem_tab-text__wyfIW">
                      <h6 className="vds-heading--h6 vds-spacing--stack-3x">My Answers</h6>
                    </span>
                  </button>
                </article>
                <div className="activityQuestionEmptyState_message-wrapper__2rrlO">
                  <div>
                    {this.props.myPost.map((data, key) => (
                      <div key={key}><QuestionCard post={data} /></div>
                    ))}
                  </div>
                  <main className="activityQuestionEmptyState_message__3vqLF">
                    <img className="activityQuestionEmptyState_image__vjFA6" src="/static/media/illustration-chat-with-pencil.7656d313.svg" alt="pencil illustrating create post" data-ref="image" />
                    <div className="undefined fixedWidthWrapper_fixed-width-wrapper__1fJJV">
                      <p className="activityQuestionEmptyState_copy__2CBzP" data-ref="copy">Questions you ask willappear here. Feeling stuck? Post your first question!</p>
                      <div>
                        <a className="vds-button vds-button--primary vds-button__icon" href="/questions/new" role="button" tabIndex="0"><span className="vds-button__content">
                          <i className="vds-icon" role="img" aria-hidden="true">
                            <svg viewBox="0 0 32 32"><path d="M14 16.414l-.148.148-1.057 2.643 2.643-1.057.148-.148L14 16.414zM15.414 15L17 16.586 23.586 10 22 8.414 15.414 15zm-3.121.293l9-9a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.336.221l-5 2c-.816.327-1.626-.483-1.3-1.3l2-5a1 1 0 0 1 .222-.335zM8 24h16v-6a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2H8v16z"></path></svg>
                          </i>Post a Question</span>
                        </a>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default ActivityPage;
const mapsStateToProps = state => ({ user: state.knowledge.user, myPost: state.knowledge.myPost, myAnswer: state.knowledge.myAnswer });
// Knowledge.propTypes = { userKnowledge: PropTypes.func.isRequired };
export default connect(mapsStateToProps, null)(ActivityPage);