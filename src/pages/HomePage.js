import React, {useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg';
import phoneWithApp from '../assets/images/phone-with-app.png';
import phoneWithAppTwo from '../assets/images/phone-with-app2.png';
import phoneWithAppThree from '../assets/images/phone-with-app3.png';

function HomePage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8000//api/create_account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (data.success) {
                window.location.href = '/select-role';
            } else {
                console.error('Error creating account:', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div>
            <nav className="navigation-menu">

                        <ul className='navigation-list'>
                            <li className='navigation-link'><Link to="/">Home</Link></li>
                            <li className='navigation-link'><Link to="/about">About</Link></li>
                            <li  className='navigation-link'><Link to="/how-it-works">How it works</Link></li>
                            <li  className='navigation-link'><Link to="/membership">Membership</Link></li>
                            <li  className='navigation-link'>FAQ</li>
                        </ul>
                </nav>
        <div className="container">
            <div className="row my-5">
            <div className="col-md-6 custom-margin-heading">
                    <h1 className='homepage-heading'>Swift care, anywhere...</h1>
                </div>
                <div className="col-md-6 text-center custom-margin-logo">
                    <img className='logo' src={logo} alt="Logo" />
                    <h1 className='logo-heading'>CareSwift</h1>
                </div>
            </div>
            <div className="row my-5">
            <div className="col-md-6 align-items-center custom-margin-signup">
                    <h2 className='sign-up-heading'>Sign Up</h2>
                    <form className='sign-up-form' onSubmit={handleSubmit}>
                        <input 
                            className='form-input'
                            type="email" 
                            id="email" 
                            placeholder="Email" 
                            aria-label="Email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <input 
                            className='form-input'
                            type="password" 
                            id="password" 
                            placeholder="Password" 
                            aria-label="Password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button className='sign-up-button' type="submit">Create an account</button>
                    </form>
                </div>
                <div className="col-md-6 d-flex flex-row ml-md-5 custom-margin-phone">
                    <img className='phone phone-with-app' src={phoneWithApp} alt="Phone with App" />
                    <img className='phone phone-with-app-two' src={phoneWithAppTwo} alt="Phone with App" />
                    <img className='phone phone-with-app-three' src={phoneWithAppThree} alt="Phone with App" />
                </div>
            </div>
            <div className="row">



            </div>
        </div>
    </div>
    );
}

export default HomePage;
