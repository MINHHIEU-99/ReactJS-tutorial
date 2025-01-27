import React from 'react';

import './SearchPopup.css';
import Button from '../Button/Button.jsx';

const SearchPopup = () => {
    return (
        <div className='search-popup'> 
            <div className='title'>
                <p>Search</p>
            </div>
            <div className='items'>
                <p className='items-name'>Destination</p>
                <input className='items-input' type="text" name="" id="" />
            </div>
            <div className='items'>
                <p className='items-name'>Check-in Date</p>
                <input className='items-input' type="text" />
            </div>
            <div>
                <p className='items-name'>Options</p>
                <div className='items-container'>
                    <div className='option-content'>
                        <p className='option-name'>Min price per night</p>
                        <input className='option-input' type="text" name="" id="" />
                    </div>
                    <div className='option-content'>
                        <p className='option-name'>Max price per night</p>
                        <input className='option-input' type="text" name="" id="" />
                    </div>
                    <div className='option-content'>
                        <p className='option-name'>Adult</p>
                        <input className='option-input' type="text" name="" id="" />
                    </div>
                    <div className='option-content'>
                        <p className='option-name'>Children</p>
                        <input className='option-input' type="text" name="" id="" />
                    </div>
                    <div className='option-content'>
                        <p className='option-name'>Room</p>
                        <input className='option-input' type="text" name="" id="" />
                    </div>
                </div>
            </div>
            <Button className='popup-btn' label='Search'/>
        </div>
    );
};

export default SearchPopup;