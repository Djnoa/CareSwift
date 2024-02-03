import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../assets/images/logo.svg'

function NavBar() {

    const [navBackground, setNavBackground] = useState('transparent');
    const [listBackgroundColor, setListBackgroundColor] = useState('transparent')
    const [logoSize, setLogoSize] = useState('large'); 
    const [headingSize, setHeadingSize] = useState('large');
        
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const shouldChangeLogoAndBackground = scrollPosition > 50;
    
        if (shouldChangeLogoAndBackground) {
            setLogoSize('small'); 
            setHeadingSize('small');
            setNavBackground('white');
            setListBackgroundColor('#349ca3');
        } else {
            setLogoSize('large');
            setHeadingSize('large');
            setNavBackground('transparent');
            setListBackgroundColor('transparent');
        }
    
        
    };
    

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className='navigation-bar-component'style={{ backgroundColor: navBackground }}>
            <div className="logo-div-nav">
                <img className={`logo-nav ${logoSize}`}src={logo} alt="Logo" />
                <h1 className={`logo-heading-nav ${headingSize}`}>CareSwift</h1>
            </div>

            <ul className='navigation-list-component'style={{ backgroundColor: listBackgroundColor }}>
                <li><a className='navigation-link-component' href="/">Home</a></li>
                <li><a className='navigation-link-component' href="/about">About</a></li>
                <li><a className='navigation-link-component' href="/how-it-works">How it works</a></li>
                <li><a className='navigation-link-component' href="/membership">Membership</a></li>
                <li><a className='navigation-link-component' href="/faq">FAQ</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
