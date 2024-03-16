import React, { useState } from 'react';
import logo from '../../../assets/img/gg_logo.png';
import './index.css'
import { ButtonOutline } from '../../data-display/buttons';

export const Navbar = () => {
    const [activePage, setActivePage] = useState('/')
    const pages = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Destinations',
            url: '/destinations'
        }
    ]

    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <img className='navbar-left-img' src={logo} alt='Logo' />
                <ul className='navbar-left-items'>
                    {
                        pages.map((page) => {
                            return (
                                <li className={`navbar-left-item`}
                                    onClick={() => { setActivePage(page.url) }}>
                                    {page.title}
                                    <div className={`navbar-left-item-line ${page.url === activePage && 'active-page'}`} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='navbar-right'>
                <ButtonOutline borderWith={4} borderColor='#F2994A' textColor='#FFFFFF' fontSize={16}>
                    Get the app
                </ButtonOutline>
            </div>
        </div>
    )
}
