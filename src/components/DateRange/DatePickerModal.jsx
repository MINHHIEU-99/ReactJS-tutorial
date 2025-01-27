import React, { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import necessary styles
import 'react-date-range/dist/theme/default.css'; // Import necessary styles
import './modal.css';

const DatePickerModal = () => {
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
            console.log(isModalOpen);
        }
    };
    handleClickOutside();
    // Set up event listener for clicks outside the modal
    // useEffect(() => {
    //     if (isModalOpen) {
    //         document.addEventListener('click', handleClickOutside);
    //     } else {
    //         document.removeEventListener('click', handleClickOutside);
    //     }

    //     // Cleanup listener on component unmount or modal state change
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, [isModalOpen]);

    return (
        <div>
            {/* The input field where the user clicks to open the modal */}
            <input
                type='text'
                value={`${selectedDateRange.startDate.toLocaleDateString()} - ${selectedDateRange.endDate.toLocaleDateString()}`}
                readOnly
                onClick={handleClickInput}
            />

            {/* Modal to show DateRange picker */}
            {isModalOpen && (
                <div ref={modalRef} className='modal'>
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
};

export default DatePickerModal;
