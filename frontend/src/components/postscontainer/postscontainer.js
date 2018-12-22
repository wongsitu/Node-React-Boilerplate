import React, { Component } from 'react';
import './postscontainer.css';
import Posts from '../posts/posts'
import NewPost from '../newpost/newpost'
import axios from 'axios'

class PostsContainer extends Component {
    constructor(){
        super()
        this.state = {
            content: '',
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCreate = (e) => {
        axios.post('http://localhost:3001/posts/new', {content: this.state.content})
    }

    render() {
        return (
            <div className="container">
                <NewPost handleCreate={this.handleCreate} handleInput={this.handleInput}/>
                <Posts handleDelete={this.handleDelete}/>
            </div>
        );
    }
}

export default PostsContainer;