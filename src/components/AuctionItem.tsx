'use client';
import { useState, useEffect } from 'react';
import { AuctionType } from '../types/auction';
import BidNowModal from './modals/BidNow';
import { useAuth0 } from '@auth0/auth0-react';

enum BidStatus {
    own = 'OWN_AUCTION',
    alreadyBidd = 'ALREADY_BIDD',
    allowed = 'CAN_BIDD'
}

interface Props {
    auction: AuctionType;
    getAuctions: any;
}

const AuctionItem = ({ auction, getAuctions }: Props) => {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [isModalOpen, setModalOpen] = useState(false);
    const [isAuctionEnded, setAuctionEnded] = useState(false);
    const { title, pictureUrl, sellerDetails, endingAt, highestBid, id } = auction;
    const { user } = useAuth0();

    if (!user) return;
    const auctionStatus =
        sellerDetails.email === user.email ? BidStatus.own :
            highestBid.bidder === user.email ? BidStatus.alreadyBidd : BidStatus.allowed;

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const distance = new Date(endingAt) - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
                setAuctionEnded(true);
            } else {
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [endingAt]);

    function openModal(): void {
        setModalOpen(!isModalOpen);
    }

    function formatAmount(amount: number): string {
        if (amount >= 1_000_000_000) {
            return (amount / 1_000_000_000).toFixed(2) + 'B';
        } else if (amount >= 1_000_000) {
            return (amount / 1_000_000).toFixed(2) + 'M';
        } else if (amount >= 1_000) {
            return (amount / 1_000).toFixed(2) + 'k';
        } else {
            return amount.toFixed(2);
        }
    }

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
            <div className="relative">
                <img className="w-full h-48 object-cover" src={pictureUrl} alt={title} />
                <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white bg-opacity-75 p-2">
                    <h2 className="text-center text-lg font-bold">{title}</h2>
                    {/* <p className="text-center text-sm text-gray-600">@{sellerDetails.nickname}</p> */}
                </div>
            </div>
            <div className="p-4">
                <div className="relative flex items-center mb-4">
                    <img src={sellerDetails.picture} alt={sellerDetails.nickname} className="w-10 h-10 rounded-full mr-3" />
                    <span className="text-gray-700 font-semibold">{sellerDetails.nickname}</span>
                    <span className={`absolute top-0 right-0 inline-block px-3 py-1 text-sm font-semibold rounded-full ${auctionStatus === BidStatus.own ? 'bg-blue-500 text-white' : auctionStatus === BidStatus.alreadyBidd ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>
                        {auctionStatus === BidStatus.own ? 'Own Auction' : auctionStatus === BidStatus.alreadyBidd ? 'Bid Placed 🎉' : 'Can Bid'}
                    </span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <div>
                        <p className="text-gray-600 text-sm">Highest Bid</p>
                        <p className="text-lg font-semibold">${formatAmount(highestBid.amount)}</p>
                    </div>
                    <div>
                        {/* <p className="text-gray-600 text-sm">Remaining Time</p> */}
                        <div className="flex space-x-2">
                            <div className="bg-gray-200 text-gray-800 rounded-lg px-2 py-1 text-lg font-semibold animate-pulse">
                                {timeLeft.hours}h
                            </div>
                            <div className="bg-gray-200 text-gray-800 rounded-lg px-2 py-1 text-lg font-semibold animate-pulse">
                                {timeLeft.minutes}m
                            </div>
                            <div className="bg-gray-200 text-gray-800 rounded-lg px-2 py-1 text-lg font-semibold animate-pulse">
                                {timeLeft.seconds}s
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    {isAuctionEnded ? (
                        <div className="inline-block bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                            Auction Ended
                        </div>
                    ) : (
                        <div className="flex justify-center mb-2">
                            {auctionStatus === BidStatus.allowed && (
                                <button onClick={openModal} className="bg-black text-white py-2 px-4 rounded-lg flex-1 mr-2">
                                    Bid Now!
                                </button>
                            )}

                        </div>
                    )}
                </div>
            </div>
            {isModalOpen && <BidNowModal getAuctions={getAuctions} auctionId={id} isOpen={isModalOpen} onRequestClose={openModal} highestBid={highestBid.amount} />}
        </div>
    );
};

export default AuctionItem;
