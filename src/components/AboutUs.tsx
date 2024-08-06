const AboutUs = () => {
    return (
        <section className="bg-white py-8">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4">About Us</h2>
                <p className="max-w-2xl text-lg mx-auto text-gray-500 mb-8">
                    AuctionMania is a leading online auction platform where you can bid on and win amazing items. Our mission is to provide a seamless and thrilling auction experience for our users. With a wide range of items and secure transactions, we ensure that your bidding experience is both exciting and safe.
                </p>
                <div className=" grid gap-8 lg:grid-cols-2 items-center">
                    <div className=" flex flex-col items-center justify-center text-center p-4">
                        <img
                            src="https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_640.jpg"
                            alt="Our Team"
                            className="rounded-lg shadow-md mb-4 "
                        />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Team</h3>
                        <p className="text-gray-400">
                            Our dedicated team works around the clock to bring you the best auction experience. Meet the people who make AuctionMania possible.
                        </p>
                    </div>
                    <div className=" flex flex-col items-center justify-center text-center p-4">
                        <img
                            src="https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_640.jpg"
                            alt="Our Mission"
                            className="rounded-lg shadow-md mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                        <p className="text-gray-400">
                            We aim to revolutionize the online auction space by providing a secure and user-friendly platform. Our mission is to connect buyers and sellers in a dynamic and transparent marketplace.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
