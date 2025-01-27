import React from 'react';
import './SearchList.css';
import SearchListItem from '../SearchListItem/SearchListItem';
import SearchPopup from '../SearchPopup/SearchPopup';

const SEARCH_DATA = [
	{
		"name": "Tower Street Apartments",
		"distance": "500m",
		"tag": "Free airport taxi",
		"type": "Entire studio • 1 bathroom • 21m² 1 full bed",
		"description": "Studio Apartment with Air conditioning",
		"free_cancel": true,
		"price": 112,
		"rate": 8.9,
		"rate_text": "Excellent",
		"image_url": "./images/hotel_search_1.webp"
	},
	{
		"name": "Comfort Suites Airport",
		"distance": "200m",
		"tag": "Free Breakfast",
		"type": "Entire studio • 2 bathroom • 100m² 2 full bed",
		"description": "Studio Apartment",
		"free_cancel": true,
		"price": 140,
		"rate": 9.3,
		"rate_text": "Exceptional",
		"image_url": "./images/hotel_search_2.jpg"
	},
	{
		"name": "Four Seasons Hotel",
		"distance": "100m",
		"tag": "Free Parking",
		"type": "1 bathroom • 51m² 2 full bed",
		"description": "Hotel in Lisbon",
		"free_cancel": false,
		"price": 99,
		"rate": 8.8,
		"rate_text": "Excellent",
		"image_url": "./images/hotel_search_3.jpg"
	}
];

const SearchList = () => {
    return (
		<div className='search-list__container'>
			<div className='search-list'>
				<SearchPopup className='search-popup'></SearchPopup>
				<SearchListItem className='search-item__1' items={SEARCH_DATA[0]}></SearchListItem>
				<SearchListItem className='search-item__2' items={SEARCH_DATA[1]}></SearchListItem>
				<SearchListItem className='search-item__3' items={SEARCH_DATA[2]}></SearchListItem>
			</div>
		</div>
    );
};

export default SearchList;