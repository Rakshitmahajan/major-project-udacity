import React from 'react';
import './list.css';
import './signup.css';

class ConceptList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            concepts: []
        }
    }
    componentDidMount() {
        fetch(`http://10.10.5.192:5000/concept/title/${this.props.location.courseId}/${this.props.location.lessonId}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    concepts: data.data
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
                                <th>Title</th>
                            </tr>
                            {this.state.concepts.map((concept) =>
                                <tr key={concept.conceptId}>
                                    <td>{concept.conceptTitle}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ConceptList;