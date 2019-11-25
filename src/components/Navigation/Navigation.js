import React, { Component } from 'react';
import './Navigation.css'

import Navigationitems from '../Navigation/NavigationItems/NavigationItems'

class Navigation extends Component {
    render() {
        return (
            <nav className='Nav'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12'>
                        
                        <Navigationitems />
                        </div>
                    </div>
                </div> 
            </nav>
        )
    }
}

export default Navigation;