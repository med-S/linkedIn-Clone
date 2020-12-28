import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fD88MHxleH8sb3JlLWZlZWR8MXx8fGVufD88fHw%3D&w=1000&q=80" alt="" />
                <Avatar src={user.photoURL} className="sidebar__avatar" >{user.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <div className="sidebar__statNumber">2,456</div>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <div className="sidebar__statNumber">1,456</div>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react_JS')}
                {recentItem('Programming')}
                {recentItem('Developer')}
                {recentItem('software')}
            </div>
        </div>
    )
}

export default Sidebar
