import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import '../signup.css'
class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            answer: 'option1'
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = async (e) => {
        e.preventDefault();
        fetch('http://10.10.5.192:5000/quiz', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(Response => Response.json())
            .then((response) => {
                console.log(response)
                if (response.error === null) {
                    this.props.onComponentSubmit('quiz', response.data._id,this.state);
                } else {
                    alert(response.error.message);
                }
            });
    }
    render() {
        return (
            <div>
                <div className="width">
                    <div className="container">
                        <aside className="col-sm-7">
                            <div className="card">
                                <article className="card-body">
                                    <h4 className="card-title mb-4 mt-1">Enter Quiz</h4>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label>Question</label>
                                            <input name="question" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Option1</label>
                                            <input name="option1" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Option2</label>
                                            <input name="option2" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Option3</label>
                                            <input name="option3" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Option4</label>
                                            <input name="option4" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Answer</label>
                                            {/* <input name="courseType" className="form-control" placeholder="" type="text" onChange={this.onChange} /> */}
                                            <select name="answer" className="form-control" onChange={this.onChange}>
                                                <option value="option1">Option1</option>
                                                <option value="option2">Option2</option>
                                                <option value="option3">Option3</option>
                                                <option value="option4">Option4</option>
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

export default Quiz;