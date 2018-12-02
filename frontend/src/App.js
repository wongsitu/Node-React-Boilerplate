import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
import Navigation from './components/navigation/navigation'
import PostsContainer from './components/postscontainer/postscontainer'
import Profile from './components/profile/profile'
import Aside from './components/aside/aside'
import Landing from './components/landing/landing'
import Login from './components/login/login'

class App extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      username:'',
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
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
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
      username: this.state.username,
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
                    <PostsContainer handleInput={this.handleInput}/>
                    <Aside/>
                  </div>
                </div>
              )
            }}
          />
          <Route path='/login'
            render={() => {
              return (
                <div>
                  <Navigation/>
                  <Login handleLogIn={this.handleLogIn} handleInput={this.handleInput}/>
                </div>
              )
            }}
          />
          <Route path='/signup'
            render={() => {
              return (
                <div>
                  <Navigation/>
                  <Landing handleInput={this.handleInput} handleSignUp={this.handleSignUp}/>
                </div>
              )
            }}
          />
          <Route path='/'
            render={() => {
              return (
                <div>
                  <Navigation/>
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
