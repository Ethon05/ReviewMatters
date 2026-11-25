import { PRODUCT_RESTAURANT_FOLDER_IMAGE_PATH } from '../config/siteConfig';
import cafeImg from '../assets/images/industry_cafe_1795550993891.jpg';
import hospitalityImg from '../assets/images/industry_hospitality_1795550993250.jpg';
import retailImg from '../assets/images/industry_retail_1795550994252.jpg';

export interface IndustryItem {
  id: string;
  title: string;
  label: string;
  description: string;
  placementTip: string;
  image: string;
  alt: string;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'restaurants',
    title: 'Restaurants',
    label: 'Priority Market · Dining & Billing Counters',
    description:
      'Make it effortless for diners to discover your Google review experience right after a memorable meal or when settling the bill.',
    placementTip: 'Ideal for table tents, bill presenters, and cashier desks.',
    image: PRODUCT_RESTAURANT_FOLDER_IMAGE_PATH,
    alt: 'ReviewMattrs physical NFC Google Review Card placed inside a black leather restaurant bill presenter beside a dining receipt',
  },
  {
    id: 'cafes',
    title: 'Cafes & Bakeries',
    label: 'Everyday Visits · Espresso & Pickup Bars',
    description:
      'Turn daily coffee runs and pastry pickups into natural moments for guests to share authentic feedback before stepping out.',
    placementTip: 'Ideal for espresso pickup counters and communal seating tables.',
    image: cafeImg,
    alt: 'Minimalist specialty coffee shop wooden counter with matte black espresso machine and ceramic cup',
  },
  {
    id: 'hospitality',
    title: 'Hotels & Hospitality',
    label: 'Guest Experience · Check-In & Concierge',
    description:
      'Help travelers and resort guests share timely feedback at checkout while giving your hospitality team clear service insights.',
    placementTip: 'Ideal for front reception desks, concierge stations, and lounge lobbies.',
    image: hospitalityImg,
    alt: 'Luxury boutique hotel reception desk crafted from dark honed basalt stone with warm linear lighting',
  },
  {
    id: 'retail',
    title: 'Retail & Services',
    label: 'Salons, Clinics & Flagship Stores',
    description:
      'Make collecting genuine customer feedback part of your everyday checkout experience across clinics, salons, and showrooms.',
    placementTip: 'Ideal for checkout counters, consultation rooms, and service desks.',
    image: retailImg,
    alt: 'Minimalist luxury retail store checkout counter in brushed dark steel and smoked black glass',
  },
];

export type LocationId = 'all' | 'dhanmondi' | 'banani' | 'gulshan';
export type TimeframeId = '30d' | '90d' | '6m';

export interface DemoLocationData {
  id: LocationId;
  name: string;
  area: string;
  totalReviews: number;
  averageRating: number;
  newReviews: number;
  feedbackReceived: number;
  responseRate: string;
  ratingDistribution: { stars: number; count: number; percent: number }[];
  activityByRange: Record<
    TimeframeId,
    { label: string; googleReviews: number; privateFeedback: number }[]
  >;
  insights: {
    theme: string;
    sentiment: 'Positive' | 'Attention Needed';
    mentions: number;
    summary: string;
  }[];
  recentActivity: {
    id: string;
    date: string;
    location: string;
    channel: 'Google Review' | 'Private Feedback';
    rating: number;
    excerpt: string;
    status: 'Published' | 'Responded' | 'Resolved';
  }[];
}

