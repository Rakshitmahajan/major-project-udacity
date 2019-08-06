import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from './Side';
import Topbar from './Topbar';
import PostCard from './PostCard';
import { userKnowledge, allPost } from '../../actions/PostAction';
class Knowledge extends Component {
  state = {}
  componentDidMount() {
    this.props.userKnowledge(localStorage.getItem('email'));
    this.props.allPost();
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
                  <div>
                    <div className="undefined fixedWidthWrapper_fixed-width-wrapper__1fJJV">
                      {this.props.postData.map((data, key) => (
                        <div key={key}><PostCard post={data} /></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div >
    );
  }
}
const mapsStateToProps = state => ({ user: state.user.user, postData: state.knowledge.allPost });
Knowledge.propTypes = { userKnowledge: PropTypes.func.isRequired, allPost: PropTypes.func.isRequired };
export default connect(mapsStateToProps, { userKnowledge, allPost })(Knowledge);
