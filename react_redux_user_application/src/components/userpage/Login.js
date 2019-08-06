import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { loginUser } from '../../actions/UserAction';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken'
import './Login.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    fetch('http://10.10.4.101:2001/studentLogin', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(Response => Response.json())
      .then((response) => {
        if (response.err === null) {
          const token = response.token;
          const userObj = jwt.decode(token);
          localStorage.setItem('jwtToken', token);
          localStorage.setItem('user', userObj.firstName);
          localStorage.setItem('email', userObj.email);
          this.props.loginUser(userObj.email);
          alert('login sucessful');
          this.setState({ redirect: true })
        } else {
          alert(response.err.message);
        }
      });
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onPress = (e) => {
    alert('not yet enabled')
  }

  render() {
    if (this.state.redirect === true) {
      this.props.history.push('/home');
      return <Redirect to="/home" />
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
                <div className="tabbed-pane_tabs__1rsRG">

                  <Link to='/signup' className="button_nav__29WTj button__btn__2MHEg tabbed-pane_tab__1UGlv tabbed-pane__tab__2Q7yi button_standard__1p9sb">Sign Up</Link>

                  <button type="button"
                    className="button_nav__29WTj button__btn__2MHEg tabbed-pane_tab-selected__3MxJq tabbed-pane__tab__2Q7yi button_standard__1p9sb"
                  >Sign In</button></div>
                <div className="tabbed-pane_content__3zivd">
                  <div>
                    <div className="form-header_header__UhqWw">Sign in to your account</div>
                    <div className="form-header_description__2ic93"><span>Build skills for today, tomorrow,
                                            and beyond.<br />Education to future-proof your career.</span></div>
                  </div>
                  <div className="form_alerts__2mutj">
                    <div>
                      <div className="alert_success__1bTs6 alert__alert__nhpvN alert_hidden__2ikXu"></div>
                    </div>
                    <div>
                      <div className="alert_error__3rDC3 alert__alert__nhpvN alert_hidden__2ikXu"></div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="provider-buttons_buttons__tVEWg"><button type="button"
                        className="button_body__29iIF button__btn__2MHEg _provider-button_provider-button__3AGeE button_standard__1p9sb"
                      >
                        <div className="_provider-button_label__1gtgk"><img
                          src="https://auth.udacity.com/static/media/google_logo.12018216.svg" alt="google" />Sign
                                                    in with Google</div>
                      </button><button type="button"
                        className="button_body__29iIF button__btn__2MHEg _provider-button_provider-button__3AGeE button_standard__1p9sb"
                      >
                          <div className="_provider-button_label__1gtgk"><img
                            src="https://auth.udacity.com/static/media/facebook_logo.adc2f689.svg"
                            alt="facebook" />Sign in with Facebook</div>
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
                            <div
                              className="alert_success__1bTs6 alert__alert__nhpvN alert_hidden__2ikXu">
                            </div>
                          </div>
                          <div>
                            <div
                              className="alert_error__3rDC3 alert__alert__nhpvN alert_hidden__2ikXu">
                            </div>
                          </div>
                        </div>
                        <form onSubmit={this.onSubmit}>
                          <div className="form_form__1IFP-">
                            <div className="form-group"><input type="email"
                              placeholder="Email Address"
                              className="text-input_text-input__3KeW4 undefined" name="email" onChange={this.onChange} />
                            </div>
                            <div className="form-group"><input type="password"
                              placeholder="Password"
                              className="text-input_text-input__3KeW4 undefined" name="password" onChange={this.onChange} />
                            </div>
                            <div className="tos-blurb"><span>By clicking Sign In, you agree to our
                                                            <a href=""> Terms
                                                                of Use</a> and our <a
                                href="">Privacy
                                                                Policy</a>.</span></div>
                          </div><button type="submit"
                            className="button_primary__1qhjh button__btn__2MHEg form_primary-button__37eaW button_standard__1p9sb" onChange={this.onChange}
                          >Sign In</button>
                        </form>
                      </div><br /><a
                        href="">Forgot
                                            your password?</a>
                    </div>
                    <div className="or-separator_contain__3YaFK">
                      <div className="or-separator_flex__6ViaO">
                        <hr className="or-separator_line__x5QkI" />
                        <div className="or-separator_text__2YQdZ">or</div>
                        <hr className="or-separator_line__x5QkI" />
                      </div>
                    </div><a href="">Sign
                                        in with your organization</a>
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
export default connect(mapsStatesToProps, { loginUser })(Login);
