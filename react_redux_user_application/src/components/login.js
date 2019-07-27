import React, { Component } from 'react';
import './signup.css'
class Login extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>UDACITY</h1>
                </div>
                <div className="width">
                <div className="container">
                    <aside class="col-sm-7">
                        <div className="card">
                            <article className="card-body">
                                <a href="" className="float-right btn btn-outline-primary">Signup</a>
                                <h4 className="card-title mb-4 mt-1">Login</h4>
                                <form>
                                    <div className="form-group">
                                        <label>Your email</label>
                                        <input name="" className="form-control" placeholder="Email" type="email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="form-control" placeholder="password" type="password" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block">Login</button>
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

export default Login;