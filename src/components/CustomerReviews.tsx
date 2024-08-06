const reviews = [
    {
        avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1722673667~exp=1722677267~hmac=e2f5b6bab389cf7786f5527c13660f498e89b4eb2e29123cfa19dd9ec5496b04&w=1380",
        name: "John Doe",
        date: "July 15, 2024",
        review: "AuctionMania is fantastic! I won an amazing painting at a great price. The process was smooth and exciting.",
    },
    {
        avatar: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1722675625~exp=1722679225~hmac=49cc199f8cf4f0da97a382773edf2ca49b880c65643d7026c58234befb6a093b&w=996",
        name: "Jane Smith",
        date: "August 3, 2024",
        review: "I love AuctionMania! The variety of items available for auction is incredible. Highly recommend it to everyone.",
    },
    {
        avatar: "https://img.freepik.com/free-photo/customer-experience-creative-collage_23-2149346504.jpg?t=st=1722675578~exp=1722679178~hmac=5bc2133c18a3e4b41bb31ed11b02a09df0d14b5dba7448e391cbe34ca58c9018&w=900",
        name: "Michael Johnson",
        date: "June 25, 2024",
        review: "A great platform for finding unique items. I’ve had a wonderful experience bidding on different auctions.",
    },
    {
        avatar: "https://img.freepik.com/free-photo/waist-up-amused-friendly-looking-charming-dark-skinned-woman-with-curly-hairstyle-grey-shirt-pointing-left-smiling-joyfully_176420-31292.jpg?t=st=1722675695~exp=1722679295~hmac=34cf11f21088540bb625ebf9d360e8d5c2d2c5ac1273356212b7345cf3e54dce&w=1380",
        name: "Emily Davis",
        date: "July 10, 2024",
        review: "AuctionMania is my go-to site for online auctions. Easy to use, and I’ve won some really cool stuff!",
    },
];

const CustomerReviews = () => {
    return (
        <section className="bg-[#F3F2ED] text-black py-8">
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mt-4 mb-8 text-center">Happy Customers 😊</h2>
                <div className="grid gap-8 lg:grid-cols-2">
                    {reviews.map((review, index) => (
                        <div key={index} className="p-6 bg-light-blue-500 rounded-lg shadow-md flex items-center space-x-4">
                            <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 ">{review.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{review.date}</p>
                                <p className="mt-4 text-gray-900 ">{review.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
