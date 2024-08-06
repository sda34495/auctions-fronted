import { useState, useEffect } from 'react';
import AuctionListing from '../components/AuctionsListing';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getData } from '../lib/axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const Auctions = () => {
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create-auction');
    };

    const fetchAuctions = async () => {
        try {
            const data = await getData('/auctions?status=OPEN');
            setAuctions(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAuctions();

        const interval = setInterval(() => {
            fetchAuctions();
        }, 5000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-4">
                <div className="flex justify-center mb-4">
                    <button
                        onClick={handleClick}
                        type="button"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        New Auction
                    </button>
                </div>
                <AuctionListing auctions={auctions} fetchAuctions={fetchAuctions} />
            </main>
            <Footer />
            {loading && <Loader />}
        </div>
    );
};

export default Auctions;
