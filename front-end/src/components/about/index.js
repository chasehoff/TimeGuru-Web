import React from 'react';
import './index.css';

function About() {
    return (
        <div className="about-outer-container">
            <img className="wave-two" src="./images/waveTwo.svg" alt="" />
            <div className="about-inner-container">
                <div className="about-container">
                    <div className="about-item">
                        <h2>What is Time-Guru?</h2>
                        <p>Vivamus fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue, egestas egestas purus diam at felis. Nullam tellus turpis, molestie ac urna quis, pulvinar semper massa.</p>
                        <p>Nam tristique Sed nisl justo, commodo ac gravida vitae, sodales maximus erat. Phasellus euismod nunc metus, et posuere elit venenatis eget. Nunc non risus libero.</p>
                    </div>
                    <div className="about-item">
                        <img className="img-placeholder" src="./images/kanban.gif" alt="" />
                    </div> 
                </div>
                <div className="about-container">
                    <div className="about-item">
                        <img className="img-placeholder-two" src="./images/placeholder-two.svg" alt="" />
                    </div>
                    <div className="about-item">
                        <h2>Features</h2>
                        <p>Vivamus fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue.</p>
                        <div>
                            <li className="border-bottom">Real Time Statistics</li>
                            <li className="border-bottom">Beautiful Charts</li>
                            <li>Activity Reminder</li>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: 'url("/images/grid-background.svg")'}} className="subscribe-container">
                <div className="subscribe-inner-container">
                    <h3>Subscribe For TimeGuru News!</h3>
                    <form className="subscribe-form" method="POST">
                        <input type="email" name="email" placeholder="Email" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default About;