import React from 'react';
import './index.css';

function How() {
    return (
        <div className="how-container">
            <div class="ocean hero-wave">
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            <div className="pos-categories">
                <h2>How It Works</h2>
                <div className="how-categories">
                    <div className="how-item">
                        <img className="how-image" src="./images/monitor.png" alt="" />
                        <h4>Monitor Employee<br />Activity</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="how-item">
                        <img id="image-management" className="how-image" src="./images/analyze.png" alt="" />
                        <h4>Analyze Time<br />Management</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="how-item">
                        <img id="image-tactics" className="how-image" src="./images/improve.png" alt="" />
                        <h4>Improve Team<br />Tactics</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default How;