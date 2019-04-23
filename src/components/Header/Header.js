import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import image from '../../images/snag-logo-white.svg'

class Header extends Component {
    render() {
        return (
            <Navbar className='gradient'>
                <Navbar.Brand style={{ height: 105 }}>
                    <img src={image} alt='Snag' style={{ height: 100, weight: 100 }} />
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Header;
