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

export const ButtonFill = ({ backgroundColor, textColor, fontSize, width, children }) => {
    return (
        <div className='gg-button' style={{
            background: backgroundColor,
            color: textColor,
            fontSize: fontSize,
            // width: width | 'max-content'
        }}>
            {children}
        </div>
    )
}
