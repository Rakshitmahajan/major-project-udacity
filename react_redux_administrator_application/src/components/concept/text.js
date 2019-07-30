import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import '../signup.css'
class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: '',
            text:''
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = async (e)  => {
        // e.preventDefault();
        // const data = new FormData();
        // await data.append('title', this.state.imageTitle);
        // await data.append('image', this.state.image);
        // fetch('http://localhost:5400/insertImage', {
        //     method: 'POST',
        //     body: data,
        // })
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
                                        <label>Headin</label>
                                        <input name="heading" className="form-control" placeholder="" type="text" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Text</label>
                                        <input name="text" className="form-control" placeholder="" type="text" onChange={this.onChange} />
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