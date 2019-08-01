import React from 'react';
import './list.css';
import './signup.css';
import { Link } from 'react-router-dom';

class LessonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: []
        }
    }
    componentDidMount() {
        fetch(`http://10.10.5.192:3031/lesson/table/${this.props.location.courseId}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    lessons: data.data
                })
            })
    }
    deleteLesson = (Id) => {
        fetch(`http://10.10.5.192:3031/lesson/${Id}`, {
            method: 'delete',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(Response => Response.json())
            .then((res) => {
                console.log(res)
                if (res.error === null) {
                    const newState = this.state.lessons.filter(lesson => lesson.lessonId !== Id);
                    this.setState({
                        lessons: newState
                    })
                }
                else {
                    alert('cant delete');
                }
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
                                <th>Add Concepts</th>
                                <th>View Concepts</th>
                                <th>Delete Lesson</th>
                            </tr>
                            {this.state.lessons.map((lesson) =>
                                <tr key={lesson.lessonId}>
                                    <td>{lesson.lessonId}</td>
                                    <td>{lesson.lessonTitle}</td>
                                    <td><Link to={{ pathname: '/mainForm', lessonId: lesson.lessonId, courseId: this.props.location.courseId }}><button>ADD</button></Link></td>
                                    <td><Link to={{ pathname: '/conceptList', lessonId: lesson.lessonId, courseId: this.props.location.courseId}}><button>Concept</button></Link></td>
                                    <td><button onClick={() => this.deleteLesson(lesson.lessonId)}>Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default LessonList;