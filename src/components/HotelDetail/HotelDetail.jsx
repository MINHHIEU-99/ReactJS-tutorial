import React from 'react';
import detailData from '../../data/detail.json';
import './HotelDetail.css';

const HotelDetail = () => {
    console.log(detailData.photos[0]);
    return (
        <div className='d-container'>
            <div>
                <div>
                    <h1 className='d-detail--name'>{detailData.name}</h1>
                    <button type='submit'>
                        Reserve or Book Now!
                    </button>
                </div>
                <p className='d-detail--address'>{detailData.address}</p>
                <p className='d-detail--distance'>{detailData.distance}</p>
                <p className='d-detail--price'>{detailData.price}</p>
                <div className='d-detail--photos'>
                    <img className='d-photos' src={detailData.photos[0]} alt=''></img>
                    <img className='d-photos' src={detailData.photos[1]} alt=''></img>
                    <img className='d-photos' src={detailData.photos[2]} alt=''></img>
                    <img className='d-photos' src={detailData.photos[3]} alt=''></img>
                    <img className='d-photos' src={detailData.photos[4]} alt=''></img>
                    <img className='d-photos' src={detailData.photos[5]} alt=''></img>
                </div>
                <div className='d-detail--description'>
                    <div>
                        <h1 className='d-detail--description__title'>{detailData.title}</h1>
                        <p className='d-detail--description__text'>{detailData.description}</p>
                    </div>
                    <div className='d-detail--ninenight'>
                        <p className=''>Perfect for a 9-night stay!</p>
                        <p>Located in a real heart of Krakow, this property has an excellent location score in 9.8!</p>
                        <p className=''>${detailData.nine_night_price} (9 nights)</p>
                        <button type='submit'>Reserve or Book Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetail;