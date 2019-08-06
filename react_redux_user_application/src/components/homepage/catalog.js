import React, { Component } from 'react';
import './catalog.css'

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }
    componentDidMount() {
        fetch('http://10.10.5.192:8000/course/table')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    courses: data.data
                })
                console.log(this.state.courses)
            })
    }
    onClick = (Id) => {
        const obj = {
            courseId: Id,
            userEmail: localStorage.getItem('email')
        }
        fetch('http://10.10.5.192:8081/user', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(Response => Response.json())
            .then((response) => {
                console.log(response)
                if (response.error === null) {
                    alert('Registered');
                    this.setState({ redirect: true })
                } else {
                    console.log(response.error.message)
                    alert(response.error.message);
                }
            });
    }
    render() {
        return (
            <div className="bg-light">
                <div className="width container">
                    <div className="header">
                        <h1 className="display-4">Program Catalog</h1>
                    </div>
                    {this.state.courses.map((course) =>
                        <div>
                            <div className="card card-body bg-white">
                                <strong>{course.courseTitle}</strong>{course.courseDescp}
                                <button className=" wid btn btn-primary " onClick={()=>this.onClick(course.courseId)}>Register</button>
                            </div>
                            <br />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default (Catalog);