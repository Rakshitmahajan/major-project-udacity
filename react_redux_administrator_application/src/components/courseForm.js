import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import './signup.css'
class CourseForm extends Component {
    constructor() {
        super();
        this.state = {
            courseId: '',
            courseTitle: '',
            courseDescp: '',
            courseType: 'Course',
            courseCategory: 'Programming and development'
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        fetch('http://10.10.5.192:8000/course', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(Response => Response.json())
            .then((response) => {
                console.log(response)
                if (response.error === null) {
                    // this.setState({ redirect:true })
                    // const token = response.token;
                    // localStorage.setItem('jwtToken', token);
                    // Authorization(jwt.decode(token));
                    console.log('course entered')
                    alert('course entered');
                } else {
                    console.log(response.error.message)
                    alert(response.error.message);
                }
            });
    }
    render() {
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
                                    <h4 className="card-title mb-4 mt-1">Enter Course</h4>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label>courseId</label>
                                            <input name="courseId" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>courseTitle</label>
                                            <input name="courseTitle" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>courseDescp</label>
                                            <input name="courseDescp" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>courseType</label>
                                            {/* <input name="courseType" className="form-control" placeholder="" type="text" onChange={this.onChange} /> */}
                                            <select name="courseType" className="form-control" onChange={this.onChange}>
                                                <option value="Course">Course</option>
                                                <option value="Nanodegree Program">Nanodegree Program</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>courseCategory</label>
                                            {/* <input name="courseCategory" className="form-control" placeholder="" type="text" onChange={this.onChange} /> */}
                                            <select name="courseCategory" className="form-control" onChange={this.onChange}>
                                                <option value="Programming and development">Programming and development</option>
                                                <option value="Artificial Inteligence">Artificial Inteligence</option>
                                                <option value="Cloud Computing">Cloud Computing</option>
                                                <option value="Data Science">Data Science</option>
                                                <option value="Business">Business</option>
                                                <option value="Autonomous System">Autonomous System</option>
                                            </select>
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

export default CourseForm;