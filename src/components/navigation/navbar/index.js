import React, { useState } from 'react';
import logo from '../../../assets/img/gg_logo.png';
import './index.css'

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
                <button>Get the App</button>
            </div>
        </div>
    )
}
