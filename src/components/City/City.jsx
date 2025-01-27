import React from 'react';

import './City.css';

const City = function (props) {
    return (
        <div className='city'>
            <div className='city__item'>
                <img src={props.items[0].image} alt='' />
                <div className='cart__shadow'></div>
                <div className='city__description'>
                    <h2>{props.items[0].name}</h2>
                    <p>{props.items[0].subText}</p>
                </div>
            </div>
            <div className='city__item second_city'>
                <img src={props.items[1].image} alt='' />
                <div className='cart__shadow'></div>
                <div className='city__description'>
                    <h2>{props.items[1].name}</h2>
                    <p>{props.items[1].subText}</p>
                </div>
            </div>
            <div className='city__item'>
                <img src={props.items[2].image} alt='' />
                <div className='cart__shadow'></div>
                <div className='city__description'>
                    <h2>{props.items[2].name}</h2>
                    <p>{props.items[2].subText}</p>
                </div>
            </div>
        </div>
    );
};

export default City;
