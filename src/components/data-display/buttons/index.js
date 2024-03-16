import React from 'react';
import './index.css'

export const ButtonOutline = ({ borderColor, borderWith, textColor, fontSize, children }) => {
    return (
        <div className='gg-button' style={{
            border: `${borderWith}px ${borderColor} solid`,
            color: textColor,
            background: 'none', fontSize: `${fontSize}px`
        }}>
            {children}
        </div>
    )
}
