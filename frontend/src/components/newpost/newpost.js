import React, { Component } from 'react';
import './newpost.css';

class NewPost extends Component {
    render() {
        return (
            <div className="card space">
                <div className="card-body">
                    <h5 className="card-title">Share your thoughts</h5>
                    <form className="form-group">
                        <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPost;