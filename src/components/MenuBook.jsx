import { useState, useEffect, useRef } from 'react';

const menuPages = [
  { id: 0, type: 'cover' },
  {
    id: 1, type: 'content',
    leftPage: {
      category: 'Espresso Bar', subtitle: 'Bold. Intense. Unapologetic.',
      items: [
        { name: 'Lungo',      desc: 'Long pull espresso, smooth finish',       price: 199 },
        { name: 'Ristretto',  desc: 'Short, concentrated, syrupy',             price: 189 },
        { name: 'Americano',  desc: 'Espresso diluted with hot water',          price: 149 },
        { name: 'Flat White', desc: 'Double ristretto with velvety microfoam', price: 219 },
      ],
    },
    rightPage: {
      category: 'Cold Brews', subtitle: 'Chilled to perfection.',
      items: [
        { name: 'Iced Coffee', desc: 'Chilled brew over crystal ice',    price: 149 },
        { name: 'Cold Brew',   desc: '18-hour steeped, never bitter',    price: 179 },
        { name: 'Dalgona',     desc: 'Whipped cloud over cold milk',     price: 159 },
        { name: 'Nitro Cold',  desc: 'Nitrogen-infused, silky foam',     price: 209 },
      ],
    },
  },
  {
    id: 2, type: 'content',
    leftPage: {
      category: 'Milk Coffees', subtitle: 'Comfort in every sip.',
      items: [
        { name: 'Cappuccino',    desc: 'Equal parts espresso, milk, foam',       price: 169 },
        { name: 'Latte',         desc: 'Silky steamed milk, light espresso',     price: 179 },
        { name: 'Filter Coffee', desc: '75% coffee, 25% chicory, roasted fresh', price: 59  },
        { name: 'Cortado',       desc: 'Espresso cut with warm milk',            price: 159 },
      ],
    },
    rightPage: {
      category: 'Desserts', subtitle: 'Sweet endings, always.',
      items: [
        { name: 'Gulab Jamun',    desc: 'Rose water, cardamom, milk solids', price: 199 },
        { name: 'Choco Tiramisu', desc: 'Mascarpone, espresso, chocolate',   price: 250 },
        { name: 'Churros',        desc: 'Hot bittersweet chocolate dip',     price: 170 },
        { name: 'Lamingtons',     desc: 'Sponge cake, coconut, chocolate',   price: 280 },
      ],
    },
  },
  { id: 3, type: 'back' },
];

// On mobile, we flatten spreads into individual pages
// cover | left1 | right1 | left2 | right2 | back
const mobilePages = [
  { type: 'cover' },
  { type: 'single', page: menuPages[1].leftPage },
  { type: 'single', page: menuPages[1].rightPage },
  { type: 'single', page: menuPages[2].leftPage },
  { type: 'single', page: menuPages[2].rightPage },
  { type: 'back' },
];

const GRAIN = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

const CoverPage = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-5 bg-[#2C1810] relative overflow-hidden rounded-xl">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: GRAIN }} />
    <div className="absolute top-5 left-5 text-4xl opacity-20 rotate-[-20deg]">🫘</div>
    <div className="absolute bottom-6 right-6 text-3xl opacity-20 rotate-[30deg]">🫘</div>
    <div className="flex flex-col items-center gap-3 z-10 px-6 text-center">
      <span className="text-[#C4B5A0] text-[10px] tracking-[0.4em] uppercase">Flaoured Café</span>
      <div className="w-10 h-px bg-[#C4B5A0]/40" />
      <h2 className="text-[#F5F1EA] font-serif italic text-4xl md:text-5xl leading-tight">Our Menu</h2>
      <div className="w-10 h-px bg-[#C4B5A0]/40" />
      <span className="text-[#C4B5A0]/60 text-[10px] tracking-[0.3em] uppercase mt-1">Est. 2024 · Bhopal</span>
    </div>
    <p className="text-[#C4B5A0]/50 text-[10px] absolute bottom-4 tracking-widest uppercase">Swipe or tap → to begin</p>
  </div>
);

const BackPage = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-[#2C1810] relative overflow-hidden rounded-xl">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: GRAIN }} />
    <span className="text-5xl z-10">☕</span>
    <p className="text-[#F5F1EA] font-serif italic text-2xl z-10">Thank you</p>
    <p className="text-[#C4B5A0]/60 text-xs tracking-widest uppercase z-10">for visiting Flaoured</p>
    <div className="w-10 h-px bg-[#C4B5A0]/30 z-10" />
    <p className="text-[#C4B5A0]/40 text-[10px] tracking-widest uppercase z-10 mt-1">wake up to delicious 😋</p>
  </div>
);

