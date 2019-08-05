import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logout from '../userpage/Logout';
import './submit-zip.css';

export default class SubmitZip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            selectedFile:null,
            email:'admin@1.com',
            
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeHandler = (event) =>{
        
           this.setState({
           selectedFile: event.target.files[0],
           
           
        })}

        onClickHandler = async (e) => {
            e.preventDefault();
            const data = new FormData();

            await data.append('file', this.state.selectedFile);
            await data.append('title', this.state.title);
            await data.append('email', this.state.email);
            fetch('http://localhost:5500/insertProject', {
            method: 'POST',
            body: data,
        }).then(Response => Response.json())
        .then((response) => {
            console.log(response)
            if (response === null) {
                alert ('Upload Failed')
            } else {
                alert('Upload Successful');
            }
        });
        };

    render() {
        return (
<div data-modal-anti-scroll-helper="" className="responsive ng-scope " ng-controller="MainCtrl as main" >
  
  <div ng-include="main.pageContext.headerURL" className="ng-scope">
    <header className="navbar site-nav navbar-inverse navbar-static-top ng-scope" role="navigation">
      <div className="container">
        
        <nav className="navbar-collapse text-center-xs collapse in" id="navbar-collapse" role="navigation"
          aria-expanded="true" >
          <ul className="nav navbar-nav navbar-right">
          <Logout/> 
            
          </ul>
          <ul className="nav navbar-nav navbar-right">
            
          </ul>
        </nav>
      </div>
    </header>
  </div>
  <div id="page-content" data-qualaroo-survey-info-hack="">
    <div loading-container="" className="container-fluid">
      <div ng-show="loading" className="row ng-hide" >
        <div className="col-sm-6 col-sm-offset-3 text-center">
          <div className="row row-gap-huge"></div> <img src="/assets/images/loading.gif" alt=""/>
          <div className="row row-gap-huge"></div>
        </div>
      </div>
      <div ng-show="!loading" className="" >
        <div ng-transclude="">
          <div className="row row-gap-medium ng-scope ng-isolate-scope ng-hide fadeOutUp animated"
            ng-show="!!message &amp;&amp; !dismissed"
            ng-classname="{fadeInDown: !!message, fadeOutUp: dismissed, animated: !!message || dismissed}" alert-box=""
            >
            <div className="col-md-offset-2 col-md-8">
              <div className="alert  hr-slim alert-info"> <button type="button" ng-click="dismiss()" className="close"
                  aria-label="Close"> <span aria-hidden="true">×</span> </button> <span ng-bind-html="message"
                  className="ng-binding"></span> </div>
            </div>
          </div>
        
          <div ui-view="" autoscroll="true" className="ng-scope" >
           
            <div ui-view="" autoscroll="true" className="ng-scope" >
              <div ng-controller="SubmitZipCtrl as ctrl" className="row row-gap-huge ng-scope">
                <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">
                  <div className="text-center">
                   <img ng-if="fileType === 'archive'" className="page-icon ng-scope"
                      ng-src="https://review.udacity.com/assets/images/upload-zip.svg" alt="zip folder icon" src="https://review.udacity.com/assets/images/upload-zip.svg"/>
                      <div className="row row-gap-small"></div>
                      <div className="row row-gap-small"></div>
                    <h1 ng-if="fileType === 'archive'" className="ng-binding ng-scope">Upload your archive</h1>
                    
                  </div>
                  <div className="row row-gap-small"></div>
                  <div create-submission-form="" rubric-id="ctrl.rubricId" submission="ctrl.submission"
                    github-required="false" transclusion-valid="ctrl.isValid" submit="ctrl.createSubmission()"
                    submit-btn-text="ctrl.submitBtnText" canary-enabled="ctrl.canaryEnabled"
                    canary-metadata="ctrl.canaryMetadata" is-career="ctrl.isCareer" className="ng-isolate-scope">
                    
                    <div ng-if="!ctrl.isLoading" className="ng-scope" >
                    
                      <div ng-if="!ctrl.githubRequired || ctrl.hasValidGithubToken" className="ng-scope">
                        <form className="ng-pristine ng-valid">
                          <div ng-transclude="">
                            <div className="row row-gap-small ng-scope"></div> 
                            <p ng-if="fileType === 'archive'" className="ng-binding ng-scope">Compress your project file(s)
                              into a single zip file on your computer.</p>
                              <div className="row row-gap-small"></div>
                            <div ng-classname="{'has-error': ctrl.fileErrorMessage}"
                              className="form-group text-left ng-scope ng-isolate-scope" scroll-if="ctrl.fileErrorMessage">
                              <div className="row">
                                <div className="col-xs-8 col-md-7 ng-binding">  <input type="file" name="file" onChange={this.onChangeHandler}/>
                                <p className="caption p-slim"><small className="ng-binding">500
                                      MB limit (uncompressed)</small></p>
                                </div>
                                <div className="col-xs-4 form-error ng-binding"
                                  ng-bind-html="ctrl.fileErrorMessage | translate"></div>
                              </div>
                            </div>
                          </div> 
                          <div className="form-group">
                          
                            <div className="notes-to-reviewer">
                              <h3 ng-show="!isCareer" translate="" className="ng-scope">Enter Title for Project</h3>
                              <div className="row row-gap-small"></div>
                              <input
                                className="form-control ng-pristine ng-untouched ng-valid ng-empty"
                                ng-model="ctrl.studentNotes" name="title"  placeholder="" type="text" onChange={this.onChange}></input>
                            </div> 
                            <div className="row row-gap-small"></div>
                            
                          </div> 
                        </form>
                      </div>
                      <div className="row row-gap-medium">
                        <div className="col-xs-12"> <button type="submit"
                            ng-disabled="!ctrl.isFormComplete(transclusionValid) ? 'disabled' : null"
                            className="btn btn-primary btn-min-width-sm submit-file ng-binding ng-isolate-scope" onClick={this.onClickHandler}> Submit </button>
                          <div ng-show="ctrl.errorMessage" scroll-if="ctrl.errorMessage"
                            className="row row-gap-medium ng-isolate-scope ng-hide">
                            <div className="alert alert-danger ng-binding" ng-bind-html="ctrl.errorMessage | translate">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row row-gap-medium"></div>
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