import React, { Component } from 'react';
<<<<<<< HEAD
import { Redirect, Link } from 'react-router-dom'
=======
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from '../../actions/userAction';
>>>>>>> 705fba8d7791dcf835d2a91102cb5b015e51d1c2
import './signup.css'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onPress = (e) => {
        alert('not yet enabled')
    }
    onSubmit = (e) => {
        e.preventDefault();
        fetch('http://10.10.4.101:2000/mentorLogin', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(Response => Response.json())
            .then((response) => {
                console.log(response)
                if (response.err === null) {
                    const token = response.token;
                    localStorage.setItem('jwtToken', token);
                    alert('login sucessful');
                    this.setState({ redirect: true })
                } else {
                    alert(response.err.message);
                }
            });
    }
    render() {
        if (this.state.redirect === true) 
        {
            this.props.history.push('/home');
            return <Redirect to="/home" />
        }
        return (
            <div>
                <div className="header">
                    <h1>UDACITY</h1>
                </div>
                <div className="width">
                    <div className="container">
                        <aside className="col-sm-7">
                            <div className="card">
                                <article className="card-body">
                                    <Link to='/signup' className="float-right btn btn-outline-primary">Signup</Link>
                                    <h4 className="card-title mb-4 mt-1">Login</h4>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label>Your email</label>
                                            <input name="email" className="form-control" placeholder="Email" type="email" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input name="password" className="form-control" placeholder="password" type="password" onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Submit" className="btn btn-primary btn-block" onChange={this.onChange} />
                                        </div>
                                    </form>
                                    <div className="form-group">
                                            <button className="btn btn-danger btn-block" onClick={this.onPress}>Login With Google</button>
                                        </div>
                                </article>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;