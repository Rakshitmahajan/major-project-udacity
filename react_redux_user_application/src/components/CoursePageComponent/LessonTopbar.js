/// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_shrink_scroll

//https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
import React from 'react';

class CourseTopBar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <a href="#default" id="logo">CompanyLogo</a>
        <div id="navbar-right">
          <a class="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    );
  }
}

export default CourseTopBar;