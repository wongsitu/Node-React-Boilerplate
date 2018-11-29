import React, { Component } from 'react';
import './aside.css';
import { Route, Link, Switch } from 'react-router-dom'

class Aside extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aside;