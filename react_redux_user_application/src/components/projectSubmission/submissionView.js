import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logout from '../userpage/Logout';

import './submissionView.css';

export default class SubmissionView extends React.Component {
    render() {
        return (
            <div>
            <div>
                <ul className="UL">
                    <li className="LI"><Link to="/home" class="active try">Home</Link></li>
                    <li className="LI"><Logout/></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>Beetroot</li>
                    <li>Ginger</li>
                    <li>Potato</li>
                    <li>Radish</li>
                </ul>
            </div>
            </div>
        );
    }
}