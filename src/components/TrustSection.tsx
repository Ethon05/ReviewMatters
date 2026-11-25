import { Eye, MessageSquareHeart, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const TRUST_BLOCKS = [
  {
    number: '01',
    title: 'First Impressions Matter',
    description:
      'Customers routinely check online reviews before deciding where to dine, stay, or book a service. Your review profile often speaks before your staff ever greets them.',
    icon: Eye,
  },
  {
    number: '02',
    title: 'Trust Drives Decisions',
    description:
      'A steady stream of recent, genuine customer reviews gives prospective guests clear social proof and greater confidence when choosing your business over nearby alternatives.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Every Experience Counts',
    description:
      'When sharing feedback is frictionless at the table or counter, satisfied customers follow through—and your team gains practical insights to keep raising the bar.',
    icon: MessageSquareHeart,
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="py-20 sm:py-28 bg-[#050505] border-b border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00E68A]">
            Digital First Impression
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.12] text-white">
            Your Reputation Is Your Business&apos;s Most Valuable Asset.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#929292] leading-relaxed">
            Before choosing where to eat, shop, or spend their money, customers look at what others
            are saying. Make every real-world visit easy to remember online.
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TRUST_BLOCKS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-2xl bg-[#111111] border border-white/[0.09] hover:border-[#00E68A]/35 p-7 sm:p-8 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-semibold text-[#00E68A] tabular-nums">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#171717] border border-white/[0.08] flex items-center justify-center text-[#00E68A] group-hover:bg-[#00E68A]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-[15px] text-[#929292] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
