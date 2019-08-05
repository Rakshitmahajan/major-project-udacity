import React, { Component } from 'react';
import '../style.css'
class Online extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.data
        }
    }
    componentDidUpdate() {
        if (this.state.user !== this.props.data) {
            this.setState({
                user: this.props.data
            })
        }
    }
    render() {
        return (
                <div className="online card card-body bg-light">
                    <h3>Online Users</h3>
                    <ul className="list-group" id="users">
                        {this.state.user.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </ul>
            </div>
        )
    }
}
export default Online;