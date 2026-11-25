import { useState } from 'react';
import { CheckCircle2, ExternalLink, ShieldCheck, Star } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { validateFeedbackForm, ValidationErrors, FeedbackFormInput } from '../utils/validation';

const CATEGORIES = ['Service Speed', 'Food & Quality', 'Staff Hospitality', 'Cleanliness', 'Other'];

const BENEFITS = [
  'Identify customer concerns early before minor friction repeats.',
  'Spot recurring service themes across tables, shifts, or branches.',
  'Receive optional private customer notes directly alongside public reviews.',
  'Monitor public Google reviews and respond calmly and thoughtfully.',
  'Improve everyday customer experience with clear operational context.',
  'Maintain transparent review collection aligned with Google policies.',
];

export function FeedbackSection() {
  const [rating, setRating] = useState<number>(4);
  const [category, setCategory] = useState<string>('Service Speed');
  const [message, setMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errors, setErrors] = useState<ValidationErrors<FeedbackFormInput>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateFeedbackForm({ rating, category, message, email });
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setMessage('');
    setEmail('');
    setRating(4);
    setCategory('Service Speed');
    setErrors({});
  };

  return (
    <section className="py-20 sm:py-28 bg-[#050505] border-b border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00E68A]">
            Transparent Feedback Workflow
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.12] text-white">
            Listen Better. Respond Faster. Improve Continuously.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#929292] leading-relaxed">
            Understand customer feedback, respond faster, and improve every experience—while keeping
            public Google Review access open and equal for every customer.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Private Feedback & Public Google Access Demo */}
          <div className="lg:col-span-6 rounded-2xl bg-[#111111] border border-white/[0.09] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Interactive Feedback Intake Preview
                </h3>
                <p className="text-xs text-[#929292] mt-0.5">
                  Demo preview · Optional private note alongside Google Reviews
                </p>
              </div>
              <a
                href={SITE_CONFIG.destinations.googleReviewPolicyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00E68A] hover:text-[#8BFFD0] transition-colors"
              >
                <span>Google Policy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {submitted ? (
              <div className="py-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00E68A]/15 border border-[#00E68A]/40 flex items-center justify-center text-[#00E68A]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Private Feedback Preview Submitted
                </h4>
                <p className="text-sm text-[#D5D5D5] leading-relaxed">
                  Thank you for testing the workflow ({rating}/5 stars · {category}). In a live
                  deployment, your manager receives this note immediately, and every customer also
                  retains full access to publish a review on Google.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2.5 rounded-xl bg-[#171717] border border-white/[0.12] text-sm font-medium text-white hover:border-[#00E68A]/50 transition-colors cursor-pointer"
                  >
                    Submit Another Sample
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                {/* Equal-access Public Google Review Banner */}
                <div className="rounded-xl bg-[#0A0A0A] border border-white/[0.08] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Prefer to post publicly on Google?
                    </p>
                    <p className="text-xs text-[#929292]">
                      All guests retain equal, direct access regardless of rating.
                    </p>
                  </div>
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#171717] border border-[#00E68A]/35 text-xs font-semibold text-[#00E68A] hover:bg-[#00E68A]/10 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Google Review Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Star Experience Rating */}
                <div>
                  <span className="block text-xs font-medium text-[#D5D5D5] mb-2">
                    Experience Rating
                  </span>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((value) => {
                      const active = value <= rating;
                      return (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setRating(value)}
                          aria-label={`Rate ${value} out of 5 stars`}
                          className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${
                            active
                              ? 'bg-[#00E68A]/15 border-[#00E68A]/50 text-[#00E68A]'
                              : 'bg-[#0A0A0A] border-white/[0.09] text-[#929292] hover:text-white'
                          }`}
                        >
                          <Star className={`w-4 h-4 ${active ? 'fill-[#00E68A]' : ''}`} />
                        </button>
                      );
                    })}
                    <span className="ml-2 text-xs font-mono text-[#929292] tabular-nums">
                      {rating}.0 / 5.0
                    </span>
                  </div>
                  {errors.rating && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.rating}</p>
                  )}
                </div>

                {/* Category Selector */}
                <div>
                  <span className="block text-xs font-medium text-[#D5D5D5] mb-2">
                    Feedback Category
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                          category === cat
                            ? 'bg-[#00E68A] border-[#00E68A] text-[#050505] font-semibold'
                            : 'bg-[#0A0A0A] border-white/[0.09] text-[#D5D5D5] hover:border-white/25'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feedback Message */}
                <div>
                  <label htmlFor="feedback-message" className="block text-xs font-medium text-[#D5D5D5] mb-2">
                    Optional Private Feedback Note
                  </label>
                  <textarea
                    id="feedback-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share a note directly with the management team..."
                    className="w-full rounded-xl bg-[#0A0A0A] border border-white/[0.1] focus:border-[#00E68A] px-3.5 py-2.5 text-sm text-white placeholder:text-[#929292]/70 focus:outline-none transition-colors"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>
                  )}
                </div>

                {/* Optional Contact Email */}
                <div>
                  <label htmlFor="feedback-email" className="block text-xs font-medium text-[#D5D5D5] mb-2">
                    Email for Manager Follow-Up (Optional)
                  </label>
                  <input
                    id="feedback-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="guest@example.com"
                    className="w-full rounded-xl bg-[#0A0A0A] border border-white/[0.1] focus:border-[#00E68A] px-3.5 py-2.5 text-sm text-white placeholder:text-[#929292]/70 focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl bg-[#00E68A] hover:bg-[#00C978] text-[#050505] text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Send Private Feedback Preview
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Policy-Compliant Benefits */}
          <div className="lg:col-span-6 space-y-6 lg:pt-2">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Built for Honest Feedback and Policy Integrity
              </h3>
              <p className="text-sm sm:text-base text-[#929292] leading-relaxed">
                Google prohibits review gating or selectively blocking unhappy customers from leaving
                a Google review. ReviewMattrs is designed around transparency: every visitor has
                unrestricted access to your Google Review page, alongside an optional channel to
                message your team directly.
              </p>
            </div>

            <ul className="space-y-3.5 pt-2">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#D5D5D5]">
                  <CheckCircle2 className="w-5 h-5 text-[#00E68A] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-[#111111] border border-white/[0.09] p-5 flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#00E68A] shrink-0 mt-0.5" />
              <div className="text-xs text-[#929292] leading-relaxed">
                <span className="font-semibold text-white">Google Review Policy Notice: </span>
                ReviewMattrs never gates, filters, or suppresses public Google reviews. Customers
                remain free to publish any honest rating, and Google independently governs how
                reviews are displayed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
