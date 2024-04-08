import React from 'react';
import './index.css';
import { SubscribeForm } from './subscribeForm';
import 'remixicon/fonts/remixicon.css';
import logo from '../../../../assets/img/gg_logo.png';

export const Footer = () => {
    let links = [
        {
            label: 'Home',
            url: ''
        },
        {
            label: 'Destinations',
            url: ''
        },
        {
            label: 'Mobile App',
            url: ''
        }
    ];

    let social_media = [
        {
            icon: 'ri-instagram-line',
            url: 'https://www.instagram.com/galacticgateways'
        },
        {
            icon: 'ri-tiktok-fill',
            url: 'https://www.tiktok.com/galacticgateways'
        },
        {
            icon: 'ri-facebook-fill',
            url: 'https://www.facebook.com/galacticgateways'
        },
        {
            icon: 'ri-twitter-x-fill',
            url: 'https://www.x.com/galacticgateways'
        }
    ];

    return (
        <div className='footer'>
            <SubscribeForm></SubscribeForm>
            <div className='footer-inner'>
                <div className='footer-left'>
                    <img src={logo} className='footer-left-img' />
                    <div className='footer-left-text'>
                        Galactic Gateways <b>© 2024</b>
                    </div>
                </div>
                <div className='footer-right'>
                    <div className='footer-right-links'>
                        <div className='footer-right-links-title'>
                            Links
                        </div>
                        <div className='footer-right-links-wrap'>
                            {links.map((link, i) => {
                                return (
                                    <div key={i} className='footer-right-link'>
                                        {link.label}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='footer-right-socialmedia'>
                        <div className='footer-right-socialmedia-title'>
                            Social Media
                        </div>
                        <div className='footer-right-socialmedia-wrap'>
                            {social_media.map((socialmedia, i) => {
                                return (
                                    <>
                                        <div key={i} className='footer-right-socialmedia-item'>
                                            <i className={socialmedia.icon} />
                                        </div>
                                        {i === 1 && <br />}
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
