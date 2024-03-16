import React from 'react';
import './index.css';
import heroBackground from '../../../../assets/img/header_background.png';
import { ButtonFill } from '../../../../components/data-display/buttons';

export const HeroSection = () => {
    return (
        <div className='hero-section'>
            <img className='hero-background-img' src={heroBackground} alt='Background' />
            <div className='hero-content'>
                <div className='hero-content-top'>
                    Tired Of Global Warming?
                </div>
                <div className='hero-content-heading'>
                    Visit A <br />Different Planet
                </div>
                <div className='hero-content-description'>
                    Welcome to Celestial Voyages, where your dreams of interplanetary exploration come to life. Join us in venturing beyond the stars, discovering the wonders of otherworldly landscapes.
                </div>
                <div className='hero-content-cta'>
                    <ButtonFill backgroundColor='#7920C2' textColor='#FFFFFF' fontSize={16}>
                        Destination
                    </ButtonFill>
                </div>
            </div>
        </div>
    )
}
