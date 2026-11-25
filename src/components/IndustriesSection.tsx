import { useState } from 'react';
import { Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { INDUSTRIES_DATA } from '../data/siteData';

export function IndustriesSection() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-[#050505] border-b border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00E68A]">
            Built for Food &amp; Service Businesses
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.12] text-white">
            Made for Businesses Where Every Experience Matters.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#929292] leading-relaxed">
            From the first bite to the final bill, every customer interaction is an opportunity to
            build lasting trust—starting with restaurants and cafes across Bangladesh.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {INDUSTRIES_DATA.map((item, idx) => {
            const hasFailed = Boolean(failedImages[item.id]);
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl overflow-hidden bg-[#111111] border border-white/[0.09] hover:border-[#00E68A]/40 transition-colors duration-200 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#171717]">
                  {!hasFailed ? (
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [item.id]: true }))
                      }
                      className="w-full h-full object-cover object-center brightness-[0.92] contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#171717] to-[#0A0A0A] text-[#929292] p-6">
                      <Building2 className="w-8 h-8 text-[#00E68A]" />
                      <span className="text-sm font-medium text-white">{item.title}</span>
                    </div>
                  )}

                  {/* Measured contrast scrim matching black & mint aesthetic */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#050505] via-[#050505]/65 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(0,230,138,0.08),transparent_45%)]"
                  />

                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="text-xs font-medium text-[#00E68A]">{item.label}</p>
                    <h3 className="mt-1 text-2xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-4">
                  <p className="text-sm sm:text-[15px] text-[#D5D5D5] leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-xs text-[#929292] pt-3 border-t border-white/[0.08]">
                    {item.placementTip}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
