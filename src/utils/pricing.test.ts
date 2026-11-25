import test from 'node:test';
import assert from 'node:assert/strict';
import { calculatePricing, formatBDT, sanitizeQuantity } from './pricing';
import { validateFeedbackForm, validateInquiryForm } from './validation';

test('1 card calculates standard BDT pricing with 0% discount', () => {
  const result = calculatePricing(1);
  assert.equal(result.quantity, 1);
  assert.equal(result.discountPercent, 0);
  assert.equal(result.originalOneTimePrice, 1200);
  assert.equal(result.discountedOneTimePrice, 1200);
  assert.equal(result.monthlyRecurringTotal, 200);
  assert.equal(result.firstMonthTotal, 1400);
});

test('2 cards apply 15% discount to card hardware only and keep flat 200 BDT monthly fee', () => {
  const result = calculatePricing(2);
  assert.equal(result.quantity, 2);
  assert.equal(result.discountPercent, 15);
  assert.equal(result.originalOneTimePrice, 2400);
  assert.equal(result.discountSavings, 360);
  assert.equal(result.discountedOneTimePrice, 2040);
  assert.equal(result.monthlyRecurringTotal, 200);
  assert.equal(result.firstMonthTotal, 2240);
});

test('5 cards apply 15% discount to card hardware and keep flat 200 BDT monthly fee', () => {
  const result = calculatePricing(5);
  assert.equal(result.discountPercent, 15);
  assert.equal(result.originalOneTimePrice, 6000);
  assert.equal(result.discountedOneTimePrice, 5100);
  assert.equal(result.monthlyRecurringTotal, 200);
  assert.equal(result.firstMonthTotal, 5300);
});

test('6 cards apply 20% discount to card hardware and keep flat 200 BDT monthly fee', () => {
  const result = calculatePricing(6);
  assert.equal(result.discountPercent, 20);
  assert.equal(result.originalOneTimePrice, 7200);
  assert.equal(result.discountSavings, 1440);
  assert.equal(result.discountedOneTimePrice, 5760);
  assert.equal(result.monthlyRecurringTotal, 200);
  assert.equal(result.firstMonthTotal, 5960);
});

test('10 cards keep flat 200 BDT monthly fee', () => {
  const result = calculatePricing(10);
  assert.equal(result.discountPercent, 20);
  assert.equal(result.discountedOneTimePrice, 9600);
  assert.equal(result.monthlyRecurringTotal, 200);
  assert.equal(result.firstMonthTotal, 9800);
});

test('sanitizeQuantity clamps invalid, negative, and oversized inputs', () => {
  assert.equal(sanitizeQuantity(0), 1);
  assert.equal(sanitizeQuantity(-4), 1);
  assert.equal(sanitizeQuantity('abc'), 1);
  assert.equal(sanitizeQuantity(999), 500);
  assert.equal(sanitizeQuantity('12'), 12);
});

test('formatBDT formats currency consistently', () => {
  assert.equal(formatBDT(1200), '৳1,200');
  assert.equal(formatBDT(5760), '৳5,760');
});

test('validateInquiryForm rejects missing fields and accepts valid input', () => {
  const invalid = validateInquiryForm({
    contactName: '',
    businessName: 'Cafe',
    email: 'not-an-email',
    phone: '123',
    businessType: '',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.contactName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.businessType);

  const valid = validateInquiryForm({
    contactName: 'Tariq Mahmud',
    businessName: 'Dhanmondi Roast House',
    email: 'owner@roasthouse.example',
    phone: '+8801700000000',
    businessType: 'Cafe / Coffee Shop',
  });
  assert.equal(valid.valid, true);
});

test('validateFeedbackForm validates rating and message length', () => {
  const invalid = validateFeedbackForm({
    rating: 0,
    category: 'Service Speed',
    message: 'Too short',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.rating);
  assert.ok(invalid.errors.message);

  const valid = validateFeedbackForm({
    rating: 4,
    category: 'Food & Quality',
    message: 'Great espresso, though table clearing took a bit longer during rush hour.',
    email: 'guest@example.com',
  });
  assert.equal(valid.valid, true);
});
