import { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';

const navLinks = [
  { label: 'Home',      id: 'home' },
  { label: 'Menu',      id: 'menu' },
  { label: 'Our Story', id: 'our-story' },
  { label: 'Contact',   id: 'contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState('home');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActive(id);
    setMenuOpen(false);
  };

  // Highlight active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#E3E0D7]/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex flex-col leading-tight cursor-pointer" onClick={() => scrollToSection('home')}>
          <h1 className="flex items-center gap-2 text-2xl font-bold text-[#2C1810] tracking-wide">
            <img src={logo} alt="Logo" className="w-8 h-8 rounded-full object-cover" />
            Flavored 
          </h1>
          <p className="text-[11px] text-[#6F4E37] opacity-80 tracking-widest uppercase ml-10">
            Wake up to delicious
          </p>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-sm font-semibold uppercase tracking-widest pb-1 transition-all duration-200
                ${active === id
                  ? 'text-[#2C1810] border-b-2 border-[#2C1810]'
                  : 'text-[#6F4E37] hover:text-[#2C1810] hover:border-b-2 border-[#2C1810]'
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#2C1810] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#2C1810] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#2C1810] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#E3E0D7] border-t border-[#C4B5A0]/40 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-sm font-semibold uppercase tracking-widest text-left pb-1 transition-all duration-200 w-fit
                ${active === id ? 'text-[#2C1810] border-b border-[#2C1810]' : 'text-[#6F4E37]'}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;