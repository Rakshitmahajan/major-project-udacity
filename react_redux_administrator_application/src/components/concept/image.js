import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import '../signup.css'
class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageTitle: '',
            image: null
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onFileChange = async (e) => {
        await this.setState({ image: e.target.files[0] });
    }
    onSubmit = async (e)  => {
        e.preventDefault();
        this.props.onComponentSubmit(this.state);
        const data = new FormData();
        await data.append('title', this.state.imageTitle);
        await data.append('image', this.state.image);
        fetch('http://localhost:5400/insertImage', {
            method: 'POST',
            body: data,
        }).then(Response => Response.json())
        .then((response) => {
            console.log(response)
            if (response.err === null) {
                this.props.onComponentSubmit('image',this.state.imageTitle);
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
                                <h4 className="card-title mb-4 mt-1">Enter Image</h4>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Image Title</label>
                                        <input name="imageTitle" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Upload Image</label>
                                        <input name="image" className="form-control" placeholder="" type="file" onChange={this.onFileChange} />
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