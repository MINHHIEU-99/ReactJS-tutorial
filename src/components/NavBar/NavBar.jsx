import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBed, faCar, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons';
import React from 'react';


import './navBar.css';

const NAV_LINK = [
    {
        type: 'Stays',
        icon: 'fa-bed',
        active: true,
    },
    {
        type: 'Flights',
        icon: 'fa-plane',
        active: false,
    },
    {
        type: 'Car rentals',
        icon: 'fa-car',
        active: false,
    },
    {
        type: 'Attractions',
        icon: 'fa-bed',
        active: false,
    },
    {
        type: 'Airport taxis',
        icon: 'fa-taxi',
        active: false,
    },
];

function NavBar() {
    const linkHandler = function (event) {
        event.preventDefault();
        console.log(event.target.text);

        const navType = event.target.text;
        const index = NAV_LINK.findIndex((e) => e.type === navType);
        NAV_LINK.forEach((l) => {
            l.active = false;
        });
        NAV_LINK[index].active = true;
    };

    return (
        <header>
            <div className='container'>
                <div className='nav-bar'>
                    <div>
                        <h2>Booking Website</h2>
                        <ul className='nav-bar__list'>
                            <li className='nav-bar__item'>
                                <FontAwesomeIcon className='nav-icon' icon={faBed} />                        
                                <p>Stays</p>
                            </li>
                            <li className='nav-bar__item'>
                                <FontAwesomeIcon className='nav-icon' icon={faPlane} />                        
                                <p>Flights</p>
                            </li>
                            <li className='nav-bar__item'>
                                <FontAwesomeIcon className='nav-icon' icon={faCar} />                        
                                <p>Car rentals</p>
                            </li>
                            <li className='nav-bar__item'>
                                <FontAwesomeIcon className='nav-icon' icon={faBed} />                        
                                <p>Attractions</p>
                            </li>
                            <li className='nav-bar__item'>
                                <FontAwesomeIcon className='nav-icon' icon={faTaxi} />                        
                                <p>Airport taxis</p>
                            </li>
                        </ul>
                    </div>
                    <div className='login'>
                        <button className='btn'>Register</button>
                        <button className='btn'>Login</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
