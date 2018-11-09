import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
import Navigation from './components/navigation/navigation'
import PostsContainer from './components/postscontainer/postscontainer'
import Profile from './components/profile/profile'
import Aside from './components/aside/aside'
import Landing from './components/landing/landing'

class App extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      isLoggedIn: false,
      userId: '',
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/users/signup',
      {
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
      }
    )
    .then(response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true
      })
    })
    .catch(err => console.log(err))
  }

  handleLogIn = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/users/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then( response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true,
      })
    })
    .catch(err => console.log(err))
  }

  handleLogOut = () => {
    this.setState({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/feed'
            render={() => {
              return(
                <div>
                  <Navigation/>
                  <div className="horizontal-align">
                    <Profile/>
                    <PostsContainer/>
                    <Aside/>
                  </div>
                </div>
              )
            }}
          />
          <Route path='/'
            render={() => {
              return (
                <div>
                  <Navigation/>
                  <Landing/>
                </div>
              )
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