export const DEMO_DASHBOARD_LOCATIONS: Record<LocationId, DemoLocationData> = {
  all: {
    id: 'all',
    name: 'All Locations (Sample)',
    area: '3 Connected Branches',
    totalReviews: 1284,
    averageRating: 4.7,
    newReviews: 142,
    feedbackReceived: 38,
    responseRate: '94%',
    ratingDistribution: [
      { stars: 5, count: 942, percent: 73 },
      { stars: 4, count: 224, percent: 17 },
      { stars: 3, count: 72, percent: 6 },
      { stars: 2, count: 28, percent: 2 },
      { stars: 1, count: 18, percent: 2 },
    ],
    activityByRange: {
      '30d': [
        { label: 'Wk 1', googleReviews: 28, privateFeedback: 8 },
        { label: 'Wk 2', googleReviews: 34, privateFeedback: 10 },
        { label: 'Wk 3', googleReviews: 39, privateFeedback: 9 },
        { label: 'Wk 4', googleReviews: 41, privateFeedback: 11 },
      ],
      '90d': [
        { label: 'Month 1', googleReviews: 108, privateFeedback: 29 },
        { label: 'Month 2', googleReviews: 126, privateFeedback: 33 },
        { label: 'Month 3', googleReviews: 142, privateFeedback: 38 },
      ],
      '6m': [
        { label: 'Jun', googleReviews: 74, privateFeedback: 21 },
        { label: 'Jul', googleReviews: 88, privateFeedback: 24 },
        { label: 'Aug', googleReviews: 96, privateFeedback: 27 },
        { label: 'Sep', googleReviews: 108, privateFeedback: 29 },
        { label: 'Oct', googleReviews: 126, privateFeedback: 33 },
        { label: 'Nov', googleReviews: 142, privateFeedback: 38 },
      ],
    },
    insights: [
      {
        theme: 'Staff Hospitality & Counter Speed',
        sentiment: 'Positive',
        mentions: 64,
        summary: 'Guests frequently praise attentive table check-ins and smooth billing.',
      },
      {
        theme: 'Weekend Peak Wait Times',
        sentiment: 'Attention Needed',
        mentions: 14,
        summary: 'Private feedback notes 15–20 min queue delays on Friday evenings.',
      },
      {
        theme: 'Packaging & Takeaway Temperature',
        sentiment: 'Attention Needed',
        mentions: 9,
        summary: 'Recurring takeaway note flagged for kitchen sealing workflow.',
      },
    ],
    recentActivity: [
      {
        id: 'act-1',
        date: 'Today · 19:40',
        location: 'Dhanmondi Bistro',
        channel: 'Google Review',
        rating: 5,
        excerpt: 'Tapped the counter card after dinner—warm ambiance and crisp service.',
        status: 'Responded',
      },
      {
        id: 'act-2',
        date: 'Today · 16:15',
        location: 'Banani Roastery',
        channel: 'Private Feedback',
        rating: 3,
        excerpt: 'Iced latte was great, though AC near the window table felt warm.',
        status: 'Resolved',
      },
      {
        id: 'act-3',
        date: 'Yesterday',
        location: 'Gulshan Lounge',
        channel: 'Google Review',
        rating: 5,
        excerpt: 'Quick billing and friendly staff. Clean layout and calm lighting.',
        status: 'Published',
      },
      {
        id: 'act-4',
        date: '2 days ago',
        location: 'Dhanmondi Bistro',
        channel: 'Google Review',
        rating: 4,
        excerpt: 'Great grill platter; weekend seating took a few minutes to clear.',
        status: 'Responded',
      },
    ],
  },
  dhanmondi: {
    id: 'dhanmondi',
    name: 'Dhanmondi Bistro (Sample)',
    area: 'Satmasjid Road · 4 Cards',
    totalReviews: 540,
    averageRating: 4.8,
    newReviews: 61,
    feedbackReceived: 15,
    responseRate: '96%',
    ratingDistribution: [
      { stars: 5, count: 421, percent: 78 },
      { stars: 4, count: 81, percent: 15 },
      { stars: 3, count: 22, percent: 4 },
      { stars: 2, count: 10, percent: 2 },
      { stars: 1, count: 6, percent: 1 },
    ],
    activityByRange: {
      '30d': [
        { label: 'Wk 1', googleReviews: 12, privateFeedback: 3 },
        { label: 'Wk 2', googleReviews: 15, privateFeedback: 4 },
        { label: 'Wk 3', googleReviews: 16, privateFeedback: 4 },
        { label: 'Wk 4', googleReviews: 18, privateFeedback: 4 },
      ],
      '90d': [
        { label: 'Month 1', googleReviews: 46, privateFeedback: 11 },
        { label: 'Month 2', googleReviews: 53, privateFeedback: 13 },
        { label: 'Month 3', googleReviews: 61, privateFeedback: 15 },
      ],
      '6m': [
        { label: 'Jun', googleReviews: 31, privateFeedback: 8 },
        { label: 'Jul', googleReviews: 36, privateFeedback: 9 },
        { label: 'Aug', googleReviews: 42, privateFeedback: 10 },
        { label: 'Sep', googleReviews: 46, privateFeedback: 11 },
        { label: 'Oct', googleReviews: 53, privateFeedback: 13 },
        { label: 'Nov', googleReviews: 61, privateFeedback: 15 },
      ],
    },
    insights: [
      {
        theme: 'Signature Grill & Plating',
        sentiment: 'Positive',
        mentions: 38,
        summary: 'Most cited reason for repeat dining visits in recent reviews.',
      },
      {
        theme: 'Friday Evening Waitlist',
        sentiment: 'Attention Needed',
        mentions: 8,
        summary: 'Guests suggest clearer table turnaround updates at reception.',
      },
    ],
    recentActivity: [
      {
        id: 'dh-1',
        date: 'Today · 19:40',
        location: 'Dhanmondi Bistro',
        channel: 'Google Review',
        rating: 5,
        excerpt: 'Tapped the counter card after dinner—warm ambiance and crisp service.',
        status: 'Responded',
      },
      {
        id: 'dh-2',
        date: '2 days ago',
        location: 'Dhanmondi Bistro',
        channel: 'Google Review',
        rating: 4,
        excerpt: 'Great grill platter; weekend seating took a few minutes to clear.',
        status: 'Responded',
      },
    ],
  },
  banani: {
    id: 'banani',
    name: 'Banani Roastery (Sample)',
    area: 'Road 11 · 3 Cards',
    totalReviews: 418,
    averageRating: 4.6,
    newReviews: 48,
    feedbackReceived: 14,
    responseRate: '92%',
    ratingDistribution: [
      { stars: 5, count: 292, percent: 70 },
      { stars: 4, count: 79, percent: 19 },
      { stars: 3, count: 29, percent: 7 },
      { stars: 2, count: 11, percent: 3 },
      { stars: 1, count: 7, percent: 1 },
    ],
    activityByRange: {
      '30d': [
        { label: 'Wk 1', googleReviews: 10, privateFeedback: 3 },
        { label: 'Wk 2', googleReviews: 11, privateFeedback: 4 },
        { label: 'Wk 3', googleReviews: 14, privateFeedback: 3 },
        { label: 'Wk 4', googleReviews: 13, privateFeedback: 4 },
      ],
      '90d': [
        { label: 'Month 1', googleReviews: 38, privateFeedback: 10 },
        { label: 'Month 2', googleReviews: 42, privateFeedback: 12 },
        { label: 'Month 3', googleReviews: 48, privateFeedback: 14 },
      ],
      '6m': [
        { label: 'Jun', googleReviews: 26, privateFeedback: 7 },
        { label: 'Jul', googleReviews: 30, privateFeedback: 8 },
        { label: 'Aug', googleReviews: 33, privateFeedback: 9 },
        { label: 'Sep', googleReviews: 38, privateFeedback: 10 },
        { label: 'Oct', googleReviews: 42, privateFeedback: 12 },
        { label: 'Nov', googleReviews: 48, privateFeedback: 14 },
      ],
    },
    insights: [
      {
        theme: 'Single-Origin Pour Over',
        sentiment: 'Positive',
        mentions: 27,
        summary: 'Consistently highlighted by morning regulars and remote workers.',
      },
      {
        theme: 'Window Zone Cooling',
        sentiment: 'Attention Needed',
        mentions: 5,
        summary: 'Afternoon sun increases seating temperature near glass frontage.',
      },
    ],
    recentActivity: [
      {
        id: 'bn-1',
        date: 'Today · 16:15',
        location: 'Banani Roastery',
        channel: 'Private Feedback',
        rating: 3,
        excerpt: 'Iced latte was great, though AC near the window table felt warm.',
        status: 'Resolved',
      },
    ],
  },
  gulshan: {
    id: 'gulshan',
    name: 'Gulshan Lounge (Sample)',
    area: 'Gulshan Avenue · 3 Cards',
    totalReviews: 326,
    averageRating: 4.7,
    newReviews: 33,
    feedbackReceived: 9,
    responseRate: '95%',
    ratingDistribution: [
      { stars: 5, count: 229, percent: 70 },
      { stars: 4, count: 64, percent: 20 },
      { stars: 3, count: 21, percent: 6 },
      { stars: 2, count: 7, percent: 2 },
      { stars: 1, count: 5, percent: 2 },
    ],
    activityByRange: {
      '30d': [
        { label: 'Wk 1', googleReviews: 6, privateFeedback: 2 },
        { label: 'Wk 2', googleReviews: 8, privateFeedback: 2 },
        { label: 'Wk 3', googleReviews: 9, privateFeedback: 2 },
        { label: 'Wk 4', googleReviews: 10, privateFeedback: 3 },
      ],
      '90d': [
        { label: 'Month 1', googleReviews: 24, privateFeedback: 8 },
        { label: 'Month 2', googleReviews: 31, privateFeedback: 8 },
        { label: 'Month 3', googleReviews: 33, privateFeedback: 9 },
      ],
      '6m': [
        { label: 'Jun', googleReviews: 17, privateFeedback: 6 },
        { label: 'Jul', googleReviews: 22, privateFeedback: 7 },
        { label: 'Aug', googleReviews: 21, privateFeedback: 8 },
        { label: 'Sep', googleReviews: 24, privateFeedback: 8 },
        { label: 'Oct', googleReviews: 31, privateFeedback: 8 },
        { label: 'Nov', googleReviews: 33, privateFeedback: 9 },
      ],
    },
    insights: [
      {
        theme: 'Calm Acoustic Ambience',
        sentiment: 'Positive',
        mentions: 22,
        summary: 'Appreciated by corporate dinner groups and evening guests.',
      },
      {
        theme: 'Valet Entry Signage',
        sentiment: 'Attention Needed',
        mentions: 4,
        summary: 'First-time visitors requested clearer evening valet markers.',
      },
    ],
    recentActivity: [
      {
        id: 'gl-1',
        date: 'Yesterday',
        location: 'Gulshan Lounge',
        channel: 'Google Review',
        rating: 5,
        excerpt: 'Quick billing and friendly staff. Clean layout and calm lighting.',
        status: 'Published',
      },
    ],
  },
};

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is a ReviewMattrs NFC card?',
    answer:
      'A ReviewMattrs NFC card is a physical, contactless review collection card engineered with an embedded NFC chip and a high-contrast backup QR code. Placed at counters, tables, or reception desks, it opens your business review destination directly on a customer’s smartphone.',
  },
  {
    id: 'faq-2',
    question: 'How does NFC review collection work?',
    answer:
      'When a customer holds their NFC-enabled smartphone near the ReviewMattrs card, the phone automatically detects the chip and prompts a browser link to open your configured Google Review experience—removing the friction of searching for your business manually.',
  },
  {
    id: 'faq-3',
    question: 'Do customers need to install an application?',
    answer:
      'No. Customers do not need to download or sign up for any dedicated app. Both NFC taps and QR code scans open directly in the smartphone’s built-in web browser.',
  },
  {
    id: 'faq-4',
    question: 'Does the card work with every smartphone?',
    answer:
      'Modern iPhone (iOS 13+) and Android smartphones support passive NFC reading out of the box. For older devices or phones with NFC disabled, every ReviewMattrs card includes a scannable QR code on the reverse side so every visitor has access.',
  },
  {
    id: 'faq-5',
    question: 'Can I use a QR code instead of NFC?',
    answer:
      'Yes. Each card pairs contactless NFC technology with a precision-printed QR code pointing to your configured review destination, ensuring universal compatibility across all customer devices.',
  },
  {
    id: 'faq-6',
    question: 'How do I connect my Google Business Profile?',
    answer:
      'During onboarding, we configure your cards with your verified Google Business Profile review link. If your branch destination changes later, the ReviewMattrs platform lets you update destination links without replacing the physical card.',
  },
  {
    id: 'faq-7',
    question: 'What does the monthly subscription include?',
    answer:
      'The flat BDT 200 monthly software subscription covers your digital review landing workflow, centralized card and destination link management, optional private feedback intake, and reputation monitoring dashboard capabilities—at the same ৳200/month price whether you deploy 1 card or 10.',
  },
  {
    id: 'faq-8',
    question: 'Are bulk discounts available?',
    answer:
      'Yes. Bulk discounts apply automatically to the one-time NFC card purchase price: 15% off for 2–5 cards (৳1,020 per card) and 20% off for 6 or more cards (৳960 per card). The monthly SaaS subscription remains a flat ৳200 per month across all card quantities.',
  },
  {
    id: 'faq-9',
    question: 'Can I purchase multiple cards for different locations?',
    answer:
      'Yes. Restaurants, cafes, clinics, and multi-branch businesses commonly deploy multiple cards per counter or across several branches so each location can maintain its own dedicated review link and feedback workflow.',
  },
  {
    id: 'faq-10',
    question: 'Can ReviewMattrs prevent negative Google reviews?',
    answer:
      'No. Google controls its own review platform and strictly prohibits blocking, gating, or selectively suppressing negative reviews. Every customer using a ReviewMattrs card retains equal, unrestricted access to leave an honest Google review. ReviewMattrs helps your team invite genuine feedback consistently, offer an optional private feedback channel alongside Google reviews, and respond thoughtfully to improve service.',
  },
];
