import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { LOGO_ASSET_PATH } from '../config/siteConfig';

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenOrder: () => void;
}

const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar({ onOpenLogin, onOpenOrder }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.09]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Official ReviewMattrs Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="inline-flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E68A] rounded"
          aria-label="ReviewMattrs Home"
        >
          <img
            src={LOGO_ASSET_PATH}
            alt="ReviewMattrs"
            className="h-6 sm:h-7 w-auto object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Zone 2: Primary Nav Links */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-sm font-medium text-[#D5D5D5] hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#00E68A] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E68A] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenLogin}
            className="hidden sm:inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-[#D5D5D5] hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E68A] rounded-lg cursor-pointer"
          >
            Login
          </button>
          <button
            type="button"
            onClick={onOpenOrder}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#050505] bg-[#00E68A] hover:bg-[#00C978] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            Get Started
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/[0.1] bg-[#111111]/80 text-white hover:border-[#00E68A]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E68A] cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/[0.09] px-4 pt-3 pb-6"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="px-3 py-3 text-base font-medium text-[#D5D5D5] hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-white/[0.09] flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-3 px-4 text-sm font-medium text-white bg-[#171717] border border-white/[0.09] rounded-lg hover:border-white/25 transition-colors cursor-pointer"
              >
                Client Login
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenOrder();
                }}
                className="w-full py-3 px-4 text-sm font-semibold text-[#050505] bg-[#00E68A] hover:bg-[#00C978] rounded-lg transition-colors cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
