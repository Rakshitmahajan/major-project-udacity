import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Logout  extends Component {
    constructor(){
        super();
        this.state = {
            redirect:false
        }
    }
    onClick = () => {
        localStorage.removeItem('jwtToken');
        this.setState({
            redirect:true
        })
    }
    render(){
        if(this.state.redirect === true)
        {
            return <Redirect to="/" />
        }
        return (
            <button onClick={this.onClick}> Logout </button>
        )
    }
}
export default Logout;