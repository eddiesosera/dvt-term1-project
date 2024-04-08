import React from 'react';
import './index.css';
import mockup from '../../../../assets/img/apple-mockup_outline.png';
import astronaut from '../../../../assets/img/astronaut_illustration.png';

export const ComingSoonSection = () => {
    return (
        <div className='coming-soon'>
            <div className='coming-soon-top'>
                <div className='coming-soon-top-title'>THE STARS IN YOUR POCKET... Coming soon</div>
                <div className='coming-soon-top-description'>We are very excited to launch our very own Celestial Voyages mobile application coming soon to the App Store & Google Play Store.</div>
            </div>
            <div className='coming-soon-mid'>
                <img className='coming-soon-mid-mockup' src={mockup} alt='iPhone Mockup outline' />
            </div>
            <div className='coming-soon-btm'>
                <img className='coming-soon-btm-illustration' src={astronaut} alt='Astronaut Illustration' />
            </div>
        </div>
    )
}
