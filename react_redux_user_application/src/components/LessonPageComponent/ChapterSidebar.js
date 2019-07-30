import React from 'react';
import DropdownList from './DropdownList';
class ChapterSidebar extends React.Component {
  state = {}
  render() {
    return (
      <div className='col col-sm-12'>
        <DropdownList />
      </div>
    );
  }
}

export default ChapterSidebar;