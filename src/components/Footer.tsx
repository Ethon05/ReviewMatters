import { LOGO_ASSET_PATH, SITE_CONFIG } from '../config/siteConfig';

interface FooterProps {
  onOpenContact: () => void;
  onOpenLegal: (doc: 'privacy' | 'terms') => void;
}

export function Footer({ onOpenContact, onOpenLegal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] pt-16 pb-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E68A] rounded"
            >
              <img
                src={LOGO_ASSET_PATH}
                alt="ReviewMattrs"
                className="h-7 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-sm text-[#929292] leading-relaxed max-w-xs">
              Making customer feedback simpler, smarter, and more accessible for modern
              businesses.
            </p>
            <p className="text-xs font-mono text-[#929292]">
              {SITE_CONFIG.websiteDisplay} · Bangladesh
            </p>
          </div>

          {/* Product Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Product</h3>
            <ul className="space-y-2.5 text-sm text-[#929292]">
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#products');
                  }}
                  className="hover:text-white transition-colors"
                >
                  NFC Review Cards
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#how-it-works');
                  }}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#pricing');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Solutions</h3>
            <ul className="space-y-2.5 text-sm text-[#929292]">
              {['Restaurants', 'Cafes', 'Hospitality', 'Retail & Services'].map((label) => (
                <li key={label}>
                  <a
                    href="#solutions"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#solutions');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2.5 text-sm text-[#929292]">
              <li>
                <a
                  href="#trust"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#trust');
                  }}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#faq');
                  }}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="space-y-2.5 text-sm text-[#929292]">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Configurable Social Placeholders */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#929292]">
          <p>
            Copyright &copy; {currentYear} {SITE_CONFIG.brandName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {SITE_CONFIG.destinations.socialPlaceholders.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact();
                }}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
