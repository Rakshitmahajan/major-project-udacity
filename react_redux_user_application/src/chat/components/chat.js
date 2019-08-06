import React, { Component } from 'react'
import Online from './online'
import MessageForm from './messageForm'
import Message from './message'
import '../style.css'

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            onUser: this.props.onlineUser
        }
    }
    componentDidUpdate() {
        if (this.state.onUser !== this.props.onlineUser) {
            this.setState({
                onUser: this.props.onlineUser
            })
        }
    }

    render() {
        return (
            <div className="chatarea">
                <div className="container">
                    <div id="messageArea" className="row">
                        <div className="col-md-4">
                            <Online data={this.state.onUser} />
                        </div>
                        <div className="col-md-8">
                            <Message data={this.state.data} />
                            <MessageForm sendMessage={this.props.sendMessage} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Chat;