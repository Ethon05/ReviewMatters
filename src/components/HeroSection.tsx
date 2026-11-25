import { useState } from 'react';
import { ArrowDown, ArrowRight, CheckCircle2, Smartphone, Star, Wifi } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_STUDIO_IMAGE_PATH } from '../config/siteConfig';

interface HeroSectionProps {
  onGetCard: () => void;
  onExploreHowItWorks: () => void;
}

export function HeroSection({ onGetCard, onExploreHowItWorks }: HeroSectionProps) {
  const [tapActive, setTapActive] = useState(false);

  const triggerHeroTap = () => {
    setTapActive(true);
    window.setTimeout(() => setTapActive(false), 2600);
  };

  return (
    <section
      id="home"
      className="relative min-h-[800px] lg:min-h-[860px] pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden border-b border-white/[0.06]"
    >
      {/* Atmospheric obsidian + mint-green radial backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 68% 52% at 72% 42%, rgba(0,230,138,0.14) 0%, rgba(0,201,120,0.04) 45%, transparent 75%), radial-gradient(ellipse 50% 40% at 15% 20%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Subtle architectural hairline grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 35%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Conversion CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-[#00E68A]">
              Smarter Reviews. Stronger Businesses.
            </p>

            <h1 className="text-[2.45rem] sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] leading-[1.07] text-white">
              Turn Every Customer Experience Into a{' '}
              <span className="mint-gradient-text">5-Star Opportunity.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#D5D5D5] leading-relaxed max-w-xl">
              Make it effortless for customers to leave genuine Google reviews. With ReviewMattrs
              NFC cards and intelligent reputation management, help your business build trust,
              strengthen its online presence, and grow.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onGetCard}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#050505] bg-[#00E68A] hover:bg-[#00C978] rounded-xl transition-all duration-200 shadow-[0_0_32px_rgba(0,230,138,0.22)] hover:shadow-[0_0_40px_rgba(0,230,138,0.35)] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Get Your Review Card</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreHowItWorks}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#111111] hover:bg-[#171717] border border-white/[0.12] hover:border-white/25 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E68A]"
              >
                <span>Explore How It Works</span>
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#929292]">
              <span>NFC + Backup QR</span>
              <span aria-hidden="true">·</span>
              <span>No Customer App Needed</span>
              <span aria-hidden="true">·</span>
              <span>Built for Restaurants, Cafes &amp; Hospitality</span>
            </div>
          </motion.div>

          {/* Right Column: Physical Studio NFC + QR Card & Smartphone Product Composition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[580px] py-4 sm:py-6">
              {/* Soft radial mint spotlight behind product */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-6 rounded-full bg-[#00E68A]/12 blur-[70px]"
              />

              <div className="relative grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                {/* Physical ReviewMattrs NFC + QR Card Studio Photograph */}
                <motion.div
                  animate={tapActive ? { y: -4, scale: 1.015 } : { y: [0, -5, 0] }}
                  transition={
                    tapActive
                      ? { duration: 0.3 }
                      : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
                  }
                  className="sm:col-span-7 relative z-20"
                >
                  <div
                    className={`relative aspect-[4/3] w-full rounded-2xl overflow-hidden border bg-[#050505] transition-all duration-300 ${
                      tapActive
                        ? 'border-[#00E68A]/80 shadow-[0_24px_64px_-12px_rgba(0,230,138,0.34)]'
                        : 'border-white/[0.14] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)]'
                    }`}
                  >
                    <img
                      src={PRODUCT_STUDIO_IMAGE_PATH}
                      alt="ReviewMattrs physical NFC and QR Google Review Card on an obsidian studio pedestal"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Interactive Hero Tap Trigger */}
                  <div className="mt-3 flex items-center justify-between gap-2 px-1">
                    <span className="text-xs text-[#929292]">
                      Tap NFC or scan QR on card
                    </span>
                    <button
                      type="button"
                      onClick={triggerHeroTap}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00E68A] hover:text-[#8BFFD0] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E68A] rounded px-1.5 py-0.5"
                    >
                      <Wifi className="w-3.5 h-3.5 rotate-90" />
                      <span>{tapActive ? 'Tap Detected' : 'Preview Tap'}</span>
                    </button>
                  </div>
                </motion.div>

                {/* Smartphone Mockup Showing Google Review Destination */}
                <motion.div
                  animate={tapActive ? { x: -10, scale: 1.02 } : { x: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="sm:col-span-5 relative z-10 mx-auto w-full max-w-[235px]"
                >
                  <div className="rounded-[28px] border border-white/[0.14] bg-[#0B0D0C] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
                    {/* Phone Notch & Status */}
                    <div className="flex items-center justify-between px-2 pb-2.5 text-[10px] font-mono text-[#929292]">
                      <span>9:41</span>
                      <div className="w-12 h-3 rounded-full bg-[#171717] border border-white/[0.06]" />
                      <Smartphone className="w-3 h-3 text-[#00E68A]" />
                    </div>

                    {/* Simulated Mobile Browser Screen */}
                    <div className="rounded-2xl bg-[#111111] border border-white/[0.08] p-3.5 space-y-3">
                      <div className="flex items-center justify-between text-[10px] text-[#929292] pb-2 border-b border-white/[0.07]">
                        <span className="truncate font-mono">reviewmattrs.com/r/dkr</span>
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                            tapActive ? 'text-[#00E68A]' : 'text-[#00E68A]/70'
                          }`}
                        />
                      </div>

                      <div>
                        <p className="text-[11px] font-medium text-[#00E68A]">
                          {tapActive ? 'NFC Connection Ready' : 'Share Your Experience'}
                        </p>
                        <p className="mt-0.5 text-sm font-bold text-white leading-tight">
                          Dhaka Kitchen &amp; Roastery
                        </p>
                        <p className="mt-1 text-[11px] text-[#929292] leading-snug">
                          Your honest feedback helps local guests and our team.
                        </p>
                      </div>

                      {/* Star Selection Preview */}
                      <div className="flex items-center gap-1 py-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 text-[#00E68A] fill-[#00E68A]/85"
                          />
                        ))}
                      </div>

                      <div className="space-y-2 pt-1">
                        <div className="w-full py-2 px-2.5 rounded-lg bg-[#00E68A] text-[#050505] text-[11px] font-bold text-center">
                          Continue to Google Reviews
                        </div>
                        <div className="w-full py-1.5 px-2.5 rounded-lg bg-[#171717] border border-white/[0.09] text-[#D5D5D5] text-[10px] font-medium text-center">
                          Send Direct Private Feedback
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <a
            href="#trust"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#trust')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex flex-col items-center gap-2 text-xs font-medium text-[#929292] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E68A] rounded p-2"
          >
            <span>Scroll to explore</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4 text-[#00E68A]" />
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}
