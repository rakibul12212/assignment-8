import React from 'react';
import './Header.css'
import logo from '../logo/logo.jpg'

const Header = () => {
    return (
        <nav className='header'>
            <h2>Knowledge Cafe</h2>
            <div>
                <a href='/home'>HOME</a>
                <a href='/article'>ARTICLE</a>
                <a href='q/a'>Q&A</a>
                <a href='/about'>ABOUT</a>
                <a href='/contact'>CONTACT US</a>
            </div>
            
        
        
        
         <img src={logo} alt="" className='logo'/>
        
        </nav>
    );
};

export default Header;