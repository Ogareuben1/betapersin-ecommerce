// src/app/about/page.tsx
import AboutClient from './AboutClient';

// SEO Metadata - This now works because this is a Server Component
export const metadata = {
  title: "About Betapersin | IAM, PAM, and GRC Enterprise Training",
  description: "Learn about Betapersin, the leading resource for Identity and Access Management (IAM) and GRC career transitions. Built on real Tier 1 enterprise experience.",
  keywords: ["About Betapersin", "IAM Training Nigeria", "Identity and Access Management Career", "GRC Foundations", "Privileged Access Management", "Cybersecurity Career Switch"],
  alternates: {
    canonical: 'https://betapersin.com/about', 
  },
};

export default function AboutPage() {
  return <AboutClient />;
}