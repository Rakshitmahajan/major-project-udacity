import React, { Component } from 'react';
import Image from './image';
import Text from './text';
import Video from './video';
import Quize from './quize';
import Code from './code';
import Comments from './comments'
import '../signup.css';

class MainForm extends Component {
    constructor() {
        super();
        this.state = {
            concept: [],
            components: []
        }
    }
    addImage = () => {
        this.setState({
            components:[...this.state.components,<Image/>]
        })
    }
    addVideo = () => {
        this.setState({
            components:[...this.state.components,<Video/>]
        })
    }
    addText = () => {
        this.setState({
            components:[...this.state.components,<Text/>]
        })
    }
    addQuize = () => {
        this.setState({
            components:[...this.state.components,<Quize/>]
        })
    }
    addCode = () => {
        this.setState({
            components:[...this.state.components,<Code/>]
        })
    }
    addComments = () => {
        this.setState({
            components:[...this.state.components,<Comments/>]
        })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>UDACITY</h1>
                </div>
                <div className="container">
                    <aside className="col-sm-15">
                        <div className="card">
                            <article className="card-body">
                                <h4 className="card-title mb-4 mt-1">Enter Concept</h4>
                                <div>
                                   {this.state.components}
                                </div>
                                <div className="btngrp">
                                    <button onClick={this.addImage}>Image</button>
                                    <button onClick={this.addVideo}>Video</button>
                                    <button onClick={this.addText}>Text</button>
                                    <button onClick={this.addQuize}>Quize</button>
                                    <button onClick={this.addCode}>Code</button>
                                    <button onClick={this.addComments}>Comments</button>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Submit" className="btn btn-primary btn-block" onChange={this.onChange} />
                                </div>
                            </article>
                        </div>
                    </aside>
                </div>
            </div >
        )
    }
}

export default MainForm;
