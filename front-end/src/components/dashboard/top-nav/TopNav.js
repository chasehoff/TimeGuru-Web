import React from 'react';
import './index.css';
import { useSelector } from 'react-redux';

function TopNav() {
    const email = useSelector(state => state.auth.user.email)
    console.log(email);
    return (
        <div className="dashboard__top__nav">
            <div>
                <img className="guru__head" src="./images/guru_head.svg" alt="" />
            </div>
            <div className="profile__settings">
                <h5>{email}</h5>
                <h1>Two</h1>
            </div>
        </div>
    )
}

export default TopNav;
