import React from 'react';
import './index.css';
import { useSelector } from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function TopNav() {
    //delete later testing purposes
    const user = useSelector(state => state.auth.user);
    console.log(user);
    return (
        <div className="dashboard__top__nav">
            <div className="guru__logo__container">
                <img className="guru__head" src="../../../images/guru_head.svg" alt="" />
            </div>
            <div className="profile__settings">
                <h5>{user.email}</h5>
                {
                    user.profilePicture ? <img className="smaller__profile__picture" src={user.profilePicture} alt="Profile picture" /> : <AccountCircleIcon className="smaller__profile__picture top__profile__icon" />
                }
                <IconButton>
                    <SettingsIcon fontSize="large" className="top__nav__icons" />
                </IconButton>
                <IconButton>
                    <NotificationsIcon fontSize="large" className="top__nav__icons" />
                </IconButton>
            </div>
        </div>
    )
}
export default TopNav;
