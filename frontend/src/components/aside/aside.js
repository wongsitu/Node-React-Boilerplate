import React, { Component } from 'react';
import './aside.css';

class Aside extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Ads</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aside;