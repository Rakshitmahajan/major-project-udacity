import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import '../signup.css'
class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: '',
            paragraph:''
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = async (e)  => {
        e.preventDefault();
        fetch('http://10.10.5.192:5000/text', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(Response => Response.json())
        .then((response) => {
            console.log(response)
            if (response.error === null) {
                this.props.onComponentSubmit('text',response.data._id);
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
                                <h4 className="card-title mb-4 mt-1">Enter Text</h4>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Heading</label>
                                        <input name="heading" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Text</label>
                                        <input name="paragraph" className="form-control" placeholder="" type="text" onChange={this.onChange} />
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

export default Text;