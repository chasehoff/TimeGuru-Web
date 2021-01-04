import React from 'react';
import { useSelector } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import { NavLink } from 'react-router-dom';

import './index.css';

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
                        
                            <NavLink className="no__underline side__nav__section__item" exact activeClassName="active__two" to="/dashboard">
                                <DashboardIcon className="side__nav__section__icon" />
                                Dashboard
                            </NavLink>
                            <NavLink className="no__underline side__nav__section__item" activeClassName="active__two" to="/dashboard/kanban">
                                <FormatListBulletedIcon className="side__nav__section__icon" />
                                Kanban
                            </NavLink>
                            <NavLink className="no__underline side__nav__section__item" activeClassName="active__two" to="/dashboard/time-management">
                                <TimelapseIcon className="side__nav__section__icon"/>
                                Time
                            </NavLink>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default SideNav;
