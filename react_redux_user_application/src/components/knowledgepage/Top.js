import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Top extends Component {
  state = {}
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="contentWrapper_content-wrapper__19WZ6">
        <div className="navHeaderSmall_content-wrapper__1k1xh">
          <div className="navHeaderSmall_logo-wrapper__JjOSq">
            <a href="/?nanodegree=5d1a8326-496f-11e8-b51d-0b52a2c1b841">
              <h1 className="logo_logo__1dKpD">Knowledge</h1>
            </a></div>
          <div className="navHeaderSmall_nav-list-wrapper__oyzjs">
            <nav className="navList_nav-list__3K434">
              <h6 className="vds-heading--h6 vds-spacing--stack-none">
                <div className="navListItem_nav-list-item__3kek6"><Link to='/post'><i
                  className="vds-icon vds-color--white" role="img"
                  aria-hidden="true"><svg viewBox="0 0 32 32">
                    <path
                      d="M14 16.414l-.148.148-1.057 2.643 2.643-1.057.148-.148L14 16.414zM15.414 15L17 16.586 23.586 10 22 8.414 15.414 15zm-3.121.293l9-9a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.336.221l-5 2c-.816.327-1.626-.483-1.3-1.3l2-5a1 1 0 0 1 .222-.335zM8 24h16v-6a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2H8v16z">
                    </path>
                  </svg></i><span className="navListItem_text__EpA3h">post</span></Link>
                </div>
              </h6>
              <h6 className="vds-heading--h6 vds-spacing--stack-none">
                <div className="navListItem_nav-list-item__3kek6">
                  <Link to='/activity'><i className="vds-icon vds-color--white"
                    role="img" aria-hidden="true"><svg viewBox="0 0 32 32">
                      <path
                        d="M13 24H7a1 1 0 0 1-1-1c0-1.356.31-2.07 1.05-2.879l.203-.223C7.779 19.306 8 18.671 8 17v-2c0-4.317 2.865-7.475 7.002-7.94A1.029 1.029 0 0 1 15 7V5.999A.997.997 0 0 1 16 5c.552 0 1 .443 1 .999v1.002l-.001.045C21.115 7.46 24 10.65 24 15v2c0 1.67.22 2.306.747 2.898.046.052.095.105.204.223C25.69 20.931 26 21.644 26 23a1 1 0 0 1-1 1h-6a3 3 0 0 1-6 0zm2 0a1 1 0 0 0 2 0h-2zm-3.5-2h12.355c-.08-.178-.202-.334-.38-.53a18.91 18.91 0 0 1-.222-.243C22.386 20.252 22 19.142 22 17v-2c0-3.564-2.428-6-5.923-6C12.467 9 10 11.43 10 15v2c0 2.142-.386 3.252-1.253 4.227-.057.065-.12.132-.222.244-.178.195-.3.35-.38.529H11.5z">
                      </path>
                    </svg></i><span
                      className="navListItem_text__EpA3h">activity</span></Link></div>
              </h6>
            </nav>
          </div>
          <div className="navHeaderSmall_input-wrapper__2ByiR">
            <form className="searchInput_search-form__18qR1 searchInput_search-theme--blue__1brnw">
              <input data-ref="search-input" name="textInputValue" type="text" placeholder="Search for your question…"
                className="searchInput_search-input__my9vq" autoComplete="off" value="" onChange={this.onChange} /><button
                  className="searchInput_search-button__1Pl3G" data-ref="search-button"
                  type="submit"><i className="vds-icon vds-color--cerulean" role="img"
                    aria-hidden="true"><svg viewBox="0 0 32 32">
                    <path
                      d="M21.176 19.762l4.531 4.53a1 1 0 0 1-1.414 1.415l-4.531-4.531a8.5 8.5 0 1 1 1.414-1.414zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z">
                    </path>
                  </svg></i></button></form>
          </div>
        </div>
      </div>

    );
  }
}

export default Top;