import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPost } from '../../actions/PostAction';
import './post.css';
import Sidebar from './Side';
import Topbar from './Topbar';
class Post extends Component {
  state = {
    question: '',
    detail: '',
    category: ''
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = () => {
    this.props.addPost(this.state, this.props.user._id);
    alert(this.state.question, '  POST SUBMITTED')
  }
  render() {
    return (
      <div className="_layout_container__1W97h">
        <Sidebar />
        <main className="_layout_main__1LhDA">
          <div className="_layout_content-area__1eAnV div2">
            <div id="main-layout-content" aria-labelledby="header-title" className="_body_body__2AI8L">
              <div className="fullWidthWrapper_gray__2wWDF fullWidthWrapper_base__31JHr">
                <div className="innerPageLayout_view-wrapper__12gOJ">
                  <div className="navHeaderSmall_nav-header-small__1OoNJ">
                    <Topbar />
                  </div>
                  <div>
                    <div className="undefined fixedWidthWrapper_fixed-width-wrapper__1fJJV">
                      <form data-ref="question-form" className="questionForm_question-form__2TvTs">
                        <div className="questionForm_header-wrapper__1Lbem">
                          <h1 className="vds-heading--h1 vds-spacing--stack-3x">Post a Question</h1>
                        </div>
                        <fieldset>
                          <h5 className="vds-heading--h5 vds-spacing--stack-half">Question</h5>
                          <div className="textInputWrapper_text-input-wrapper__1201C">
                            <input className="input-field" data-ref="text-input" required className="textInput_text-input__21bd5" type="text" name="question" placeholder="What are the differences between apples and oranges?" onChange={this.onChange} /></div>
                          <div data-ref="hint" className="formInputHint_hint__1f_uw">Character limit: {this.state.question.length}/150</div>
                        </fieldset>
                        <fieldset>
                          <div>
                            <div className="richTextToolbar_toolbar-grid__HwUSJ">
                              <div className="richTextToolbar_heading__15R2k">
                                <h5 className="vds-heading--h5 vds-spacing--stack-half">Details</h5>
                              </div>
                            </div>
                            <textarea name="detail" className="textInputWrapper_text-input-wrapper__1201C fileDropTarget_drop-target-wrapper__1JWfr richTextEditor_rich-text-editor__3XY6Q postBodyContent_post-body-content__3zABY mobiledocCore_mobiledoc-core__1Q_10 __mobiledoc-editor __has-no-content"
                              cols='75' rows='10' placeholder="Please include all information that someone would need to answer your question, such as a code snippet and Github link. If you are encountering an error, please also include the output of the error message." onChange={this.onChange}></textarea>
                          </div>
                        </fieldset>
                        <div className="nanodegreeTags_tag-grid__2Ds67">
                          <fieldset>
                            <h5 className="vds-heading--h5 vds-spacing--stack-half">Nanodegree</h5>
                            <div className="textInputWrapper_text-input-wrapper__1201C">
                              <div className="Select-input-tag" tabIndex="-1" role="listbox">
                                <div className="Select is-searchable Select--single Select-control">
                                  <select className="Select is-searchable Select--single Select-control" name="category" palceholder="Select" onChange={this.onChange}>
                                    <option value="Select">Select</option>
                                    <option value="Data Analyst Nanodegree">Data Analyst Nanodegree</option>
                                    <option value="Business Analytics Nanodegree">Business Analytics Nanodegree</option>
                                    <option value="Machine learning">Machine learning</option>
                                    <option value="Deep learning">Deep learning</option>
                                    <option value='Artificial intelligence'>Artificial intelligence</option>
                                    <option value='Computer vision'>Computer vision</option>
                                    <option value='Autonomous systems'>Autonomous systems</option>
                                    <option value='Virtual reality'>Virtual reality</option>
                                    <option value='Web development'>Web development</option>
                                    <option value='Mobile app development'>Mobile app development</option>
                                    <option value='Data science'>Data science</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <footer><button className="vds-button vds-button--primary" aria-busy="false" type="button" onClick={this.onSubmit}><span className="vds-button__content">Post</span></button>
                          <div className="postLegalDisclaimer_post-legal-disclaimer__3rSqs">By posting, you agree to the<a className="vds-link" href="https://www.udacity.com/legal/community-guidelines">Terms Of Use</a>and<a className="vds-link" href="https://www.udacity.com/legal/privacy">Privacy Policy.</a></div>
                        </footer>
                      </form>
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
const mapsStateToProps = state => ({ user: state.knowledge.user });
Post.propTypes = { addPost: PropTypes.func.isRequired };
export default connect(mapsStateToProps, { addPost })(Post);
