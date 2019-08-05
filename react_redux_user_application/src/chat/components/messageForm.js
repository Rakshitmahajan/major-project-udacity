import React, { Component } from 'react'
import '../style.css'
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.sendMessage(this.state.msg)
    }
    render() {
        return (
            <div className="form-group">
            <form onSubmit={this.onSubmit}>
                    <label> Enter a message </label>
                    <textarea className="form-control" name="msg" onChange={this.onChange}></textarea>
                    <br />
                    <input type="submit" className="btn btn-primary" value="send" onChange={this.onChange}/>
            </form>
            </div>
        )
    }
}
export default Chat;