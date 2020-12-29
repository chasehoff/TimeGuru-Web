import React , { useState } from 'react';
import './index.css';

function Display() {
    const [ display, setDisplay ] = useState('desktop');
    function onClick(dis) {
        let old = document.getElementById(display);
        old.classList.remove("selected");
        let selected = document.getElementById(dis);
        //set the current display state
        setDisplay(dis);
        //add class to show use response
        selected.classList.add("selected");
    }
    function DeviceSetup() {
        if(display === "desktop") {
            return <img className="device" src="./images/macbook.svg" alt="Desktop version of Timeguru" />
        } else if(display === "tablet") {
            return <img className="device" src="./images/ipad.svg" alt="Desktop version of Timeguru" />
        } else if(display === "mobile") {
            return <img className="device" src="./images/iphone-shadow.svg" alt="Desktop version of Timeguru" />
        }
    }
    return (
        <div className="display-outer-container">
            <div className="display-inner-container">
                <h2>How It Looks</h2>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
            </div>
            <div className="btn-container">
                <button className="display-btn selected" id="desktop" onClick={(e)=> onClick(e.target.id)}>Desktop</button>
                <button className="display-btn" id="tablet" onClick={(e)=> onClick(e.target.id)}>Tablet</button>
                <button className="display-btn" id="mobile" onClick={(e)=> onClick(e.target.id)}>Mobile</button>
            </div>
            <div style={{ backgroundPositionX: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url("./images/devices-background.svg")'}} className="devices-container">
                { DeviceSetup() }
            </div>
            
        </div>
    )
}
export default Display;