import { useState } from 'react';
import { BarChart3, MapPin, Settings2, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Configure Your Card',
    description:
      'Set up the NFC chip and QR code with your business’s verified Google Business Profile review destination.',
    detail: 'Custom business branding and branch-level URL routing included.',
    icon: Settings2,
  },
  {
    number: '02',
    title: 'Place It Where Customers Interact',
    description:
      'Position your card at restaurant billing counters, cafe tables, hotel reception desks, or retail checkout points.',
    detail: 'High-visibility matte black surface fits upscale hospitality interiors.',
    icon: MapPin,
  },
  {
    number: '03',
    title: 'Customers Tap and Connect',
    description:
      'Guests tap their NFC-enabled phone or scan the reverse QR code to open the review page directly in their browser.',
    detail: 'Zero app downloads or account logins required for customers.',
    icon: Smartphone,
  },
  {
    number: '04',
    title: 'Manage Your Reputation',
    description:
      'Use ReviewMattrs to organize customer feedback, track rating trends, and improve everyday service quality.',
    detail: 'Monitor multi-location performance from a unified SaaS workspace.',
    icon: BarChart3,
  },
];

export function HowItWorks() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#0A0A0A] border-b border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00E68A]">
              How ReviewMattrs Works
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight leading-[1.12] text-white">
              Simple for Customers. Powerful for Businesses.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#929292] max-w-md">
            Four clear steps connecting physical hospitality moments to an organized digital
            reputation workflow.
          </p>
        </div>

        {/* Connected Timeline */}
        <div className="mt-14 relative">
          {/* Desktop Progress Line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-8 left-6 right-6 h-[1px] bg-white/[0.1]"
          >
            <motion.div
              className="h-full bg-[#00E68A]"
              initial={false}
              animate={{ width: `${((selectedIndex + 1) / WORKFLOW_STEPS.length) * 100}%` }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {WORKFLOW_STEPS.map((step, index) => {
              const Icon = step.icon;
              const active = selectedIndex === index;
              const completed = index <= selectedIndex;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`text-left rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E68A] ${
                    active
                      ? 'bg-[#171717] border-[#00E68A]/55'
                      : 'bg-[#111111] border-white/[0.09] hover:border-white/25'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${
                          completed
                            ? 'bg-[#00E68A]/15 border-[#00E68A]/50 text-[#00E68A]'
                            : 'bg-[#171717] border-white/[0.09] text-[#929292]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`font-mono text-sm font-semibold tabular-nums ${
                          completed ? 'text-[#00E68A]' : 'text-[#929292]'
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#929292] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <p className="mt-5 pt-4 border-t border-white/[0.07] text-xs text-[#D5D5D5]">
                    {step.detail}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
