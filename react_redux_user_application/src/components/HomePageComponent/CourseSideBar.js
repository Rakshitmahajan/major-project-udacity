/// https://bootstrapious.com/p/bootstrap-sidebar
// <Link className="h3 badge badge-success float-right" to={{ pathname: "updategame/" + data.title, state: { data } }}>u</Link>
import React from 'react';

import './CourseSidebar.css';
class CourseSideBar extends React.Component {
    render() {
        return (
             <div className="sidebar">
                    <a href="#"
                    target="_blank"><svg width="177" height="31" className="_nav-module--logo--1Up9O">
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
                        <a className="active" href="#"><i className="vds-icon vds-icon--lg"
                                role="img"><span className="vds-visually-hidden"></span><svg viewBox="0 0 32 32">
                                  <path
                                    d="M11 25v-4a5 5 0 0 1 10 0v4h3V13.838l-8-6.546-8 6.546V25h3zm15-9.526V25a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9.526l-.367.3a1 1 0 1 1-1.266-1.548l11-9a1 1 0 0 1 1.266 0l11 9a1 1 0 1 1-1.266 1.548l-.367-.3zM19 25v-4a3 3 0 0 0-6 0v4h6z"
                                    fillRule="nonzero"></path>
                                </svg></i> Home</a>
                        <a href="#"><i className="vds-icon vds-icon--lg"
                                role="img"><span className="vds-visually-hidden"></span><svg viewBox="0 0 32 32">
                                  <path
                                    d="M17.21 17.21l1.209-3.629-3.628 1.21 2.418 2.418zM15 26.954A11.003 11.003 0 0 1 5.045 17H5a1 1 0 0 1 0-2h.045A11.003 11.003 0 0 1 15 5.045V5a1 1 0 0 1 2 0v.045A11.003 11.003 0 0 1 26.955 15H27a1 1 0 0 1 0 2h-.045A11.003 11.003 0 0 1 17 26.955V27a1 1 0 0 1-2 0v-.045zM16 25a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm2.949-6.684a1 1 0 0 1-.633.633l-6 2a1 1 0 0 1-1.265-1.265l2-6a1 1 0 0 1 .633-.633l6-2a1 1 0 0 1 1.265 1.265l-2 6z"
                                    fillRule="nonzero"></path>
                                </svg></i> Catalog</a>
                        <a href="#"><i className="vds-icon vds-icon--lg"
                                role="img"><span className="vds-visually-hidden"></span><svg viewBox="0 0 31 32">
                                  <path
                                    d="M7.745 12c1.853 2.683 4.573 4 8.255 4 3.68 0 6.399-1.316 8.252-3.995-1.897-.003-7.4-.004-16.507-.005zM25 14.287C22.81 16.752 19.79 18 16 18c-3.79 0-6.81-1.249-9-3.714.002 1.967.002 5.203 0 9.707 0 .004 6.003.006 18.008.007-.008 0-.01-3.238-.009-9.713zM11 10V8.01C11 6.903 11.897 6 12.997 6h6.006C20.11 6 21 6.895 21 8.01V10h4.008c1.104 0 1.992.901 1.992 2.007v11.986A2.007 2.007 0 0 1 25.008 26H6.992A1.999 1.999 0 0 1 5 23.993V12.007C5 10.904 5.898 10 6.992 10H11zm1.997-2c.008 0 .003.005.003.01v1.98c0 .007 0 .01-.002.01h6.005c-.008 0-.003-.005-.003-.01V8.01c0-.007 0-.01.002-.01h-6.005z"
                                    fillRule="nonzero"></path>
                                </svg></i> Carrer Portal</a>
                        <a href="#"><i className="vds-icon vds-icon--lg"
                                role="img"><span className="vds-visually-hidden"></span><svg viewBox="0 0 32 32">
                                  <path
                                    d="M9.414 15H21a1 1 0 0 1 0 2H9.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L9.414 15zM24 8h-4v2a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v2h4V8z"
                                    fillRule="nonzero"></path>
                                </svg></i> Logout</a>
                    </div>
        );
    }
}

export default CourseSideBar;
