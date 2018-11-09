import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Navigation from './components/navigation/navigation'
import PostsContainer from './components/postscontainer/postscontainer'
import Profile from './components/profile/profile'
import Aside from './components/aside/aside'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div className="horizontal-align">
          <Profile/>
          <PostsContainer/>
          <Aside/>
        </div>
      </div>
    );
  }
}

export default App;
