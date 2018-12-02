import React, { Component } from 'react';
import './postscontainer.css';
import Posts from '../posts/posts'
import NewPost from '../newpost/newpost'

class PostsContainer extends Component {
    render() {
        return (
            <div className="container">
                <NewPost handleInput={this.props.handleInput}/>
                <Posts/>
            </div>
        );
    }
}

export default PostsContainer;