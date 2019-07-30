import React from 'react';
// import { Link } from "react-router-dom";
import './DropdownList';
class DropdownList extends React.Component {
  state = {}
  render() {
    return (
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button</button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {/* <Link to='#'>RESOURCES</Link>
          <Link to='#'>CONCEPTS</Link> */}
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    );
  }
}

export default DropdownList;