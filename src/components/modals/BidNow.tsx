import { useState } from 'react';
import './modal.css';
import { patchData } from '../../lib/axios';
import { useNavigate } from 'react-router-dom';

const BidNowModal = ({ isOpen, onRequestClose, highestBid, auctionId, getAuctions }) => {
    const [bidAmount, setBidAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const handleBidChange = (e) => {
        const value = e.target.value;
        setBidAmount(value);
        setErrorMessage(value <= highestBid ? 'You have to bid higher' : '');
    };

    const handleBidSubmit = async (e) => {
        e.preventDefault();
        try {
            if (bidAmount <= highestBid) {
                setErrorMessage('You have to bid higher');
                return;
            }

            setIsLoading(true)

            const response = await patchData(`/auction/${auctionId}/bid`, { amount: bidAmount })
            if (response?.status != 200) {
                return
            }

            getAuctions()
            navigate('/auctions')
            setIsLoading(false)
            onRequestClose(); // Close the modal after placing the bid
        } catch (error) {
            setIsLoading(false)
            onRequestClose(); // Close the
            console.log(error)
        }
    };

    return (
        <div className={`fixed inset-0 z-50 overflow-y-auto ${isOpen ? '' : 'hidden'} transition-opacity duration-300`} role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:h-auto w-96 h-96"> {/* Adjusted width and height */}
                    <div className="p-8 relative"> {/* Increased padding */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                            onClick={onRequestClose}
                        >
                            &times; {/* Close Icon */}
                        </button>
                        <h2 className="text-2xl font-bold mb-4 text-center">Bid Now</h2>
                        <form onSubmit={handleBidSubmit}>
                            <div className="mb-4 relative">
                                <label htmlFor="bid-amount" className="block text-lg font-medium text-gray-700 mb-2">
                                    Amount in USD $
                                </label>
                                <div className="flex items-center border rounded-md shadow-sm">
                                    <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border-r border-gray-300 rounded-l-md">
                                        <img src="./dollars.png" alt="dollar" className='w-16 h-16' />
                                    </span>
                                    <input
                                        type="number"
                                        id="bid-amount"
                                        value={bidAmount}
                                        onChange={handleBidChange}
                                        className={`mt-1 block w-full p-3 rounded-md outline-none font-semibold text-2xl bg-white focus:ring-0 border-none ${errorMessage ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder={`Enter your bid in $$`}
                                        required
                                        style={{ appearance: 'none', MozAppearance: 'textfield' }} // Removes the default up and down arrows
                                    />
                                </div>

                                {errorMessage && (
                                    <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
                                )}
                            </div>
                            <p className='font-semibold text-end mb-3 text-lg'>Highest Bid : <span className='text-green-500'> $ {highestBid}</span></p>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white py-3 px-8 rounded-md hover:bg-green-600 transition duration-200"
                                >
                                    {

                                        isLoading && <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" />
                                        </svg>
                                    }
                                    Place
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidNowModal;
