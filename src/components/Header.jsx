import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

// WhatsApp Icon
const WhatsAppSmall = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 w-full z-[60] bg-foundation-ink text-foundation-bg/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 text-[11px] font-body">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="tel:+919898012345" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={12} />
              <span className="hidden sm:inline">+91 98980 12345</span>
            </a>
            <a
              href="https://wa.me/919898012345"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#5bf58f] transition-colors"
            >
              <WhatsAppSmall size={13} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a href="mailto:inquiry@drjalpeshmehta.com" className="flex items-center gap-1.5 hover:text-white transition-colors hidden md:flex">
              <Mail size={12} />
              <span>inquiry@drjalpeshmehta.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="https://www.youtube.com/@KathakarDrJalpeshMehtta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hidden sm:block"
            >
              YouTube Channel
            </a>
            <Link to="/contact" className="bg-accent-kathakar text-white px-3 py-1 rounded text-[10px] font-semibold uppercase tracking-wider hover:bg-accent-kathakar/90 transition-colors">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-9 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-foundation-bg/97 backdrop-blur-lg shadow-md border-b border-foundation-line/40'
            : 'bg-foundation-bg/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <span className="font-display text-2xl font-bold text-accent-kathakar leading-none tracking-tight">ॐ</span>
              <div>
                <span className="font-display text-lg sm:text-xl font-bold tracking-wide text-foundation-ink">
                  Dr. Jalpesh Mehta
                </span>
                <p className="text-[9px] uppercase tracking-widest text-foundation-ink/50 -mt-0.5 font-body">
                  Vedic Astrologer · Vaastu · Kathakar
                </p>
              </div>
            </Link>

            {/* Desktop Nav — clean text links */}
            <nav className="hidden lg:flex items-center gap-8 font-body text-[13px]">
              {[
                { path: '/', label: 'Home' },
                { path: '/#about-snippet', label: 'About', isAnchor: true },
                { path: '/astrology', label: 'Astrology' },
                { path: '/vaastu', label: 'Vaastu' },
                { path: '/kathakar', label: 'Kathakar' },
                { path: '/contact', label: 'Contact' },
              ].map((item) => {
                const active = !item.isAnchor && isActive(item.path);
                const classes = `relative py-1 transition-colors duration-200 ${
                  active
                    ? 'text-foundation-ink font-semibold'
                    : 'text-foundation-ink/60 hover:text-foundation-ink'
                }`;

                if (item.isAnchor) {
                  return (
                    <a key={item.path} href={item.path} className={classes}>
                      {item.label}
                    </a>
                  );
                }

                return (
                  <Link key={item.path} to={item.path} className={classes}>
                    {item.label}
                    {active && (
                      <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-accent-kathakar rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foundation-ink hover:text-foundation-ink/80 focus:outline-none p-2"
                id="mobile-menu-toggle"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu — flat list, no "Our Domains" section */}
        {isOpen && (
          <div className="lg:hidden bg-foundation-bg border-t border-foundation-line/30 shadow-xl">
            <nav className="flex flex-col font-body text-sm max-w-7xl mx-auto px-4 py-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/#about-snippet', label: 'About', isAnchor: true },
                { path: '/astrology', label: 'Astrology' },
                { path: '/vaastu', label: 'Vaastu' },
                { path: '/kathakar', label: 'Kathakar' },
                { path: '/contact', label: 'Contact' },
              ].map((item) => {
                const active = !item.isAnchor && isActive(item.path);
                const classes = `py-3 border-b border-foundation-line/15 transition-colors ${
                  active ? 'text-accent-kathakar font-semibold' : 'text-foundation-ink/70'
                }`;

                if (item.isAnchor) {
                  return (
                    <a key={item.path} href={item.path} onClick={() => setIsOpen(false)} className={classes}>
                      {item.label}
                    </a>
                  );
                }

                return (
                  <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={classes}>
                    {item.label}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full text-center py-3 rounded-lg bg-accent-kathakar text-white font-semibold tracking-wider text-sm"
              >
                Book Consultation
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
