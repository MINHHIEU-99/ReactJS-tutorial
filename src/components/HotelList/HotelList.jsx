import React from 'react';

import './HotelList.css';

const HotelList = function (props) {
    return (
        <div className='hotels__detail'>
            <p className='hotels__detail-title'>Homes guests love</p>
            <div className='hotels__detail-list'>
                <div className='detail__item'>
                    <img src={props.items[0].image_url} alt='' />
                    <div className='hotels__detail-description'>
                        <p className='detail__name'>{props.items[0].name}</p>
                        <p className='detail__city'>{props.items[0].city}</p>
                        <p className='detail__price'>
                            Starting from ${props.items[0].price}
                        </p>
                        <div className='detail__review'>
                            <p className='detail__rate'>
                                {props.items[0].rate}
                            </p>
                            <p>{props.items[0].type}</p>
                        </div>
                    </div>
                </div>
                <div className='detail__item'>
                    <img src={props.items[1].image_url} alt='' />
                    <div className='hotels__detail-description'>
                        <p className='detail__name'>{props.items[1].name}</p>
                        <p className='detail__city'>{props.items[1].city}</p>
                        <p className='detail__price'>
                            Starting from ${props.items[1].price}
                        </p>
                        <div className='detail__review'>
                            <p className='detail__rate'>
                                {props.items[1].rate}
                            </p>
                            <p>{props.items[1].type}</p>
                        </div>
                    </div>
                </div>
                <div className='detail__item'>
                    <img src={props.items[2].image_url} alt='' />
                    <div className='hotels__detail-description'>
                        <p className='detail__name'>{props.items[2].name}</p>
                        <p className='detail__city'>{props.items[2].city}</p>
                        <p className='detail__price'>
                            Starting from ${props.items[0].price}
                        </p>
                        <div className='detail__review'>
                            <p className='detail__rate'>
                                {props.items[2].rate}
                            </p>
                            <p>{props.items[2].type}</p>
                        </div>
                    </div>
                </div>
                <div className='detail__item'>
                    <img src={props.items[3].image_url} alt='' />
                    <div className='hotels__detail-description'>
                        <p className='detail__name'>{props.items[3].name}</p>
                        <p className='detail__city'>{props.items[3].city}</p>
                        <p className='detail__price'>
                            Starting from ${props.items[0].price}
                        </p>
                        <div className='detail__review'>
                            <p className='detail__rate'>
                                {props.items[3].rate}
                            </p>
                            <p>{props.items[3].type}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelList;
