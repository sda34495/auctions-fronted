import Wordrotate from "../magicui/word-rotate";

const words = [
    "Choices",
    "Treasures",
    "Deals",
    "Rare Items",
    "Bargains",
    "Unique Pieces",
    "Hidden Gems",
    "Collectibles",
    "Exclusive Offers",
    "Antiques",
    "Special Finds",
    "Valuables",
    "Great Prices",
    "Must-Haves",
    "Fantastic Buys",
    "One-of-a-Kind Finds"


];

const Hero = () => (
    <section className=" lg:rounded-b-large md:py-28 lg:py-20">
        <div className="  container mx-auto p-6 flex flex-col items-center text-black">
            <div className="text-center">
                <div className="flex justify-center items-center text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold mb-4 text-slate-950">
                    <span>Auction where
                        you'll find
                        <Wordrotate words={words} className="ml-3 text-blue-900" /></span>
                </div>

                <p className="md:text-lg lg:text-xl mb-6 w-full md:w-3/4 font-semibold  mt-4 md:mt-8 text-center mx-auto">
                    Objects often tell us as much about the personalities
                    who owned them as they do about a particular period in history.
                </p>

            </div>




            <img src='./finalauction.svg' alt="auction" className="w-1/2 h-3/4 mt-4" />

        </div>
    </section>



);

export default Hero;