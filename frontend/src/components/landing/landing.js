import React, { Component } from 'react';
import './landing.css';

class Landing extends Component {
    render() {
        return (
            <div className="container spacing card">
                <form className="spacing">
                    <h1 className="text-center">Sign up</h1>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" name="first_name" className="form-control"  placeholder="First Name" onChange={this.props.handleInput} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" name="last_name" className="form-control"  placeholder="Last Name" onChange={this.props.handleInput} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text" name="username" className="form-control"  placeholder="Username" onChange={this.props.handleInput} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" name='email' className="form-control" placeholder="Email" onChange={this.props.handleInput} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" name='password' className="form-control" placeholder="Password" onChange={this.props.handleInput}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                            <button type="submit" className="btn btn-primary" onClick={this.props.handleSignUp}>Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Landing;