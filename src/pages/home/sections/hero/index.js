import React from 'react';
import './index.css';
import heroBackground from '../../../../assets/img/header_background.png';

export const HeroSection = () => {
    return (
        <div >
            <img className='hero-background-img' src={heroBackground} alt='Background' />
        </div>
    )
}
