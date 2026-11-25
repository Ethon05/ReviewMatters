import { useState } from 'react';
import { ArrowUpRight, Layers, MessageSquare, Star, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import {
  DEMO_DASHBOARD_LOCATIONS,
  LocationId,
  TimeframeId,
} from '../data/siteData';

const LOCATION_OPTIONS: { id: LocationId; label: string }[] = [
  { id: 'all', label: 'All Locations' },
  { id: 'dhanmondi', label: 'Dhanmondi Bistro' },
  { id: 'banani', label: 'Banani Roastery' },
  { id: 'gulshan', label: 'Gulshan Lounge' },
];

const TIMEFRAME_OPTIONS: { id: TimeframeId; label: string }[] = [
  { id: '30d', label: '30 Days' },
  { id: '90d', label: '90 Days' },
  { id: '6m', label: '6 Months' },
];

export function DashboardShowcase() {
  const [locationId, setLocationId] = useState<LocationId>('all');
  const [timeframe, setTimeframe] = useState<TimeframeId>('6m');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeData = DEMO_DASHBOARD_LOCATIONS[locationId];
  const series = activeData.activityByRange[timeframe];
  const maxVal = Math.max(
    ...series.map((pt) => pt.googleReviews + pt.privateFeedback),
    10
  );

  return (
    <section className="py-20 sm:py-28 bg-[#0A0A0A] border-b border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00E68A]">
              Product 02 · ReviewMattrs SaaS Platform
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.12] text-white">
              More Than a Card. Your Reputation Command Center.
            </h2>
            <p className="mt-4 text-base text-[#929292] leading-relaxed">
              ReviewMattrs pairs physical NFC collection with a centralized digital workspace to
              track review trends, monitor branch activity, and surface service insights.
            </p>
          </div>
          <p className="text-xs font-mono text-[#929292] shrink-0">
            Interactive Preview · Illustrative Demo Data Only
          </p>
        </div>

        {/* SaaS Application Frame */}
        <div className="mt-10 rounded-2xl bg-[#111111] border border-white/[0.1] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
          {/* Workspace Toolbar */}
          <div className="px-5 sm:px-7 py-4 bg-[#141414] border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-[#929292] mr-2">Branch:</span>
              <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#0A0A0A] border border-white/[0.08]">
                {LOCATION_OPTIONS.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    aria-pressed={locationId === loc.id}
                    onClick={() => {
                      setLocationId(loc.id);
                      setHoveredIndex(null);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      locationId === loc.id
                        ? 'bg-[#00E68A] text-[#050505] font-semibold'
                        : 'text-[#D5D5D5] hover:text-white'
                    }`}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-[#929292]">Range:</span>
              <div className="flex items-center gap-1 p-1 rounded-xl bg-[#0A0A0A] border border-white/[0.08]">
                {TIMEFRAME_OPTIONS.map((tf) => (
                  <button
                    key={tf.id}
                    type="button"
                    aria-pressed={timeframe === tf.id}
                    onClick={() => {
                      setTimeframe(tf.id);
                      setHoveredIndex(null);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      timeframe === tf.id
                        ? 'bg-[#1F2421] text-[#00E68A] border border-[#00E68A]/35'
                        : 'text-[#929292] hover:text-white'
                    }`}
                  >
                    {tf.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-7 space-y-6">
            {/* Top KPI Strip (4 Metrics) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-xl bg-[#0A0A0A] border border-white/[0.08] p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs text-[#929292]">
                  <span>Total Reviews (Demo)</span>
                  <TrendingUp className="w-4 h-4 text-[#00E68A]" />
                </div>
                <p className="mt-2.5 text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                  {activeData.totalReviews.toLocaleString('en-US')}
                </p>
                <p className="mt-1 text-xs text-[#929292]">{activeData.area}</p>
              </div>

              <div className="rounded-xl bg-[#0A0A0A] border border-white/[0.08] p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs text-[#929292]">
                  <span>Average Rating (Demo)</span>
                  <Star className="w-4 h-4 text-[#00E68A] fill-[#00E68A]" />
                </div>
                <p className="mt-2.5 text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                  {activeData.averageRating.toFixed(1)}
                  <span className="text-sm font-normal text-[#929292]"> / 5.0</span>
                </p>
                <p className="mt-1 text-xs text-[#00E68A]">Public Google average</p>
              </div>

              <div className="rounded-xl bg-[#0A0A0A] border border-white/[0.08] p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs text-[#929292]">
                  <span>New Reviews (Period)</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00E68A]" />
                </div>
                <p className="mt-2.5 text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                  +{activeData.newReviews}
                </p>
                <p className="mt-1 text-xs text-[#929292]">Response rate {activeData.responseRate}</p>
              </div>

              <div className="rounded-xl bg-[#0A0A0A] border border-white/[0.08] p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs text-[#929292]">
                  <span>Private Feedback</span>
                  <MessageSquare className="w-4 h-4 text-[#00E68A]" />
                </div>
                <p className="mt-2.5 text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                  {activeData.feedbackReceived}
                </p>
                <p className="mt-1 text-xs text-[#929292]">Direct manager notes</p>
              </div>
            </div>

            {/* Middle Row: Activity Chart & Rating Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Interactive Activity Bar Chart */}
              <div className="lg:col-span-8 rounded-xl bg-[#0A0A0A] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Review &amp; Feedback Activity Over Time
                    </h3>
                    <p className="text-xs text-[#929292]">
                      Hover or tap columns to inspect monthly demo volume
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[#D5D5D5]">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-[#00E68A]" />
                      Google Reviews
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-white/30" />
                      Private Feedback
                    </span>
                  </div>
                </div>

                {/* Responsive Interactive Column Chart */}
                <div className="mt-6 h-56 flex items-end justify-between gap-3 sm:gap-5 pt-8 border-b border-white/[0.08] pb-2 relative">
                  {series.map((point, idx) => {
                    const googlePct = Math.round((point.googleReviews / maxVal) * 100);
                    const privatePct = Math.round((point.privateFeedback / maxVal) * 100);
                    const isHovered = hoveredIndex === idx;

                    return (
                      <div
                        key={point.label}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => setHoveredIndex(idx)}
                        className="relative flex-1 h-full flex flex-col justify-end items-center group cursor-pointer"
                      >
                        {/* Tooltip */}
                        {isHovered && (
                          <div className="absolute -top-3 z-20 px-2.5 py-1.5 rounded-lg bg-[#171717] border border-[#00E68A]/45 text-[11px] font-mono text-white whitespace-nowrap shadow-xl">
                            <span>{point.label}: </span>
                            <span className="text-[#00E68A]">{point.googleReviews}G</span>
                            <span> / </span>
                            <span className="text-[#D5D5D5]">{point.privateFeedback}P</span>
                          </div>
                        )}

                        <div className="w-full max-w-[44px] h-[82%] flex items-end gap-1">
                          <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            style={{ height: `${Math.max(googlePct, 8)}%`, transformOrigin: 'bottom' }}
                            className={`flex-1 rounded-t-md transition-colors ${
                              isHovered ? 'bg-[#8BFFD0]' : 'bg-[#00E68A]'
                            }`}
                          />
                          <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.45, delay: idx * 0.05 + 0.05, ease: [0.16, 1, 0.3, 1] }}
                            style={{ height: `${Math.max(privatePct, 6)}%`, transformOrigin: 'bottom' }}
                            className="w-2.5 sm:w-3 rounded-t-md bg-white/25 group-hover:bg-white/45 transition-colors"
                          />
                        </div>
                        <span className="mt-2.5 text-[11px] font-mono text-[#929292]">
                          {point.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="lg:col-span-4 rounded-xl bg-[#0A0A0A] border border-white/[0.08] p-5 sm:p-6">
                <h3 className="text-base font-semibold text-white">Rating Distribution</h3>
                <p className="text-xs text-[#929292] mt-0.5">
                  Illustrative breakdown for {activeData.name}
                </p>

                <div className="mt-5 space-y-3.5">
                  {activeData.ratingDistribution.map((row) => (
                    <div key={row.stars} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono tabular-nums">
                        <span className="text-[#D5D5D5]">{row.stars} Stars</span>
                        <span className="text-[#929292]">
                          {row.count} ({row.percent}%)
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#171717] overflow-hidden">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          style={{ width: `${row.percent}%`, transformOrigin: 'left' }}
                          className={`h-full rounded-full ${
                            row.stars >= 4 ? 'bg-[#00E68A]' : 'bg-white/30'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: Recent Activity & Performance Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Recent Activity Table */}
              <div className="lg:col-span-7 rounded-xl bg-[#0A0A0A] border border-white/[0.08] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-base font-semibold text-white">Recent Review Activity</h3>
                  <span className="text-xs text-[#929292]">Sample stream</span>
                </div>

                <div className="divide-y divide-white/[0.07]">
                  {activeData.recentActivity.map((entry) => (
                    <div
                      key={entry.id}
                      className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                          <span className="font-semibold text-white">{entry.location}</span>
                          <span className="text-[#929292]" aria-hidden="true">·</span>
                          <span className="text-[#00E68A]">{entry.channel}</span>
                          <span className="text-[#929292]" aria-hidden="true">·</span>
                          <span className="font-mono text-[#929292] tabular-nums">
                            {entry.rating}.0 ★
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#D5D5D5] truncate">
                          {entry.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 text-xs font-mono text-[#929292]">
                        <span>{entry.date}</span>
                        <span className="text-[#D5D5D5]">{entry.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Insights */}
              <div className="lg:col-span-5 rounded-xl bg-[#0A0A0A] border border-white/[0.08] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="text-base font-semibold text-white">
                    Feedback Themes &amp; Insights
                  </h3>
                  <Layers className="w-4 h-4 text-[#00E68A]" />
                </div>

                <div className="space-y-3.5">
                  {activeData.insights.map((insight) => (
                    <div
                      key={insight.theme}
                      className="pb-3.5 last:pb-0 border-b last:border-b-0 border-white/[0.07]"
                    >
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="font-semibold text-white">{insight.theme}</span>
                        <span
                          className={`font-mono tabular-nums ${
                            insight.sentiment === 'Positive'
                              ? 'text-[#00E68A]'
                              : 'text-amber-300'
                          }`}
                        >
                          {insight.mentions} mentions · {insight.sentiment}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs text-[#929292] leading-relaxed">
                        {insight.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
