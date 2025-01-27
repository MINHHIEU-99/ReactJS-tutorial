import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

import HotelList from '../../components/HotelList/HotelList';
import Type from '../../components/Type/Type';
import './Home.css';
import City from '../../components/City/City';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Footer from '../../components/Footer/Footer';

const CITY_DATA = [
    {
        name: 'Dublin',
        subText: '123 properties',
        image: './images/city_1.webp',
    },
    {
        name: 'Reno',
        subText: '533 properties',
        image: './images/city_2.webp',
    },
    {
        name: 'Austin',
        subText: '532 properties',
        image: './images/city_3.webp',
    },
];

const TYPE_DATA = [
    {
        name: 'Hotels',
        count: 233,
        image: './images/type_1.webp',
    },
    {
        name: 'Apartments',
        count: 2331,
        image: './images/type_2.jpg',
    },
    {
        name: 'Resorts',
        count: 2331,
        image: './images/type_3.jpg',
    },
    {
        name: 'Villas',
        count: 2331,
        image: './images/type_4.jpg',
    },
    {
        name: 'Cabins',
        count: 2331,
        image: './images/type_5.jpg',
    },
];
const FOOTER_DATA = [
	{
		"col_number": 1,
		"col_values": [
			"Countries",
			"Regions",
			"Cities",
			"Districts",
			"Airports",
			"Hotels"
		]
	},
	{
		"col_number": 2,
		"col_values": [
			"Homes",
			"Apartments",
			"Resorts",
			"Villas",
			"Hostels",
			"Guest houses"
		]
	},
	{
		"col_number": 3,
		"col_values": [
			"Unique places to stay",
			"Reviews",
			"Unpacked: Travel articles",
			"Travel communities",
			"Seasonal and holiday deals"
		]
	},
	{
		"col_number": 4,
		"col_values": [
			"Car rental",
			"Flight Finder",
			"Restaurant reservations",
			"Travel Agents"
		]
	},
	{
		"col_number": 5,
		"col_values": [
			"Curtomer Service",
			"Partner Help",
			"Careers",
			"Sustainability",
			"Press center",
			"Safety Resource Center",
			"Investor relations",
			"Terms & conditions"
		]
	}
];

const DETAIL_DATA = [
    {
        name: 'Aparthotel Stare Miasto',
        city: 'Madrid',
        price: 120,
        rate: 8.9,
        type: 'Excellent',
        image_url: './images/hotel_1.webp',
    },
    {
        name: 'Comfort Suites Airport',
        city: 'Austin',
        price: 140,
        rate: 9.3,
        type: 'Exceptional',
        image_url: './images/hotel_2.jpg',
    },
    {
        name: 'Four Seasons Hotel',
        city: 'Lisbon',
        price: 99,
        rate: 8.8,
        type: 'Excellent',
        image_url: './images/hotel_3.jpg',
    },
    {
        name: 'Hilton Garden Inn',
        city: 'Berlin',
        price: 105,
        rate: 8.9,
        type: 'Excellent',
        image_url: './images/hotel_4.jpg',
    },
];

const Home = () => {
    return (
        <div className='homepage'>
            <NavBar></NavBar>
            <Header></Header>
            <City items={CITY_DATA} />
            <Type items={TYPE_DATA} />
            <HotelList items={DETAIL_DATA} />
			<RegisterForm />
			<Footer items={FOOTER_DATA}/>
        </div>
    );
};

export default Home;
