"use client";

import Script from "next/script";

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matthew Chukwu",
    alternateName: "CodeMat",
    jobTitle: "Full Stack Web Developer",
    email: "ask@soft-lutions.com.ng",
    url: "https://www.matthewchukwu.com.ng",
    description:
      "Full Stack Web Developer and Mobile Web Specialist with over 13 years of experience.",
    // sameAs: [
    //   "https://linkedin.com/in/codemat",
    //   "https://github.com/codemat",
    //   // Add social profiles
    // ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance Developer",
    },
  };

  return (
    <Script
      id='json-ld'
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default StructuredData;
