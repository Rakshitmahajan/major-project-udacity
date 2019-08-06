import React, { Component } from 'react';
import Sidebar from './Side';
import Topbar from './Topbar';
import Activity from './Activity';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { myPost } from '../../actions/PostAction';
class ActivityPage extends Component {
  state = {}
  componentDidMount() {
    this.props.myPost(this.props.user._id)
  }
  render() {
    return (
      <div className="_layout_container__1W97h">
        <Sidebar />
        <main className="_layout_main__1LhDA">
          <div className="_layout_content-area__1eAnV div2">
            <div id="main-layout-content" aria-labelledby="header-title" className="_body_body__2AI8L">
              <div className="fullWidthWrapper_gray__2wWDF fullWidthWrapper_base__31JHr">
                <div className="innerPageLayout_view-wrapper__12gOJ">
                  <div className="navHeaderSmall_nav-header-small__1OoNJ">
                    <Topbar />
                  </div>
                  <Activity />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div >
    );
  }
}
const mapsStateToProps = state => ({ user: state.knowledge.user });
ActivityPage.propTypes = { myPost: PropTypes.func.isRequired };
export default connect(mapsStateToProps, { myPost })(ActivityPage);
