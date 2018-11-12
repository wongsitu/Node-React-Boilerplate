import React, { Component } from 'react';
import './login.css';

class Landing extends Component {
    render() {
        return (
            <div className="container spacing card">
                <form className="spacing">
                    <h1>Sign up</h1>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text" name="username" className="form-control"  placeholder="Username" onChange={this.props.handleInput} />
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
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Landing;