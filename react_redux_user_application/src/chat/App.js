import React, { Component } from 'react';
import io from 'socket.io-client'
import Form from './components/form'
import Chat from './components/chat'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      user: null,
      data: null,
      onlineUser: []
    }
  }
  componentWillMount() {
    this.initSocket()
  }

  initSocket = () => {
    const socket = io('http://10.10.4.101:10000');
    socket.on('connect', () => {
      console.log('connected')
    })
    this.setState({
      socket: socket
    })
    socket.on('load chat', (data) => {
      this.setState({
        data: data
      })
    })
    socket.on('get users', (data) => {
      this.setState({
        onlineUser: data
      })
    })
    socket.on('new message', (data) => {
      this.state.data.push(data)
      var done = this.state.data;
      this.setState({
        data: done
      })
    })
  }

  sendMessage = (msg) => {
    const socket = this.state.socket;
    socket.emit('send message', msg);
  }

  setUser = (user) => {
    if (user == localStorage.getItem('user')) {
      const socket = this.state.socket;
      socket.emit('new user', user)
      this.setState({
        user: user,

      })
    } else {
      alert('unauthorised')
    }
  }

  render() {
    if (this.state.user !== null) {
      window.scrollTo(0, document.body.scrollHeight);
      return (
        <Chat sendMessage={this.sendMessage} onlineUser={this.state.onlineUser} data={this.state.data} />
      );
    }
    else {
      return (
        <div className="container">
          <Form setUser={this.setUser} />
        </div>
      );
    }
  }
}

export default App;
