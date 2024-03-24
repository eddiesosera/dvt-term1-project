import React from 'react';
import './index.css';

export const PlanetCard = ({ image, title, description }) => {
    return (
        <div className='planet-card'>
            <div className='planet-card-inner'>
                <img className='planet-card-top-img' src={image} alt='Planet Card' />
                <div className='planet-card-content'>
                    <div className='planet-card-content-title'>{title}</div>
                    <div className='planet-card-content-line' />
                    <div className='planet-card-content-description'>{description}</div>
                </div>
            </div>
            <div className='planet-card-bg' />
        </div>
    )
}
