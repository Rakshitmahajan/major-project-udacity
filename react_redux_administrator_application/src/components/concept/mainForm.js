import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Image from './image';
import Text from './text';
import Video from './video';
import Quiz from './quiz';
import Code from './code';
import Comments from './comments'
import '../signup.css';

class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonId: props.location.lessonId,
            courseId: props.location.courseId,
            concept: [],
            conceptTitle: '',
            components: [],
            redirect:false
        }
    }
    onComponentSubmit = (type, id) => {
        this.state.concept.push({ type, id })
    }
    onImageSubmit = (type, url, caption) => {
        this.state.concept.push({ type, url, caption})
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        fetch('http://10.10.5.192:5000/concept', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(Response => Response.json())
            .then((response) => {
                console.log(response)
                if (response.error === null) {
                    alert('sucessful');
                    this.setState({ redirect:true })
                } else {
                    console.log(response.error.message)
                    alert(response.error.message);
                }
            });
    }
    addImage = () => {
        this.setState({
            components: [...this.state.components, <Image onImageSubmit={this.onImageSubmit} />]
        })
    }
    addVideo = () => {
        this.setState({
            components: [...this.state.components, <Video onComponentSubmit={this.onComponentSubmit} />]
        })
    }
    addText = () => {
        this.setState({
            components: [...this.state.components, <Text onComponentSubmit={this.onComponentSubmit} />]
        })
    }
    addQuize = () => {
        this.setState({
            components: [...this.state.components, <Quiz onComponentSubmit={this.onComponentSubmit} />]
        })
    }
    addCode = () => {
        this.setState({
            components: [...this.state.components, <Code onComponentSubmit={this.onComponentSubmit} />]
        })
    }
    addComments = () => {
        this.setState({
            components: [...this.state.components, <Comments onComponentSubmit={this.onComponentSubmit} />]
        })
    }

    render() {
        if(this.state.redirect === true)
        {
            return <Redirect to="/home" />
        }
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
                                    <div className="bbtngrp">
                                        <button className="btngrp" onClick={this.addImage}>Image</button>
                                        <button className="btngrp" onClick={this.addVideo}>Video</button>
                                        <button className="btngrp" onClick={this.addText}>Text</button>
                                        <button className="btngrp" onClick={this.addQuize}>Quiz</button>
                                        <button className="btngrp" onClick={this.addCode}>Code</button>
                                        <button className="btngrp" onClick={this.addComments}>Comments</button>
                                    </div>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Concept Title</label>
                                        <input name="conceptTitle" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Submit" className="btn btn-primary btn-block" />
                                    </div>
                                </form>
                            </article>
                        </div>
                    </aside>
                </div>
            </div >
        )
    }
}

export default MainForm;
