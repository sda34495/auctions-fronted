const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#6d3f77] to-[#f7c93b] py-6">
            <div className="container mx-auto text-center text-black">
                <p className="text-lg font-semibold">AuctionMania</p>
                <p className="mt-2">
                    Your go-to platform for exciting online auctions. Discover unique items, connect with sellers worldwide, and bid with confidence.
                    From vintage collectibles to modern gadgets, we have something for everyone.
                </p>
                <p className="mt-2">
                    For any inquiries or support, reach out to us at:
                    <a href="mailto:contact.synchro9@gmail.com" className="font-bold underline"> contact.synchro9@gmail.com</a>
                </p>
                <p className="mt-4">© 2024 AuctionMania. All rights reserved.</p>
                <p className="mt-2">Terms of Service | Privacy Policy</p>
            </div>
        </footer>
    );
};

export default Footer;
