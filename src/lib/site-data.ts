export const SITE = {
  name: "The Clinic",
  shortName: "Clinic",
  tagline: "Empowering Healthcare Providers with Elite Revenue Solutions",
  description:
    "Premium U.S. medical billing and Revenue Cycle Management. 98% clean claims, 80% denial reduction, and 10+ years of specialized RCM expertise.",
  phone: "(800) 555-0142",
  email: "hello@elitemedicalservices.com",
  address: "1200 Healthcare Plaza, Suite 400, Austin, TX 78701",
  hours: "Mon–Fri 8:00 AM – 6:00 PM CT",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/specialties", label: "Specialties" },
  { href: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: "98%", label: "Clean Claim Rate", detail: "First-pass acceptance" },
  { value: "80%", label: "Denial Reduction", detail: "Average client improvement" },
  { value: "10+", label: "Years Experience", detail: "U.S. medical billing" },
  { value: "45+", label: "Specialties Served", detail: "Across the U.S." },
] as const;

export const SERVICES = [
  {
    slug: "medical-billing",
    title: "End-to-End Medical Billing",
    summary:
      "From charge entry to payment posting, we manage your full billing lifecycle with precision and speed.",
    details: [
      "Accurate charge capture and coding validation",
      "Electronic claim submission to all major payers",
      "Payment posting and patient statement management",
      "Monthly performance reporting and dashboards",
    ],
  },
  {
    slug: "rcm",
    title: "Revenue Cycle Management",
    summary:
      "A complete RCM partnership that protects cash flow from eligibility through collections.",
    details: [
      "Eligibility and benefits verification",
      "Prior authorization support",
      "A/R aging and follow-up workflows",
      "Revenue leakage identification",
    ],
  },
  {
    slug: "denial-management",
    title: "Denial Management",
    summary:
      "Systematic denial prevention and recovery to reclaim revenue that would otherwise be lost.",
    details: [
      "Root-cause denial analysis",
      "Appeals and resubmission tracking",
      "Payer-specific denial playbooks",
      "Prevention protocols that stick",
    ],
  },
  {
    slug: "credentialing",
    title: "Provider Credentialing",
    summary:
      "Stay enrolled, stay paid. We handle credentialing and enrollment so you can stay focused on care.",
    details: [
      "CAQH and payer enrollment",
      "Hospital privilege coordination",
      "Revalidation and maintenance",
      "Status tracking and alerts",
    ],
  },
  {
    slug: "coding",
    title: "Medical Coding & Audits",
    summary:
      "Certified coding support and compliance audits that keep documentation and reimbursement aligned.",
    details: [
      "ICD-10 / CPT / HCPCS expertise",
      "Specialty-specific coding reviews",
      "Compliance and documentation audits",
      "Provider education feedback loops",
    ],
  },
  {
    slug: "ar-followup",
    title: "A/R Follow-Up",
    summary:
      "Proactive accounts receivable work that closes gaps and accelerates reimbursements.",
    details: [
      "Aged A/R work queues",
      "Payer outreach and claim status",
      "Underpayment identification",
      "Clear cash-flow reporting",
    ],
  },
] as const;

export const SPECIALTIES = [
  "Primary Care & Family Medicine",
  "Internal Medicine",
  "Cardiology",
  "Orthopedics & Sports Medicine",
  "Dermatology",
  "Ophthalmology",
  "OB/GYN",
  "Pediatrics",
  "Behavioral Health & Psychiatry",
  "Pain Management",
  "Neurology",
  "Gastroenterology",
  "Urology",
  "ENT / Otolaryngology",
  "Physical Therapy & Rehab",
  "Urgent Care",
  "Radiology",
  "Anesthesiology",
  "Oncology",
  "Dental & Oral Surgery",
  "Chiropractic",
  "Podiatry",
  "Allergy & Immunology",
  "Multi-Specialty Groups",
] as const;

export const TESTIMONIALS = [
  {
    name: "Dr. Kavita Sharma",
    role: "Internal Medicine Physician",
    location: "Houston, TX",
    quote:
      "Elite transformed our revenue cycle within the first quarter. Clean claims jumped, denials dropped dramatically, and I finally have clarity on our financials without chasing reports.",
    image: "/images/testimonial-kavita.jpg",
  },
  {
    name: "Ms. Morgan Ellis",
    role: "Practice Administrator",
    location: "Denver, CO",
    quote:
      "We tried two billing companies before Elite. The difference is night and day—responsive team, transparent reporting, and an 80% reduction in denials that we can actually measure.",
    image: "/images/testimonial-morgan.jpg",
  },
  {
    name: "Dr. Geoff Harrington",
    role: "Orthopedic Surgeon",
    location: "Atlanta, GA",
    quote:
      "With 10+ years of specialty billing experience behind them, Elite understands orthopedic coding and payer quirks. Our days in A/R are down and collections are consistently stronger.",
    image: "/images/testimonial-geoff.jpg",
  },
] as const;

export const WHY_OUTSOURCE = [
  {
    title: "Lower Overhead",
    description:
      "Eliminate the cost of hiring, training, and retaining a full in-house billing team while gaining specialty expertise.",
  },
  {
    title: "Faster Reimbursements",
    description:
      "Optimized workflows and payer knowledge mean cleaner claims and shorter payment cycles for your practice.",
  },
  {
    title: "Fewer Denials",
    description:
      "Proactive denial prevention and recovery protocols routinely reduce denial rates by up to 80%.",
  },
  {
    title: "Compliance Confidence",
    description:
      "Stay aligned with evolving coding, HIPAA, and payer rules without diverting clinical staff from patient care.",
  },
] as const;

export const COMPARISON_ROWS = [
  { aspect: "Clean claim rate", inHouse: "70–85% typical", elite: "98% average" },
  { aspect: "Denial management", inHouse: "Reactive / limited bandwidth", elite: "Proactive + recovery workflows" },
  { aspect: "Specialty expertise", inHouse: "Generalist knowledge", elite: "45+ specialties supported" },
  { aspect: "Staffing risk", inHouse: "Turnover & training gaps", elite: "Dedicated, scalable team" },
  { aspect: "Reporting", inHouse: "Manual / inconsistent", elite: "Clear monthly dashboards" },
  { aspect: "Technology", inHouse: "Varies by practice", elite: "Modern clearinghouse + RCM stack" },
  { aspect: "Cost structure", inHouse: "Salaries + benefits + tools", elite: "Performance-aligned partnership" },
] as const;

export const PRICING_PLANS = [
  {
    name: "Essentials",
    price: "From 3.5%",
    cadence: "of collections",
    description: "Ideal for solo and small practices needing reliable end-to-end billing.",
    features: [
      "Full-cycle medical billing",
      "Claim submission & posting",
      "Basic denial follow-up",
      "Monthly performance report",
      "Dedicated account contact",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "From 4.2%",
    cadence: "of collections",
    description: "Our most popular plan for multi-provider practices ready to scale revenue.",
    features: [
      "Everything in Essentials",
      "Advanced denial management",
      "Eligibility verification",
      "A/R aging follow-up",
      "Quarterly strategy reviews",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "tailored partnership",
    description: "For groups, ASCs, and multi-location organizations with complex RCM needs.",
    features: [
      "Everything in Growth",
      "Credentialing support",
      "Coding audits & education",
      "Custom SLAs & reporting",
      "Dedicated RCM strategist",
      "Multi-location coordination",
    ],
    highlighted: false,
  },
] as const;

export const FAQS = [
  {
    question: "How quickly can Elite take over our billing?",
    answer:
      "Most practices begin onboarding within 1–2 weeks. We map your current workflows, configure clearinghouse access, and run a parallel transition so cash flow stays protected.",
  },
  {
    question: "Do you work with our existing EHR / practice management system?",
    answer:
      "Yes. We integrate with most major EHR and PM systems used across the U.S., including cloud and on-premise platforms. We'll confirm compatibility during your free revenue audit.",
  },
  {
    question: "What does the free revenue audit include?",
    answer:
      "We review claim quality, denial patterns, A/R aging, payer mix, and coding risk areas—then deliver clear recommendations with projected recovery opportunities. No obligation.",
  },
  {
    question: "How do you charge for services?",
    answer:
      "Most clients choose a percentage-of-collections model aligned to plan tier. Enterprise partnerships can include hybrid or custom structures based on volume and scope.",
  },
  {
    question: "Are you HIPAA compliant?",
    answer:
      "Absolutely. We follow strict HIPAA safeguards, signed BAAs, encrypted communications, and role-based access controls across our RCM operations.",
  },
  {
    question: "Which specialties do you support?",
    answer:
      "We support 45+ specialties—from primary care and cardiology to orthopedics, behavioral health, and multi-specialty groups. See our Specialties page for the full list.",
  },
  {
    question: "What results should we expect?",
    answer:
      "Clients commonly see cleaner first-pass claims (up to 98%), significant denial reduction (often around 80%), and improved days in A/R within the first few months.",
  },
  {
    question: "Can you help with credentialing only?",
    answer:
      "Yes. Credentialing and enrollment can be bundled with full RCM or engaged as a standalone service depending on your needs.",
  },
] as const;

export const TEAM = [
  {
    name: "Amanda Reeves",
    role: "Founder & CEO",
    bio: "Two decades in U.S. healthcare revenue operations, focused on transparent partnerships and measurable outcomes.",
  },
  {
    name: "James Ortega",
    role: "VP of Revenue Cycle",
    bio: "Leads denial strategy and payer operations with a track record of accelerating collections for specialty practices.",
  },
  {
    name: "Priya Nair, CPC",
    role: "Director of Coding Quality",
    bio: "Certified coding leadership ensuring documentation integrity and specialty-accurate reimbursement.",
  },
] as const;

export const VALUES = [
  {
    title: "Transparency",
    description: "Clear reporting, honest timelines, and no black-box billing.",
  },
  {
    title: "Precision",
    description: "Every claim reviewed with specialty-aware accuracy and compliance.",
  },
  {
    title: "Partnership",
    description: "We operate as an extension of your practice—not a distant vendor.",
  },
  {
    title: "Calm Confidence",
    description: "Steady processes that reduce stress for providers and administrators alike.",
  },
] as const;
