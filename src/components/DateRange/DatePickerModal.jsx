import React, { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import necessary styles
import 'react-date-range/dist/theme/default.css'; // Import necessary styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import './modal.css';


export default function DatePickerModal() {
    // State to manage the visibility of the modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State to manage the selected date range
    const [selectedDateRange, setSelectedDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    // Ref for the modal to detect clicks outside of it
    const modalRef = useRef();

    // Function to toggle modal visibility
    const handleClickInput = () => {
        setIsModalOpen(true);
        console.log('click');
        
        document.addEventListener('click', handleClickOutside);
    };

    
    // Function to handle date selection
    const handleDateChange = (ranges) => {
        setSelectedDateRange(ranges.selection);
    };

    // Function to close the modal if the user clicks outside
    const handleClickOutside = (event) => {
        console.log(event.target);
        
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsModalOpen(false);
            // console.log(isModalOpen);
            // console.log('click outside');
            // console.log(modalRef.current);
        }
    };
    // handleClickOutside();
    // Set up event listener for clicks outside the modal
    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('click', handleClickOutside);
            console.log('inEffect');
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        // Cleanup listener on component unmount or modal state change
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <div ref={modalRef}>
            {/* The input field where the user clicks to open the modal */}
            <div className='modal-item'>
                <FontAwesomeIcon icon={faCalendar} />
                <input
                    type='text'
                    value={`${selectedDateRange.startDate.toLocaleDateString()} - ${selectedDateRange.endDate.toLocaleDateString()}`}
                    readOnly
                    onClick={handleClickInput}
                />
            </div>

            {/* Modal to show DateRange picker */}
            {isModalOpen && (
                <div className='modal' open>
                    <DateRange
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        className='date'
                        minDate={new Date()}
                        ranges={[selectedDateRange]}
                        onChange={handleDateChange}
                    />
                </div>
            )}
        </div>
    );
}
