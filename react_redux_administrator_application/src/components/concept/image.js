import React, { Component } from 'react';
import '../signup.css'
class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            caption: '',
            image:null,
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onImageChange = (e) => {
        this.setState({ image: e.target.files[0] });
        console.log(this.state.image)
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        await data.append('title', this.state.imageTitle);
        await data.append('image', this.state.image);
        fetch('http://10.10.4.101:5400/insertImage', {
            method: 'POST',
            body: data,
        }).then(Response => Response.json())
            .then((response) => {
                console.log(response)
                if (response.err === null) {
                    this.props.onImageSubmit('image', response.data.link, this.state.caption);
                } else {
                    alert(response.err.message);
                }
            });
        this.props.onComponentSubmit('image', this.state.link);
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
                                            <input name="title" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Upload image</label>
                                            <input type="file" name="image" className="form-control" onChange={this.onImageChange} ></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Image caption</label>
                                            <input name="caption" className="form-control" placeholder="" type="text" onChange={this.onChange} />
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