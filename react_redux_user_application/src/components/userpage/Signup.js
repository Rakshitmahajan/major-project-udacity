import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { signupUser } from '../../actions/UserAction';
import { connect } from 'react-redux';

import './signup.css'

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      password2: '',
      redirect: false
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    fetch('http://10.10.4.101:2001/studentSignup', {
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
          this.setState({ redirect: true })
        } else {
          alert(response.err.message);
        }
      });
  }
  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <div className="header_header__1ZcYO"><a href="">
          <div className="header_logo-container__1Ji6p">
            <div className="header_logo__3Il0I"></div>
          </div>
        </a></div>
        <div className="app_content__Kl-ZQ">
          <div>
            <div className="loading-wrapper_container__3rfyH">
              <div className="tabbed-pane_tabbed-pane__2DfHq">
                <div className="tabbed-pane_tabs__1rsRG"><button type="button"
                  className="button_nav__29WTj button__btn__2MHEg tabbed-pane_tab-selected__3MxJq tabbed-pane__tab__2Q7yi button_standard__1p9sb"
                >Sign Up</button>
                  <Link to='/' className="button_nav__29WTj button__btn__2MHEg tabbed-pane_tab__1UGlv tabbed-pane__tab__2Q7yi button_standard__1p9sb">Sign In</Link>
                </div>
                <div className="tabbed-pane_content__3zivd">
                  <div>
                    <div className="form-header_header__UhqWw">Create your student account</div>
                    <div className="form-header_description__2ic93"><span>Build skills for today, tomorrow,
                                    and beyond.<br />Education to future-proof your career.</span></div>
                  </div>
                  <div className="form_alerts__2mutj">
                    <div>
                      <div className="alert_error__3rDC3 alert__alert__nhpvN alert_hidden__2ikXu"></div>
                    </div>
                  </div>
                  <div>
                    <div className="provider-buttons_buttons__tVEWg"><button type="button"
                      className="button_body__29iIF button__btn__2MHEg _provider-button_provider-button__3AGeE button_standard__1p9sb"
                    >
                      <div className="_provider-button_label__1gtgk"><img
                        src="https://auth.udacity.com/static/media/google_logo.12018216.svg" alt="google" />Sign up
                                        with Google</div>
                    </button><button type="button"
                      className="button_body__29iIF button__btn__2MHEg _provider-button_provider-button__3AGeE button_standard__1p9sb"
                    >
                        <div className="_provider-button_label__1gtgk"><img
                          src="https://auth.udacity.com/static/media/facebook_logo.adc2f689.svg" alt="facebook" />Sign
                                        up with Facebook</div>
                      </button></div>
                  </div>
                  <div className="or-separator_contain__3YaFK">
                    <div className="or-separator_flex__6ViaO">
                      <hr className="or-separator_line__x5QkI" />
                      <div className="or-separator_text__2YQdZ">or</div>
                      <hr className="or-separator_line__x5QkI" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div className="form-header_header__UhqWw"></div>
                        <div className="form-header_description__2ic93"></div>
                      </div>
                      <div className="form_alerts__2mutj">
                        <div>
                          <div className="alert_success__1bTs6 alert__alert__nhpvN alert_hidden__2ikXu">
                          </div>
                        </div>
                        <div>
                          <div className="alert_error__3rDC3 alert__alert__nhpvN alert_hidden__2ikXu">
                          </div>
                        </div>
                      </div>
                      <form onSubmit={this.onSubmit}>
                        <div className="form_form__1IFP-">
                          <div className="form-group"><input type="text" placeholder="First Name"
                            className="text-input_text-input__3KeW4 undefined" name="firstName" onChange={this.onChange} /><input
                              type="text" placeholder="Last Name"
                              className="text-input_text-input__3KeW4 undefined" name="lastName" onChange={this.onChange} /></div>
                          <div className="form-group"><input type="email" name="email" placeholder="Email Address"
                            className="text-input_text-input__3KeW4 undefined" onChange={this.onChange} /></div>
                          <div className="form-group"><input type="text" placeholder="Phone Number"
                            className="text-input_text-input__3KeW4 undefined" name="phoneNumber" onChange={this.onChange} /></div>
                          <div className="form-group"><input type="password" placeholder="Password"
                            className="text-input_text-input__3KeW4 undefined" name="password" onChange={this.onChange} /><input
                              type="password" placeholder="Confirm Password"
                              className="text-input_text-input__3KeW4 undefined" name="password2" onChange={this.onChange} /></div>
                          <div className="tos-blurb"><span>By clicking Sign Up, you agree to our <a
                            href="">Terms
                                                    of Use</a> and our <a
                              href="">Privacy
                                                    Policy</a>.</span></div>
                        </div><button type="submit"
                          className="button_primary__1qhjh button__btn__2MHEg form_primary-button__37eaW button_standard__1p9sb"
                        >Sign Up</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapsStatesToProps = state => ({ resp: state.user, });
export default connect(mapsStatesToProps, { signupUser })(Signup);