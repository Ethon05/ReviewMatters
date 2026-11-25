export const LOGO_ASSET_PATH = '/assets/aistudio/reviewmattrs_logo_transparent_4k_ed63233e.png';
export const PRODUCT_STUDIO_IMAGE_PATH =
  '/assets/aistudio/Neon_Green_Google_Review_Card_Showcase_7535e69f.png';
export const PRODUCT_RESTAURANT_FOLDER_IMAGE_PATH =
  '/assets/aistudio/Restaurant_Review_Card_on_Leather_Check_Folder_d418f9f1.png';

/**
 * Configurable destinations for ReviewMattrs.
 * Replace placeholder endpoints with live CRM, WhatsApp Business,
 * payment checkout, or SaaS authentication URLs before production launch.
 */
export const SITE_CONFIG = {
  brandName: 'ReviewMattrs',
  websiteUrl: 'https://www.reviewmattrs.com',
  websiteDisplay: 'www.reviewmattrs.com',
  market: 'Bangladesh',
  currency: 'BDT',
  destinations: {
    orderEndpoint: '#configure-order-endpoint',
    contactEndpoint: '#configure-contact-endpoint',
    portalLoginUrl: '#configure-saas-portal-login',
    googleReviewPolicyUrl: 'https://support.google.com/business/answer/7400114',
    socialPlaceholders: [
      { label: 'Instagram (Configurable)', href: '#configure-instagram-url' },
      { label: 'LinkedIn (Configurable)', href: '#configure-linkedin-url' },
      { label: 'Facebook (Configurable)', href: '#configure-facebook-url' },
    ],
  },
} as const;
