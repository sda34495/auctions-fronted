'use client'


const Categories = () => {  

  return (
    <div className="bg-black text-white p-12 flex flex-col items-center justify-center">
      {/* <div className="text-center mb-10">
        <p className="text-lg">EXPLORE OUR CATEGORIES</p>
      </div> */}
      <div
        className="grid grid-cols-1 grid-rows-3 gap-5 text-7xl font-bold "
      >
        <div className= "   flex space-x-10 overflow-hidden p-4 ">
          <span className="inline-block">Interiors</span>
          <span className=" inline-block text-gray-600">Jewellery</span>
          <span className="inline-block">Books</span>
        </div>
        <div className="  flex space-x-10 overflow-hidden p-4 ">
          <span className=" text-gray-600 inline-block">Comics</span>
          <span className=" inline-block">Fashion</span>
          <span className="text-gray-600 inline-block">Coins & Stones</span>
        </div>
        <div className="  flex space-x-10 overflow-hidden p-4 ">
          <span className="inline-block">Watches</span>
          <span className="text-gray-600 inline-block">Cars & Motorbikes</span>
          <span className="  inline-block">Wines</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
