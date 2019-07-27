import React, { Component } from 'react';
import '../components/mainNav.css';

class MainNav extends Component {
    render() {
        return (
            <div className="header">
                <div>
                    <h1 className="mainNavTitle">UDACITY</h1>
                </div>
                <div>
                <nav id="nav">
                <ul id="navigation">
                    <li><a href="#">Programs &raquo;</a>
                        <ul>
                            <li><a href="#">Programming and development &raquo;</a>
                                <ul>
                                    <li><a href="#">Java development</a></li>
                                    <li><a href="#">Cloud Computing</a></li>
                                    <li><a href="#">C++</a></li>
                                    <li><a href="#">Data structure</a></li>
                                    <li><a href="#">ios development</a></li>
                                    <li><a href="#">Full stack</a></li>
                                    <li><a href="#">React</a></li>
                                    <li><a href="#">Android development</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Artificial Intelegence &raquo;</a>
                                <ul>
                                    <li><a href="#">Business Cards</a></li>
                                    <li><a href="#">Brochures</a></li>
                                    <li><a href="#">Envelopes</a></li>
                                    <li><a href="#">Flyers</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Cloud Computing &raquo;</a>
                                <ul>
                                    <li><a href="#">Business Cards</a></li>
                                    <li><a href="#">Brochures</a></li>
                                    <li><a href="#">Envelopes</a></li>
                                    <li><a href="#">Flyers</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Data Science &raquo;</a>
                                <ul>
                                    <li><a href="#">Business Cards</a></li>
                                    <li><a href="#">Brochures</a></li>
                                    <li><a href="#">Envelopes</a></li>
                                    <li><a href="#">Flyers</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Business &raquo;</a>
                                <ul>
                                    <li><a href="#">Business Cards</a></li>
                                    <li><a href="#">Brochures</a></li>
                                    <li><a href="#">Envelopes</a></li>
                                    <li><a href="#">Flyers</a></li>
                                </ul>
                            </li>
                            <li><button>Full Catalog</button></li>
                        </ul>
                    </li>
                    <li><a href="#">Career &raquo;</a>
                        <ul>
                            <li><a href="#">Career Prep</a></li>
                            <li><a href="#">Get Hired</a></li>
                            <li><a href="#">Hire our Grads</a></li>
                            <li><a href="#">Student Sucess</a></li>
                            <li><a href="#">Become a mentor</a></li>
                        </ul>
                    </li>
                    <li><a href="#">For Enterprise</a></li>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#" class="last"><button>Get started</button></a></li>
                </ul>
            </nav>
                </div>
            </div>
        );
    }
}

export default MainNav;
