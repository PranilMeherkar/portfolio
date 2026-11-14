import { SITE_CONFIG, SOCIAL, TIMELINE } from "@/lib/site";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: `${SITE_CONFIG.name} Portfolio`,
        description: SITE_CONFIG.description,
        inLanguage: "en-US",
        publisher: {
          "@id": `${SITE_CONFIG.url}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_CONFIG.url}/#profilepage`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.title,
        isPartOf: {
          "@id": `${SITE_CONFIG.url}/#website`,
        },
        about: {
          "@id": `${SITE_CONFIG.url}/#person`,
        },
        mainEntity: {
          "@id": `${SITE_CONFIG.url}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_CONFIG.url}/#person`,
        name: SITE_CONFIG.name,
        alternateName: "Pranil R. Meherkar",
        jobTitle: SITE_CONFIG.role,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        image: `${SITE_CONFIG.url}/opengraph-image`,
        email: `mailto:${SITE_CONFIG.email}`,
        telephone: SITE_CONFIG.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        sameAs: [SOCIAL.linkedin, SOCIAL.github],
        worksFor: {
          "@type": "Organization",
          name: "Nimap Infotech",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "K J Somaiya Institute of Technology",
        },
        knowsAbout: [
          "React.js",
          "Next.js",
          "TypeScript",
          "JavaScript (ES6+)",
          "Frontend Architecture",
          "Generic UI Components",
          "Core Web Vitals Optimization",
          "Server-Side Rendering (SSR)",
          "Static Site Generation (SSG)",
          "Incremental Static Regeneration (ISR)",
          "Redux Toolkit",
          "SWR",
          "Tailwind CSS",
          "Web Performance Optimization",
          "Technical Leadership & Mentorship",
          "Code Reviews",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Senior Frontend Developer & Acting Technical Lead",
          occupationLocation: {
            "@type": "City",
            name: "Mumbai",
          },
          skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Performance Optimization",
            "Frontend Architecture",
            "Team Leadership",
          ],
        },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_CONFIG.url}/#experience-list`,
        name: "Professional Experience",
        itemListElement: TIMELINE.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Role",
            roleName: item.title,
            startDate: item.period.split("–")[0]?.trim(),
            endDate: item.period.split("–")[1]?.trim() || "Present",
            description: item.highlights.join(". "),
            author: {
              "@type": "Organization",
              name: item.company,
            },
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
