import React from 'react';
// import DropdownList from './DropdownList';
class ChapterSidebar extends React.Component {
  state = {}
  render() {
    // console.log(this.props.contentTitle);
    return (
      <div className='col col-sm-12'>
        {this.props.contentTitle.map((data, key) => (
          console.log(key, data)
        ))}
      </div>
    );
  }
}

export default ChapterSidebar;