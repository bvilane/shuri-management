export const SITE_URL = 'https://www.shurimanagement.com';
export const SITE_NAME = 'Shuri Management Group';
export const LEGAL_NAME = 'Shuri Management Group (Pty) Ltd';
export const REG_NUMBER = '2025/214208/07';
export const TAGLINE = 'It takes a village to run a legendary lodge.';

export const EMAIL = 'info@shurimanagement.com';
export const CALENDLY_URL = 'https://calendly.com/shurimanagement/30min';

export const PHONES = [
  { label: 'Primary', display: '+27 64 793 7889', href: 'tel:+27647937889' },
  { label: 'Secondary', display: '+27 63 523 7168', href: 'tel:+27635237168' },
] as const;

export const OFFICES = [
  {
    name: 'Head office',
    lines: ['182 Oxford Rd', 'Illovo, Sandton, 2196', 'South Africa'],
    street: '182 Oxford Rd, Illovo',
    locality: 'Sandton',
    region: 'Gauteng',
    postalCode: '2196',
  },
  {
    name: 'Hoedspruit office',
    lines: ['471 Rotsvy Rd', 'Hoedspruit Wildlife Estate', 'Hoedspruit, 1380, Limpopo'],
    street: '471 Rotsvy Rd, Hoedspruit Wildlife Estate',
    locality: 'Hoedspruit',
    region: 'Limpopo',
    postalCode: '1380',
  },
] as const;

export const HOURS = [
  { days: 'Monday to Friday', time: '08:00 to 17:00' },
  { days: 'Saturday', time: '09:00 to 13:00' },
  { days: 'Sunday', time: 'Closed' },
] as const;

export const SOCIALS = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61574743155351' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/shuri-management-group/' },
  { name: 'Instagram', href: 'https://www.instagram.com/shurimanagement/' },
] as const;

export const NAV = [
  { href: '/lodge-management', label: 'Lodge Management' },
  { href: '/reserve-management', label: 'Reserve Management' },
  { href: '/safari-tech-consulting', label: 'Safari Tech' },
  { href: '/ventures', label: 'Ventures' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SAFARI_TECH_URL = 'https://safaritechconsulting.com';
export const FOUNDATION_URL = 'https://theshurifoundation.org';
export const SUBSTACK_URL = 'https://shurimanagementblog.substack.com/';
export const GUMROAD_STORE_URL = 'https://shurimanagement.gumroad.com/';
export const FREE_GUIDE = {
  title: 'The First Step to Better Lodge Marketing',
  subtitle: "A Guide to Defining Your Safari Lodge's Ideal Customers and Creating Irresistible Content",
  href: 'https://shurimanagement.gumroad.com/l/ujwhjr',
};

export const VENTURES = [
  {
    name: 'The Shuri Way',
    domain: 'theshuriway.com',
    href: 'https://theshuriway.com',
    summary: 'Book safari stays, experiences and itineraries across Africa.',
    description:
      'Book safari stays, experiences and multi-day itineraries across Africa, from lodges and tented camps to complete journeys. Travellers send a request, and a booking desk confirms every part with the property before anything is booked or charged.',
  },
  {
    name: 'The Shuri Collection',
    domain: 'theshuricollection.com',
    href: 'https://theshuricollection.com',
    summary: 'A curated collection of safari stays and experiences across Africa.',
    description:
      'A curated collection of safari stays and experiences across Africa, from accessible escapes to flagship lodges. Every property is chosen against the Shuri standard: setting, story, service and soul.',
  },
  {
    name: 'The Northern Circuit',
    domain: 'thenortherncircuit.co.za',
    href: 'https://thenortherncircuit.co.za',
    summary: "A destination guide to South Africa's wild north.",
    description:
      "A destination guide to South Africa's wild north: Mapungubwe, the Soutpansberg and Venda, Pafuri and northern Kruger, Magoebaskloof, and across the border into Tuli in Botswana. Stays, experiences and journeys for travellers who want to go beyond the usual routes.",
  },
  {
    name: 'Wild About Hoedspruit',
    domain: 'hoedspruit.co.za',
    href: 'https://hoedspruit.co.za',
    summary: 'Everything Hoedspruit and the Greater Kruger in one place.',
    description:
      'Everything Hoedspruit and the Greater Kruger in one place: places to stay, safaris, things to do, where to eat, and the local businesses that keep the town running.',
  },
] as const;
