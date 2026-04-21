export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.directtaxilebanon.com",
    name: "Direct Taxi Lebanon",
    description:
      "Professional taxi service across Lebanon. Airport transfers, intercity rides, and private tours. Book directly via WhatsApp. Available 24/7.",
    url: "https://www.directtaxilebanon.com",
    telephone: "+96170452864",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beirut",
      addressCountry: "LB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.8938,
      longitude: 35.5018,
    },
    areaServed: {
      "@type": "Country",
      name: "Lebanon",
    },
    serviceType: [
      "Airport Transfer",
      "Intercity Taxi",
      "Private Driver",
      "Guided Tours",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
