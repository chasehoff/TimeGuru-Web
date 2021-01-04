import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import TimelapseIcon from '@material-ui/icons/Timelapse';

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
                <div className="side__nav__navigation__container">
                    <div className="side__nav__navigation__section">
                        <h4 className="side__nav__category">Management</h4>
                        <ul>
                            <li className="side__nav__section__item">
                                <DashboardIcon className="side__nav__section__icon" />
                                Dashboard
                            </li>
                            <li className="side__nav__section__item">
                                <FormatListBulletedIcon className="side__nav__section__icon" />
                                Kanban
                            </li>
                            <li className="side__nav__section__item">
                                <TimelapseIcon className="side__nav__section__icon"/>
                                Time
                            </li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default SideNav;
