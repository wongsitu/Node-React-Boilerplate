import React, { Component } from 'react';
import './profile.css';
import { Route, Link, Switch } from 'react-router-dom'

class Profile extends Component {
    render() {
        return (
            <div>
                <div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;