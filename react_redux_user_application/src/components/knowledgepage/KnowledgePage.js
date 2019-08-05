import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from '../knowledgepagecomponent/Sidebar';
// import Topbar from './Topbar';
import PostCard from './PostCard';
import { userKnowledge, allPost } from '../../actions/PostAction';
class Knowledge extends Component {
  state = {}
  componentDidMount() {
    this.props.userKnowledge(this.props.user.email);
    this.props.allPost();
  }
  render() {
    // console.log(this.props)
    return (
      <div className="row col-sm-11">
        <Sidebar />
        <div className='row col-sm-10 content'>
          <div className='col col-sm-1'></div>
          <div className='col pt-5'>
            <div className='pb-3'>
              <p>top bar</p>
              <Link className=' text-decoration-none' to='/activity'>Activity</Link>
              <Link className=' text-decoration-none' to='/post'>Post</Link>
            </div>

            <div className='pb-3 pt-2'>
              <div className="col-sm-12 p3">
                {this.props.postData.map((data, key) => (
                  <div key={key}><PostCard post={data} /></div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

// export default Knowledge;
const mapsStateToProps = state => ({ user: state.user.user, postData: state.knowledge.allPost });
Knowledge.propTypes = { userKnowledge: PropTypes.func.isRequired, allPost: PropTypes.func.isRequired };
export default connect(mapsStateToProps, { userKnowledge, allPost })(Knowledge);