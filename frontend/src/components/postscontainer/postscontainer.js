import React, { Component } from 'react';
import './postscontainer.css';
import Posts from '../posts/posts'
import { Route, Link, Switch } from 'react-router-dom'

class PostsContainer extends Component {
    render() {
        return (
            <div className="container">
                <Posts/>
            </div>
        );
    }
}

export default PostsContainer;