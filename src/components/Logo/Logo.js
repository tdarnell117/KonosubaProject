import React from 'react';
import './Logo.css'
import konosubaLogo from '../Logo/image/logo.png'

const logo = ( props ) => (
    <div className='Logo'>
        <img src={konosubaLogo} alt='logo' />
    </div>
);

export default logo