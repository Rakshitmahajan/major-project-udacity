import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: localStorage.getItem('user')
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.setUser(this.state.user)
    }
    render() {

        return (
            <div className="col-md-12">
                <form onSubmit={this.onSubmit}>
                    <input type="submit" className="btn btn-primary" value="enter" />
                </form>
            </div>
        )
    }
}
export default Form;