import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Navigation from './components/navigation/navigation'
import Landing from './components/landing/landing'
import Login from './components/login/login'
import Homepage from './pages/Homepage/Homepage'

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
        <Navigation isLoggedIn={this.state.isLoggedIn}/>
        <Switch>
          <Route path='/feed' render={() => { return(<Homepage/>)}}/>
          <Route path='/login' render={() => { return (<div><Login handleLogIn={this.handleLogIn} handleInput={this.handleInput}/></div>)}}/>
          <Route path='/signup' render={() => { return (<div><Landing handleInput={this.handleInput} handleSignUp={this.handleSignUp}/></div>)}}/>
          <Route path='/' render={() => { return (<div></div>)}}/>
        </Switch>
      </div>
    );
  }
}

export default App;
