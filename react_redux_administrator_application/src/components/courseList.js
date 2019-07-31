import React from 'react';
import './list.css';
import './signup.css'
import { Link } from 'react-router-dom'

class CourseList extends React.Component {
    constructor(){
        super();
        this.state = {
            courses:[]
        }
    }
    componentDidMount() {
        fetch('http://10.10.5.192:8000/course/table')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    courses:data.data
                })
            })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h1>UDACITY</h1>
                </div>
                <div className="container">
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Add Lesson</th>
                            <th>View Lessons</th>
                        </tr>
                        {this.state.courses.map((course) =>
                            <tr key={course.courseId}>
                                <td>{course.courseId}</td>
                                <td>{course.courseTitle}</td>
                                <td><Link to={{pathname:'/lessonForm',courseId:course.courseId}}><button>ADD</button></Link></td>
                                <td><Link to={{pathname:'/lessonList',courseId:course.courseId}}><button>Lessons</button></Link></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}

export default CourseList;