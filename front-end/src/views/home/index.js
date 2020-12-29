import React from 'react';
import './index.css';
import How from '../../components/how/index';
import { Link } from 'react-router-dom';
import Companies from '../../components/companies';
import Display from '../../components/displays';
import About from '../../components/about';
import Footer from '../../components/footer';

function Home() {
    return(
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-item">
                    <h3>Get Organized!</h3>
                    <h2>Team Management All In<br />One Place</h2>
                    <Link className="hero-link pulse" to="/about">Learn more</Link>
                </div>
                <div className="hero-item">
                    <button className="hero-btn btn-prev"><img src="./images/arrow-left.svg" alt="" /></button>
                    <img className="hero-iphone" src="./images/hero-phone.svg" alt="Mock up model of Timeguru iPhone application." />
                    <button className="hero-btn btn-next"><img src="./images/arrow-right.svg" alt="" /></button>
                </div>
            </div>
            <How />
            <Companies />
            <Display />
            <About />
            <Footer />
        </div>
    )
}
export default Home;