export interface InquiryFormInput {
  contactName: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  notes?: string;
}

export interface FeedbackFormInput {
  rating: number;
  category: string;
  message: string;
  email?: string;
}

export type ValidationErrors<T> = Partial<Record<keyof T, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d][\d\s-]{6,17}$/;

export function validateInquiryForm(input: InquiryFormInput): {
  valid: boolean;
  errors: ValidationErrors<InquiryFormInput>;
} {
  const errors: ValidationErrors<InquiryFormInput> = {};

  if (!input.contactName || input.contactName.trim().length < 2) {
    errors.contactName = 'Please enter your full name (at least 2 characters).';
  }
  if (!input.businessName || input.businessName.trim().length < 2) {
    errors.businessName = 'Please enter your business or restaurant name.';
  }
  if (!input.email || !EMAIL_REGEX.test(input.email.trim())) {
    errors.email = 'Please enter a valid work email address.';
  }
  if (!input.phone || !PHONE_REGEX.test(input.phone.trim())) {
    errors.phone = 'Please enter a valid contact phone number (7–18 digits).';
  }
  if (!input.businessType || input.businessType.trim().length === 0) {
    errors.businessType = 'Please select a business category.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateFeedbackForm(input: FeedbackFormInput): {
  valid: boolean;
  errors: ValidationErrors<FeedbackFormInput>;
} {
  const errors: ValidationErrors<FeedbackFormInput> = {};

  if (!Number.isInteger(input.rating) || input.rating < 1 || input.rating > 5) {
    errors.rating = 'Please select a rating from 1 to 5 stars.';
  }
  if (!input.category || input.category.trim().length === 0) {
    errors.category = 'Please choose a feedback category.';
  }
  if (!input.message || input.message.trim().length < 10) {
    errors.message = 'Please share at least 10 characters of feedback.';
  }
  if (input.email && input.email.trim().length > 0 && !EMAIL_REGEX.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address or leave blank.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
