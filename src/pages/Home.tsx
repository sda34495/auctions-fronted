import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import CustomerReviews from '../components/CustomerReviews';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate()
    useEffect(() => {

        if (isAuthenticated) {
            navigate('/auctions')
        }
    }, [isAuthenticated])

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Hero />
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
