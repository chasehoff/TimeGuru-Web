import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';

function SideNav() {
    const user = useSelector(state => state.auth.user);

    return (
        <div className="side__nav__container">
            <div className="top__side__nav__container">
                {
                    user.profilePicture ? <img className="side__profile__picture" src={user.profilePicture} alt="Profile picture" /> : <AccountCircleIcon className="side__profile__picture side__profile__icon" />
                }
                <h5 className="side__nav__email">{user.email}</h5>
                <h6>Your tier: <span className="side__nav__tier">{user.tier}</span></h6>
                <Divider />
            </div>
        </div>
    )
}

export default SideNav;
