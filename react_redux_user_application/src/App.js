import React, { Component } from 'react';
import CourseCard from './components/CourseCard';
import NavbarHome from './components/Navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarHome />
        <div className="App-header">
          <p className='h2'>Welcome to React</p>
          <CourseCard />
        </div>
        <p className="App-intro">
          To get started, edit and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
