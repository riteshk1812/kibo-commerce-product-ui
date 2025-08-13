import React from 'react';
import './styles.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='header-title'>
                Shopping Cart
            </div>
            <div className='cart-logo'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cart">
                    <path d="M3 4h2l2.2 9.4c.1.6.7 1 1.3 1h8.3a1.2 1.2 0 0 0 1.2-1l1-5.2H7.3"
                        stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                    <circle cx="9.5" cy="19" r="1.6" fill="white" />
                    <circle cx="17.5" cy="19" r="1.6" fill="white" />
                </svg>
            </div>
        </div>
    )
}