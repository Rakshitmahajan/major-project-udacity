import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from './Side';
import Topbar from './Top';
import AnswerCard from './AnswerCard';
import './PostDisplay.css';
import { addAnswer, addAnswerToPost } from '../../actions/PostAction';
class PostDisplay extends Component {
  state = {
    post: null,
    answer: ''
  }
  componentDidMount() {
    this.setState({
      post: this.props.location.state.post
    })
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = () => {
    this.props.addAnswer({ detail: this.state.answer, user: this.props.user._id, post: this.state.post._id }, this.props.user);
    this.setState({ answer: '' })
  }
  render() {
    return (
      <div className="_layout_container__1W97h">
        <Sidebar />
        <main className="_layout_main__1LhDA">
          <div className="_layout_content-area__1eAnV">
            <div id="content"></div>
            <div id="main-layout-content" aria-labelledby="header-title" className="_body_body__2AI8L">
              <div className="fullWidthWrapper_gray__2wWDF fullWidthWrapper_base__31JHr">
                <div className="innerPageLayout_view-wrapper__12gOJ">
                  <div className="navHeaderSmall_nav-header-small__1OoNJ">
                    <Topbar />
                  </div >
                  <div>
                    <div className="fullWidthWrapper_white__24d9c fullWidthWrapper_base__31JHr">
                      <div className="undefined fixedWidthWrapper_fixed-width-wrapper__1fJJV">
                        <div data-ref="question-detail" className="questionDetail_question-detail__ffKBM">
                          <div className="questionDetail_post-vote-wrapper__1Zlbh">
                            <div className="postVote_post-vote-wrapper__17O70">
                              <div className="postVote_post-vote__QTMn6">
                                <button className="postVote_up-vote-button__WXFvZ postVote_vote-button__2_vPK postVote_inactive__1J5vz" data-ref="upvote-button">
                                  <i className="vds-icon vds-icon--sm" role="img" aria-hidden="true">
                                    <svg viewBox="0 0 32 32"><path d="M8.16 20.589l7.13-10.175c.297-.422.903-.541 1.356-.265a.947.947 0 0 1 .292.276l6.91 10.175c.29.425.153.99-.304 1.259a1.033 1.033 0 0 1-.524.141H8.98c-.542 0-.98-.409-.98-.912 0-.178.055-.351.16-.5z"></path></svg>
                                  </i>
                                </button>
                                <div className="voteCounter_vote-counter__15yS5">
                                  <div className="voteCounter_gradient-shadow-top__3isL- voteCounter_gradient-shadow__365L2"></div>
                                  <div className="voteCounter_slider-container__1UbLk">{this.state.post !== null ? (this.state.post.upvotes) : null}</div>
                                  <div className="voteCounter_gradient-shadow-bottom__AWutE voteCounter_gradient-shadow__365L2">
                                  </div>
                                </div>
                                <button className="postVote_down-vote-button__17qa4 postVote_vote-button__2_vPK postVote_inactive__1J5vz" data-ref="downvote-button">
                                  <i className="vds-icon vds-icon--sm" role="img" aria-hidden="true">
                                    <svg viewBox="0 0 32 32"><path d="M8.16 11.411l7.13 10.175c.297.422.903.541 1.356.265a.947.947 0 0 0 .292-.276l6.91-10.175c.29-.425.153-.99-.304-1.259A1.033 1.033 0 0 0 23.02 10H8.98c-.542 0-.98.409-.98.912 0 .178.055.351.16.5z"></path></svg>
                                  </i></button>
                              </div>
                            </div>
                          </div>
                          <div>
                            <article className="questionDetail_content__3HQBJ">
                              <h1 className="header_header__EL3ff header_heavy-header__3Et0C">{this.state.post !== null ? (this.state.post.question) : null}</h1>
                              <div className="questionDetail_post-metadata-wrapper__2HzSG">
                                <address className="postMetadata_post-metadata__1SjZp">
                                  <div className="userProfileTooltip_children__27AMi">
                                    <div className="postMetadata_post-metadata__1SjZp">
                                      <div className="postMetadata_user-icon-wrapper__59Tip">
                                        <div className="userIcon_profile-image-wrapper__S8e4v userIcon_small__3fi47" data-ref="profile-image-wrapper">
                                          <img src="https://s3-us-west-2.amazonaws.com/udacity-profiles/production/photo/12867318540-d56382f0915c002adf33ff4ef11807a7.jpeg" alt="" className="userIcon_profile-image__2B9al" data-ref="profile-image" /></div>
                                      </div>
                                      <span className="displayName_author__1nF9i" data-ref="author">{this.state.post !== null ? (this.state.post.user.firstName + " " + this.state.post.user.lastName) : null}</span>
                                    </div>
                                  </div>
                                  <span className="postMetadata_created-at__2i5iD" data-ref="created-at">4 days ago</span>
                                </address>
                              </div>
                              <div className="postBodyContent_post-body-content__3zABY questionDetail_post-content__1FEe-">
                                <p>{this.state.post !== null ? (this.state.post.detail) : null}</p>
                              </div>
                              <ul className="questionDetail_tags__1iJhd">
                                <li className="tagItem_tag-item-wrapper__3AkZJ">
                                  <button className="tagItem_tag-item__I6z8i" data-ref="tag-link">{this.state.post !== null ? (this.state.post.category) : null}</button></li>
                                <li className="tagItem_tag-item-wrapper__3AkZJ">
                                  <button className="tagItem_tag-item__I6z8i" data-ref="tag-link">{this.state.post !== null ? (this.state.post.project) : null}</button></li>
                              </ul>
                            </article>
                            <div className="postActionBar_post-action-bar__1JwXo">
                              <div className="postActionBar_public-actions__2LmmW">
                                <button className="vds-button vds-button--minimal vds-button--small vds-button__icon" aria-busy="false" type="button" data-testid="comment-button"><span className="vds-button__content">
                                  <i className="vds-icon vds-icon--sm" role="img" aria-hidden="true"><svg viewBox="0 0 32 32">
                                    <path d="M14.232 13.001a1 1 0 0 1-.99-1V9.188L6.529 15l6.715 5.812v-2.85a1 1 0 0 1 .855-.99c3.54-.516 7.282.405 11.213 2.73-1.704-4.444-5.341-6.643-11.079-6.7zm13.749 8.803c.177.889-.825 1.537-1.562 1.01-4.039-2.885-7.76-4.187-11.176-3.954V23a1 1 0 0 1-1.655.756l-9.242-8a1 1 0 0 1 0-1.512l9.242-8A1 1 0 0 1 15.243 7v4.032c7.061.375 11.386 4.014 12.738 10.772z"></path></svg>
                                  </i>Comment</span>
                                </button>
                                <button className="vds-button vds-button--minimal vds-button--small vds-button__icon" aria-busy="false" type="button">
                                  <span className="vds-button__content">
                                    <i className="vds-icon vds-icon--sm" role="img" aria-hidden="true">
                                      <svg viewBox="0 0 32 32"><path d="M27 24.967v.081a1.006 1.006 0 0 1-.931.952h-.14a.998.998 0 0 1-.444-.143L20.723 23H9a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.917l.986 5.919c.008.044.012.088.014.13zm-2.986-5.803L24 19v-9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 1 .515.143l3.143 1.885-.644-3.864z"></path></svg>
                                    </i>Answer
                                    </span>
                                </button>
                              </div>
                              <div className="postActionBar_private-actions__8AFXP">
                                <button className="vds-button vds-button--minimal vds-button--small" aria-busy="false" type="button">
                                  <span className="vds-button__content">Report</span>
                                </button></div>
                            </div>
                            <div className="commentList_comment-list__2tBcP" data-ref="comment-list">
                              <ul>
                                <li className="commentList_comment-list-item__1ZlOR commentListItem_comment-list-item__2Nk_V">
                                  <div className="commentList_input-wrapper__1DI_C">
                                    <div className="textInputWrapper_text-input-wrapper__1201C">
                                      <div className="replyFormPlaceholder_reply-form-placeholder__3YuPf" ata-ref="reply-form-placeholder" role="button">
                                        <div className="replyFormPlaceholder_glyph-wrapper__17yjr">
                                          <div className="userIcon_profile-image-wrapper__S8e4v userIcon_medium__3nxap" data-ref="profile-image-wrapper">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAADAFBMVEXw8PAu2CYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ/NPAAAABAHRSTlP//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKmfXxgAABT9JREFUeNoBNAXL+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAABAQEBAQEAAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAEBAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSvAfmldFwzAAAAAElFTkSuQmCC"
                                              alt="" className="userIcon_profile-image__2B9al" data-ref="profile-image" /></div>
                                        </div>
                                        <p className="replyFormPlaceholder_placeholder__3iewl" data-ref="placeholder">Write a comment… If you are sharing an answer, please use the answer interface below.</p>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {this.state.post !== null ? (<AnswerCard answer={this.state.post.answer} />) : null}
                      </div>
                    </div>
                    <div className="pt2 pb6 fixedWidthWrapper_fixed-width-wrapper__1fJJV">
                      <div className="textInputWrapper_text-input-wrapper__1201C">
                        <fieldset>
                          <textarea name="answer" className="textInputWrapper_text-input-wrapper__1201C fileDropTarget_drop-target-wrapper__1JWfr richTextEditor_rich-text-editor__3XY6Q postBodyContent_post-body-content__3zABY mobiledocCore_mobiledoc-core__1Q_10 __mobiledoc-editor __has-no-content"
                            cols='78' rows='6' placeholder="Write an answer… If you are not sharing an answer to the question, please use the comment interface above." onChange={this.onChange}></textarea>
                        </fieldset>
                      </div>
                      <footer><button className="vds-button vds-button--primary" aria-busy="false" type="button" onClick={this.onSubmit}><span className="vds-button__content">Post Answer</span></button>
                        <div className="postLegalDisclaimer_post-legal-disclaimer__3rSqs">By posting, you agree to the<a className="vds-link" href="https://www.udacity.com/legal/community-guidelines">Terms Of Use</a>and<a className="vds-link" href="https://www.udacity.com/legal/privacy">Privacy Policy.</a></div>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div >
    );
  }
}
// export default PostDisplay;
const mapsStateToProps = state => ({ user: state.knowledge.user });
PostDisplay.propTypes = { addAnswer: PropTypes.func.isRequired };
export default connect(mapsStateToProps, { addAnswer, addAnswerToPost })(PostDisplay);