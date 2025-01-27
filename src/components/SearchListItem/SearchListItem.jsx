import React from 'react';

import './SearchListItem.css';

const SearchListItem = (props) => {
    return (
        <div className='search_list-item'>
            <div className='picture'>
                <img src={props.items.image_url} alt="" />
            </div>
            <div className='details'>
                <p className='name'>{props.items.name}</p>
                <p className='distance'>{props.items.distance}</p>
                <div className='tag'>
                    <span className='tag-box'>{props.items.tag}</span>
                </div>
                <p className='description'>{props.items.description}</p>
                <p className='type'>{props.items.type}</p>
                
                <div className='free_cancel'>
                    <p>Free Cancellation</p>
                    <p>You can cancel later, so lock in this great price today!</p>
                </div>
            </div>
            <div className='reviews'>
                <div className='rate'>
                    <p className='rate-text'>{props.items.rate_text}</p>
                    <p className='rate-number'>{props.items.rate}</p>
                </div>
                <p className='price'>${props.items.price}</p>
                <p className='taxes'>Includes taxes and fees</p>
                <button className='btn' type='submit'>See availability</button>
            </div>
        </div>
    )
}

export default SearchListItem;