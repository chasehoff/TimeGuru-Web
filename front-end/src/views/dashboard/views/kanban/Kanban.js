import React from 'react';
import SideNav from '../../../../components/dashboard/side-nav/SideNav';
import TopNav from '../../../../components/dashboard/top-nav/TopNav';

import './index.css';

function Kanban() {
    return (
        <div className="dashboard__container">
            <TopNav />
            <div className="dashboard__second__container">
                <SideNav />
                {/* Main Dashboard Data */}
                
            </div>
        </div>
    )
}

export default Kanban;