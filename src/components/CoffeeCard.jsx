import { useRef, useState } from 'react';
import coffeeItems from './coffeeCardComp';
const Card = ({ item }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-[210px] flex-shrink-0">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow"
        >
          <span className={`text-sm ${liked ? 'text-red-500' : 'text-gray-400'}`}>
            {liked ? '♥' : '♡'}
          </span>
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-[#2C1810] text-sm">{item.name}</h3>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-[#2C1810] text-sm">Rs. {item.price}</span>
        </div>
      </div>
    </div>
  );
};
const Section = ({ title, items }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = document.getElementById(title);
    if (el) el.scrollLeft += dir === 'left' ? -240 : 240;
  };

  return (
    <div className="my-10 max-w-7xl mx-auto px-4">
      <h2 className="text-center font-bold text-lg tracking-widest text-[#2C1810] uppercase mb-6">
        {title}
      </h2>

      <div className="relative flex items-center">
        <button
          onClick={() => scroll('left')}
          className="text-gray-400 hover:text-[#2C1810] text-xl font-bold px-2 z-10"
        >
          ‹
        </button>
        <div
          id={title}
          className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide px-2"
        >
          {items.map(item => <Card key={item.id} item={item} />)}
        </div>
        <button
          onClick={() => scroll('right')}
          className="text-gray-400 hover:text-[#2C1810] text-xl font-bold px-2 z-10"
        >
          ›
        </button>
      </div>
    </div>
  );
};

const CoffeeCard = () => {
  const coffees = coffeeItems.filter(i => i.category === 'coffee');
  const desserts = coffeeItems.filter(i => i.category === 'dessert');

  return (
    <div className="bg-[#F5F1EA] py-6">
      <Section title="Our Special Coffee" items={coffees} />
      <Section title="Our Special Dessert" items={desserts} />
    </div>
  );
};

export default CoffeeCard;