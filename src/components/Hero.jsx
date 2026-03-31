import coffee from '../assets/coffee.jpg';

const Hero = () => {
  return (
    <>
      <div
        className="HeroSection py-12 px-8 max-w-7xl mx-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${coffee})` }}
      >
          <div className="bg-[#E3E0D7]/80 p-8 rounded-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="HeroContent flex-1 space-y-8">
                <h1 className="text-5xl font-bold text-[#2C1810]">
                  Savour the perfect Brew !
                </h1>
                <p className="text-lg text-gray-700 uppercase tracking-widest">
                  COFFEE THE BEST FOR YOU 🍵
                </p>
                <button className="bg-[#2C1810] text-[#F5F1EA] font-bold py-3 px-8 rounded-full hover:bg-[#F5F1EA] hover:text-[#2C1810] border-2 border-[#2C1810] transition duration-300">
                  Explore Menu
                </button>
                <div className="flex gap-6 mt-8">
                  <div className="group flex flex-col items-center cursor-pointer">
                    <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center 
                                  group-hover:bg-[#6F4E37] group-hover:scale-110 transition-all duration-300">
                      <span className="text-4xl group-hover:text-white transition-colors">☕</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase mt-2 text-[#2C1810] tracking-widest opacity-70 group-hover:opacity-100">
                      Espresso
                    </span>
                  </div>
                  <div className="group flex flex-col items-center cursor-pointer">
                    <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center 
                                  group-hover:bg-[#6F4E37] group-hover:scale-110 transition-all duration-300">
                      <span className="text-4xl group-hover:text-white transition-colors">🥛</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase mt-2 text-[#2C1810] tracking-widest opacity-70 group-hover:opacity-100">
                      Latte
                    </span>
                  </div>
                  <div className="group flex flex-col items-center cursor-pointer">
                    <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center 
                                  group-hover:bg-[#6F4E37] group-hover:scale-110 transition-all duration-300">
                      <span className="text-4xl group-hover:text-white transition-colors">🍮</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase mt-2 text-[#2C1810] tracking-widest opacity-70 group-hover:opacity-100">
                      Cappuccino
                    </span>
                  </div>
                  <div className="group flex flex-col items-center cursor-pointer">
                    <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center 
                                  group-hover:bg-[#6F4E37] group-hover:scale-110 transition-all duration-300">
                      <span className="text-4xl group-hover:text-white transition-colors">🫘</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase mt-2 text-[#2C1810] tracking-widest opacity-70 group-hover:opacity-100">
                      Beans
                    </span>
                  </div>
                </div>
              </div>
              {/* <div className="HeroImage flex-1 flex">
                <img 
                  src={coffee} 
                  alt="Coffee" 
                  className="max-w-lg w-full h-auto rounded-xl shadow-xl" 
                />
              </div> */}
            </div>
          </div>  
      </div>
    </>
  );
};

export default Hero;