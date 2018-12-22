import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render() {
        let authOptions;
        if(this.props.isLoggedIn){ 
            authOptions =   
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={this.props.handleLogOut}>Log out</a>
                            </li>
                        </ul>
        } else {
            authOptions = 
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item"><a className="nav-link" href="/signup">Sign Up</a></li>
                            <li className="nav-item"><a className="nav-link" href="/login">Log In</a></li>
                        </ul>
        }

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/">My LinkedIn</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                        {authOptions}
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;