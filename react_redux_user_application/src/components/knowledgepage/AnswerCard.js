import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { answerDetail } from '../../actions/PostAction';
import './PostDisplay.css';
class AnswerCard extends Component {
  state = {}
  componentDidMount() {
    this.props.answerDetail(this.props.answer);
  }
  render() {
    return (
      <div className="vds-loading vds-loading--md" role="status" aria-label="Loading…">
        <div className="vds-loading__children">
          <div data-ref="answer-count" className="answerList_answer-count__1cT9N">{this.props.answers.length} Answer</div>
          <ul>
            {this.props.answers.map((data, key) => (
              <li key={key} className="answerListItem_answer-list-item__lZQVH">
                <div className="answerListItem_post-vote-wrapper__PfybB">
                  <div className="postVote_post-vote-wrapper__17O70">
                    <div className="postVote_post-vote__QTMn6">
                      <button className="postVote_up-vote-button__WXFvZ postVote_vote-button__2_vPK postVote_inactive__1J5vz" data-ref="upvote-button">
                        <i className="vds-icon vds-icon--sm" role="img" aria-hidden="true">
                          <svg viewBox="0 0 32 32"><path d="M8.16 20.589l7.13-10.175c.297-.422.903-.541 1.356-.265a.947.947 0 0 1 .292.276l6.91 10.175c.29.425.153.99-.304 1.259a1.033 1.033 0 0 1-.524.141H8.98c-.542 0-.98-.409-.98-.912 0-.178.055-.351.16-.5z"></path></svg>
                        </i>
                      </button>
                      <div className="voteCounter_vote-counter__15yS5">
                        <div className="voteCounter_gradient-shadow-top__3isL- voteCounter_gradient-shadow__365L2"></div>
                        <div className="voteCounter_slider-container__1UbLk">{data.upvotes}</div>
                        <div className="voteCounter_gradient-shadow-bottom__AWutE voteCounter_gradient-shadow__365L2"> </div>
                      </div>
                      <button className="postVote_down-vote-button__17qa4 postVote_vote-button__2_vPK postVote_inactive__1J5vz" data-ref="downvote-button">
                        <i className="vds-icon vds-icon--sm" role="img" aria-hidden="true">
                          <svg viewBox="0 0 32 32"><path d="M8.16 11.411l7.13 10.175c.297.422.903.541 1.356.265a.947.947 0 0 0 .292-.276l6.91-10.175c.29-.425.153-.99-.304-1.259A1.033 1.033 0 0 0 23.02 10H8.98c-.542 0-.98.409-.98.912 0 .178.055.351.16.5z"></path></svg>
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="answerListItem_accept-verify-wrapper__1N-m4">
                  <div>
                    <div className="answerAcceptVerify_button-wrapper__4qKwg">
                      <button data-ref="accept-answer" className="answerAcceptVerify_answer-status-control__2UN_9 answerAcceptVerify_accepted-answer__1SC7h answerAcceptVerify_selected__CBTfQ answerAcceptVerify_noclick__145i0">
                        <i className="vds-icon vds-icon--sm" role="img" aria-hidden="true">
                          <svg viewBox="0 0 32 32"><path d="M27 24.967v.081a1.006 1.006 0 0 1-.931.952h-.14a.998.998 0 0 1-.444-.143L20.723 23H9a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.917l.986 5.919c.008.044.012.088.014.13zm-2.986-5.803L24 19v-9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 1 .515.143l3.143 1.885-.644-3.864zm-4.846-7.719a1 1 0 0 1 1.664 1.11l-4 6a1 1 0 0 1-1.54.152l-3-3a1 1 0 0 1 1.415-1.414l2.138 2.137 3.323-4.985z"></path></svg>
                        </i>
                        <span className="answerAcceptVerify_text__2InmY">Accepted Answer</span></button></div>
                  </div>
                </div>
                <section className="answerListItem_answer-body__1JDjm">
                  <div>
                    <div className="postBodyContent_post-body-content__3zABY undefined">
                      <p>{data.detail}</p>
                      <span className="postBodyContent_edited__1up_A"></span>
                    </div>
                    <div className="answerListItem_post-metadata-wrapper__1Jyxq">
                      <address className="postMetadata_post-metadata__1SjZp">
                        <div className="userProfileTooltip_children__27AMi">
                          <div className="postMetadata_post-metadata__1SjZp">
                            <div className="postMetadata_user-icon-wrapper__59Tip">
                              <div className="userIcon_profile-image-wrapper__S8e4v userIcon_small__3fi47" data-ref="profile-image-wrapper">
                                <img src="https://s3-us-west-2.amazonaws.com/udacity-profiles/production/photo/10696040236-21bfe36ec1bed99c88b26000bc91ff25.jpeg"
                                  alt="" className="userIcon_profile-image__2B9al" data-ref="profile-image" />
                              </div>
                            </div>
                            <span className="displayName_author__1nF9i" data-ref="author">{data.user.firstName + " " + data.user.lastName}</span>
                          </div>
                        </div><span className="postMetadata_created-at__2i5iD" data-ref="created-at">4 days ago</span>
                      </address>
                    </div>
                    <div className="postActionBar_post-action-bar__1JwXo">
                      <div className="postActionBar_public-actions__2LmmW">
                        <button className="vds-button vds-button--minimal vds-button--small vds-button__icon" aria-busy="false" type="button" data-testid="comment-button">
                          <span className="vds-button__content">
                            <i className="vds-icon vds-icon--sm" role="img" aria-hidden="true">
                              <svg viewBox="0 0 32 32"><path d="M14.232 13.001a1 1 0 0 1-.99-1V9.188L6.529 15l6.715 5.812v-2.85a1 1 0 0 1 .855-.99c3.54-.516 7.282.405 11.213 2.73-1.704-4.444-5.341-6.643-11.079-6.7zm13.749 8.803c.177.889-.825 1.537-1.562 1.01-4.039-2.885-7.76-4.187-11.176-3.954V23a1 1 0 0 1-1.655.756l-9.242-8a1 1 0 0 1 0-1.512l9.242-8A1 1 0 0 1 15.243 7v4.032c7.061.375 11.386 4.014 12.738 10.772z"></path></svg>
                            </i>Show comment</span></button>
                      </div>
                      <div className="postActionBar_private-actions__8AFXP">
                        <button className="vds-button vds-button--minimal vds-button--small" aria-busy="false" type="button">
                          <span className="vds-button__content">Report</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

// export default AnswerCard;
const mapsStateToProps = state => ({ answers: state.knowledge.postAnswer });
AnswerCard.propTypes = { answerDetail: PropTypes.func.isRequired };
export default connect(mapsStateToProps, { answerDetail })(AnswerCard);