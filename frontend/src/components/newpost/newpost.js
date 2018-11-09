import React, { Component } from 'react';
import './newpost.css';
import Posts from '../posts/posts'
import { Route, Link, Switch } from 'react-router-dom'

class NewPost extends Component {
    render() {
        return (
            <div>
                <div class="card spacing">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewPost;