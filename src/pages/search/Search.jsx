import SearchList from '../../components/SearchList/SearchList';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import footerData from '../../data/footer.json';
import SearchPopup from '../../components/SearchPopup/SearchPopup';
import './Search.css';
const Search = () => {
    
    // const FOOTER_DATA = JSON.parse(footerData);
    // console.log(footerData[0]);
    // console.log(typeof searchData);
    return (
        <div className='searchpage'>
            <NavBar></NavBar>
            <div>
                {/* <SearchPopup></SearchPopup> */}
                <SearchList></SearchList>    
            </div>
            <Footer items={footerData} />
        </div>
    );
};

export default Search;
