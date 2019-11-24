import React, { Component } from 'react';
import './Navigation.css'
import Logo from '../Logo/Logo';
import Navigationitems from '../Navigation/NavigationItems/NavigationItems'

class Navigation extends Component {
    render() {
        return (
            <nav className='Nav'>
                <Logo />
                <Navigationitems />
            </nav>
        )
    }
}

export default Navigation;