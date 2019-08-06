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
                    <h1>Online Users</h1>
                    <ul className="list-group" id="users">
                        {this.state.user.map((item, index) => (
                            <div className="diffName">
                                <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
                                <li className="name">{item}</li>
                            </div>
                        ))}
                    </ul>
            </div>
        )
    }
}
export default Online;