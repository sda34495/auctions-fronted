import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CreateAuctionForm from '../components/CreateAuctionForm';

const CreateAuction = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <CreateAuctionForm />
            </main>
            <Footer />
        </div>
    );
};

export default CreateAuction;
