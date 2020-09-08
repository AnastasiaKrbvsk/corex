import React from 'react';
import './Footer.css';
import Facebook from './facebook.svg';
import Twitter from './twitter.svg';
import Youtube from './youtube.svg';
import Reddit from './reddit.svg';

function Footer() {
    return (
        <footer className='footer'>
            <div className='social-networks'>
                <div className='social'><img className='social-svg' src={Facebook} alt='Facebook'/></div>
                <div className='social'><img className='social-svg' src={Twitter} alt='Twitter'/></div>
                <div className='social'><img className='social-svg' src={Youtube} alt='Youtube'/></div>
                <div className='social'><img className='social-svg' src={Reddit} alt='Reddit'/></div>
            </div>
        </footer>
    );
}

export default Footer;