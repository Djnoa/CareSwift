import React from 'react';
import './HowItWorks.css'
import NavBar from '../components/NavBar.js'
import SignUpButton from '../components/SignUpButton.js';


function HowItWorks() {

    return (
        <div>
            <NavBar />
            <SignUpButton />
                <div className='howitworks-image'></div>

            <div className="container howitworks-content">

                    <h1 className ='main-about-header'>How to get started </h1>
                    <h2 className='about-header'>Sign up</h2>
                    <p className='about-para'>Begin by creating your account on CareSwift. Whether you're seeking care for yourself or someone else, signing up is quick and easy. You can fill in the required details such as your name, location, a photo for easy identification. If you are a client, we kindly ask you to select from a list the reasons you or the person you are looking after requires care. This information is kept private, however, carers can request it at your discretion. If you are a carer, please fill in your profile accordingly. You will be asked to provide proof of identity and care qualifications.  </p>
                    <h2 className='about-header'>Browse carers</h2>
                    <p className='about-para'>Once your profile is set, you can start searching for carers nearby. Our intuitive interface allows you to view carer profiles in a swipeable format, where you can 'favourite' the ones you like and pass on the ones you don't. Alternatively, you can view a list of nearby carers. If a carer has their 'available' green light on, you can contact them instantly for immediate care needs. However, you're also free to reach out to any carer for future care arrangements.</p>
                    <h2 className='about-header'>Book care</h2>
                    <p className='about-para'>After finding the right carer, you can book their services through the app. The carer will then provide the agreed-upon care, ensuring your needs are met with professionalism and compassion. Once the care session is completed, the carer can send an invoice through the app. You can securely pay for the services received directly within the app for a hassle-free transaction using Stripe.</p>

            </div>


        </div>
    );
}

export default HowItWorks;
