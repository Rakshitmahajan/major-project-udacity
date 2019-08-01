import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import '../signup.css'
class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            link:''
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = async (e)  => {
        e.preventDefault();
        fetch('http://localhost:5200/insertVideo', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(Response => Response.json())
        .then((response) => {
            console.log(response)
            if (response.err === null) {
                this.props.onComponentSubmit('comment',this.state.title);
            } else {
                alert(response.err.message);
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
                                <h4 className="card-title mb-4 mt-1">Enter Video</h4>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input name="title" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Link</label>
                                        <input name="link" className="form-control" placeholder="" type="text" onChange={this.onChange} />
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

export default Video;