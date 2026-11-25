import { QrCode, Wifi } from 'lucide-react';
import { LOGO_ASSET_PATH } from '../config/siteConfig';

interface NFCCardVisualProps {
  side?: 'front' | 'back';
  isScanning?: boolean;
  businessName?: string;
  compact?: boolean;
}

export function NFCCardVisual({
  side = 'front',
  isScanning = false,
  businessName = 'Your Business Name',
  compact = false,
}: NFCCardVisualProps) {
  return (
    <div
      className={`relative w-full aspect-[1.586/1] rounded-2xl overflow-hidden border transition-all duration-300 select-none ${
        isScanning
          ? 'border-[#00E68A]/70 shadow-[0_24px_64px_-12px_rgba(0,230,138,0.28)]'
          : 'border-white/[0.14] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)]'
      }`}
      style={{
        background:
          'linear-gradient(135deg, #181B19 0%, #0B0D0C 48%, #050505 100%)',
      }}
    >
      {/* Subtle brushed carbon specular sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 22% 18%, rgba(255,255,255,0.12) 0%, transparent 48%), radial-gradient(circle at 85% 85%, rgba(0,230,138,0.14) 0%, transparent 50%)',
        }}
      />

      {/* Precision hairline inner trim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[6px] rounded-[12px] border border-white/[0.06]"
      />

      {side === 'front' ? (
        <div
          className={`relative z-10 h-full flex flex-col justify-between ${
            compact ? 'p-4 sm:p-5' : 'p-5 sm:p-7'
          }`}
        >
          {/* Top Row: Official Logo & NFC Symbol */}
          <div className="flex items-start justify-between gap-4">
            <img
              src={LOGO_ASSET_PATH}
              alt="ReviewMattrs official card logo"
              className={`${compact ? 'h-5 sm:h-6' : 'h-6 sm:h-7'} w-auto object-contain`}
              referrerPolicy="no-referrer"
            />
            <div
              className={`flex items-center justify-center rounded-lg border transition-colors ${
                isScanning
                  ? 'border-[#00E68A]/70 bg-[#00E68A]/15 text-[#00E68A]'
                  : 'border-[#00E68A]/30 bg-[#00E68A]/10 text-[#00E68A]'
              } ${compact ? 'w-8 h-8' : 'w-10 h-10'}`}
              title="NFC Contactless Ready"
            >
              <Wifi className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} rotate-90`} />
            </div>
          </div>

          {/* Center: Clean Matte Finish & Subtle Chip Detail */}
          <div className="my-auto py-1">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#929292]">
              Contactless Google Review Card
            </p>
            <p
              className={`mt-1 font-semibold tracking-tight text-white truncate ${
                compact ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
              }`}
            >
              {businessName}
            </p>
          </div>

          {/* Bottom Row: Tap instruction & QR cue */}
          <div className="flex items-end justify-between gap-3 pt-2 border-t border-white/[0.08]">
            <div>
              <p className="text-xs font-semibold text-[#00E68A]">
                Tap. Review. Grow.
              </p>
              <p className="text-[11px] text-[#929292]">
                Hold phone near card or scan reverse QR
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#D5D5D5] shrink-0">
              <QrCode className="w-3.5 h-3.5 text-[#00E68A]" />
              <span>NFC + QR</span>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`relative z-10 h-full flex items-center justify-between gap-3 sm:gap-4 ${
            compact ? 'p-4 sm:p-5' : 'p-4 sm:p-6'
          }`}
        >
          <div className="flex flex-col justify-between h-full min-w-0 flex-1">
            <div>
              <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.1em] uppercase text-[#00E68A]">
                Universal QR Fallback
              </p>
              <h4 className="mt-1 text-sm sm:text-base font-bold text-white leading-snug">
                Scan With Any Camera
              </h4>
              <p className="mt-1 text-[11px] text-[#929292] leading-snug">
                No app required. Opens your configured Google Review link in the browser.
              </p>
            </div>
            <p className="text-[10px] sm:text-[11px] font-mono text-[#929292] truncate">
              www.reviewmattrs.com
            </p>
          </div>

          {/* Crisp SVG QR Code Matrix Graphic */}
          <div className="shrink-0 p-2 sm:p-2.5 rounded-xl bg-white text-[#050505] shadow-lg">
            <svg
              viewBox="0 0 64 64"
              className={compact ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-20 h-20 sm:w-24 sm:h-24'}
              aria-label="Illustrative backup QR code"
            >
              {/* Top-left finder */}
              <rect x="2" y="2" width="18" height="18" rx="2" fill="#050505" />
              <rect x="5" y="5" width="12" height="12" rx="1" fill="#FFFFFF" />
              <rect x="8" y="8" width="6" height="6" fill="#050505" />
              {/* Top-right finder */}
              <rect x="44" y="2" width="18" height="18" rx="2" fill="#050505" />
              <rect x="47" y="5" width="12" height="12" rx="1" fill="#FFFFFF" />
              <rect x="50" y="8" width="6" height="6" fill="#050505" />
              {/* Bottom-left finder */}
              <rect x="2" y="44" width="18" height="18" rx="2" fill="#050505" />
              <rect x="5" y="47" width="12" height="12" rx="1" fill="#FFFFFF" />
              <rect x="8" y="50" width="6" height="6" fill="#050505" />
              {/* Matrix pattern */}
              <rect x="24" y="4" width="4" height="4" fill="#050505" />
              <rect x="32" y="4" width="4" height="4" fill="#050505" />
              <rect x="28" y="8" width="4" height="4" fill="#050505" />
              <rect x="36" y="8" width="4" height="4" fill="#050505" />
              <rect x="24" y="14" width="6" height="4" fill="#050505" />
              <rect x="34" y="14" width="6" height="4" fill="#050505" />
              <rect x="4" y="24" width="4" height="6" fill="#050505" />
              <rect x="12" y="26" width="6" height="4" fill="#050505" />
              <rect x="24" y="24" width="16" height="16" rx="3" fill="#050505" />
              <rect x="28" y="28" width="8" height="8" rx="1.5" fill="#00E68A" />
              <rect x="44" y="24" width="4" height="4" fill="#050505" />
              <rect x="52" y="24" width="8" height="4" fill="#050505" />
              <rect x="46" y="32" width="6" height="4" fill="#050505" />
              <rect x="56" y="32" width="4" height="8" fill="#050505" />
              <rect x="4" y="34" width="6" height="4" fill="#050505" />
              <rect x="14" y="34" width="6" height="4" fill="#050505" />
              <rect x="24" y="44" width="4" height="8" fill="#050505" />
              <rect x="32" y="46" width="8" height="4" fill="#050505" />
              <rect x="44" y="44" width="6" height="6" fill="#050505" />
              <rect x="54" y="44" width="6" height="4" fill="#050505" />
              <rect x="26" y="56" width="10" height="4" fill="#050505" />
              <rect x="42" y="54" width="8" height="6" fill="#050505" />
              <rect x="54" y="52" width="6" height="8" fill="#050505" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
