import React from 'react';
import './concepts.css';
class Concept extends React.Component {
  state = {}
  render() {
    return (
      <div id="app">
        <div id="main">
          <div className="content">
            <div data-test="course-container">
              <div>
                <div>
                  <div className="_layout-module--container--3f2U4">
                    <ul className="_layout-module--a11y-nav--vkRI0">
                      <li><a href="#content">Jump to content</a></li>
                      <li><a href="mailto:a11y@udacity.com?subject=Accessibility%20Support"
                        target="_blank">Email for accessibility support</a></li>
                    </ul>
                    <nav className="_layout-module--nav--3qaiq _layout-module--secondary-only--33dGC fixed-navbar">
                      <div className="_layout-module--nav-contents--3VsBp">
                        <div id="main-layout-sidebar" className="_layout-module--secondary-nav--dElFh">
                          <div data-test="lesson-sidebar">
                            <div className="_sidebar--sidebar--1jCxg">
                              <h3 className="_sidebar--header--2BaH_"><a href="/courses/ud456">
                                <span className="_sidebar--title-content--tLGxZ">
                                  <span className="_sidebar--arrow--2Hns-">
                                    <i className="vds-icon vds-icon--lg" role="img" aria-hidden="true">
                                      <svg viewBox="0 0 32 32">
                                        <path d="M20.589 23.84l-10.175-7.13c-.422-.297-.541-.903-.265-1.356a.947.947 0 0 1 .276-.292L20.6 8.152c.425-.29.99-.153 1.259.304.092.157.141.338.141.524v14.04c0 .542-.409.98-.912.98a.868.868 0 0 1-.5-.16z" fillRule="evenodd"></path>
                                      </svg>
                                    </i>
                                  </span>
                                  <span className="_sidebar--title--3HHFG text--nowrap-ellipsis--TMdB3">
                                    <span>Lesson 1:</span>
                                    <span className="_sidebar--title-text--vcBON text--nowrap-ellipsis--TMdB3">Working With Remotes</span>
                                  </span></span></a></h3>
                              <div className="_sidebar--sections--2TxEN">
                                <div role="group" aria-expanded="false"
                                  className="_section--section--3V1-y shared--section--3e1zX _section--_hide-shadow--1yGng">
                                  <a href="#" className="_section--header--hPsXJ shared--header--3QkFS">
                                    <h2>Search</h2><i className="vds-icon vds-icon--sm vds-color--silver" role="img">
                                      <span className="vds-visually-hidden">Search</span>
                                      <svg viewBox="0 0 32 32">
                                        <path d="M21.176 19.762l4.531 4.53a1 1 0 0 1-1.414 1.415l-4.531-4.531a8.5 8.5 0 1 1 1.414-1.414zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
                                          fillRule="nonzero"></path>
                                      </svg>
                                    </i>
                                  </a>
                                </div>
                                <div role="group" aria-expanded="true" className="_section--section-selected--24hRk shared--section-expanded--2eoTJ shared--section--3e1zX _section--_hide-shadow--1yGng">
                                  <a href="#" className="_section--header-expanded--2PtoU shared--header-expanded--290TG shared--header--3QkFS" aria-owns="tree-resources">
                                    <h2>Resources</h2><span className="_section--collapse--3crCv shared--collapse--2w1x2"><i className="vds-icon vds-icon--sm" role="img">
                                      <span className="vds-visually-hidden">Close</span>
                                      <svg viewBox="0 0 32 32">
                                        <path d="M8.16 11.411l7.13 10.175c.297.422.903.541 1.356.265a.947.947 0 0 0 .292-.276l6.91-10.175c.29-.425.153-.99-.304-1.259A1.033 1.033 0 0 0 23.02 10H8.98c-.542 0-.98.409-.98.912 0 .178.055.351.16.5z" fillRule="evenodd"></path>
                                      </svg>
                                    </i>
                                    </span>
                                  </a>
                                  <div id="tree-resources">
                                    <div role="tabpanel" aria-labelledby="sidebar-resources-list" className="index--resources-list--3tKbT">
                                      <div className="_section--resource-section--3N8V5">
                                        <h3>Lesson Resources</h3>
                                        <ul>
                                          <li><a href="https://forums.udacity.com?forum_path=c/standalone-courses/github-and-collaboration" target="_blank" title="Forums" className="_resource--resource--30RH3">
                                            <span className="_resource--name--2C3-R text--nowrap-ellipsis--TMdB3">Forums</span>
                                            <span className="_resource--icon--2C7vd"><i className="vds-icon vds-icon--sm" role="img">
                                              <span className="vds-visually-hidden">Forum</span>
                                              <svg viewBox="0 0 32 32">
                                                <path d="M17.271 14.729a.983.983 0 1 1 1.39-1.39c1.92 1.92 1.92 5.369 0 7.289L14.73 24.56c-1.92 1.92-5.37 1.92-7.29 0-1.919-1.92-1.919-5.37 0-7.289l.984-.983a.983.983 0 0 1 1.39 1.39l-.983.983c-1.152 1.152-1.152 3.357 0 4.509 1.152 1.152 3.357 1.152 4.509 0l3.932-3.933c1.152-1.151 1.152-3.356 0-4.508zM14.73 17.27a.983.983 0 1 1-1.39 1.39c-1.92-1.92-1.92-5.369 0-7.289L17.27 7.44c1.92-1.92 5.37-1.92 7.29 0 1.919 1.92 1.919 5.37 0 7.289l-.984.983a.983.983 0 0 1-1.39-1.39l.983-.983c1.152-1.152 1.152-3.357 0-4.509-1.152-1.152-3.357-1.152-4.509 0l-3.932 3.933c-1.152 1.151-1.152 3.356 0 4.508z"
                                                  fillRule="nonzero">
                                                </path>
                                              </svg>
                                            </i>
                                            </span>
                                          </a>
                                          </li>
                                          <li><a href="http://d2uz2655q5g6b2.cloudfront.net/ud456/282712/1499729582388/GitHub%20%26%20Collaboration%20Videos.zip"
                                            target="_blank" title="Videos Zip File"
                                            className="_resource--resource--30RH3"><span
                                              className="_resource--name--2C3-R text--nowrap-ellipsis--TMdB3">Videos
                                                                                    Zip File</span><span
                                              className="_resource--icon--2C7vd"><i
                                                className="vds-icon vds-icon--sm"
                                                role="img"><span
                                                  className="vds-visually-hidden">File</span><svg
                                                    viewBox="0 0 32 32">
                                                  <path
                                                    d="M17 18.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L15 18.586V7a1 1 0 0 1 2 0v11.586zM7 26a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2H7z"
                                                    fillRule="nonzero">
                                                  </path>
                                                </svg></i></span></a></li>
                                          <li><a href="http://d2uz2655q5g6b2.cloudfront.net/ud456/282712/1499729523377/GitHub%20%26%20Collaboration%20Subtitles.zip"
                                            target="_blank"
                                            title="Transcripts Zip File"
                                            className="_resource--resource--30RH3"><span
                                              className="_resource--name--2C3-R text--nowrap-ellipsis--TMdB3">Transcripts
                                                                                    Zip File</span><span
                                              className="_resource--icon--2C7vd"><i
                                                className="vds-icon vds-icon--sm"
                                                role="img"><span
                                                  className="vds-visually-hidden">File</span><svg
                                                    viewBox="0 0 32 32">
                                                  <path
                                                    d="M17 18.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L15 18.586V7a1 1 0 0 1 2 0v11.586zM7 26a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2H7z"
                                                    fillRule="nonzero">
                                                  </path>
                                                </svg></i></span></a></li>
                                          <li><a href="https://udacity.zendesk.com/hc/en-us/requests/new"
                                            target="_blank" title="Report An Issue"
                                            className="_resource--support--2q6iY"><span
                                              className="_resource--name--2C3-R text--nowrap-ellipsis--TMdB3">Report
                                                                                    An Issue</span></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div role="group" aria-expanded="true"
                                  className="_section--section-selected--24hRk shared--section-expanded--2eoTJ shared--section--3e1zX _section--_hide-shadow--1yGng">
                                  <a href="#" aria-owns="tree-concepts"
                                    className="_section--header-expanded--2PtoU shared--header-expanded--290TG shared--header--3QkFS">
                                    <h2>Concepts</h2><span
                                      className="_section--collapse--3crCv shared--collapse--2w1x2"><i
                                        className="vds-icon vds-icon--sm" role="img"><span
                                          className="vds-visually-hidden">Close</span><svg
                                            viewBox="0 0 32 32">
                                          <path
                                            d="M8.16 11.411l7.13 10.175c.297.422.903.541 1.356.265a.947.947 0 0 0 .292-.276l6.91-10.175c.29-.425.153-.99-.304-1.259A1.033 1.033 0 0 0 23.02 10H8.98c-.542 0-.98.409-.98.912 0 .178.055.351.16.5z"
                                            fillRule="evenodd"></path>
                                        </svg></i></span>
                                  </a>
                                  <div id="tree-concepts">
                                    <ol className="index--contents-list--33vHB">

                                      <li id="contents-list-scroll-target-27f11e0c-50d8-47d5-bf18-ac2eed717386"
                                        className="_item--item-selected--3LMMf"><a
                                          title="3. Add A Remote Repository"
                                          href="/courses/ud456/lessons/edde9226-f71c-4a81-a858-4c83e4c7b664/concepts/27f11e0c-50d8-47d5-bf18-ac2eed717386"><span
                                            className="_item--waypoint-check--nmzcM"><i
                                              className="vds-icon vds-icon--sm" role="img"
                                              aria-hidden="true"><svg
                                                viewBox="0 0 32 32">
                                                <path
                                                  d="M7.707 17.093a1 1 0 0 0-1.414 1.414l7.2 7.2a1 1 0 0 0 1.564-.192l10.8-18a1 1 0 1 0-1.714-1.03L14 23.388l-6.294-6.294z"
                                                  fillRule="nonzero"></path>
                                              </svg></i></span> 3. Add A Remote
                                                                        Repository</a></li>
                                    </ol>
                                  </div>
                                </div>
                              </div>
                              <div className="_sidebar--footer--2i1oy"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                    <div className="_layout-module--main--20EWg">
                      <div className="_layout-module--title-area--1yynf">
                        <div className="_header-module--header--1boX-">
                          <div>
                            <div data-test="concept-header">
                              <nav className="index--dark-header--2SHyn index--_header--36qYf">
                                <div
                                  className="vds-flex vds-flex--align-center vds-flex--full vds-flex--justify-between vds-flex--spacing-2x">
                                  <div className="vds-flex__item">
                                    <div
                                      className="hamburger--hamburger--1oS_7 index--hamburger--31PjM">
                                      <a href="#" className="hamburger--hamburger-link--3-KRS"><i
                                        className="vds-icon vds-color--cerulean"
                                        role="img"><span
                                          className="vds-visually-hidden">Toggle
                                                                            Sidebar</span><svg viewBox="0 0 32 32">
                                          <path
                                            d="M8 23a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2H8zm0-6a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2H8zm0-6a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2H8z"
                                            fillRule="nonzero"></path>
                                        </svg></i></a></div>
                                  </div>
                                  <div className="vds-flex__item">
                                    <h1 id="header-title" aria-live="assertive">Add A Remote
                                                                Repository</h1>
                                  </div>
                                  <div className="vds-flex__item">
                                    <div><span className="index--from-tablet--cciH6"><button
                                      className="vds-button vds-button--minimal vds-button--small"
                                      aria-busy="false" type="button"><span
                                        className="vds-button__content">Send
                                                                            Feedback</span></button></span><span
                                        className="index--until-tablet--3TJ_9"><button
                                          className="vds-button vds-button--minimal vds-button__icon vds-button__icon--only"
                                          aria-busy="false" type="button"><span
                                            className="vds-button__content"><i
                                              className="vds-icon vds-color--cerulean"
                                              role="img" aria-hidden="true"><svg
                                                viewBox="0 0 32 32">
                                                <path
                                                  d="M18.245 16.566L16.6 17.8a1 1 0 0 1-1.2 0l-1.6-1.2a1.009 1.009 0 0 1-.093.107l-2 2a1 1 0 0 1-1.414-1.414l1.899-1.9-4.193-3.143L8 20.998 24.001 21 24 12.25l-4.196 3.147 1.903 1.896a1 1 0 0 1-1.414 1.414l-2.1-2.102.052-.039zM9.667 11L16 15.75l6.33-4.748L9.667 11zM6 11.002C6 9.9 6.89 9 7.993 9h16.014C25.108 9 26 9.904 26 11.002v9.996C26 22.1 25.11 23 24.007 23H7.993A2.002 2.002 0 0 1 6 20.998v-9.996z"
                                                  fillRule="nonzero"></path>
                                              </svg></i><span
                                                className="vds-visually-hidden"></span></span></button></span>
                                    </div>
                                  </div>
                                </div>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="_layout-module--content-area--tGmoA">

                        <div id="content"></div>
                        <div id="main-layout-content" aria-labelledby="header-title"
                          className="_body-module--body--UXv_5">
                          <div data-test="concept-main" className="_main--main--3mpPA">
                            <div className="_main--content-container--ILkoI">
                              <div>
                                <div className="index--container--2OwOl">
                                  <div className="index--atom--lmAIo layout--content--3Smmq">
                                    <div className="ltr">
                                      <div
                                        className="index-module--markdown--2MdcR ureact-markdown ">
                                        <h2 id="the-git-remote-command">The Git Remote
                                                                        Command</h2>
                                        <p>The <code>git remote</code> command will let you
                                            manage and interact with remote repositories.
                                                                    </p>
                                        <pre><code className="lang-bash">$ git remote</code></pre>
                                        <p>Try running this command on a local repository
                                            that you haven't shared with anyone yet. What do
                                                                        you get?</p>
                                      </div>
                                    </div><span></span>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="index--container--2OwOl">
                                  <div className="index--atom--lmAIo layout--content--3Smmq">
                                    <div>
                                      <div className="quiz-styles--container--2-qpA">
                                        <div className="quiz-styles--prompt--ZLAZm">
                                          <h3 className="quiz-styles--question-number--3EbH8">
                                            Question 1 of 5</h3>
                                          <div
                                            className="index-module--markdown--2MdcR ureact-markdown ">
                                            <p>If you don't have a project that you wantto use then you can follow along withme!</p>
                                          </div>
                                        </div>
                                        <ul>
                                          <li className="_answer--answer-correct--13UjS _answer--answer--1HCPX">
                                            <div className="_answer--status--1Esuk">
                                              <div className="_answer--answered-label--313DP">
                                                <div className="index-module--markdown--2MdcR ureact-markdown ">
                                                  <p>create a new directory for your project with the name <code>my-travel-plans</code></p>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            className="_answer--answer-correct--13UjS _answer--answer--1HCPX">
                                            <div className="_answer--status--1Esuk">
                                              <div className="_answer--answered-label--313DP">
                                                <div className="index-module--markdown--2MdcR ureact-markdown ">
                                                  <p>use <code>git init</code> to turn the<code>my-travel-plans</code>directory into a Git repository</p>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            className="_answer--answer-correct--13UjS _answer--answer--1HCPX">
                                            <div className="_answer--status--1Esuk">
                                              <div className="_answer--answered-label--313DP">
                                                <div className="index-module--markdown--2MdcR ureact-markdown ">
                                                  <p>create a<code>README.md</code> file</p>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="_answer--answer-correct--13UjS _answer--answer--1HCPX">
                                            <div className="_answer--status--1Esuk">
                                              <div className="_answer--answered-label--313DP">
                                                <div className="index-module--markdown--2MdcR ureact-markdown ">
                                                  <p>create<code>index.html</code></p>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            className="_answer--answer-correct--13UjS _answer--answer--1HCPX">
                                            <div className="_answer--status--1Esuk">
                                              <div className="_answer--answered-label--313DP">
                                                <div className="index-module--markdown--2MdcR ureact-markdown ">
                                                  <p>create <code>app.css</code></p>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                      <div
                                        className="checkbox-quiz-atom--buttons--cp1vx _quiz-atom--buttons--3vJgG">
                                        <button className="vds-button vds-button--primary"
                                          aria-busy="false" type="button"><span
                                            className="vds-button__content">Submit</span></button>
                                      </div>
                                    </div><span></span>
                                  </div>
                                </div>
                              </div>
                              <div>
                              </div>
                              <div>
                                <div className="_main--footer-container--3vC-_">
                                  <button className="vds-button vds-button--secondary" aria-busy="false" type="button">
                                    <span className="vds-button__content">Next</span>
                                  </button></div>
                              </div><noscript></noscript><noscript></noscript>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Concept;