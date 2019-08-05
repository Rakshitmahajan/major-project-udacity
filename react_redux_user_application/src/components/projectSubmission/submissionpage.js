import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logout from '../userpage/Logout';

import './submissionpage.css';

export default class SubmissionAll extends React.Component {
    render() {
        return (
            <div data-modal-anti-scroll-helper="" className="responsive ng-scope Body" ng-controller="MainCtrl as main">

                <div ng-include="main.pageContext.headerURL" className="ng-scope">
                    <header className="navbar site-nav navbar-inverse navbar-static-top ng-scope" role="navigation">
                        <div className="container">

                            <nav className="navbar-collapse collapse text-center-xs" id="navbar-collapse" role="navigation">
                                <Logout />
                                <Link to='/submissionview'><p className="float-right">Submission View</p></Link>
                            </nav>
                        </div>
                    </header>
                </div>
                <div id="page-content" data-qualaroo-survey-info-hack="">
                    <div loading-container="" className="container-fluid">
                        <div ng-show="loading" className="row ng-hide" >
                            <div className="col-sm-6 col-sm-offset-3 text-center">
                                <div className="row row-gap-huge"></div> <img src="" alt="" />
                                <div className="row row-gap-huge"></div>
                            </div>
                        </div>
                        <div ng-show="!loading" className="" >
                            <div ng-transclude="">
                                <div className="row row-gap-medium ng-scope ng-isolate-scope ng-hide fadeOutUp animated"
                                    ng-show="!!message &amp;&amp; !dismissed"
                                    ng-classname="{fadeInDown: !!message, fadeOutUp: dismissed, animated: !!message || dismissed}"
                                    alert-box="" >
                                    <div className="col-md-offset-2 col-md-8">
                                        <div className="alert  hr-slim alert-info"> <button type="button" ng-click="dismiss()"
                                            className="close" aria-label="Close"> <span aria-hidden="true">×</span> </button> <span
                                                ng-bind-html="message" className="ng-binding"></span> </div>
                                    </div>
                                </div>

                                <div ui-view="" autoscroll="true" className="ng-scope">

                                    <div ui-view="" autoscroll="true" className="ng-scope" >
                                        <div ng-controller="StartCtrl as ctrl" className="row row-gap-huge projects_start ng-scope">
                                            <div className="col-sm-6 col-sm-offset-3 text-center">
                                                <h1 className="ng-binding">Tour guide app</h1>
                                                <h3 className="ng-binding"> How would you like to submit your project? </h3>
                                                <div className="row row-gap-medium"></div>
                                                <div className="buttons">

                                                    <div ng-if="ctrl.hasUploadType('zip')" className="thumbnail ng-scope" > <img
                                                        ng-click="ctrl.redirectToSubmitMethod('zip')"
                                                        className="page-icon-md clickable" src="https://review.udacity.com/assets/images/upload-zip.svg" alt="" />
                                                        <div className="row row-gap-small"></div> <Link to="/submit-zip"><button
                                                            ng-click="ctrl.redirectToSubmitMethod('zip')"
                                                            className="btn btn-default btn-min-width-sm ng-binding"> Upload zip file
                                            </button> </Link>
                                                    </div>


                                                </div>
                                                <div className="row row-gap-medium"></div>
                                            </div>
                                        </div>
                                        <div className="row row-gap-huge ng-scope"> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div ng-include="main.pageContext.footerURL" className="ng-scope">
                    <footer id="footer" ng-controller="FooterCtrl as ctrl" className="ng-scope">
                        <div className="container">
                            <ul className="nav nav-pills">

                            </ul>
                        </div>
                    </footer>
                </div>


            </div>
        );
    }
}