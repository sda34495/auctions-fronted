import { AuctionType } from '../types/auction';
import AuctionItem from './AuctionItem';

const AuctionListing = ({ fetchAuctions, auctions }: { auctions: AuctionType[], fetchAuctions: any }) => {

    return (
        <div className="bg-light-blue-100 py-8">
            <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {auctions.map((auction, index) => (

                    <AuctionItem key={index} auction={auction} getAuctions={fetchAuctions} />
                ))}
            </div>
        </div>
    );
};

export default AuctionListing;
