import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import '../signup.css'
class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: ''
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = async (e)  => {
        e.preventDefault();
        this.props.onComponentSubmit('image',this.state.link);
}
render() {
    return (
        <div>
            <div className="width">
                <div className="container">
                    <aside className="col-sm-7">
                        <div className="card">
                            <article className="card-body">
                                <h4 className="card-title mb-4 mt-1">Enter Image</h4>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Image Link</label>
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

export default Image;