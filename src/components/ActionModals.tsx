import { useEffect, useState } from 'react';
import { CheckCircle2, Lock, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { formatBDT, PricingBreakdown } from '../utils/pricing';
import { InquiryFormInput, validateInquiryForm, ValidationErrors } from '../utils/validation';

export type ActiveModalType =
  | null
  | { type: 'order'; breakdown: PricingBreakdown }
  | { type: 'contact' }
  | { type: 'login' }
  | { type: 'legal'; doc: 'privacy' | 'terms' };

interface ActionModalsProps {
  modal: ActiveModalType;
  onClose: () => void;
}

const BUSINESS_TYPES = [
  'Restaurant / Dining',
  'Cafe / Bakery',
  'Hotel / Hospitality',
  'Salon / Spa / Clinic',
  'Retail / Showroom',
  'Other Service Business',
];

export function ActionModals({ modal, onClose }: ActionModalsProps) {
  const [form, setForm] = useState<InquiryFormInput>({
    contactName: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'Restaurant / Dining',
    notes: '',
  });
  const [errors, setErrors] = useState<ValidationErrors<InquiryFormInput>>({});
  const [submitted, setSubmitted] = useState(false);

  // Login preview state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginSubmitted, setLoginSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
    setErrors({});
    setLoginSubmitted(false);
    setLoginError('');
  }, [modal]);

  useEffect(() => {
    if (!modal) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modal, onClose]);

  if (!modal) return null;

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = validateInquiryForm(form);
    if (!res.valid) {
      setErrors(res.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail.trim())) {
      setLoginError('Please enter a valid business email address.');
      return;
    }
    setLoginError('');
    setLoginSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#111111] border border-white/[0.14] p-6 sm:p-7 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-[#171717] border border-white/[0.08] flex items-center justify-center text-[#929292] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Order or Contact Inquiry Modal */}
        {(modal.type === 'order' || modal.type === 'contact') && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00E68A]">
              {modal.type === 'order' ? 'Order Request' : 'Talk to Our Team'}
            </p>
            <h3 className="mt-1.5 text-2xl font-bold text-white">
              {modal.type === 'order'
                ? 'Request Your ReviewMattrs Cards'
                : 'Connect With ReviewMattrs'}
            </h3>

            {modal.type === 'order' && (
              <div className="mt-4 rounded-xl bg-[#0A0A0A] border border-white/[0.08] p-4 space-y-1.5 text-xs">
                <div className="flex justify-between text-[#D5D5D5]">
                  <span>
                    {modal.breakdown.quantity} NFC{' '}
                    {modal.breakdown.quantity === 1 ? 'Card' : 'Cards'} (one-time)
                  </span>
                  <span className="font-mono font-semibold text-white tabular-nums">
                    {formatBDT(modal.breakdown.discountedOneTimePrice)}
                  </span>
                </div>
                <div className="flex justify-between text-[#929292]">
                  <span>Monthly SaaS subscription</span>
                  <span className="font-mono tabular-nums">
                    {formatBDT(modal.breakdown.monthlyRecurringTotal)}/mo
                  </span>
                </div>
                <div className="flex justify-between text-[#00E68A] pt-1.5 border-t border-white/[0.08] font-semibold">
                  <span>First-month combined total</span>
                  <span className="font-mono tabular-nums">
                    {formatBDT(modal.breakdown.firstMonthTotal)}
                  </span>
                </div>
              </div>
            )}

            {submitted ? (
              <div className="mt-6 py-4 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00E68A]/15 border border-[#00E68A]/40 flex items-center justify-center text-[#00E68A]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-white">Inquiry Captured (Demo State)</h4>
                <p className="text-sm text-[#D5D5D5] leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{form.contactName}</span>.
                  Your request for <span className="font-semibold text-white">{form.businessName}</span>{' '}
                  passed validation. Connect your live CRM, WhatsApp Business, or checkout endpoint
                  at <code className="font-mono text-xs text-[#00E68A]">SITE_CONFIG.destinations</code>{' '}
                  to dispatch real orders.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-3 rounded-xl bg-[#00E68A] hover:bg-[#00C978] text-[#050505] text-sm font-bold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} noValidate className="mt-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inq-name" className="block text-xs font-medium text-[#D5D5D5] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="inq-name"
                      type="text"
                      value={form.contactName}
                      onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                      placeholder="Full name"
                      className="w-full rounded-xl bg-[#0A0A0A] border border-white/[0.1] focus:border-[#00E68A] px-3.5 py-2.5 text-sm text-white focus:outline-none"
                    />
                    {errors.contactName && (
                      <p className="mt-1 text-xs text-rose-400">{errors.contactName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="inq-biz" className="block text-xs font-medium text-[#D5D5D5] mb-1.5">
                      Business Name *
                    </label>
                    <input
                      id="inq-biz"
                      type="text"
                      value={form.businessName}
                      onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                      placeholder="Restaurant or brand"
                      className="w-full rounded-xl bg-[#0A0A0A] border border-white/[0.1] focus:border-[#00E68A] px-3.5 py-2.5 text-sm text-white focus:outline-none"
                    />
                    {errors.businessName && (
                      <p className="mt-1 text-xs text-rose-400">{errors.businessName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inq-email" className="block text-xs font-medium text-[#D5D5D5] mb-1.5">
                      Work Email *
                    </label>
                    <input
                      id="inq-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@business.com"
                      className="w-full rounded-xl bg-[#0A0A0A] border border-white/[0.1] focus:border-[#00E68A] px-3.5 py-2.5 text-sm text-white focus:outline-none"
                    />
                    {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="inq-phone" className="block text-xs font-medium text-[#D5D5D5] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="inq-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full rounded-xl bg-[#0A0A0A] border border-white/[0.1] focus:border-[#00E68A] px-3.5 py-2.5 text-sm text-white focus:outline-none"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="inq-type" className="block text-xs font-medium text-[#D5D5D5] mb-1.5">
                    Business Category *
                  </label>
                  <select
                    id="inq-type"
                    value={form.businessType}
                    onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                    className="w-full rounded-xl bg-[#0A0A0A] border border-white/[0.1] focus:border-[#00E68A] px-3.5 py-2.5 text-sm text-white focus:outline-none"
                  >
                    {BUSINESS_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#111111]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="inq-notes" className="block text-xs font-medium text-[#D5D5D5] mb-1.5">
                    Branches or Custom Card Notes (Optional)
                  </label>
                  <textarea
                    id="inq-notes"
                    rows={2}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Number of branches, preferred delivery city, or questions..."
                    className="w-full rounded-xl bg-[#0A0A0A] border border-white/[0.1] focus:border-[#00E68A] px-3.5 py-2 text-sm text-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#00E68A] hover:bg-[#00C978] text-[#050505] text-sm font-bold transition-colors cursor-pointer"
                >
                  {modal.type === 'order' ? 'Submit Card Order Inquiry' : 'Send Message'}
                </button>
                <p className="text-[11px] text-[#929292] text-center">
                  Configurable destination ({SITE_CONFIG.destinations.orderEndpoint}). No live
                  payment is processed here.
                </p>
              </form>
            )}
          </div>
        )}

        {/* Client Portal Login Preview Modal */}
        {modal.type === 'login' && (
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#00E68A]/10 border border-[#00E68A]/30 flex items-center justify-center text-[#00E68A]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">ReviewMattrs Platform Login</h3>
              <p className="mt-1 text-xs text-[#929292]">
                Integration-ready sign-in interface. Configure live authentication URL in{' '}
                <code className="font-mono text-[#00E68A]">siteConfig.ts</code>.
              </p>
            </div>

            {loginSubmitted ? (
              <div className="rounded-xl bg-[#0A0A0A] border border-white/[0.08] p-4 space-y-3">
                <p className="text-sm font-semibold text-[#00E68A]">
                  Portal Route Ready for {loginEmail}
                </p>
                <p className="text-xs text-[#D5D5D5] leading-relaxed">
                  No live backend authentication is connected in this static preview. Once connected
                  to your SaaS portal destination ({SITE_CONFIG.destinations.portalLoginUrl}), users
                  sign in to manage cards and review analytics.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-[#171717] border border-white/[0.12] text-xs font-semibold text-white cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="login-email" className="block text-xs font-medium text-[#D5D5D5] mb-1.5">
                    Business Account Email
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="manager@restaurant.com"
                    className="w-full rounded-xl bg-[#0A0A0A] border border-white/[0.1] focus:border-[#00E68A] px-3.5 py-2.5 text-sm text-white focus:outline-none"
                  />
                  {loginError && <p className="mt-1 text-xs text-rose-400">{loginError}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#00E68A] hover:bg-[#00C978] text-[#050505] text-sm font-bold transition-colors cursor-pointer"
                >
                  Continue to SaaS Portal
                </button>
              </form>
            )}
          </div>
        )}

        {/* Legal Notice Modal */}
        {modal.type === 'legal' && (
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00E68A]">
              ReviewMattrs Legal Placeholder
            </p>
            <h3 className="text-2xl font-bold text-white">
              {modal.doc === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
            <div className="space-y-3 text-sm text-[#D5D5D5] leading-relaxed">
              {modal.doc === 'privacy' ? (
                <>
                  <p>
                    ReviewMattrs respects customer and business privacy. NFC review cards redirect
                    users directly to a business’s configured review landing destination without
                    requiring customers to install tracking software.
                  </p>
                  <p className="text-xs text-[#929292]">
                    Configurable legal template: Publish your organization’s complete data retention,
                    cookie, and Bangladesh/international privacy disclosures here prior to launch.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    ReviewMattrs provides physical NFC/QR hardware and reputation management software
                    tools. Businesses using ReviewMattrs agree to comply with Google’s review
                    contribution policies, including zero review gating or rating manipulation.
                  </p>
                  <p className="text-xs text-[#929292]">
                    Pricing in BDT consists of a one-time card purchase (৳1,200/card with tiered
                    bulk discounts) and a separate flat ৳200/month software subscription for all
                    cards.
                  </p>
                </>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-[#171717] border border-white/[0.12] hover:border-[#00E68A]/40 text-sm font-semibold text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
