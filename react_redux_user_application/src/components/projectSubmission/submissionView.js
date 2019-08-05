import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logout from '../userpage/Logout';

import './submissionView.css';

export default class SubmissionView extends React.Component {
    state = {
        project: []
    }
    componentDidMount() {
        fetch(`http://localhost:5500/readProject`)
            .then(res => res.json())
            .then(resp => {
                console.log(resp)
                this.setState({ project: resp })
            })
    }
    render() {
        return (
            <div>
                <div>
                    <ul className="UL">
                        <li className="LI"><Link to="/home" className="active try">Home</Link></li>
                        <li className="LI"><Logout /></li>
                    </ul>
                </div>

                <div>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.project.map((data, key) => (
                                <tr key={key}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.title}</td>
                                    <td>{data.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}