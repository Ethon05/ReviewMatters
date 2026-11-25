import { Compass, LineChart, Shield, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const REVIEW_VALUE_CARDS = [
  {
    id: 'local-visibility',
    title: 'Local Visibility',
    subtitle: 'Maps & Local Discovery',
    description:
      'Consistent, genuine customer reviews help strengthen your business profile across local search and map discovery when nearby customers look for services.',
    icon: Compass,
  },
  {
    id: 'customer-trust',
    title: 'Customer Trust',
    subtitle: 'Social Proof at a Glance',
    description:
      'Recent, authentic experiences written by real guests reassure new visitors that your service quality, hospitality, and atmosphere match expectations.',
    icon: Shield,
  },
  {
    id: 'purchase-confidence',
    title: 'Purchase Confidence',
    subtitle: 'Faster Decision Making',
    description:
      'When diners or shoppers compare two businesses side by side, clear and detailed feedback reduces hesitation and builds immediate confidence.',
    icon: Sparkles,
  },
  {
    id: 'business-insights',
    title: 'Business Insights',
    subtitle: 'Operational Clarity',
    description:
      'Customer feedback highlights what guests love most and surfaces recurring service bottlenecks before small friction becomes a lasting pattern.',
    icon: LineChart,
  },
];

export function WhyReviewsMatter() {
  return (
    <section className="py-20 sm:py-28 bg-[#0A0A0A] border-b border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00E68A]">
              Why Google Reviews Matter
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight leading-[1.12] text-white">
              Why Google Reviews Matter More Than Ever.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#929292] max-w-md leading-relaxed">
            Great in-person experiences often go unshared simply because searching for a business
            profile takes too many steps.
          </p>
        </div>

        {/* Editorial Comparison Strip: Traditional vs NFC-Powered Access */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-2xl bg-[#111111] border border-white/[0.09] p-6 sm:p-8">
          <div className="space-y-2 pb-5 lg:pb-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-white/[0.08]">
            <p className="text-xs font-medium text-[#929292]">Traditional Review Requests</p>
            <h3 className="text-lg font-semibold text-[#D5D5D5]">
              High friction leads to forgotten intentions
            </h3>
            <p className="text-sm text-[#929292] leading-relaxed">
              Customers leave happy, mean to write a review later, forget your exact Google listing
              name, or get distracted before opening Maps.
            </p>
          </div>
          <div className="space-y-2 pt-2 lg:pt-0 lg:pl-4">
            <p className="text-xs font-semibold text-[#00E68A]">ReviewMattrs NFC + QR Access</p>
            <h3 className="text-lg font-semibold text-white">
              One tap at the moment of peak satisfaction
            </h3>
            <p className="text-sm text-[#D5D5D5] leading-relaxed">
              While the experience is fresh at the table or checkout desk, a single smartphone tap
              opens your Google Review destination directly in seconds.
            </p>
          </div>
        </div>

        {/* 4 Commercial Value Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEW_VALUE_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl bg-[#111111] border border-white/[0.09] hover:border-[#00E68A]/40 hover:bg-[#151716] p-6 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#00E68A]/10 border border-[#00E68A]/25 flex items-center justify-center text-[#00E68A] group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="mt-5 text-xs font-medium text-[#929292]">{card.subtitle}</p>
                <h3 className="mt-1 text-lg font-semibold text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#929292] leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
