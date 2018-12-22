import React, { Component } from 'react';
import './posts.css';
import axios from 'axios'

class Posts extends Component {
    constructor(){
        super()
        this.state = {
            posts:[],
        }
    }

    componentDidMount = () => {
        axios.defaults.headers.common['authorization'] = 'Bearer ' + localStorage.getItem('token');
        axios.get("http://localhost:3001/posts",axios.defaults.headers.common['authorization']).then(
            response => {
                this.setState({
                    posts: response.data
                })
            })
        }

    handleDelete = (postId,idx) => {
        axios.defaults.headers.common['authorization'] = 'Bearer ' + localStorage.getItem('token');
        axios.delete(`http://localhost:3001/posts/${postId}`,axios.defaults.headers.common['authorization']).then(
            response => {
                let posts = this.state.posts.filter(post => post !== this.state.posts[idx])
                this.setState({
                    posts: posts
                })
            })
        }

    render() {
        let posts = this.state.posts.map((post, index) => {
            return (<div key={index} className="card">
                        <div className="card-body">
                            <p>{post.user.username}</p>
                            <p>{post.content}</p>
                            <p>{post.date}</p>
                            <button className="btn btn-danger" onClick={() => { this.handleDelete(post._id,index)}}>Delete</button>
                        </div>
                    </div>)
            })
        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default Posts;