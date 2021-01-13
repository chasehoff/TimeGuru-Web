import React, { useState } from 'react';
import SideNav from '../../../../components/dashboard/side-nav/SideNav';
import TopNav from '../../../../components/dashboard/top-nav/TopNav';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import './index.css';

function Test() {
    //store user state from redux
    const user = useSelector(state => state.auth.user);

    const [ userData, setUserData] = useState({
        name: user.name,
        email: user.email,
        tier: user.tier,
        profile: user.profilePicture
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit works')
    }
    
    return (
        <div className="dashboard__container">
            <TopNav />
            <div className="dashboard__second__container">
                <SideNav />
                {/* Main Dashboard Data */}
                <div className="dashboard__content__container">
                    <div className="settings__top__bar">
                        <div className="settings__user__info">
                            <h2 className="settings__user__info__header">User Info</h2>
                            <div className="profile__picture__settings">   
                                {
                                    user.profilePicture ? <img className="edit__profile__picture" src={user.profilePicture} alt="Profile picture" /> : <AccountCircleIcon className="edit__profile__picture side__profile__icon" />
                                }
                                <form className="picture__form" onSubmit={handleSubmit}>
                                    <FileBase className="test"
                                        type="file"
                                        multiple={false}
                                        onDone={({base64}) => setUserData({...userData, profilePicture: base64})} />
                                    <input type="submit" placeholder="Submit" />
                                </form>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Test;