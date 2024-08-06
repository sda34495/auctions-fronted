const AboutUs = () => {
    return (
        <section className="bg-white py-8">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-90 mb-4">About Us</h2>
                <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 mb-8">
                    AuctionMania is a leading online auction platform where you can bid on and win amazing items. Our mission is to provide a seamless and thrilling auction experience for our users. With a wide range of items and secure transactions, we ensure that your bidding experience is both exciting and safe.
                </p>
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15872.jpg?t=st=1722872283~exp=1722875883~hmac=b93a96c42314481d938d3e2c03078610e0667398c0f24ca319b250822a3328c4&w=1380"
                            // src="https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8983.jpg?t=st=1722872225~exp=1722875825~hmac=d6e4fa5d7b30381f07df0488b682b9af6b77be9213f7e67199c45fae0941d5c7&w=1380"
                            // src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?t=st=1722674683~exp=1722678283~hmac=e85bde7bea135a0cf4c9c9cf3243363738b34aef06eeca8121fc996833fe098e&w=1380"
                            alt="Our Team"
                            className="rounded-lg shadow-md mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Team</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Our dedicated team works around the clock to bring you the best auction experience. Meet the people who make AuctionMania possible.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src="https://img.freepik.com/free-vector/gradient-our-mission-concept-illustrated_23-2149108413.jpg?t=st=1722675213~exp=1722678813~hmac=099678963cd9bbcf8881a6ca19bf826598d6d2ad6ef0a0b89a04e394927f157d&w=826"
                            // src="./hero.svg"
                            alt="Our Mission"
                            className="rounded-lg shadow-md mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            We aim to revolutionize the online auction space by providing a secure and user-friendly platform. Our mission is to connect buyers and sellers in a dynamic and transparent marketplace.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
