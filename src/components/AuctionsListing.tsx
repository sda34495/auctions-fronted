import { AuctionType } from '../types/auction';
import AuctionItem from './AuctionItem';

const AuctionListing = ({ auctions, fetchAuctions }: { auctions: AuctionType[], fetchAuctions: any }) => {
    // const auctions: AuctionType[] = [
    //     {
    //         title: 'Vintage Camera',
    //         seller: 'John Doe',
    //         highestBid: {
    //             amount: 150,
    //             bidder: 'Jane Smith'
    //         },
    //         sellerDetails: {
    //             email: 'john@example.com',
    //             picture: 'https://via.placeholder.com/40',
    //             nickname: 'John Doe',
    //             email_verified: true
    //         },
    //         endingAt: '2024-08-10T12:00:00Z',
    //         createdAt: '2024-07-10T10:00:00Z',
    //         pictureUrl: 'https://img.freepik.com/free-photo/close-up-vintage-photo-camera_23-2148300554.jpg?t=st=1722678339~exp=1722681939~hmac=47e6664a346ca7eeac9a07e0ffeb01f4300b55d713a5fc8002d24e9fe0019a22&w=1380',
    //     },
    //     {
    //         title: 'Antique Vase',
    //         seller: 'Jane Smith',
    //         highestBid: {
    //             amount: 300,
    //             bidder: 'Alice Johnson'
    //         },
    //         sellerDetails: {
    //             email: 'jane@example.com',
    //             picture: 'https://via.placeholder.com/40',
    //             nickname: 'Jane Smith',
    //             email_verified: true
    //         },
    //         endingAt: '2024-08-12T15:00:00Z',
    //         createdAt: '2024-07-11T11:00:00Z',
    //         pictureUrl: 'https://img.freepik.com/free-photo/terracotta-vase-with-indigenous-pattern_23-2151585722.jpg?t=st=1722678200~exp=1722681800~hmac=4c038b001abb2983f75421ce59d9ec353183de9a9e2bf37a5062449c651c998c&w=740',
    //     },
    //     {
    //         title: 'Rare Book',
    //         seller: 'Alice Johnson',
    //         highestBid: {
    //             amount: 200,
    //             bidder: 'Bob Brown'
    //         },
    //         sellerDetails: {
    //             email: 'alice@example.com',
    //             picture: 'https://via.placeholder.com/40',
    //             nickname: 'Alice Johnson',
    //             email_verified: true
    //         },
    //         endingAt: '2024-08-14T18:00:00Z',
    //         createdAt: '2024-07-12T14:00:00Z',
    //         pictureUrl: 'https://img.freepik.com/free-photo/smoke-antique-notebook-ink-pen_23-2147775700.jpg?t=st=1722678114~exp=1722681714~hmac=09e6765501028852f0947f28c93c6ea82e0fd65f8cdc5c4fb3c359247cc98b90&w=826',
    //     },
    //     {
    //         title: 'Classic Car Model',
    //         seller: 'Bob Brown',
    //         highestBid: {
    //             amount: 1000,
    //             bidder: 'Charlie Davis'
    //         },
    //         sellerDetails: {
    //             email: 'bob@example.com',
    //             picture: 'https://via.placeholder.com/40',
    //             nickname: 'Bob Brown',
    //             email_verified: true
    //         },
    //         endingAt: '2024-08-16T20:00:00Z',
    //         createdAt: '2024-07-13T09:00:00Z',
    //         pictureUrl: 'https://img.freepik.com/free-photo/old-vintage-car-parked-middle-freeway-road_181624-3286.jpg?t=st=1722678474~exp=1722682074~hmac=b46ad24b087230e6fc0e1884b01a99029a65059db78aff72dba3b1af3e4d2f9c&w=1380',
    //     },
    // ];



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
