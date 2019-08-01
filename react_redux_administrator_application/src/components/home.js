import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './signup.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>UDACITY</h1>
                </div>
                <div className="container">
                    <div className="jumbotron">
                        <h3>This is admin pannel for Udacity </h3>
                        <Link to='/courseList' className="btn btn-outline-primary">View Courses</Link>
                        <Link to='/courseForm' className="btn btn-outline-primary">Add Course</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;