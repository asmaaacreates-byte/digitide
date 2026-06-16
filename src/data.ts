import { Service, Course, Testimonial, CounterStat } from './types';

export const SERVICES: Service[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve website visibility, increase organic traffic, and rank higher on search engines to drive real business leads.',
    icon: 'Search',
    features: [
      'Keyword Research & Strategy',
      'On-Page & Off-Page SEO',
      'Technical SEO Auditing',
      'Local SEO (Google Business Profile)',
      'Performance Tracking & Analytics'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Social Media Management',
    description: 'Build strong online brands with targeted campaigns, custom strategies, content calendars, and highly engaging creatives.',
    icon: 'Share2',
    features: [
      'Meta Ads (Facebook & Instagram)',
      'Google Ads & Search Campaigns',
      'Social Media Account Management',
      'Content Marketing Strategy',
      'Audience Engagement & Retargeting'
    ]
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing & Branding',
    description: 'Create professional logos, elegant social media creatives, print advertisements, and modern, clean brand identities.',
    icon: 'Palette',
    features: [
      'Brand Identity & Logo Design',
      'Social Media Ads & Graphic Posts',
      'Brochures, Flyers & Print Assets',
      'UI/UX Prototyping Assets',
      'Modern Typography Layouts'
    ]
  },
  {
    id: 'video-editing',
    title: 'Professional Video Editing',
    description: 'Produce cinematic videos, trending short-form reels, high-ticket advertisements, and engaging visual storytelling.',
    icon: 'Film',
    features: [
      'Short-Form Video (Reels, TikToks)',
      'Commercials & Business Ad Visuals',
      'Color Grading & Audio Enhancement',
      'Motion Graphics & Transitions',
      'High-Performance Promos'
    ]
  },
  {
    id: 'ecommerce-dropshipping',
    title: 'Dropshipping & E-Commerce Solutions',
    description: 'Learn and build highly profitable online stores with effective selling strategies, order fulfillment, and marketing pipelines.',
    icon: 'ShoppingBag',
    features: [
      'Store Setup & Shopify Optimization',
      'Winning Product Research',
      'Supplier Integration & Sourcing',
      'Conversion Rate Optimization',
      'Fulfillment Automation Flow'
    ]
  }
];

export const COURSES: Course[] = [
  {
    id: 'dm-masterclass',
    title: 'Digital Marketing Masterclass',
    description: 'Master the entire digital landscape from beginner basics to advanced conversion strategies and campaign scaling.',
    duration: '3 Months',
    projectsCount: 12,
    level: 'Beginner to Advanced',
    syllabus: [
      'Fundamentals of Multi-Channel Marketing',
      'Inbound marketing & funnel architecture',
      'Meta & Google Ads Campaign Management',
      'Copywriting & landing page conversion',
      'Analytics, ROI, and performance reports'
    ],
    featured: true
  },
  {
    id: 'seo-growth',
    title: 'SEO & Website Growth',
    description: 'Discover the secrets of ranking websites #1 on search engines. Walk through high-level industry techniques.',
    duration: '1.5 Months',
    projectsCount: 6,
    level: 'Intermediate',
    syllabus: [
      'Niche selection & deep keyword research',
      'Advanced On-Page tactics & XML architecture',
      'High-authority backlink building systems',
      'Core Web Vitals & technical optimization',
      'Google Search Console & Analytics Masterclass'
    ],
    featured: false
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design Training',
    description: 'Learn visual hierarchy, modern layouts, and tools like Adobe Illustrator, Photoshop, and Figma.',
    duration: '2 Months',
    projectsCount: 15,
    level: 'Beginner-Friendly',
    syllabus: [
      'Principles of design & visual hierarchy',
      'Color theories & advanced typography pairing',
      'Vector illustration & commercial branding layouts',
      'Creating high-converting social media creatives',
      'Portfolio building or client freelancing guidance'
    ],
    featured: true
  },
  {
    id: 'video-editing-pro',
    title: 'Professional Video Editing',
    description: 'Become a master at storytelling. Create highly interactive reels, cinematic trailers, and corporate videos.',
    duration: '2-3 Months',
    projectsCount: 10,
    level: 'Beginner to Pro',
    syllabus: [
      'Timeline configuration & clip sync setups',
      'Sound design, background scores, and VO timing',
      'Vibrant color correction & custom grading themes',
      'Kinetic typography, titles, and motion graphics',
      'Advanced export setups for prime social delivery'
    ],
    featured: true
  },
  {
    id: 'social-media-content',
    title: 'Social Media Content Creation',
    description: 'Unleash your creativity and master the algorithms. Learn ideation, hook strategy, and content planning.',
    duration: '1 Month',
    projectsCount: 8,
    level: 'All Levels',
    syllabus: [
      'Analyzing algorithms (Instagram, YouTube, TikTok)',
      'The Psychology of Hook writing & Visual timing',
      'Camera-ready scripting & storytelling frames',
      'Direct mobile workflows and editing apps',
      'Brand partnerships & monetization avenues'
    ],
    featured: false
  },
  {
    id: 'ecommerce-dropshipping-training',
    title: 'E-Commerce & Dropshipping Masterclass',
    description: 'Set up an autonomous online storefront, test viral products, and learn multi-channel advertising pipelines.',
    duration: '2 Months',
    projectsCount: 5,
    level: 'Beginner-Friendly',
    syllabus: [
      'Finding high-margin winning products',
      'Shopify customized dashboard design',
      'Automated dropship integrations',
      'Ad campaigns for viral product scaling',
      'Reliable payment gateways and logistics setups'
    ],
    featured: true
  }
];

