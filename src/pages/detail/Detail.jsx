import NavBar from '../../components/NavBar/NavBar';
import HotelDetail from '../../components/HotelDetail/HotelDetail';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Footer from '../../components/Footer/Footer';
import footerData from '../../data/footer.json';


const Detail = () => {
    return (
        <div>
            <NavBar></NavBar>
            <HotelDetail />
            <RegisterForm />
            <Footer items={footerData} />
        </div>
    );
};

export default Detail;
