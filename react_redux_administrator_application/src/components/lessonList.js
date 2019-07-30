import React from 'react';
import './list.css';
import './signup.css';
import { Link } from 'react-router-dom';

class LessonList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lessons:[]
        }
    }
    componentDidMount() {
        fetch(`http://10.10.5.192:8000/lesson/table/${this.props.location.courseId}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    lessons:data.data
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
                            <th>Add Concepts</th>
                        </tr>
                        {this.state.lessons.map((lesson) =>
                            <tr key={lesson.lessonId}>
                                <td>{lesson.lessonId}</td>
                                <td>{lesson.lessonTitle}</td>
                                <td><Link to={{pathname:'/mainForm',lessonId:lesson.lessonId}}><button>ADD</button></Link></td>
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