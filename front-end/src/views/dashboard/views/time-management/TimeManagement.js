import React from 'react';
import SideNav from '../../../../components/dashboard/side-nav/SideNav';
import TopNav from '../../../../components/dashboard/top-nav/TopNav';


function Test() {
    return (
        <div className="dashboard__container">
            <TopNav />
            <div className="dashboard__second__container">
                <SideNav />
                {/* Main Dashboard Data */}
                <div className="dashboard__content__container">
                    <h1>Time Management</h1>
                </div>
                
            </div>
        </div>
    )
}

export default Test;