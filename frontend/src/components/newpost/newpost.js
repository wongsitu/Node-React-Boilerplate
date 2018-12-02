import React, { Component } from 'react';
import './newpost.css';
import axios from 'axios'

class NewPost extends Component {
    constructor(){
        super()
        this.state = {
            user: '',
            content: ''
        }
    }

    handleCreate = () => {
        axios.post('http://localhost:3001/api/posts/new',
        {
            user:this.state.user,
            content:this.state.content,
        })
    }

    render() {
        return (
            <div className="card space">
                <div className="card-body">
                    <h5 className="card-title">Share your thoughts</h5>
                    <form className="form-group">
                        <textarea className="form-control" id="exampleTextarea" rows="3" onChange={this.props.handleInput}></textarea>
                        <button type="submit" className="btn btn-primary" onClick={this.handleCreate}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPost;