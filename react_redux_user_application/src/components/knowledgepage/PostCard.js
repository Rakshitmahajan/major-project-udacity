import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import './PostCard.css';
import { updatePostUpvotes, updateUserUpvotesReceived, updateUserUpvotesGiven } from '../../actions/PostAction';
class PostCard extends Component {
  state = {
    counter: this.props.post.upvotes
  }
  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1
    })
    this.props.updatePostUpvotes({ upvotes: this.state.counter + 1, id: this.props.post._id });
    this.props.updateUserUpvotesReceived({ email: this.props.post.user.email, upvotesReceived: 1 });
    this.props.updateUserUpvotesGiven({ email: this.props.user.email, upvotesGiven: 1 })
  }
  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    })
    this.props.updatePostUpvotes({ upvotes: this.state.counter - 1, id: this.props.post._id });
    this.props.updateUserUpvotesReceived({ email: this.props.post.user.email, upvotesReceived: 1 });
    this.props.updateUserUpvotesGiven({ email: this.props.user.email, upvotesGiven: 1 })
  }
  render() {
    return (
      <article className="searchResultItem_search-result-item-grid__3t-ts">
        <div className="searchResultItem_post-vote-wrapper__2jCES">
          <div className="postVote_post-vote-wrapper__17O70">
            <div className="postVote_post-vote__QTMn6">
              <button className="postVote_up-vote-button__WXFvZ postVote_vote-button__2_vPK postVote_inactive__1J5vz" data-ref="upvote-button" onClick={this.handleIncrease}>
                <i className="vds-icon vds-icon--sm" role="img" aria-hidden="true">
                  <svg viewBox="0 0 32 32">
                    <path d="M8.16 20.589l7.13-10.175c.297-.422.903-.541 1.356-.265a.947.947 0 0 1 .292.276l6.91 10.175c.29.425.153.99-.304 1.259a1.033 1.033 0 0 1-.524.141H8.98c-.542 0-.98-.409-.98-.912 0-.178.055-.351.16-.5z">
                    </path>
                  </svg>
                </i>
              </button>
              <div className="voteCounter_vote-counter__15yS5">
                <div className="voteCounter_gradient-shadow-top__3isL- voteCounter_gradient-shadow__365L2">
                </div>
                <div className="voteCounter_slider-container__1UbLk">{this.state.counter}</div>
                <div className="voteCounter_gradient-shadow-bottom__AWutE voteCounter_gradient-shadow__365L2">
                </div>
              </div>
              <button className="postVote_down-vote-button__17qa4 postVote_vote-button__2_vPK postVote_inactive__1J5vz" data-ref="downvote-button" onClick={this.handleDecrease}>
                <i className="vds-icon vds-icon--sm" role="img" aria-hidden="true">
                  <svg viewBox="0 0 32 32">
                    <path d="M8.16 11.411l7.13 10.175c.297.422.903.541 1.356.265a.947.947 0 0 0 .292-.276l6.91-10.175c.29-.425.153-.99-.304-1.259A1.033 1.033 0 0 0 23.02 10H8.98c-.542 0-.98.409-.98.912 0 .178.055.351.16.5z">
                    </path>
                  </svg>
                </i>
              </button>
            </div>
          </div>
        </div>
        <Link to={{ pathname: '/postdisplay', state: { post: this.props.post } }}>
          <h2 className="vds-heading--h4 vds-spacing--stack-none">
            <p>
              <span className="highlightedText_highlighted-text__1JVmp searchResultItem_header-highlight__34DUR">{this.props.post.question}</span>
            </p>
          </h2>
          <div className="searchResultItem_info-block-grid__3thdj">
            <div className="searchResultItem_post-metadata-wrapper__3eiMZ">
              <address className="postMetadata_post-metadata__1SjZp">
                <div className="userProfileTooltip_children__27AMi">
                  <div className="postMetadata_post-metadata__1SjZp">
                    <div className="postMetadata_user-icon-wrapper__59Tip">
                      <div className="userIcon_profile-image-wrapper__S8e4v userIcon_small__3fi47" data-ref="profile-image-wrapper">
                        <img src="https://s3-us-west-2.amazonaws.com/udacity-profiles/production/photo/12867318540-d56382f0915c002adf33ff4ef11807a7.jpeg" alt="" className="userIcon_profile-image__2B9al" data-ref="profile-image" />
                      </div>
                    </div>
                    <span className="displayName_author__1nF9i" data-ref="author">
                      {this.props.post.user !== undefined ? (this.props.user.firstName + " " + this.props.user.lastName) : null}
                    </span>
                  </div>
                </div>
                <span className="postMetadata_created-at__2i5iD" data-ref="created-at"></span>
              </address>
            </div>
            <div className="searchResultItem_answers-count__21fsV">
              <div className="answerCount_answers-wrapper__1EpEr">
                <div className="answerCount_answer-icon__tnxwo">
                  <i className="vds-icon vds-icon--sm vds-color--blue" role="img" aria-hidden="true">
                    <svg viewBox="0 0 32 32">
                      <path d="M27 24.967v.081a1.006 1.006 0 0 1-.931.952h-.14a.998.998 0 0 1-.444-.143L20.723 23H9a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.917l.986 5.919c.008.044.012.088.014.13zm-2.986-5.803L24 19v-9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 1 .515.143l3.143 1.885-.644-3.864zm-4.846-7.719a1 1 0 0 1 1.664 1.11l-4 6a1 1 0 0 1-1.54.152l-3-3a1 1 0 0 1 1.415-1.414l2.138 2.137 3.323-4.985z">
                      </path>
                    </svg>
                  </i>
                </div>
                <div className="answerCount_number-text__3_u3J answerCount_answer-count-base__1Ufz3">{this.props.post.answer.length}</div>
                <div className="answerCount_answer-text__1s_6G answerCount_answer-count-base__1Ufz3">answer</div>
              </div>
            </div>
          </div>
          <div className="searchResultItem_tag-list-wrapper__sqK6I">
            <ul>
              <li className="tagItem_tag-item-wrapper__3AkZJ">
                <button className="tagItem_tag-item__I6z8i" data-ref="tag-link">{this.props.post.category}</button>
              </li>
              <li className="tagItem_tag-item-wrapper__3AkZJ">
                <button className="tagItem_tag-item__I6z8i" data-ref="tag-link">{this.props.post.project}</button>
              </li>
            </ul>
          </div>
        </Link>
      </article >
    );
  }
}

const mapsStateToProps = state => ({ user: state.knowledge.user });
PostCard.propTypes = { updatePostUpvotes: PropTypes.func.isRequired };
export default connect(mapsStateToProps, { updatePostUpvotes, updateUserUpvotesReceived, updateUserUpvotesGiven })(PostCard);
