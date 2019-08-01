import React from 'react';
import { Link } from "react-router-dom";
class ChapterSidebar extends React.Component {
  state = {}
  render() {
    console.log(this.props.contentTitle);
    return (
      <div>
        {this.props.contentTitle.map((data, key) => (
          <Link key={key} to='#'>{data.conceptTitle}</Link>
        ))}
      </div>
    );
  }
}

export default ChapterSidebar;