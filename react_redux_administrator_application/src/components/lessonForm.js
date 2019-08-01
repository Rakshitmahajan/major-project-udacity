import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './signup.css'
class LessonForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: props.location.courseId,
            lessonId: '',
            lessonTitle: '',
            lessonDescp: '',
            lessonImage: '',
            lessonNumber: '',
            redirect:false
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        fetch('http://10.10.5.192:3031/lesson', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(Response => Response.json())
            .then(async (response) => {
                console.log(response)
                if (response.error === null) {
                    alert('Lesson entered');
                    this.setState({ redirect:true })
                } else {
                    alert(response.error.message);
                }
            });
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
                <div className="width">
                    <div className="container">
                        <aside className="col-sm-7">
                            <div className="card">
                                <article className="card-body">
                                    <h4 className="card-title mb-4 mt-1">Enter Lesson</h4>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label>CourseId</label>
                                            <input value={this.props.location.courseId} name="courseId" className="form-control" placeholder="" readOnly onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>LessonId</label>
                                            <input name="lessonId" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>lessonNumber</label>
                                            <input name="lessonNumber" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>LessonTitle</label>
                                            <input name="lessonTitle" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>LessonDescp</label>
                                            <input name="lessonDescp" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>lessonImage</label>
                                            <input name="lessonImage" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Submit" className="btn btn-primary btn-block" onChange={this.onChange} />
                                        </div>
                                    </form>
                                </article>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}

export default LessonForm;