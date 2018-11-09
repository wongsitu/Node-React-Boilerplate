import React, { Component } from 'react';
import './postscontainer.css';
import Posts from '../posts/posts'
import NewPost from '../newpost/newpost'
import { Route, Link, Switch } from 'react-router-dom'

class PostsContainer extends Component {
    render() {
        return (
            <div className="container">
                <NewPost/>
                <Posts/>
            </div>
        );
    }
}

export default PostsContainer;