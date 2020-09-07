import React from 'react';
import './Header.css';
import cart from './cart.svg';
import corex from './corex.svg';

function Header() {
    return (
        <header className='header'>
            <div className='header-content'>
                <div className='header-logo'>
                    <img src={corex} alt='corex logotype'/>
                </div>
                <div className='header-cart'>
                    <img src={cart} alt='cart logotype'/>
                </div>
            </div>
        </header>
    );
}

export default Header;