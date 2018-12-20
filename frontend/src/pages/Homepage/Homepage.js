import React, { Component } from 'react';
import './Homepage.css';
import PostsContainer from '../../components/postscontainer/postscontainer'
import Profile from '../../components/profile/profile'
import Aside from '../../components/aside/aside'

class Homepage extends Component {
    render() {
        return (
            <div>
                <div className="horizontal-align">
                    <Profile/>
                    <PostsContainer/>
                    <Aside/>
                </div>
            </div>
        );
    }
}

export default Homepage;