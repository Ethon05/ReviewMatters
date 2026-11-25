export const UNIT_CARD_PRICE_BDT = 1200;
export const MONTHLY_SUBSCRIPTION_BDT = 200;
export const MIN_CARD_QUANTITY = 1;
export const MAX_CARD_QUANTITY = 500;

export interface PricingBreakdown {
  quantity: number;
  unitCardPrice: number;
  monthlyFlatFee: number;
  discountRate: number;
  discountPercent: number;
  discountTierLabel: string;
  originalOneTimePrice: number;
  discountSavings: number;
  discountedOneTimePrice: number;
  monthlyRecurringTotal: number;
  firstMonthTotal: number;
}

export function sanitizeQuantity(raw: number | string): number {
  const parsed = typeof raw === 'number' ? raw : Number.parseInt(String(raw).trim(), 10);
  if (!Number.isFinite(parsed) || Number.isNaN(parsed)) {
    return MIN_CARD_QUANTITY;
  }
  return Math.min(MAX_CARD_QUANTITY, Math.max(MIN_CARD_QUANTITY, Math.floor(parsed)));
}

export function getBulkDiscountRate(quantity: number): number {
  const qty = sanitizeQuantity(quantity);
  if (qty >= 6) return 0.2;
  if (qty >= 2) return 0.15;
  return 0;
}

export function getDiscountTierLabel(quantity: number): string {
  const qty = sanitizeQuantity(quantity);
  if (qty >= 6) return '20% Bulk Card Discount (6+ cards)';
  if (qty >= 2) return '15% Bulk Card Discount (2–5 cards)';
  return 'Standard Single-Card Pricing';
}

export function calculatePricing(rawQuantity: number | string): PricingBreakdown {
  const quantity = sanitizeQuantity(rawQuantity);
  const discountRate = getBulkDiscountRate(quantity);
  const discountPercent = Math.round(discountRate * 100);
  const originalOneTimePrice = quantity * UNIT_CARD_PRICE_BDT;
  const discountSavings = Math.round(originalOneTimePrice * discountRate);
  const discountedOneTimePrice = originalOneTimePrice - discountSavings;
  // Flat monthly subscription: BDT 200/month regardless of number of cards
  const monthlyRecurringTotal = MONTHLY_SUBSCRIPTION_BDT;
  const firstMonthTotal = discountedOneTimePrice + monthlyRecurringTotal;

  return {
    quantity,
    unitCardPrice: UNIT_CARD_PRICE_BDT,
    monthlyFlatFee: MONTHLY_SUBSCRIPTION_BDT,
    discountRate,
    discountPercent,
    discountTierLabel: getDiscountTierLabel(quantity),
    originalOneTimePrice,
    discountSavings,
    discountedOneTimePrice,
    monthlyRecurringTotal,
    firstMonthTotal,
  };
}

export function formatBDT(amount: number): string {
  return `৳${Math.round(amount).toLocaleString('en-US')}`;
}
