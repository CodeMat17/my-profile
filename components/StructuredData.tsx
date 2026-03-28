"use client";

import Script from "next/script";

function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matthew Chukwu",
    alternateName: "CodeMat",
    jobTitle: "Full Stack Developer & AI Integration Expert",
    email: "email@matthewchukwu.com",
    url: "https://www.matthewchukwu.com",
    image: "https://www.matthewchukwu.com/dev.webp",
    description:
      "Top Full Stack Developer and AI Integration Expert in Abuja, Nigeria. 13+ years of experience building world-class web applications with Next.js, React, TypeScript, and AI technologies.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressRegion: "Federal Capital Territory",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.0579",
      longitude: "7.4951",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Full Stack Development",
      "AI Integration",
      "Claude API",
      "OpenAI",
      "Progressive Web Apps",
      "Node.js",
      "Tailwind CSS",
      "Mobile Web Development",
      "Software Engineering",
    ],
    areaServed: ["Nigeria", "Africa", "Worldwide"],
    sameAs: [
      "https://github.com/matthewchukwu",
      "https://linkedin.com/in/matthewchukwu",
      "https://twitter.com/codemat_dev",
    ],
    worksFor: {
      "@type": "Organization",
      name: "CodeMat / Soft-lutions",
      url: "https://www.matthewchukwu.com",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CodeMat — Full Stack Development Services",
    description:
      "Professional full stack web development, AI integration, and mobile web services based in Abuja, Nigeria.",
    url: "https://www.matthewchukwu.com",
    image: "https://www.matthewchukwu.com/dev.webp",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressRegion: "Federal Capital Territory",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.0579",
      longitude: "7.4951",
    },
    email: "email@matthewchukwu.com",
    priceRange: "$$",
    areaServed: "Worldwide",
    serviceType: [
      "Full Stack Web Development",
      "AI Integration",
      "Next.js Development",
      "React Development",
      "Mobile Web Development",
      "Progressive Web Apps",
      "Technology Consulting",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
      bestRating: "5",
    },
  };

  return (
    <>
      <Script
        id='json-ld-person'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <Script
        id='json-ld-business'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}

export default StructuredData;
