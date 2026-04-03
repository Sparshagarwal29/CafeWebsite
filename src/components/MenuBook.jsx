import { useState, useEffect } from 'react';

const menuPages = [
  {
    id: 0,
    type: 'cover',
  },
  {
    id: 1,
    type: 'content',
    leftPage: {
      category: 'Espresso Bar',
      subtitle: 'Bold. Intense. Unapologetic.',
      items: [
        { name: 'Lungo',        desc: 'Long pull espresso, smooth finish',        price: 199 },
        { name: 'Ristretto',    desc: 'Short, concentrated, syrupy',              price: 189 },
        { name: 'Americano',    desc: 'Espresso diluted with hot water',           price: 149 },
        { name: 'Flat White',   desc: 'Double ristretto with velvety microfoam',  price: 219 },
      ],
    },
    rightPage: {
      category: 'Cold Brews',
      subtitle: 'Chilled to perfection.',
      items: [
        { name: 'Iced Coffee',   desc: 'Chilled brew over crystal ice',           price: 149 },
        { name: 'Cold Brew',     desc: '18-hour steeped, never bitter',           price: 179 },
        { name: 'Dalgona',       desc: 'Whipped cloud over cold milk',            price: 159 },
        { name: 'Nitro Cold',    desc: 'Nitrogen-infused, silky foam',            price: 209 },
      ],
    },
  },
  {
    id: 2,
    type: 'content',
    leftPage: {
      category: 'Milk Coffees',
      subtitle: 'Comfort in every sip.',
      items: [
        { name: 'Cappuccino',   desc: 'Equal parts espresso, milk, foam',         price: 169 },
        { name: 'Latte',        desc: 'Silky steamed milk, light espresso',       price: 179 },
        { name: 'Filter Coffee',desc: '75% coffee, 25% chicory, freshly roasted', price: 59  },
        { name: 'Cortado',      desc: 'Espresso cut with warm milk',              price: 159 },
      ],
    },
    rightPage: {
      category: 'Desserts',
      subtitle: 'Sweet endings, always.',
      items: [
        { name: 'Gulab Jamun',       desc: 'Rose water, cardamom, milk solids', price: 199 },
        { name: 'Choco Tiramisu',    desc: 'Mascarpone, espresso, chocolate',   price: 250 },
        { name: 'Churros',           desc: 'Hot bittersweet chocolate dip',     price: 170 },
        { name: 'Lamingtons',        desc: 'Sponge cake, coconut, chocolate',   price: 280 },
      ],
    },
  },
  {
    id: 3,
    type: 'back',
  },
];

const TOTAL_SPREADS = menuPages.length; // 0=cover,1,2,3=back

// ── Page content renderers ──────────────────────────────────────────
const CoverPage = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-[#2C1810] relative overflow-hidden">
    {/* grain texture */}
    <div className="absolute inset-0 opacity-10"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")' }} />
    {/* beans deco */}
    <div className="absolute top-6 left-6 text-5xl opacity-20 rotate-[-20deg]">🫘</div>
    <div className="absolute bottom-8 right-8 text-4xl opacity-20 rotate-[30deg]">🫘</div>
    <div className="absolute top-1/3 right-6 text-3xl opacity-15 rotate-[10deg]">🫘</div>

    <div className="flex flex-col items-center gap-3 z-10">
      <span className="text-[#C4B5A0] text-xs tracking-[0.4em] uppercase">Flaoured Café</span>
      <div className="w-12 h-px bg-[#C4B5A0]/40" />
      <h2 className="text-[#F5F1EA] font-serif italic text-5xl text-center leading-tight">
        Our Menu
      </h2>
      <div className="w-12 h-px bg-[#C4B5A0]/40" />
      <span className="text-[#C4B5A0]/60 text-[10px] tracking-[0.3em] uppercase mt-2">
        Est. 2024 · Bhopal
      </span>
    </div>
    <p className="text-[#C4B5A0]/50 text-[10px] absolute bottom-5 tracking-widest uppercase">
      Turn the page →
    </p>
  </div>
);

const BackPage = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-[#2C1810] relative overflow-hidden">
    <div className="absolute inset-0 opacity-10"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")' }} />
    <span className="text-6xl z-10">☕</span>
    <p className="text-[#F5F1EA] font-serif italic text-2xl z-10">Thank you</p>
    <p className="text-[#C4B5A0]/60 text-xs tracking-widest uppercase z-10">for visiting Flaoured</p>
    <div className="w-10 h-px bg-[#C4B5A0]/30 z-10" />
    <p className="text-[#C4B5A0]/40 text-[10px] tracking-widest uppercase z-10 mt-2">
      wake up to delicious 😋
    </p>
  </div>
);

