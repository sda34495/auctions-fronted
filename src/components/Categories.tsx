'use client';

const Categories = () => {
  return (
    <div className="bg-black text-white p-12 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 grid-rows-3 gap-5 text-7xl font-bold">
        <div className="flex space-x-10 overflow-hidden p-4">
          <span className="inline-block animate-slideRight text-red-500">Interiors</span>
          <span className="inline-block text-yellow-400 animate-slideRight">Jewellery</span>
          <span className="inline-block text-green-400 animate-slideRight">Books</span>
        </div>
        <div className="flex space-x-10 overflow-hidden p-4">
          <span className="inline-block text-blue-400 animate-slideRight">Comics</span>
          <span className="inline-block text-purple-400 animate-slideRight">Fashion</span>
          <span className="inline-block text-pink-400 animate-slideRight">Coins & Stones</span>
        </div>
        <div className="flex space-x-10 overflow-hidden p-4">
          <span className="inline-block text-orange-400 animate-slideRight">Watches</span>
          <span className="inline-block text-gray-400 animate-slideRight">Cars & Motorbikes</span>
          <span className="inline-block text-red-500 animate-slideRight">Wines</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
