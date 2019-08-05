import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './post.css'
class Side extends Component {
  state = {}
  render() {
    return (
      <nav className="_layout_nav__3DZjD _layout_small-primary__2s794 ">
        <div className="_layout_nav-contents__3dJGt">
          <div className="_layout_primary-nav__132Dc">
            <div className="_nav_nav-small__3-ibw _nav__nav__2QceJ"><a href="https://udacity.com" target="_blank"><svg
              width="177" height="31" className="_nav_logo__VhgiJ">
              <title>Udacity Logo</title>
              <g fill="none" fillRule="evenodd">
                <path
                  d="M58 17.6c0 2.6-2.1 4.5-5 4.5s-5-1.9-5-4.5V8h-2v9.7c0 3.4 2.9 6.3 7 6.3s7-3 7-6.3V8h-2v9.6zM74.4 8H69v16h5.4c4.5 0 7.6-3.1 7.6-8 0-4.8-3.1-8-7.6-8zm-.2 14H71V10h3.2c3.4 0 5.8 2.3 5.8 6 0 4-2.5 5.9-5.8 6zm43.8.3c-3.6 0-6-2.7-6-6.3 0-3.6 2.5-6.2 6-6.2 2.8 0 4.5 1.6 4.5 1.6l.8-1.4s-1.8-1.9-5.5-1.9c-4.8 0-7.8 3.6-7.8 7.9 0 4.4 3.1 8.1 8 8.1 3.8 0 5.7-2.6 5.7-2.6l-1.1-1.2c-.1-.1-1.6 2-4.6 2zM133 8h2v16h-2zm11 2h5v14h2V10h5V8h-12v2zm30.8-2l-4.8 7.3-4.9-7.3H163l6 8.9V24h2v-7.1l5.9-8.9h-2.1zM94.9 8l-6.2 16h2l1.7-4.6 6.5-1.4 2.2 6h2L97 8h-2.1zM93 17.5l3-7.4h.1l2.5 6.3-5.6 1.1z"
                  fill="#FFF"></path>
                <path
                  d="M29 .1l-9 4.7v14.9c0 .6 0 1.3-.2 1.9-.1.6-.3 1.2-.5 1.7-.1.1-.1.3-.2.4-.3 0-2.5-.7-3.5-1.4-.4-.3-.8-.6-1.2-1-.4-.4-.7-.8-1-1.2-.3-.4-.6-.9-.8-1.4-.2-.5-.4-1-.5-1.6-.1-.5-.1-1.1-.1-1.6V1.2L10 0 0 5.9v13.7C0 25.9 5.1 31 11.3 31c2.1 0 4-.5 5.7-1.5l8.4-4.8c3.3-1.7 5.6-5.2 5.6-9.1V1.3L29 .1zM17.9 26.2c-.9.9-1.6 1.4-2.6 1.9-.6.2-1.3.5-1.9.7-.6.1-1.2.2-1.8.2-.6 0-1.6-.1-2.2-.2-.6-.1-1.2-.3-1.7-.5s-1.1-.5-1.6-.9c-1.3-.9-1.9-1.7-2.5-2.5-.3-.5-.6-1-.9-1.6-.2-.6-.4-1.1-.5-1.7-.2-.7-.2-1.4-.2-2V7.1l8-4.7v13.1c0 5 3.7 9.1 8.4 10.1-.2.2-.3.4-.5.6zm11-9c-.1.5-.3 1-.5 1.5s-.6 1.2-1 1.7c-.6.7-1.2 1.2-2.7 2.1-1.3.7-2.4.9-3.1 1.1.5-1.2.5-2.5.5-3.9L22 6l7-3.7v13.3c0 .5 0 1.1-.1 1.6z"
                  fill="#02B3E4"></path>
              </g>
            </svg></a>
              <div className="_nav_nav-groups__1GAR5">
                <ul className="_nav_nav-group__3N5Ia">
                  <li className="_nav_nav-item__3bB_i"><Link to='/home'
                    title="Home"><span className="_nav_nav-item-icon-container__3QwxU"><span
                      className="_nav_nav-item-icon__2WcW-"><i className="vds-icon vds-icon--lg"
                        role="img" aria-hidden="true"><svg viewBox="0 0 32 32">
                          <path
                            d="M11 25v-4a5 5 0 0 1 10 0v4h3V13.838l-8-6.546-8 6.546V25h3zm15-9.526V25a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9.526l-.367.3a1 1 0 1 1-1.266-1.548l11-9a1 1 0 0 1 1.266 0l11 9a1 1 0 1 1-1.266 1.548l-.367-.3zM19 25v-4a3 3 0 0 0-6 0v4h6z">
                          </path>
                        </svg></i></span></span><span
                          className="_nav_nav-item-title__1umkN">Home</span></Link></li>
                  <li className="_nav_nav-item__3bB_i"><a href="https://www.udacity.com/courses/all"
                    title="Catalog"><span className="_nav_nav-item-icon-container__3QwxU"><span
                      className="_nav_nav-item-icon__2WcW-"><i className="vds-icon vds-icon--lg"
                        role="img" aria-hidden="true"><svg viewBox="0 0 32 32">
                          <path
                            d="M17.21 17.21l1.209-3.629-3.628 1.21 2.418 2.418zM15 26.954A11.003 11.003 0 0 1 5.045 17H5a1 1 0 0 1 0-2h.045A11.003 11.003 0 0 1 15 5.045V5a1 1 0 0 1 2 0v.045A11.003 11.003 0 0 1 26.955 15H27a1 1 0 0 1 0 2h-.045A11.003 11.003 0 0 1 17 26.955V27a1 1 0 0 1-2 0v-.045zM16 25a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm2.949-6.684a1 1 0 0 1-.633.633l-6 2a1 1 0 0 1-1.265-1.265l2-6a1 1 0 0 1 .633-.633l6-2a1 1 0 0 1 1.265 1.265l-2 6z">
                          </path>
                        </svg></i></span></span><span
                          className="_nav_nav-item-title__1umkN">Catalog</span></a></li>
                  <li className="_nav_nav-item__3bB_i"><a href="https://classroom.udacity.com/career/main"
                    title="Careers Portal"><span className="_nav_nav-item-icon-container__3QwxU"><span
                      className="_nav_nav-item-icon__2WcW-"><i className="vds-icon vds-icon--lg"
                        role="img" aria-hidden="true"><svg viewBox="0 0 31 32">
                          <path
                            d="M7.745 12c1.853 2.683 4.573 4 8.255 4 3.68 0 6.399-1.316 8.252-3.995-1.897-.003-7.4-.004-16.507-.005zM25 14.287C22.81 16.752 19.79 18 16 18c-3.79 0-6.81-1.249-9-3.714.002 1.967.002 5.203 0 9.707 0 .004 6.003.006 18.008.007-.008 0-.01-3.238-.009-9.713zM11 10V8.01C11 6.903 11.897 6 12.997 6h6.006C20.11 6 21 6.895 21 8.01V10h4.008c1.104 0 1.992.901 1.992 2.007v11.986A2.007 2.007 0 0 1 25.008 26H6.992A1.999 1.999 0 0 1 5 23.993V12.007C5 10.904 5.898 10 6.992 10H11zm1.997-2c.008 0 .003.005.003.01v1.98c0 .007 0 .01-.002.01h6.005c-.008 0-.003-.005-.003-.01V8.01c0-.007 0-.01.002-.01h-6.005z">
                          </path>
                        </svg></i></span></span><span className="_nav_nav-item-title__1umkN">Careers
                                        Portal</span></a></li>
                </ul>
                <ul className="_nav_nav-group__3N5Ia">
                  <div className="sidebarLayout_highlighted-link-wrapper__2XwUJ"><Link data-ref="nav-link" to='/knowledge'
                    className="sidebarLayout_knowledge-link__3sI81 sidebarLayout_highlighted-link__rSddf"><i
                      className="vds-icon vds-icon--lg" role="img" aria-hidden="true"><svg
                        viewBox="0 0 32 32">
                        <path
                          d="M17.732 27a2 2 0 0 1-3.464 0H14a2 2 0 0 1-2-2v-3.936a9 9 0 1 1 8 0V25a2 2 0 0 1-2 2h-.268zM18 22v-1h-4v1h4zm0 2h-4v1h4v-1zm-5.61-5h7.22a7 7 0 1 0-7.218 0zM16 8a1 1 0 0 1 0 2 3 3 0 0 0-3 3 1 1 0 0 1-2 0 5 5 0 0 1 5-5z">
                        </path>
                      </svg></i></Link><a data-ref="nav-link" href="#"
                        className="sidebarLayout_student-hub-link__2rInI sidebarLayout_highlighted-link__rSddf"><i
                          className="vds-icon vds-icon--lg" role="img" aria-hidden="true"><svg
                            viewBox="0 0 32 32">
                          <path
                            d="M12 10.397V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-2v3.397a3 3 0 0 1-3 3H9.823l-4.325 2.471a1 1 0 0 1-1.486-1.01l.99-6.93v-5.531a3 3 0 0 1 3-3H12zM23 16h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H15a1 1 0 0 0-1 1v1.397h6a3 3 0 0 1 3 3V16zM6.99 19.141l-.71 4.976 2.78-1.588a1 1 0 0 1 .496-.132h10.445a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1V19l-.01.141z">
                          </path>
                        </svg></i></a></div>
                  <li className="_nav_nav-item__3bB_i"><a href="https://classroom.udacity.com/settings"
                    title="Settings"><span className="_nav_nav-item-icon-container__3QwxU"><span
                      className="_nav_nav-item-icon__2WcW-"><i className="vds-icon vds-icon--lg"
                        role="img" aria-hidden="true"><svg viewBox="0 0 32 32">
                          <path
                            d="M18 8.252v-2.25L13.99 6c.006 0 .009.75.01 2.252a7.993 7.993 0 0 0-3.76 2.196l-1.871-1.08-2.008 3.47c.003-.004.64.36 1.91 1.092a8.025 8.025 0 0 0-.066 3.875l-1.836 1.06c-.001 0 .666 1.158 2.002 3.473-.003-.004.56-.332 1.685-.983A7.997 7.997 0 0 0 14 23.748v2.25l4.01.002c-.006 0-.009-.75-.01-2.252a7.998 7.998 0 0 0 3.965-2.417l1.729.998 2.007-3.471c-.003.004-.635-.357-1.898-1.085a8.027 8.027 0 0 0-.065-3.812l1.956-1.13-2.002-3.473c.002.004-.634.375-1.91 1.113A7.993 7.993 0 0 0 18 8.252zm-6 16.916a9.997 9.997 0 0 1-2.225-1.342l-.406.235a2.002 2.002 0 0 1-2.73-.723l-2.01-3.48a1.99 1.99 0 0 1 .74-2.725l.659-.381a10.142 10.142 0 0 1 .026-1.793l-.685-.395a2.002 2.002 0 0 1-.74-2.726l2.01-3.48a1.99 1.99 0 0 1 2.73-.723l.63.365A9.991 9.991 0 0 1 12 6.832v-.83C12 4.902 12.895 4 13.99 4h4.02C19.113 4 20 4.89 20 6.003v.83a9.992 9.992 0 0 1 2.028 1.187l.666-.385a2.002 2.002 0 0 1 2.73.723l2.009 3.48a1.99 1.99 0 0 1-.74 2.726l-.743.429a10.119 10.119 0 0 1 .025 1.724l.719.416a2.002 2.002 0 0 1 .739 2.725l-2.01 3.48a1.99 1.99 0 0 1-2.73.723l-.441-.256A9.998 9.998 0 0 1 20 25.168v.83A2.002 2.002 0 0 1 18.01 28h-4.02A1.99 1.99 0 0 1 12 25.997v-.83zM16 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z">
                          </path>
                        </svg></i></span></span><span
                          className="_nav_nav-item-title__1umkN">Settings</span></a></li>
                  <li className="_nav_nav-item__3bB_i"><a href="#" title="Log Out"><span
                    className="_nav_nav-item-icon-container__3QwxU"><span
                      className="_nav_nav-item-icon__2WcW-"><i className="vds-icon vds-icon--lg"
                        role="img" aria-hidden="true"><svg viewBox="0 0 32 32">
                          <path
                            d="M9.414 15H21a1 1 0 0 1 0 2H9.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L9.414 15zM24 8h-4v2a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v2h4V8z">
                          </path>
                        </svg></i></span></span><span className="_nav_nav-item-title__1umkN">Log
                                        Out</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Side;