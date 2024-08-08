import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import CustomerReviews from '../components/CustomerReviews';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Categories from '../components/Categories';


const Home = () => {
    const { isAuthenticated } = useAuth0();

    const navigate = useNavigate()
    useEffect(() => {

        if (isAuthenticated) {
            navigate('/auctions')
        }

    }, [isAuthenticated])

    return (
        <div className="bg-gradient-to-r from-[#6d3f77] to-[#f7c93b] flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <Categories />
                {/* <Welcome /> */}
                <Features />
                <AboutUs />
                <CustomerReviews />
            </main>
            <Footer />
        </div>

    );
};

export default Home;
