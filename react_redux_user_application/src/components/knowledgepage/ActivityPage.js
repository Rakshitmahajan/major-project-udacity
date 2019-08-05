import React, { Component } from 'react';
import Sidebar from '../knowledgepagecomponent/Sidebar';
// import Topbar from './Topbar';
// import Filter from './Filter';
// import PostCard from './PostCard';
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
      <div className="row col-sm-11">
        <Sidebar />
        <div className='row col-sm-10 content'>
          <div className='col col-sm-1'></div>
          <div className='col pt-5'>
            <div className='pb-3'>
              <p>top bar</p>
              {/* <Topbar /> */}
              {/* <Filter /> */}
            </div>

            <div className='pb-3 pt-2'>
              <div className="col-sm-12 p3">
                <Activity />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

// export default ActivityPage;
const mapsStateToProps = state => ({ user: state.knowledge.user });
ActivityPage.propTypes = { myPost: PropTypes.func.isRequired };
export default connect(mapsStateToProps, { myPost })(ActivityPage);