const ContentPage = ({ page }) => (
  <div className="w-full h-full flex flex-col p-5 md:p-8 bg-[#FDF8F2] relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'repeating-linear-gradient(transparent, transparent 28px, #2C1810 28px, #2C1810 29px)',
      backgroundPositionY: '48px'
    }} />
    <div className="z-10 flex flex-col h-full">
      <p className="text-[#C4B5A0] text-[9px] md:text-[10px] tracking-[0.35em] uppercase mb-0.5">{page.subtitle}</p>
      <h3 className="font-serif italic text-[#2C1810] text-xl md:text-2xl mb-1">{page.category}</h3>
      <div className="w-8 h-px bg-[#6F4E37]/40 mb-4 md:mb-6" />
      <div className="flex flex-col gap-3 md:gap-5 flex-1">
        {page.items.map((item, i) => (
          <div key={i} className="flex flex-col gap-0.5 border-b border-[#E3E0D7] pb-3 last:border-0 last:pb-0">
            <div className="flex items-baseline justify-between">
              <span className="text-xs md:text-sm font-bold text-[#2C1810] tracking-wide">{item.name}</span>
              <span className="text-xs md:text-sm font-bold text-[#6F4E37]">₹{item.price}</span>
            </div>
            <p className="text-[10px] md:text-[11px] text-[#6F4E37]/70 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-3">
        <span className="text-[9px] text-[#C4B5A0]/50 tracking-widest uppercase">Flaoured ·</span>
      </div>
    </div>
  </div>
);

const Spine = () => (
  <div className="w-4 md:w-6 flex-shrink-0 relative z-20">
    <div className="absolute inset-0" style={{
      background: 'linear-gradient(to right, rgba(44,24,16,0.2) 0%, rgba(44,24,16,0.06) 50%, rgba(44,24,16,0.2) 100%)'
    }} />
  </div>
);

const MenuBook = ({ onClose }) => {
  const [spread, setSpread]       = useState(0);
  const [mPage, setMPage]         = useState(0);
  const [flipping, setFlipping]   = useState(false);
  const [direction, setDirection] = useState(null);
  const [entered, setEntered]     = useState(false);
  const [isMobile, setIsMobile]   = useState(false);

  // Touch swipe state
  const touchStartX = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, []);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goTo('next');
      if (e.key === 'ArrowLeft')  goTo('prev');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const totalMobile  = mobilePages.length;
  const totalDesktop = menuPages.length;

  const goTo = (dir) => {
    if (flipping) return;
    if (isMobile) {
      if (dir === 'next' && mPage >= totalMobile - 1)  return;
      if (dir === 'prev' && mPage <= 0)                return;
    } else {
      if (dir === 'next' && spread >= totalDesktop - 1) return;
      if (dir === 'prev' && spread <= 0)                return;
    }
    setDirection(dir);
    setFlipping(true);
    setTimeout(() => {
      if (isMobile) setMPage(p => dir === 'next' ? p + 1 : p - 1);
      else          setSpread(s => dir === 'next' ? s + 1 : s - 1);
      setFlipping(false);
      setDirection(null);
    }, 380);
  };

  // Touch handlers
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? 'next' : 'prev');
    touchStartX.current = null;
  };

  // Current page data
  const currentDesktop = menuPages[spread];
  const currentMobile  = mobilePages[mPage];
  const totalDots      = isMobile ? totalMobile : totalDesktop;
  const currentDot     = isMobile ? mPage : spread;

  // Page label
  const pageLabel = () => {
    if (isMobile) {
      if (currentMobile.type === 'cover') return 'Cover';
      if (currentMobile.type === 'back')  return 'Back Cover';
      return currentMobile.page.category;
    }
    if (currentDesktop.type === 'cover') return 'Cover';
    if (currentDesktop.type === 'back')  return 'Back Cover';
    return `${currentDesktop.leftPage.category} & ${currentDesktop.rightPage.category}`;
  };

  const flipClass = flipping
    ? direction === 'next' ? 'flip-next' : 'flip-prev'
    : '';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&display=swap');
        .flip-next { animation: flipNext 0.38s cubic-bezier(.4,0,.2,1) forwards; }
        .flip-prev { animation: flipPrev 0.38s cubic-bezier(.4,0,.2,1) forwards; }
        @keyframes flipNext {
          0%   { transform: perspective(1000px) rotateY(0deg);   opacity:1; }
          45%  { transform: perspective(1000px) rotateY(-45deg); opacity:.6; }
          100% { transform: perspective(1000px) rotateY(0deg);   opacity:1; }
        }
        @keyframes flipPrev {
          0%   { transform: perspective(1000px) rotateY(0deg);  opacity:1; }
          45%  { transform: perspective(1000px) rotateY(45deg); opacity:.6; }
          100% { transform: perspective(1000px) rotateY(0deg);  opacity:1; }
        }
      `}</style>

      <div
        className="fixed inset-0 z-50 flex items-center justify-center px-3 py-4 md:px-6"
        style={{ background: 'rgba(15,7,3,0.88)', backdropFilter: 'blur(8px)' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Close button */}
        <button onClick={onClose}
          className="absolute top-4 right-5 md:top-6 md:right-8 text-[#C4B5A0] hover:text-white
            text-2xl md:text-3xl font-light transition-colors z-10 w-10 h-10 flex items-center justify-center">
          ✕
        </button>

        <div className="relative flex flex-col items-center gap-4 w-full max-w-3xl"
          style={{
            opacity: entered ? 1 : 0,
            transform: entered ? 'scale(1) translateY(0)' : 'scale(0.93) translateY(28px)',
            transition: 'all 0.5s cubic-bezier(.4,0,.2,1)'
          }}>

          {/* Label */}
          <p className="text-[#C4B5A0]/60 text-[9px] md:text-[10px] tracking-[0.4em] uppercase">{pageLabel()}</p>

          {/* ── MOBILE: single page ── */}
          {isMobile && (
            <div className={`w-full rounded-xl overflow-hidden shadow-2xl ${flipClass}`}
              style={{ height: 'min(70vh, 440px)', boxShadow: '0 20px 60px rgba(0,0,0,0.7)' }}>
              {currentMobile.type === 'cover'  && <CoverPage />}
              {currentMobile.type === 'back'   && <BackPage />}
              {currentMobile.type === 'single' && (
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <ContentPage page={currentMobile.page} />
                </div>
              )}
            </div>
          )}

          {/* ── DESKTOP: two-page spread ── */}
          {!isMobile && (
            <div className={`flex shadow-2xl rounded-sm ${flipClass}`}
              style={{
                width: currentDesktop.type === 'content' ? 680 : 320,
                height: 480,
                boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(44,24,16,0.4)',
                transition: 'width 0.35s cubic-bezier(.4,0,.2,1)',
              }}>
              {currentDesktop.type === 'cover' && <div className="w-full h-full rounded-sm overflow-hidden"><CoverPage /></div>}
              {currentDesktop.type === 'back'  && <div className="w-full h-full rounded-sm overflow-hidden"><BackPage /></div>}
              {currentDesktop.type === 'content' && (
                <>
                  <div className="flex-1 h-full rounded-l-sm overflow-hidden border-r border-[#D4C4B0]/30">
                    <ContentPage page={currentDesktop.leftPage} />
                  </div>
                  <Spine />
                  <div className="flex-1 h-full rounded-r-sm overflow-hidden">
                    <ContentPage page={currentDesktop.rightPage} />
                  </div>
                </>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center gap-6 md:gap-8 mt-1">
            <button onClick={() => goTo('prev')} disabled={currentDot === 0 || flipping}
              className="text-[#C4B5A0] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed
                text-xs font-bold tracking-widest uppercase transition-colors duration-200 px-2 py-2">
              ← {isMobile ? '' : 'Prev'}
            </button>

            {/* Dots */}
            <div className="flex gap-1.5 md:gap-2">
              {Array.from({ length: totalDots }).map((_, i) => (
                <div key={i} className="rounded-full transition-all duration-300" style={{
                  width: currentDot === i ? 18 : 5,
                  height: 5,
                  background: currentDot === i ? '#F5F1EA' : 'rgba(245,241,234,0.25)'
                }} />
              ))}
            </div>

            <button onClick={() => goTo('next')} disabled={currentDot === totalDots - 1 || flipping}
              className="text-[#C4B5A0] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed
                text-xs font-bold tracking-widest uppercase transition-colors duration-200 px-2 py-2">
              {isMobile ? '' : 'Next'} →
            </button>
          </div>

          <p className="text-[#C4B5A0]/25 text-[9px] tracking-widest uppercase">
            {isMobile ? 'swipe left or right to flip' : 'use ← → arrow keys to flip'}
          </p>
        </div>
      </div>
    </>
  );
};

export default MenuBook;