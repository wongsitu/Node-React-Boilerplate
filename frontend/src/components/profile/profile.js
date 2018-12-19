import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Profile</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;