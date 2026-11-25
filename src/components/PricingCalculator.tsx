import { ArrowRight, Check, Minus, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import {
  calculatePricing,
  formatBDT,
  MAX_CARD_QUANTITY,
  MIN_CARD_QUANTITY,
  PricingBreakdown,
  sanitizeQuantity,
} from '../utils/pricing';

interface PricingCalculatorProps {
  quantity: number;
  onQuantityChange: (qty: number) => void;
  onOrderCards: (breakdown: PricingBreakdown) => void;
}

const QUICK_QUANTITIES = [1, 2, 5, 6, 10];

export function PricingCalculator({
  quantity,
  onQuantityChange,
  onOrderCards,
}: PricingCalculatorProps) {
  const breakdown = calculatePricing(quantity);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      onQuantityChange(1);
      return;
    }
    onQuantityChange(sanitizeQuantity(val));
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#0A0A0A] border-b border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00E68A]">
            Transparent BDT Pricing
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.12] text-white">
            Get Started With ReviewMattrs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#929292] leading-relaxed">
            Simple pricing. Powerful reputation management. Calculate your one-time NFC card
            investment separately from your monthly SaaS subscription.
          </p>
        </div>

        {/* Pricing Overview Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[#111111] border border-white/[0.09] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#00E68A]">
                Physical Hardware · One-Time Payment
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tabular-nums">
                  ৳1,200
                </span>
                <span className="text-sm text-[#929292]">per NFC + QR card</span>
              </div>
              <p className="mt-2.5 text-sm text-[#929292]">
                Bulk discounts apply automatically to the one-time card purchase:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[#D5D5D5]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00E68A] shrink-0" />
                  <span>1 card: Standard price (৳1,200 / card)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00E68A] shrink-0" />
                  <span>2–5 cards: 15% off hardware (৳1,020 / card)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00E68A] shrink-0" />
                  <span>6+ cards: 20% off hardware (৳960 / card)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-[#111111] border border-white/[0.09] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D5D5D5]">
                Software Subscription · Recurring Monthly
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tabular-nums">
                  ৳200
                </span>
                <span className="text-sm text-[#929292]">per month (all cards)</span>
              </div>
              <p className="mt-2.5 text-sm text-[#929292]">
                Flat ৳200/month subscription covers your account regardless of whether you have 1
                card or 10+.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[#D5D5D5]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00E68A] shrink-0" />
                  <span>Managed review destination &amp; dynamic link updates</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00E68A] shrink-0" />
                  <span>Private customer feedback intake &amp; branch organization</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00E68A] shrink-0" />
                  <span>Reputation analytics &amp; reporting workspace</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive BDT Pricing Calculator */}
        <div className="mt-8 rounded-2xl bg-[#111111] border border-[#00E68A]/35 p-6 sm:p-8 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.65)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Quantity Selector */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Interactive Pricing Calculator
                </h3>
                <p className="mt-1.5 text-sm text-[#929292]">
                  Select how many NFC cards your business or branches need.
                </p>
              </div>

              <div>
                <label
                  htmlFor="card-quantity-input"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#D5D5D5] mb-3"
                >
                  Number of NFC Review Cards
                </label>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onQuantityChange(Math.max(MIN_CARD_QUANTITY, breakdown.quantity - 1))}
                    disabled={breakdown.quantity <= MIN_CARD_QUANTITY}
                    aria-label="Decrease card quantity"
                    className="w-12 h-12 rounded-xl bg-[#171717] border border-white/[0.12] hover:border-[#00E68A]/50 disabled:opacity-40 flex items-center justify-center text-white transition-colors cursor-pointer disabled:cursor-not-allowed"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <input
                    id="card-quantity-input"
                    type="number"
                    min={MIN_CARD_QUANTITY}
                    max={MAX_CARD_QUANTITY}
                    value={breakdown.quantity}
                    onChange={handleInputChange}
                    aria-label="Card quantity"
                    className="w-28 h-12 rounded-xl bg-[#0A0A0A] border border-white/[0.14] focus:border-[#00E68A] text-center text-xl font-bold font-mono text-white tabular-nums focus:outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => onQuantityChange(Math.min(MAX_CARD_QUANTITY, breakdown.quantity + 1))}
                    disabled={breakdown.quantity >= MAX_CARD_QUANTITY}
                    aria-label="Increase card quantity"
                    className="w-12 h-12 rounded-xl bg-[#171717] border border-white/[0.12] hover:border-[#00E68A]/50 disabled:opacity-40 flex items-center justify-center text-white transition-colors cursor-pointer disabled:cursor-not-allowed"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Quantity Presets */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {QUICK_QUANTITIES.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      aria-pressed={breakdown.quantity === preset}
                      onClick={() => onQuantityChange(preset)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-mono font-semibold border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        breakdown.quantity === preset
                          ? 'bg-[#00E68A] border-[#00E68A] text-[#050505]'
                          : 'bg-[#0A0A0A] border-white/[0.09] text-[#D5D5D5] hover:border-white/25'
                      }`}
                    >
                      {preset} {preset === 1 ? 'Card' : 'Cards'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Discount Tier Notice */}
              <div className="rounded-xl bg-[#0A0A0A] border border-white/[0.08] p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-[#929292]">Applied Hardware Tier</p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    {breakdown.discountTierLabel}
                  </p>
                </div>
                <span
                  className={`font-mono text-sm font-bold tabular-nums ${
                    breakdown.discountPercent > 0 ? 'text-[#00E68A]' : 'text-[#929292]'
                  }`}
                >
                  {breakdown.discountPercent > 0 ? `${breakdown.discountPercent}% OFF` : '0%'}
                </span>
              </div>
            </div>

            {/* Right: Live Breakdown */}
            <div className="lg:col-span-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.09] p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="text-sm font-semibold text-white">
                  Cost Breakdown ({breakdown.quantity}{' '}
                  {breakdown.quantity === 1 ? 'Card' : 'Cards'})
                </span>
                <span className="text-xs font-mono text-[#929292]">BDT Currency</span>
              </div>

              {/* Section A: One-Time Card Hardware */}
              <div className="space-y-2.5 pb-4 border-b border-white/[0.08]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#00E68A]">
                  1. One-Time NFC Card Purchase
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#929292]">
                    Original card price ({breakdown.quantity} × ৳1,200)
                  </span>
                  <span
                    className={`font-mono tabular-nums ${
                      breakdown.discountSavings > 0
                        ? 'text-[#929292] line-through'
                        : 'text-white font-semibold'
                    }`}
                  >
                    {formatBDT(breakdown.originalOneTimePrice)}
                  </span>
                </div>

                {breakdown.discountSavings > 0 && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#00E68A]">
                      Bulk hardware discount ({breakdown.discountPercent}%)
                    </span>
                    <span className="font-mono text-[#00E68A] tabular-nums">
                      -{formatBDT(breakdown.discountSavings)}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between text-base pt-1">
                  <span className="font-semibold text-white">Discounted one-time card total</span>
                  <motion.span
                    key={`card-${breakdown.discountedOneTimePrice}`}
                    initial={{ opacity: 0.5, y: -3 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-lg font-bold text-white tabular-nums"
                  >
                    {formatBDT(breakdown.discountedOneTimePrice)}
                  </motion.span>
                </div>
              </div>

              {/* Section B: Monthly SaaS Subscription (Separate) */}
              <div className="space-y-2 pb-4 border-b border-white/[0.08]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D5D5D5]">
                  2. Monthly Software Subscription (Flat Rate)
                </p>
                <div className="flex items-center justify-between text-base">
                  <span className="text-[#D5D5D5]">
                    Monthly recurring (flat for all cards)
                  </span>
                  <motion.span
                    key={`sub-${breakdown.monthlyRecurringTotal}`}
                    initial={{ opacity: 0.5, y: -3 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-lg font-bold text-white tabular-nums"
                  >
                    {formatBDT(breakdown.monthlyRecurringTotal)}
                    <span className="text-xs font-normal text-[#929292]"> / mo</span>
                  </motion.span>
                </div>
              </div>

              {/* Section C: First-Month Combined Total */}
              <div className="flex items-baseline justify-between gap-4 pt-1">
                <div>
                  <p className="text-sm font-semibold text-white">Combined First-Month Payment</p>
                  <p className="text-xs text-[#929292]">
                    One-time card total + Month 1 software subscription
                  </p>
                </div>
                <motion.p
                  key={`total-${breakdown.firstMonthTotal}`}
                  initial={{ opacity: 0.5, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22 }}
                  className="text-2xl sm:text-3xl font-extrabold font-mono text-[#00E68A] tabular-nums shrink-0"
                  data-testid="first-month-total"
                >
                  {formatBDT(breakdown.firstMonthTotal)}
                </motion.p>
              </div>

              <button
                type="button"
                onClick={() => onOrderCards(breakdown)}
                className="w-full py-3.5 px-6 rounded-xl bg-[#00E68A] hover:bg-[#00C978] text-[#050505] text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Order Your Cards</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-[#929292] text-center">
                Opens order inquiry form · No online payment is charged on this preview
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
