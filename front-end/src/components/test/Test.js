import React from 'react';
import SideNav from '../dashboard/side-nav/SideNav';
import TopNav from '../dashboard/top-nav/TopNav';


function Test() {
    return (
        <div className="dashboard__container">
            <TopNav />
            <div className="dashboard__second__container">
                <SideNav />
                {/* Main Dashboard Data */}
                <div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Test;
