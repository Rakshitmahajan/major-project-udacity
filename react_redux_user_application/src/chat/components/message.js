import React, { Component } from 'react'
import '../style.css'
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    render() {
        return (
            <div className="chat" >
                {this.state.data.map((item, index) => (
                    <div>
                    <div className="card card-body bg-light">
                        <strong>{item.name}:</strong>{item.message}
                    </div>
                    <br />
                    </div>
                ))
                }
            </div>
        )
    }
}
export default Chat;