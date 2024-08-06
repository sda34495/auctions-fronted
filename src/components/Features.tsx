const Features = () => {
    const features = [
        {
            title: "Easy Bidding",
            description: "Place bids effortlessly with our user-friendly interface.",
            icon: "https://img.freepik.com/free-vector/bid-design-background_52683-76080.jpg?t=st=1722674816~exp=1722678416~hmac=aee710e90742a8df1d4de6fca02f4aeb316c45dc46c9b271f297ab5164326314&w=1380", // Replace with your own icon URL
        },
        {
            title: "Secure Payments",
            description: "Your transactions are safe and secure with our payment gateway.",
            icon: "https://img.freepik.com/free-photo/3d-render-online-payment-transaction-security_107791-16637.jpg?t=st=1722674855~exp=1722678455~hmac=4a438a17095c9679545357410ab3656df53def194c108926a64cee3a11b499dc&w=826", // Replace with your own icon URL
        },
        {
            title: "Wide Selection",
            description: "Choose from a wide range of items across various categories.",
            icon: "https://img.freepik.com/free-vector/choice-worker-concept_23-2148627427.jpg?t=st=1722674895~exp=1722678495~hmac=db83ab727f83ef30771fb66548023678c2c2b7143ce3a86f7218bfc0e9aa493d&w=826", // Replace with your own icon URL
        },
        {
            title: "24/7 Support",
            description: "Get assistance anytime with our round-the-clock support.",
            icon: "https://img.freepik.com/free-vector/call-center-abstract-concept-vector-illustration-handling-call-system-virtual-help-center-customer-service-point-product-support-market-research-communication-software-abstract-metaphor_335657-2885.jpg?t=st=1722675002~exp=1722678602~hmac=46789a471713b6a33446ef6102cf74c66885d0921b1023bc773bd8fd52b668e0&w=826", // Replace with your own icon URL
        },
    ];

    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-8">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Our Features</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-12">Explore the benefits of using AuctionMania.</p>
                <div className="grid gap-8 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <img src={feature.icon} alt={feature.title} className="w-16 h-16 mx-auto mb-4 rounded" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