const ContentPage = ({ page }) => (
  <div className="w-full h-full flex flex-col p-8 bg-[#FDF8F2] relative">
    {/* paper texture lines */}
    <div className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 28px, #2C1810 28px, #2C1810 29px)',
        backgroundPositionY: '48px'
      }} />
    <div className="z-10 flex flex-col h-full">
      <p className="text-[#C4B5A0] text-[10px] tracking-[0.35em] uppercase mb-1">{page.subtitle}</p>
      <h3 className="font-serif italic text-[#2C1810] text-2xl mb-1">{page.category}</h3>
      <div className="w-10 h-px bg-[#6F4E37]/40 mb-6" />

      <div className="flex flex-col gap-5 flex-1">
        {page.items.map((item, i) => (
          <div key={i} className="flex flex-col gap-0.5 border-b border-[#E3E0D7] pb-4 last:border-0">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-bold text-[#2C1810] tracking-wide">{item.name}</span>
              <span className="text-sm font-bold text-[#6F4E37]">₹{item.price}</span>
            </div>
            <p className="text-[11px] text-[#6F4E37]/70 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* page corner deco */}
      <div className="flex justify-end mt-4">
        <span className="text-[10px] text-[#C4B5A0]/50 tracking-widest uppercase">Flaoured ·</span>
      </div>
    </div>
  </div>
);

// ── Spine shadow between pages ───────────────────────────────────────
const Spine = () => (
  <div className="w-6 flex-shrink-0 relative z-20">
    <div className="absolute inset-0"
      style={{
        background: 'linear-gradient(to right, rgba(44,24,16,0.18) 0%, rgba(44,24,16,0.06) 40%, rgba(44,24,16,0.06) 60%, rgba(44,24,16,0.18) 100%)'
      }} />
  </div>
);

// ── Main MenuBook component ──────────────────────────────────────────
const MenuBook = ({ onClose }) => {
  const [spread, setSpread]     = useState(0); // which spread we're on
  const [flipping, setFlipping] = useState(false);
  const [direction, setDirection] = useState(null); // 'next' | 'prev'
  const [entered, setEntered]   = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80);
    return () => clearTimeout(t);
  }, []);

  const goTo = (dir) => {
    if (flipping) return;
    if (dir === 'next' && spread >= TOTAL_SPREADS - 1) return;
    if (dir === 'prev' && spread <= 0) return;

    setDirection(dir);
    setFlipping(true);
    setTimeout(() => {
      setSpread(s => dir === 'next' ? s + 1 : s - 1);
      setFlipping(false);
      setDirection(null);
    }, 420);
  };

  const current = menuPages[spread];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&display=swap');
        .book-serif { font-family: 'Playfair Display', serif; }

        .flip-next {
          animation: flipNext 0.42s cubic-bezier(.4,0,.2,1) forwards;
        }
        .flip-prev {
          animation: flipPrev 0.42s cubic-bezier(.4,0,.2,1) forwards;
        }
        @keyframes flipNext {
          0%   { transform: perspective(1200px) rotateY(0deg);   opacity:1; }
          50%  { transform: perspective(1200px) rotateY(-50deg); opacity:.7; }
          100% { transform: perspective(1200px) rotateY(0deg);   opacity:1; }
        }
        @keyframes flipPrev {
          0%   { transform: perspective(1200px) rotateY(0deg);  opacity:1; }
          50%  { transform: perspective(1200px) rotateY(50deg); opacity:.7; }
          100% { transform: perspective(1200px) rotateY(0deg);  opacity:1; }
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: 'rgba(20,10,5,0.82)', backdropFilter: 'blur(6px)' }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-[#C4B5A0] hover:text-white text-3xl font-light transition-colors z-60"
        >
          ✕
        </button>

        {/* Book wrapper */}
        <div
          className="relative flex flex-col items-center gap-6"
          style={{
            opacity: entered ? 1 : 0,
            transform: entered ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(30px)',
            transition: 'all 0.5s cubic-bezier(.4,0,.2,1)'
          }}
        >
          {/* Book label */}
          <p className="text-[#C4B5A0]/60 text-[10px] tracking-[0.4em] uppercase">
            {spread === 0 ? 'Cover' : spread === TOTAL_SPREADS - 1 ? 'Back Cover' : `Page ${spread * 2 - 1} – ${spread * 2}`}
          </p>

          {/* The Book */}
          <div
            className={`flex shadow-2xl rounded-sm ${flipping ? (direction === 'next' ? 'flip-next' : 'flip-prev') : ''}`}
            style={{
              width: current.type === 'cover' || current.type === 'back' ? 320 : 680,
              height: 480,
              boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(44,24,16,0.4)',
              transition: 'width 0.35s cubic-bezier(.4,0,.2,1)',
            }}
          >
            {current.type === 'cover' && (
              <div className="w-full h-full rounded-sm overflow-hidden"><CoverPage /></div>
            )}
            {current.type === 'back' && (
              <div className="w-full h-full rounded-sm overflow-hidden"><BackPage /></div>
            )}
            {current.type === 'content' && (
              <>
                <div className="flex-1 h-full rounded-l-sm overflow-hidden border-r border-[#D4C4B0]/40">
                  <ContentPage page={current.leftPage} />
                </div>
                <Spine />
                <div className="flex-1 h-full rounded-r-sm overflow-hidden">
                  <ContentPage page={current.rightPage} />
                </div>
              </>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => goTo('prev')}
              disabled={spread === 0 || flipping}
              className="flex items-center gap-2 text-[#C4B5A0] hover:text-white disabled:opacity-20
                text-xs font-bold tracking-widest uppercase transition-all duration-200 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {menuPages.map((_, i) => (
                <div key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: spread === i ? 20 : 6,
                    height: 6,
                    background: spread === i ? '#F5F1EA' : 'rgba(245,241,234,0.3)'
                  }} />
              ))}
            </div>

            <button
              onClick={() => goTo('next')}
              disabled={spread === TOTAL_SPREADS - 1 || flipping}
              className="flex items-center gap-2 text-[#C4B5A0] hover:text-white disabled:opacity-20
                text-xs font-bold tracking-widest uppercase transition-all duration-200 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>

          {/* Keyboard hint */}
          <p className="text-[#C4B5A0]/30 text-[10px] tracking-widest uppercase">
            use arrow keys to flip
          </p>
        </div>
      </div>
    </>
  );
};

export default MenuBook;