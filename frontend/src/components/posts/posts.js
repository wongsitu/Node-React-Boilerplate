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

    render() {
        let posts = this.state.posts.map((post, index) => {
            return (<div key={index} className="card">
                        <div className="card-body">
                            <p>{post.content}</p>
                            <button className="btn btn-danger" onClick={this.props.handleDelete(post._id)}>Delete</button>
                        </div>
                    </div>)
            })
            console.log(this.state.posts)
        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default Posts;