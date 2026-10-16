// Case-study content shared by the homepage Work section and /work/[slug] pages.
// Optional fields (timeline, role, results, testimonial) are hidden until filled in —
// add real figures only; never placeholder numbers.

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  domain: string;
  link?: string;
  tech: string[];
  /** One-line hook for the homepage card. */
  summary: string;
  /** Short "what it does" list for the homepage card. */
  highlights: string[];
  problem: string;
  solution: string[];
  decisions: { title: string; body: string }[];
  timeline?: string;
  role?: string;
  results?: { value: string; label: string }[];
  testimonial?: { quote: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "threescore-tours",
    title: "Threescore Tours",
    subtitle: "Premium travel across Kenya & East Africa",
    category: "Travel & Hospitality",
    image: "/threescore.webp",
    domain: "threescoretours.com",
    link: "https://threescoretours.com",
    tech: ["Next.js", "Convex", "Clerk", "Squadco"],
    summary:
      "A tour operator selling to an international audience needed a site that turns browsers into booked travellers — not just a brochure.",
    highlights: ["Custom itineraries", "Online booking & payments", "SEO-led growth"],
    problem:
      "Threescore sells safaris, city escapes and group retreats to travellers who are researching from abroad. Enquiries came in through scattered channels, and there was no way for a visitor to go from \"this looks amazing\" to a confirmed, paid booking in one place.",
    solution: [
      "A fast, image-rich catalogue of tours and destinations that loads quickly on mobile networks.",
      "Personalised itinerary requests and enquiries captured in one dashboard instead of scattered inboxes.",
      "Online booking with integrated payments, so travellers can commit the moment they are ready.",
      "Technical SEO from day one, so the site is found by people searching for East African travel.",
    ],
    decisions: [
      {
        title: "Real-time backend without a DevOps bill",
        body: "Convex gave us a live database and server functions with zero infrastructure to manage — the business pays for usage, not idle servers.",
      },
      {
        title: "Payments that work for local and international guests",
        body: "Squadco handles card payments in multiple currencies, so a traveller in London and one in Nairobi get the same smooth checkout.",
      },
      {
        title: "Performance as a sales feature",
        body: "Optimised images and server rendering keep pages fast — every second of load time on a travel site costs bookings.",
      },
    ],
    // TODO: timeline: "x weeks from kickoff to launch",
    // TODO: role: "Sole engineer — design-to-code, backend, payments, launch",
    // TODO: results: [{ value: "...", label: "..." }],
  },
  {
    slug: "staffsync",
    title: "StaffSync",
    subtitle: "HR platform for modern organisations",
    category: "SaaS product",
    image: "/staff_sync.webp",
    domain: "staff-sync-demo.vercel.app",
    link: "https://staff-sync-demo.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    summary:
      "A complete HR operating system — staff records, leave, payroll and analytics — built mobile-first so managers can run their teams from anywhere.",
    highlights: ["Leave & approval workflows", "Payroll & reporting", "Role-based dashboards"],
    problem:
      "Growing organisations often run HR on spreadsheets, email threads and paper forms. Leave requests get lost, payroll takes days to reconcile, and managers have no clear view of their team — especially when they are away from a desk.",
    solution: [
      "Central staff records with documents, roles and employment history in one place.",
      "Leave requests with multi-step approval workflows and automatic balance tracking.",
      "Payroll processing and exportable reports, replacing manual spreadsheet work.",
      "Role-based dashboards: staff, managers and HR each see exactly what they need.",
    ],
    decisions: [
      {
        title: "Mobile-first, not mobile-afterthought",
        body: "Managers approve leave from their phones, so every workflow was designed for a small screen first and scaled up to desktop.",
      },
      {
        title: "Permissions designed in, not bolted on",
        body: "Role-based access shapes every screen and query, so sensitive salary and personal data is only ever visible to the right people.",
      },
      {
        title: "A design system for speed",
        body: "Building on shadcn/ui and a shared component library kept the product consistent and made new modules fast to add.",
      },
    ],
    // TODO: timeline, role, results
  },
  {
    slug: "cinema-hub",
    title: "Cinema Hub",
    subtitle: "Movie discovery, fast",
    category: "Product showcase",
    image: "/tmdb1.webp",
    domain: "cinemahub-demo.vercel.app",
    link: "https://cinemahub-demo.vercel.app",
    tech: ["Next.js", "TypeScript", "TMDB API"],
    summary:
      "A consumer app built to show what fast feels like — instant search, smart filtering and rich title pages over a catalogue of hundreds of thousands of films.",
    highlights: ["Instant search", "Smart filtering", "Rich detail pages"],
    problem:
      "Consumer products live or die on how they feel. Cinema Hub is a self-initiated build to prove a point: a large, third-party data catalogue can still feel instant, polished and app-like in the browser.",
    solution: [
      "Search-as-you-type across the full TMDB catalogue with results in a blink.",
      "Genre, year and rating filters that update the page without full reloads.",
      "Rich title pages with cast, crew, trailers and recommendations.",
      "Responsive layouts that feel native on phones, tablets and desktops.",
    ],
    decisions: [
      {
        title: "Fetch smart, not often",
        body: "Debounced search, caching and server rendering keep the app fast while staying well inside third-party API limits.",
      },
      {
        title: "Perceived performance",
        body: "Skeleton states, optimised images and prefetching mean users rarely see a spinner — the same techniques I bring to client products.",
      },
    ],
    role: "Solo build — product, design and engineering",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
