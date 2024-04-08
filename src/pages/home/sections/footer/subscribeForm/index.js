import React from 'react';
import './index.css'

export const SubscribeForm = () => {
    return (
        <div className='subscribe-form'>
            <div className='subscribe-form-title'>
                Subscribe to stay updated
            </div>
            <div className='subscribe-form-form'>
                <div className='subscribe-form-form-input-wrap'>
                    <input type='text' placeholder='Space traveller name' className='subscribe-form-form-input' />
                    <input type='text' placeholder='Contact email address' className='subscribe-form-form-input' />
                </div>
                <button type='submit' className='subscribe-form-form-input-action'>
                    Join newsletter
                </button>
            </div>
        </div>
    )
}
