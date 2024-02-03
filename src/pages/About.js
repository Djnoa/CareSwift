import React from 'react';
import './About.css'
import NavBar from '../components/NavBar.js'
import SignUpButton from '../components/SignUpButton.js';


function AboutPage() {
    return (
        <div>
            <NavBar />
            <SignUpButton />
            <div className="about-image"></div>
            <div className="container about-container">

                    <h1 className ='main-about-header'>CareSwift: Care at Your Fingertips</h1>
                    <h2 className='about-header'>Welcome to CareSwift</h2>
                    <p className='about-para'>Finding the right care should be simple, swift, and secure. That’s why we created CareSwift. Our innovative platform bridges the gap between those in need of care and local carers. Whether it's for yourself or your loved ones, CareSwift offers a reliable solution for carers and care clients to connect with each other. </p>
                    <h2 className='about-header'>Responsive Care, Whenever You Need It</h2>
                    <p className='about-para'>Just like hailing a ride, you can now find short-term local carers at a moment's notice.  We recognize that care needs can be unpredictable, and our mission is to provide a solution that enhances your independence and lifestyle. With CareSwift support is always just a few taps away, giving you more time to focus on the things that matter to you. </p>
                    <h2 className='about-header'>Empowering carers, enriching lives</h2>
                    <p className='about-para'>We deeply value the dedication and compassion of those in the caring profession. Our platform is more than just a tool for finding care opportunities; it's a community where your skills and commitment are recognized and rewarded. Using our platform will give you the flexibility to choose when and where you work, matching your expertise with those in need in your local area. Here, every connection you make is an opportunity to positively impact lives,</p>

            </div>


        </div>
    );
}

export default AboutPage;
