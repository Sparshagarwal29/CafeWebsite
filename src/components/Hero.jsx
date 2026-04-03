import { useEffect, useState } from 'react';
import coffee from '../assets/coffee.jpg';

const categories = [
  { icon: '☕', label: 'Espresso' },
  { icon: '🥛', label: 'Latte' },
  { icon: '🍮', label: 'Cappuccino' },
  { icon: '🫘', label: 'Beans' },
];

const CoffeeBean = ({ size = 38, color = '#6F4E37', opacity = 0.55 }) => (
  <svg width={size} height={size * 1.55} viewBox="0 0 38 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="19" cy="29.5" rx="17" ry="27" fill={color} opacity={opacity} />
    <ellipse cx="13" cy="18" rx="4.5" ry="7" fill="white" opacity="0.12" transform="rotate(-15 13 18)" />
    <path
      d="M19 5 C10 15, 10 25, 19 29.5 C28 34, 28 44, 19 54"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.35"
      fill="none"
    />
  </svg>
);

const leftBeans = [
  { top: '8%',  left: '-18px', size: 52, rotate: -30,  opacity: 0.45, delay: '0s',    duration: '6s'  },
  { top: '22%', left: '10px',  size: 34, rotate: 20,   opacity: 0.35, delay: '1.2s',  duration: '7s'  },
  { top: '40%', left: '-10px', size: 44, rotate: -55,  opacity: 0.50, delay: '0.6s',  duration: '5.5s'},
  { top: '58%', left: '18px',  size: 28, rotate: 70,   opacity: 0.30, delay: '2s',    duration: '8s'  },
  { top: '72%', left: '-5px',  size: 40, rotate: -15,  opacity: 0.42, delay: '0.3s',  duration: '6.5s'},
  { top: '86%', left: '24px',  size: 32, rotate: 45,   opacity: 0.28, delay: '1.8s',  duration: '7.5s'},
];

const rightBeans = [
  { top: '6%',  right: '-14px', size: 46, rotate: 25,  opacity: 0.40, delay: '0.8s',  duration: '7s'  },
  { top: '20%', right: '12px',  size: 30, rotate: -40, opacity: 0.32, delay: '0s',    duration: '5.8s'},
  { top: '36%', right: '-8px',  size: 50, rotate: 60,  opacity: 0.48, delay: '1.5s',  duration: '6.2s'},
  { top: '54%', right: '20px',  size: 26, rotate: -70, opacity: 0.28, delay: '2.4s',  duration: '8.5s'},
  { top: '68%', right: '-16px', size: 42, rotate: 15,  opacity: 0.44, delay: '0.4s',  duration: '5.5s'},
  { top: '82%', right: '8px',   size: 36, rotate: -25, opacity: 0.33, delay: '1s',    duration: '7.2s'},
];

const BeanCluster = ({ beans, side }) => (
  <>
    {beans.map((b, i) => (
      <div
        key={i}
        className="absolute"
        style={{
          top: b.top,
          [side]: b[side],
          transform: `rotate(${b.rotate}deg)`,
          animation: `floatBean ${b.duration} ease-in-out ${b.delay} infinite`,
        }}
      >
        <CoffeeBean size={b.size} opacity={b.opacity} />
      </div>
    ))}
  </>
);

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <style>{`
        @keyframes floatBean {
          0%   { transform: translateY(0px)   rotate(var(--r, 0deg)); }
          50%  { transform: translateY(-10px) rotate(var(--r, 0deg)); }
          100% { transform: translateY(0px)   rotate(var(--r, 0deg)); }
        }
      `}</style>

      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ background: '#F5F1EA' }}
      >
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${coffee})` }}
        >
          <div className="absolute inset-y-0 left-0 w-32"
            style={{ background: 'linear-gradient(to right, #F5F1EA, transparent)' }} />
          <div className="absolute inset-0 bg-[#2C1810]/30" />
        </div>

        <div className="absolute left-0 inset-y-0 w-16 pointer-events-none z-10">
          <BeanCluster beans={leftBeans} side="left" />
        </div>
        <div className="absolute right-0 inset-y-0 w-16 pointer-events-none z-10">
          <BeanCluster beans={rightBeans} side="right" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-14 w-full grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
          <div className="flex flex-col justify-center gap-8">

            <div className="flex items-center gap-3 transition-all duration-700"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0ms' }}>
              <span className="block w-8 h-px bg-[#6F4E37]" />
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#6F4E37]">
                Est. 2024 · Bhopal's Finest
              </p>
            </div>

            <div className="transition-all duration-700"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '150ms' }}>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight">
                Savour the
                <span className="block italic font-serif text-[#6F4E37]">Perfect Brew</span>
              </h1>
            </div>

            <p className="text-base text-[#6F4E37]/80 max-w-sm leading-relaxed transition-all duration-700"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '300ms' }}>
              Handcrafted coffees and desserts made with love. Every cup tells a story —
              come find yours.
            </p>

            <div className="flex items-center gap-4 transition-all duration-700"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '450ms' }}>
              <button
                onClick={scrollToMenu}
                className="bg-[#2C1810] text-[#F5F1EA] font-bold py-3.5 px-8 rounded-full
                  hover:bg-[#6F4E37] transition-colors duration-300 text-sm tracking-widest uppercase"
              >
                Explore Menu
              </button>
              <button className="flex items-center gap-2 text-sm font-semibold text-[#2C1810]
                underline underline-offset-4 hover:text-[#6F4E37] transition-colors duration-200">
                Our Story →
              </button>
            </div>

            <div className="flex flex-wrap gap-3 transition-all duration-700"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '600ms' }}>
              {categories.map(({ icon, label }) => (
                <div key={label}
                  className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[#C4B5A0]/50
                    px-4 py-2 rounded-full cursor-pointer
                    hover:bg-[#2C1810] hover:border-[#2C1810] transition-all duration-200 group">
                  <span className="text-base">{icon}</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#2C1810] group-hover:text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-end justify-start pb-12 pl-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl flex flex-col gap-4 w-52 transition-all duration-700"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '700ms' }}>
              <div className="border-b border-[#E3E0D7] pb-4">
                <p className="text-3xl font-bold text-[#2C1810]">4.9 ★</p>
                <p className="text-xs text-[#6F4E37] mt-1 tracking-wide">Average Rating</p>
              </div>
              <div className="border-b border-[#E3E0D7] pb-4">
                <p className="text-3xl font-bold text-[#2C1810]">2k+</p>
                <p className="text-xs text-[#6F4E37] mt-1 tracking-wide">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#2C1810]">15+</p>
                <p className="text-xs text-[#6F4E37] mt-1 tracking-wide">Brew Varieties</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60 C360 0 1080 0 1440 60 L1440 60 L0 60 Z" fill="#F5F1EA" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;