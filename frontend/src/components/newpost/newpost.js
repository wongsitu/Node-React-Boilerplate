import React, { Component } from 'react';
import './newpost.css';
import Posts from '../posts/posts'
import { Route, Link, Switch } from 'react-router-dom'

class NewPost extends Component {
    render() {
        return (
                <div className="card space">
                    <div className="card-body">
                        <h5 className="card-title">Share your thoughts</h5>
                        <form className="form-group">
                            <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
        );
    }
}

export default NewPost;