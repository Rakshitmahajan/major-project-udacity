import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './signup.css'
class Signup extends Component {
    constructor() {
        super();
        this.state = {
            firstName:'',
            lastName:'',
            phoneNumber:'',
            email:'',
            password:'',
            password2:''
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/mentorSignup', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(Response => Response.json())
            .then((response) => {
                console.log(response);
                if (response.err === null) {
                    alert('signup sucessful')
                } else {
                    alert(response.err.message);
                }
            });
    }
    render() {
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
                                   <Link to='/login' className="float-right btn btn-outline-primary">Login</Link>
                                    <h4 className="card-title mb-4 mt-1">Sign up</h4>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label>First name</label>
                                            <input name="firstName" className="form-control" placeholder="First name" type="text" onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Last name</label>
                                            <input name="lastName" className="form-control" placeholder="Last name" type="text" onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Your email</label>
                                            <input name="email" className="form-control" placeholder="Email" type="email" onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input name="phoneNumber" className="form-control" placeholder="Email" type="text" onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input name="password" className="form-control" placeholder="password" type="password" onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm password</label>
                                            <input name="password2" className="form-control" placeholder="Confirm password" type="password" onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group">
                                        <input type="submit" value="Submit"  className="btn btn-primary btn-block" onChange={this.onChange}/>
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

export default Signup;