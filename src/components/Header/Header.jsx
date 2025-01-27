import { faBed, faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './header.css';

import DatePickerModal from '../DateRange/DatePickerModal';


const Header = (props) => {
    // const [dateRangeState, setDateRange] = useState(true);  //true means the dateRange modal will dissapear
    // console.log(dateRangeState);

    // const handleDateRangeClick = (event) => {
    // setDateRange(false);
    // console.log(dateRangeState);
    // setDateRange(!dateRangeState);
    // }
    // document.body.addEventListener('click', function (event) {
    // console.log(event.target);
    // console.log(event.target.className);
    // console.log(event.currentTarget);
    // if (event.target.className !== 'date-input') {
    //     setdateRange(true);
    // }
    // });
    // setdateRange(true);
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='title'>
                    <h1>A lifetime of discounts? It's Genius.</h1>
                    <p>
                        Get rewarded for your travels - unlock instant savings
                        of 10% or more with a free account
                    </p>
                    <button className='btn' action=''>
                        Sign in / Register
                    </button>
                </div>
                <div className='search-bar'>
                    <div className='search-bar--text'>
                        <div className='search-item'>
                            <FontAwesomeIcon icon={faBed} />

                            <input
                                type='search'
                                name='input'
                                placeholder='Where are you going?'
                                autoComplete='off'
                            />
                        </div>
                        <div className='search-date'>
                            <div className='search-item'>
                                <FontAwesomeIcon icon={faCalendar} />
                                <input
                                    className='date-input'
                                    type='text'
                                    placeholder='06/24/2022 to 06/24/2022'
                                    min='2024-01-01'
                                    max='2024-12-31'
                                    // onClick={handleDateRangeClick}
                                />
                            </div>
                            {/* <div className={dateRangeState ? 'dateRange-close' : 'dateRange-active'}> */}
                            <div>
                                <DatePickerModal />
                            </div>
                        </div>
                        <div className='search-item'>
                            <FontAwesomeIcon icon={faPerson} />

                            <input
                                type='text'
                                placeholder='1 adult - 0 children - 1 room'
                            />
                        </div>
                    </div>

                    <div>
                        <button className='btn'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
