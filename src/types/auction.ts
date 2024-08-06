export interface AuctionType {
  id: string;
  title: string;
  seller: string;
  highestBid: {
    amount: number;
    bidder: string;
  };
  sellerDetails: {
    email: string;
    picture: string;
    nickname: string;
    email_verified: boolean;
  };
  bidderDetails: {
    email: string;
    picture: string;
    nickname: string;
    email_verified: boolean;
  };
  endingAt: string;
  createdAt: string;
  pictureUrl: string;
}
