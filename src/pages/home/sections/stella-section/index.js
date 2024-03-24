import React from 'react';
import mars from '../../../../assets/img/cards/mars.png';
import saturn from '../../../../assets/img/cards/saturn.png';
import pluto from '../../../../assets/img/cards/pluto.png';
import { PlanetCard } from '../../../../components/data-display/planet-card';

export const StellaSelectionSection = () => {
    const planets = [
        {
            image: mars,
            title: 'Mars',
            description: 'Engage in thrilling activities like rover expeditions and marvel at the breathtaking Martian sunsets. Say hey to Elon!'
        },
        {
            image: saturn,
            title: 'Saturn',
            description: 'Experience weightlessness as you float among Saturn\'s rings to witness the grandeur of the gas giant from close quarters.'
        },
        {
            image: pluto,
            title: 'Pluto',
            description: 'Uncover the mysteries of the distant dwarf “planet” Pluto. Traverse its icy plains that resides on the outskirts of our solar system.'
        }
    ]
    return (
        <div className='stellar-selection-section'>
            <div className='stellar-selection-top'>
                <div className='stellar-selection-top-head'>A Stellar Selection</div>
                <div className='stellar-selection-top-description'>Explore three breathtaking destinations, each with its own unique charm and mystery.</div>
            </div>
            <div className='stellar-selection-content'>
                {
                    planets.map((planet) => {
                        return (
                            <PlanetCard image={planet.image} title={planet.title} description={planet.description} />
                        )
                    })
                }
            </div>
        </div>
    )
}
