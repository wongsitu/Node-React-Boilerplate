import React, { Component } from 'react';
import './newpost.css';
import axios from 'axios'

class NewPost extends Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div className="card space">
                <div className="card-body">
                    <h5 className="card-title">Share your thoughts</h5>
                    <form className="form-group">
                        <textarea className="form-control" id="exampleTextarea" rows="3" name="content" onChange={this.props.handleInput}></textarea>
                        <button type="submit" className="btn btn-primary" onClick={this.props.handleCreate}> Enter </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPost;