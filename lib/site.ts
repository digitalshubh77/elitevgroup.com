export const siteConfig = {
  name: "Elite Ventures Pvt. Ltd.",
  shortName: "Elite Ventures",
  tagline: "Lighting The Future",
  url: "https://elitevgroup.com",
  locale: "en_IN",
  description:
    "Government-approved rooftop solar installation across Maharashtra. Save electricity bills with PM Surya Ghar subsidy up to ₹78,000. Free site visit, quotation & subsidy guidance from Elite Ventures Pvt. Ltd., Barshi.",
  keywords: [
    "Elite Ventures Pvt Ltd",
    "solar installation Maharashtra",
    "rooftop solar Barshi",
    "rooftop solar Solapur",
    "PM Surya Ghar subsidy",
    "solar panel installation",
    "government approved solar",
    "solar EMI finance",
    "net metering Maharashtra",
  ],
  phone: "+919158615959",
  email: "eliteventures5959@gmail.com",
  address:
    "C/o K T Tractors, Latur Road, Barshi, Dist. Solapur, Maharashtra – 413401",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61589653180931",
    instagram: "https://www.instagram.com/eliteventures5959/",
  },
} as const;

export const sitePages = [
  {
    path: "/",
    title: "Rooftop Solar Installation in Maharashtra",
    description: siteConfig.description,
    priority: 1,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/about",
    title: "About Elite Ventures Pvt. Ltd.",
    description:
      "About Elite Ventures Pvt. Ltd. — rooftop solar experts in Barshi, Maharashtra with 20+ years team experience and 100+ installations. Lighting The Future.",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services",
    title: "Solar Installation Services",
    description:
      "Residential, commercial and industrial solar installation across Maharashtra. Maintenance, net metering, and subsidy documentation by Elite Ventures.",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/subsidy",
    title: "PM Surya Ghar Solar Subsidy up to ₹78,000",
    description:
      "Get government solar subsidy up to ₹78,000 under PM Surya Ghar Yojana for home rooftop solar. Elite Ventures handles the full application free.",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/process",
    title: "Solar Installation Process in 8 Days",
    description:
      "Our 5-step solar installation process — from free site visit to net metering in about 8 days across Maharashtra.",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/products",
    title: "Solar Panels & Inverter Brands",
    description:
      "Government-approved solar panel brands — Waaree, Tata Power Solar, Adani, ReNew, Vikram. Waaree, Polycab, Microtek, Havells & Luminous inverters with up to 30-year panel warranty.",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/finance",
    title: "Solar Finance & EMI Options",
    description:
      "Go solar with easy EMI and bank finance from 5.75%*. Free electricity bill analysis on WhatsApp from Elite Ventures Maharashtra.",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/contact",
    title: "Contact Elite Ventures for Free Solar Quote",
    description:
      "Contact Elite Ventures Pvt. Ltd. in Barshi for free site visit, quotation and solar subsidy guidance. Call or WhatsApp 91586 15959.",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
] as const;
