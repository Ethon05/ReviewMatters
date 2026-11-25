import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  RotateCw,
  Smartphone,
  Star,
  Wifi,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  PRODUCT_RESTAURANT_FOLDER_IMAGE_PATH,
  PRODUCT_STUDIO_IMAGE_PATH,
} from '../config/siteConfig';
import { NFCCardVisual } from './NFCCardVisual';

interface NFCProductShowcaseProps {
  onGetCard: () => void;
}

type DemoStep = 1 | 2 | 3;
type ProductView = 'studio' | 'folder' | 'custom';

const STEPS: { step: DemoStep; label: string; title: string; description: string }[] = [
  {
    step: 1,
    label: 'Step 01',
    title: 'Tap',
    description: 'Customers tap their NFC-enabled smartphone against the ReviewMattrs card—or scan the reverse QR code.',
  },
  {
    step: 2,
    label: 'Step 02',
    title: 'Connect',
    description: 'Without downloading any app, the smartphone browser immediately opens your business’s review experience.',
  },
  {
    step: 3,
    label: 'Step 03',
    title: 'Share',
    description: 'Every customer sees equal access to your Google Review page alongside an optional private feedback form.',
  },
];

export function NFCProductShowcase({ onGetCard }: NFCProductShowcaseProps) {
  const [activeStep, setActiveStep] = useState<DemoStep>(1);
  const [productView, setProductView] = useState<ProductView>('studio');
  const [cardSide, setCardSide] = useState<'front' | 'back'>('front');
  const [selectedDemoAction, setSelectedDemoAction] = useState<'none' | 'google' | 'private'>('none');

  const handleSelectStep = (step: DemoStep) => {
    setActiveStep(step);
    if (step !== 3) {
      setSelectedDemoAction('none');
    }
  };

  return (
    <section id="products" className="py-20 sm:py-28 bg-[#050505] border-b border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00E68A]">
            Product 01 · NFC Google Review Card
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.12] text-white">
            One Tap Can Start a Better Customer Journey.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#929292] leading-relaxed">
            Meet the ReviewMattrs NFC card. A tangible, physical card engineered with contactless
            NFC and high-contrast QR access so sharing honest feedback feels effortless.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Physical NFC Card + Smartphone Tap Visual Simulation */}
          <div className="lg:col-span-7 relative rounded-2xl bg-[#0A0A0A] border border-white/[0.09] p-5 sm:p-8 overflow-clip">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 85% 15%, rgba(0,230,138,0.12) 0%, transparent 55%)',
              }}
            />

            <div className="relative flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
              <div className="text-xs text-[#929292]">
                <span className="text-white font-semibold">Physical Card &amp; Tap Simulation</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Browser preview only</span>
              </div>

              {/* View Mode Switcher */}
              <div
                role="tablist"
                aria-label="Product showcase view"
                className="inline-flex items-center rounded-lg bg-[#111111] border border-white/[0.1] p-1 gap-1"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={productView === 'studio'}
                  onClick={() => setProductView('studio')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    productView === 'studio'
                      ? 'bg-[#00E68A] text-[#050505] font-semibold'
                      : 'text-[#D5D5D5] hover:text-white'
                  }`}
                >
                  Studio View
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={productView === 'folder'}
                  onClick={() => setProductView('folder')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    productView === 'folder'
                      ? 'bg-[#00E68A] text-[#050505] font-semibold'
                      : 'text-[#D5D5D5] hover:text-white'
                  }`}
                >
                  Table Check
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={productView === 'custom'}
                  onClick={() => setProductView('custom')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    productView === 'custom'
                      ? 'bg-[#00E68A] text-[#050505] font-semibold'
                      : 'text-[#D5D5D5] hover:text-white'
                  }`}
                >
                  Custom Mockup
                </button>
              </div>
            </div>

            <div className="relative mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Physical Card Display */}
              <div className="md:col-span-7 min-w-0 space-y-4">
                {productView === 'studio' && (
                  <motion.div
                    key="studio"
                    initial={{ opacity: 0.75, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative aspect-[3/2] w-full rounded-2xl overflow-hidden border bg-[#050505] transition-all duration-300 ${
                      activeStep >= 2
                        ? 'border-[#00E68A]/75 shadow-[0_24px_64px_-12px_rgba(0,230,138,0.28)]'
                        : 'border-white/[0.14] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)]'
                    }`}
                  >
                    <img
                      src={PRODUCT_STUDIO_IMAGE_PATH}
                      alt="ReviewMattrs physical Google Review Card showing Tap NFC icon and Scan QR code"
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                )}

                {productView === 'folder' && (
                  <motion.div
                    key="folder"
                    initial={{ opacity: 0.75, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative aspect-[3/2] w-full rounded-2xl overflow-hidden border bg-[#050505] transition-all duration-300 ${
                      activeStep >= 2
                        ? 'border-[#00E68A]/75 shadow-[0_24px_64px_-12px_rgba(0,230,138,0.28)]'
                        : 'border-white/[0.14] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)]'
                    }`}
                  >
                    <img
                      src={PRODUCT_RESTAURANT_FOLDER_IMAGE_PATH}
                      alt="ReviewMattrs physical card presented inside a black leather restaurant bill folder"
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                )}

                {productView === 'custom' && (
                  <div className="space-y-3">
                    <motion.div
                      key={cardSide}
                      initial={{ opacity: 0.75, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <NFCCardVisual
                        side={cardSide}
                        isScanning={activeStep >= 2}
                        businessName="Banani Coffee Roasters"
                      />
                    </motion.div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setCardSide((s) => (s === 'front' ? 'back' : 'front'))}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171717] border border-white/[0.1] text-xs font-medium text-[#D5D5D5] hover:text-white hover:border-[#00E68A]/40 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <RotateCw className="w-3.5 h-3.5 text-[#00E68A]" />
                        <span>{cardSide === 'front' ? 'Show QR Back' : 'Show NFC Front'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Hardware Technical Clarification */}
                <p className="text-xs text-[#929292] leading-relaxed">
                  Dual Tap (NFC) &amp; Scan (QR) access opens your verified Google Review page
                  directly. The card does not filter or authenticate submissions.
                </p>
              </div>

              {/* Smartphone Proximity & Browser State */}
              <div className="md:col-span-5 min-w-0 flex flex-col items-center">
                <motion.div
                  animate={{
                    y: activeStep === 1 ? 6 : 0,
                    scale: activeStep === 2 ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[240px] rounded-[26px] border border-white/[0.15] bg-[#050505] p-3 shadow-2xl"
                >
                  <div className="flex items-center justify-between px-2 pb-2 text-[10px] font-mono text-[#929292]">
                    <span>Mobile Browser</span>
                    <Smartphone className="w-3.5 h-3.5 text-[#00E68A]" />
                  </div>

                  <div className="rounded-2xl bg-[#111111] border border-white/[0.08] p-4 min-h-[240px] flex flex-col justify-between">
                    <AnimatePresence initial={false}>
                      {activeStep === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className="my-auto text-center space-y-3 py-4"
                        >
                          <div className="mx-auto w-12 h-12 rounded-2xl bg-[#00E68A]/10 border border-[#00E68A]/30 flex items-center justify-center text-[#00E68A]">
                            <Wifi className="w-6 h-6 rotate-90" />
                          </div>
                          <p className="text-sm font-semibold text-white">Ready to Tap or Scan</p>
                          <p className="text-xs text-[#929292]">
                            Hold the top of an iPhone or Android near the card.
                          </p>
                          <button
                            type="button"
                            onClick={() => handleSelectStep(2)}
                            className="w-full py-2 px-3 rounded-lg bg-[#00E68A] hover:bg-[#00C978] text-[#050505] text-xs font-bold transition-colors cursor-pointer"
                          >
                            Simulate Tap
                          </button>
                        </motion.div>
                      )}

                      {activeStep === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className="my-auto text-center space-y-3 py-4"
                        >
                          <div className="mx-auto w-12 h-12 rounded-2xl bg-[#00E68A]/15 border border-[#00E68A] flex items-center justify-center text-[#00E68A]">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <p className="text-xs font-mono text-[#00E68A]">NFC Tag Detected</p>
                          <p className="text-sm font-semibold text-white">
                            Opening Review Destination
                          </p>
                          <p className="text-[11px] font-mono text-[#929292] truncate">
                            reviewmattrs.com/r/banani
                          </p>
                          <button
                            type="button"
                            onClick={() => handleSelectStep(3)}
                            className="w-full py-2 px-3 rounded-lg bg-[#00E68A] hover:bg-[#00C978] text-[#050505] text-xs font-bold transition-colors cursor-pointer"
                          >
                            Open Review Page
                          </button>
                        </motion.div>
                      )}

                      {activeStep === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-3"
                        >
                          <div className="border-b border-white/[0.08] pb-2">
                            <p className="text-[10px] font-mono text-[#00E68A]">
                              Banani Coffee Roasters
                            </p>
                            <p className="text-xs font-semibold text-white mt-0.5">
                              Share your honest experience
                            </p>
                          </div>

                          {selectedDemoAction === 'none' ? (
                            <div className="space-y-2.5 pt-1">
                              <div className="flex items-center gap-1 text-[#00E68A]">
                                {[1, 2, 3, 4, 5].map((s) => (
                                  <Star key={s} className="w-3.5 h-3.5 fill-[#00E68A]" />
                                ))}
                              </div>
                              <button
                                type="button"
                                onClick={() => setSelectedDemoAction('google')}
                                className="w-full py-2 px-3 rounded-lg bg-[#00E68A] hover:bg-[#00C978] text-[#050505] text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                              >
                                <span>Review on Google</span>
                                <ExternalLink className="w-3 h-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => setSelectedDemoAction('private')}
                                className="w-full py-2 px-3 rounded-lg bg-[#171717] hover:bg-[#222222] border border-white/[0.1] text-[#D5D5D5] text-xs font-medium inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                              >
                                <MessageSquare className="w-3 h-3 text-[#00E68A]" />
                                <span>Optional Private Note</span>
                              </button>
                              <p className="text-[10px] text-[#929292] leading-snug">
                                All guests keep equal access to Google Reviews regardless of rating.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-3 py-2">
                              <p className="text-xs font-semibold text-[#00E68A]">
                                {selectedDemoAction === 'google'
                                  ? 'Simulated Google Review Handoff'
                                  : 'Simulated Private Feedback Channel'}
                              </p>
                              <p className="text-[11px] text-[#D5D5D5] leading-relaxed">
                                {selectedDemoAction === 'google'
                                  ? 'In live deployment, this opens your verified Google Business Profile review composer directly.'
                                  : 'In live deployment, customers can optionally message your manager directly alongside public review access.'}
                              </p>
                              <button
                                type="button"
                                onClick={() => setSelectedDemoAction('none')}
                                className="w-full py-1.5 px-3 rounded-lg bg-[#171717] border border-white/[0.1] text-xs text-white hover:border-[#00E68A]/40 transition-colors cursor-pointer"
                              >
                                Back to Options
                              </button>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right: 3-Step Interactive Control & Pricing CTA */}
          <div className="lg:col-span-5 space-y-4">
            {STEPS.map((item) => {
              const isActive = activeStep === item.step;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => handleSelectStep(item.step)}
                  className={`w-full text-left rounded-2xl p-5 border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E68A] ${
                    isActive
                      ? 'bg-[#171717] border-[#00E68A]/60 shadow-[0_8px_30px_rgba(0,230,138,0.08)]'
                      : 'bg-[#111111] border-white/[0.09] hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`font-mono text-xs font-semibold uppercase tracking-wider ${
                        isActive ? 'text-[#00E68A]' : 'text-[#929292]'
                      }`}
                    >
                      {item.label} — {item.title}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isActive ? 'text-[#00E68A]' : 'text-[#929292]'
                      }`}
                    >
                      {isActive ? 'Active' : 'Preview'}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#D5D5D5] leading-relaxed">{item.description}</p>
                </button>
              );
            })}

            <div className="pt-3">
              <button
                type="button"
                onClick={onGetCard}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#050505] bg-[#00E68A] hover:bg-[#00C978] rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Get Your NFC Card</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
