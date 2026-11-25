import { ArrowRight, MessageCircle } from 'lucide-react';
import { NFCCardVisual } from './NFCCardVisual';

interface FinalCTAProps {
  onGetStarted: () => void;
  onTalkToTeam: () => void;
}

export function FinalCTA({ onGetStarted, onTalkToTeam }: FinalCTAProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-b border-white/[0.06]">
      {/* Atmospheric Mint Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 45%, rgba(0,230,138,0.14) 0%, rgba(0,201,120,0.03) 48%, transparent 78%)',
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00E68A]">
              Start Building Lasting Trust
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] text-white">
              Your Next Customer Is Already Looking at Your Reviews.
            </h2>
            <p className="text-base sm:text-lg text-[#D5D5D5] leading-relaxed max-w-xl">
              Make it easier for customers to discover your business, share authentic experiences,
              and help your reputation grow with ReviewMattrs.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onGetStarted}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00E68A] hover:bg-[#00C978] text-[#050505] text-sm sm:text-base font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onTalkToTeam}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] hover:bg-[#171717] border border-white/[0.12] hover:border-white/25 text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E68A]"
              >
                <MessageCircle className="w-4 h-4 text-[#00E68A]" />
                <span>Talk to Our Team</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="max-w-[400px] mx-auto">
              <NFCCardVisual businessName="Your Business · Dhaka" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