export const INITIAL_STATS: CounterStat[] = [
  { id: 'students', label: 'Students Trained', value: 120, suffix: '+' },
  { id: 'projects', label: 'Projects Completed', value: 55, suffix: '+' },
  { id: 'partners', label: 'Business Partners', value: 24, suffix: '+' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Muhamed Rishan',
    role: 'E-Commerce Store Owner',
    type: 'client',
    content: 'DIGITIDE completely transformed our online sales! Their dropshipping strategy and Instagram campaign took us from zero orders to a consistent stream of sales in Malappuram.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-2',
    name: 'Fathima Hannah',
    role: 'UI Designer & Alumna',
    type: 'student',
    content: 'The Graphic Design Masterclass at DIGITIDE gave me hands-on practice. The mentors are experts who really care about your career path. I got a job right after graduation!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-3',
    name: 'Nikhil K.',
    role: 'Local Business Manager',
    type: 'client',
    content: 'Our local SEO is outstanding now! Clients looking for services in Perinthalmanna find us as the top recommendation on Google. Thanks to the SEO team at DIGITIDE!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-4',
    name: 'Amina Shahana',
    role: 'Video Creator',
    type: 'student',
    content: 'The Video Editing mentorship is unmatched. From basic transitions to high-end color grading, I learned everything through live assignments using modern tools.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Mentors',
    description: 'Learn from industry professionals who manage real Client Accounts and scale successful agencies daily.'
  },
  {
    title: 'Real-World Projects',
    description: 'Never practice on imaginary sheets. Work on actual ongoing agency campaigns, graphic portfolios, and real video scripts.'
  },
  {
    title: 'Practical Training Approach',
    description: 'Skip the dry theoretical lectures. You spend 90% of your time working inside tools, building real online platforms.'
  },
  {
    title: 'Creative Solutions',
    description: 'We do not follow cookie-cutter templates. We craft fresh digital narratives tailor-made to capture attention.'
  },
  {
    title: 'Latest Tools & Strategies',
    description: 'Master powerful modern frameworks, Figma systems, CapCut/Premiere workflows, and state-of-the-art AI-assisted SEO tools.'
  },
  {
    title: 'Career-Focused Learning',
    description: 'Every student receives dedicated resume prep, job interview simulation, and actual client freelancing techniques.'
  }
];
