'use client';

import React from 'react';
import { PersonaProvider } from '@/contexts/PersonaContext';
import AuditFirmsHero from '../../../components/features/audit-firms/AuditFirmsHero';
import AuditFirmsIntroduction from '../../../components/features/audit-firms/AuditFirmsIntroduction';
import AuditFirmsChallenges from '../../../components/features/audit-firms/AuditFirmsChallenges';
import AuditFirmsOfferings from '../../../components/features/audit-firms/AuditFirmsOfferings';
import AuditFirmsWorkflow from '../../../components/features/audit-firms/AuditFirmsWorkflow';
import AuditFirmsAdvantages from '../../../components/features/audit-firms/AuditFirmsAdvantages';
import AuditFirmsPricing from '../../../components/features/audit-firms/AuditFirmsPricing';
import AuditFirmsFAQ from '../../../components/features/audit-firms/AuditFirmsFAQ';
import CTASection from '../../../components/homepage/CTASection';

// Content configurations for different page types
const pageConfigurations = {
  audit: {
    hero: {
      title: "Modern Audit Technology — Under Your Brand",
      subtitle: "Vacei gives audit firms a full-feature white-label audit portal, with automation, client collaboration, working papers, and review workflows — all branded to you.",
      primaryCTA: "Schedule a Demo",
      secondaryCTA: "See Features",
      trustText: "Operated by A4 Services Limited (licensed audit & accounting firm) • SSL encrypted • GDPR compliant"
    },
    introduction: {
      title: "Tailored for Audit Practices Ready to Modernize",
      content: "Legacy audit tools, scattered Excel files, and manual documentation slow you down. Vacei is the white-label portal designed specifically for audit firms that want efficiency, consistency, and client experience — without sacrificing control."
    },
    challenges: {
      title: "Your Pain Points — We Know Them",
      points: [
        "Managing numerous clients, each with different accounting systems",
        "Repetitive manual tasks: extracting, linking, documenting, reconciling",
        "Audit overrun, delays, lost documentation, version confusion",
        "Client friction: asking for documents, chasing uploads, miscommunications",
        "Maintaining audit quality, consistency, traceability across engagements"
      ],
      transition: "You deserve an audit platform that lets your team focus on judgment, not paperwork."
    },
    offerings: {
      title: "What Vacei Offers Audit Firms",
      items: [
        {
          title: "White-Label Audit Portal",
          description: "Deploy Vacei's audit engine under your branding — your logo, domain, look and feel."
        },
        {
          title: "Audit Planning & Risk Module",
          description: "Define scope, set risk metrics, generate audit programs, customize test steps."
        },
        {
          title: "Working Papers & Document Linking",
          description: "Link audit procedures to documents, maintain indexes, cross-reference, version control."
        },
        {
          title: "Client Collaboration Portal",
          description: "Clients upload documents, answer queries, track request status, all securely."
        },
        {
          title: "Review & Approval Workflows",
          description: "Reviewer layers, comments, sign-off trails, escalation paths."
        },
        {
          title: "Trial Balance Import & Mapping",
          description: "Bring in TBs or accounting data, map to statement accounts, handle adjustments."
        },
        {
          title: "Exception / Anomaly Flagging",
          description: "The system highlights unusual balances, outlier transactions, trends needing review."
        },
        {
          title: "Audit Trail / Versioning / Logs",
          description: "Full history of changes, who did what, when — for accountability and compliance."
        },
        {
          title: "Integrations & APIs",
          description: "Connect to accounting systems, ERP, data sources so audit context is richer."
        },
        {
          title: "Scalable for Multiple Engagements",
          description: "Handle dozens or hundreds of clients; manage capacity; reuse templates."
        },
        {
          title: "Security & Compliance",
          description: "Encryption, backups, role-based access, audit logs, data privacy."
        }
      ]
    },
    workflow: {
      title: "Deploying Vacei in Your Audit Practice — 3 Steps",
      steps: [
        {
          title: "Onboard & Configure",
          description: "We help you configure your branded instance, upload templates, connect to client accounting systems, define user roles.",
          microcopy: "We set your environment & brand up."
        },
        {
          title: "Execute & Automate",
          description: "You plan, set procedures, link tasks, run audit workflows. Automation helps with document linking, flagging, test suggestions.",
          microcopy: "Core work is streamlined — your team focuses on judgments."
        },
        {
          title: "Review, Deliver & Scale",
          description: "Review paths, sign-offs, client deliverables, maintain audit history, reuse templates, expand to new clients.",
          microcopy: "Deliver audits under your brand. Add more clients easily."
        }
      ]
    },
    advantages: {
      title: "Your Competitive Advantage",
      points: [
        "100% white-labeled — clients never see Vacei branding",
        "Unified solution — no siloed tools for audit + accounting",
        "Automation accelerates work without losing quality",
        "Client experience — smooth document requests, real-time status",
        "Consistency & standardization across engagements",
        "Security, control, and traceability built-in",
        "Backed by an audit firm (A4 Services), so we understand your workflows"
      ]
    },
    pricing: {
      title: "How We License to Audit Firms",
      subtitle: "We offer a one-time implementation fee + optional maintenance and support. No long-term locked subscriptions — you choose optional ongoing support.",
      description: "Final pricing depends on your scale, features, and complexity."
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "Can clients see my branding only?",
          answer: "Yes, absolutely. Vacei is 100% white-labeled. Your clients will only see your firm's logo, colors, domain, and branding throughout their entire experience. They'll never know Vacei exists behind the scenes."
        },
        {
          question: "What audit standards do you support?",
          answer: "We support major international audit standards including ISA (International Standards on Auditing), GAAS (Generally Accepted Auditing Standards), and local standards. Our platform is designed to be flexible and can be configured to meet specific jurisdictional requirements."
        },
        {
          question: "Can I add accounting modules later?",
          answer: "Yes, our modular architecture allows you to start with audit-focused features and add accounting modules as your practice grows. You can seamlessly integrate accounting capabilities without disrupting your existing audit workflows."
        },
        {
          question: "How is maintenance handled?",
          answer: "Maintenance is completely optional and flexible. You can choose to handle updates yourself or opt for our maintenance service. When you do choose maintenance, we provide regular updates, bug fixes, security patches, and new features without disrupting your operations."
        },
        {
          question: "How secure is audit data?",
          answer: "Security is our top priority. We use enterprise-grade encryption (AES-256), secure data centers, regular security audits, role-based access controls, and comprehensive audit trails. All data is backed up regularly and we maintain SOC 2 compliance."
        },
        {
          question: "How long does onboarding take?",
          answer: "Typical onboarding takes 2-4 weeks depending on your requirements. This includes branded portal setup, template configuration, system integrations, user training, and initial data migration. We provide dedicated support throughout the process."
        },
        {
          question: "Can I export or migrate data later?",
          answer: "Absolutely. You maintain full control of your data. We provide comprehensive export capabilities in standard formats (CSV, PDF, Excel) and can assist with data migration if you ever need to move to another system. Your data belongs to you."
        }
      ]
    },
    cta: {
      badgeText: "Ready to Transform",
      title: "Ready to Run Audits Smarter, On Your Platform?",
      subtitle: "Deliver audits under your name. We provide the engine behind you.",
      primaryButtonText: "Schedule a Demo",
      secondaryButtonText: "Request a Quote"
    }
  },
  accounting: {
    hero: {
      title: "Your Firm's Accounting Tech, Reinvented",
      subtitle: "With Vacei, your accounting firm can deploy a powerful white-label portal, automation, and expert support — all under your brand.",
      primaryCTA: "Schedule a Demo",
      secondaryCTA: "See Features",
      trustText: "Operated by A4 Services Limited (licensed audit & accounting firm) • SSL encrypted • GDPR compliant"
    },
    introduction: {
      title: "Built Specifically for Today's Accounting Firms",
      content: "Tired of inefficient tools, siloed client workflows, and juggling multiple systems? Vacei is the all-in-one white-label solution built for firms that want to scale, automate, and strengthen their brand."
    },
    challenges: {
      title: "What You're Facing — We Understand",
      points: [
        "You manage many clients with varying accounting systems",
        "You lose time on repetitive bookkeeping tasks, data cleanup, reconciliations",
        "Clients want more transparency, dashboards, and digital delivery",
        "Tools you use are fragmented — accounting, client portals, audit, communications",
        "Scaling means more hires, more training, more operational overhead"
      ],
      transition: "You deserve tools that make your firm more efficient, modern, and profitable."
    },
    offerings: {
      title: "Your Firm's White-Label Portal + Service Stack",
      items: [
        {
          title: "White-Label Accounting Portal",
          description: "Deploy Vacei's accounting engine under your firm's brand — clients see your portal, not ours."
        },
        {
          title: "Centralized Client Management",
          description: "Onboard, manage, monitor clients from one dashboard — see which ones need help, see performance, exceptions."
        },
        {
          title: "Automation of Bookkeeping Tasks",
          description: "OCR, categorization, matching, reconciliation — your firm's team only deals with exceptions."
        },
        {
          title: "Integrations & Imports",
          description: "Connect with clients' systems (Xero, QuickBooks, local ERPs). Pull data in automatically without manual exports."
        },
        {
          title: "Dashboards & Reports to Clients",
          description: "Your clients get dashboards, live KPIs, statements — in your portal, under your branding."
        },
        {
          title: "Optional Audit Module",
          description: "Add audit capabilities (working papers, client requests, review) white-labeled into your firm's portal."
        },
        {
          title: "User / Role & Access Management",
          description: "You control which users (partners, accountants, clients) can see what — multi-tenant security."
        },
        {
          title: "Security, Versioning & Audit Trail",
          description: "Full logs, versioning, encrypted data, backups — firm-level control and reporting."
        },
        {
          title: "Support & Updates",
          description: "Maintenance, bug fixes, enhancements are optional add-ons — you stay current with minimal burden."
        }
      ]
    },
    workflow: {
      title: "Three Steps to Deploy & Use Vacei in Your Firm",
      steps: [
        {
          title: "Onboard & Configure",
          description: "We help you set up your branded portal, connect clients' systems, define user roles, migrate initial data.",
          microcopy: "We set up your brand and clients"
        },
        {
          title: "Automate & Manage",
          description: "Data flows in, automation kicks in, your team reviews exceptions, handles escalations.",
          microcopy: "Automation frees your team"
        },
        {
          title: "Deliver, Monitor & Scale",
          description: "Clients see dashboards, you monitor performance, add more clients, deploy modules like audit or advisory.",
          microcopy: "Grow without extra complexity"
        }
      ]
    },
    advantages: {
      title: "Your Competitive Edge",
      points: [
        "Your Brand Everywhere — clients always see your portal",
        "Lower Operational Cost — automation reduces hours per client",
        "Client Delight — real-time insights, dashboards, cleaner delivery",
        "Scalable Growth — you don't need to proportionally increase staff",
        "Backed by Experts — built and operated by accounting & audit professionals",
        "Security & Control — you own the environment, data, access"
      ]
    },
    pricing: {
      title: "How Firms Invest",
      subtitle: "We license Vacei to firms with a one-time implementation fee + optional maintenance/support. No hidden fees, no surprises.",
      description: "Final pricing depends on your scale, features, and complexity."
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "Can I white-label the portal fully (logo, domain)?",
          answer: "Yes, the portal can be fully white-labeled with your firm's branding, logo, and even custom domain."
        },
        {
          question: "If I don't take maintenance now, can I add it later?",
          answer: "Absolutely. Our maintenance and support is optional and can be added or removed at any time."
        },
        {
          question: "How are feature updates handled — do I get them automatically?",
          answer: "Feature updates are included with maintenance contracts. Without maintenance, you can choose when to update."
        },
        {
          question: "What integrations are already available?",
          answer: "We support major accounting systems like Xero, QuickBooks, and many ERP systems. Contact us for specific integrations."
        },
        {
          question: "How secure is the system and how is data protected?",
          answer: "We use enterprise-grade security with SSL encryption, GDPR compliance, and regular security audits."
        },
        {
          question: "How long does setup / onboarding take?",
          answer: "Typical setup takes 2-4 weeks depending on complexity and number of clients to migrate."
        }
      ]
    },
    cta: {
      badgeText: "Ready to Transform",
      title: "Elevate Your Firm's Technology Today",
      subtitle: "Bring your brand, bring your clients — let Vacei power your operations.",
      primaryButtonText: "Schedule a Demo",
      secondaryButtonText: "Request a Proposal"
    }
  },
  business: {
    hero: {
      title: "Full Accounting & Audit Services — You Choose the Focus",
      subtitle: "Vacei handles bookkeeping, compliance, and audit support tailored to your needs. Pick the path that fits your business.",
      primaryCTA: "Get a Demo",
      secondaryCTA: "How It Works",
      trustText: "Operated by A4 Services Limited (licensed audit & accounting firm) • SSL encrypted • GDPR compliant"
    },
    introduction: {
      title: "Choose Your Path",
      content: "Some businesses only need accounting & compliance support. Others are preparing for audits or need assurance. Select what fits your needs: Accounting & Compliance — for bookkeeping, VAT, financial reporting. Audit & Assurance — for audit preparation, working papers, compliance readiness."
    },
    challenges: {
      title: "You face challenges like:",
      points: [
        "Managing receipts, invoices, bank statements, and expense claims",
        "Reconciliation, classification, and data entry overhead",
        "Risk of non-compliance, fines, audit chaos",
        "Hiring in-house accountants or auditors is costly and uncertain",
        "Lack of real-time visibility into financials"
      ],
      transition: "You deserve a system that handles these seamlessly."
    },
    offerings: {
      title: "Vacei handles your accounting, compliance, and audit needs",
      items: [
        {
          title: "OCR & Document Intake",
          description: "Upload your invoices, receipts, statements — we process them automatically"
        },
        {
          title: "Accounting System Integration",
          description: "Sync your books seamlessly — no more manual imports"
        },
        {
          title: "Auto Categorization & Matching",
          description: "Routine transactions resolve themselves; you review exceptions"
        },
        {
          title: "Compliance & VAT / Tax Tools",
          description: "Stay aligned with local tax and compliance needs"
        },
        {
          title: "Dashboards & KPIs",
          description: "Track your cash flow, profit, expenses — live"
        },
        {
          title: "Audit Support & Portal",
          description: "We generate working papers, manage requests, structure your audit flow"
        },
        {
          title: "Secure Data & Access Control",
          description: "You retain control — encryption, backups, permission layers"
        }
      ]
    },
    workflow: {
      title: "Your Journey with Vacei — Smooth & Transparent",
      steps: [
        {
          title: "Connect & Onboard",
          description: "Link your accounting/ERP, upload historical data, set up users. Configure accounting setup + audit structure, map accounts, prepare working paper templates.",
          microcopy: "We set up your systems and prepare your data"
        },
        {
          title: "Automate & Review",
          description: "Documents are OCR'd, categorized, reconciled; you review exceptions. Plus audit request tracking, linking documents to working papers, preliminary checks.",
          microcopy: "Automation handles bulk work; we intervene when needed"
        },
        {
          title: "Deliver & Monitor",
          description: "You receive monthly statements, dashboards, compliance outputs. You receive audit deliverables (working papers, reports), plus your regular accounting outputs.",
          microcopy: "You get results — financials or audit outputs — while we maintain everything"
        }
      ]
    },
    advantages: {
      title: "Why You Can Trust Vacei",
      points: [
        "Operated by A4 Services Limited, a licensed audit & accounting firm",
        "Secure infrastructure: SSL encryption, backups, GDPR compliance",
        "Transparent system and roadmap — we evolve with you",
        "Your data belongs to you — exportable anytime",
        "Built by accountants, auditors and technology professionals"
      ]
    },
    pricing: {
      title: "How Pricing Works for Your Path",
      subtitle: "We use a one-time implementation fee, plus optional maintenance & support if you want ongoing assistance and upgrades.",
      description: "Final price depends on volume, complexity, modules."
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "Can I start with Accounting only and add Audit later?",
          answer: "Yes, you can start with accounting services and add audit capabilities when needed."
        },
        {
          question: "What's included in implementation?",
          answer: "Implementation includes system setup, data migration, user training, and initial configuration."
        },
        {
          question: "If I skip maintenance now, can I get support later?",
          answer: "Yes, maintenance and support can be added at any time based on your needs."
        },
        {
          question: "How secure is my data?",
          answer: "We use enterprise-grade security with SSL encryption, GDPR compliance, and regular security audits."
        },
        {
          question: "What audit standards do you support?",
          answer: "We support major international audit standards including IFRS, GAAP, and local compliance requirements."
        },
        {
          question: "How long does onboarding take?",
          answer: "Typical onboarding takes 2-4 weeks depending on data complexity and business requirements."
        }
      ]
    },
    cta: {
      badgeText: "Ready to Transform",
      title: "Ready to Let Vacei Handle Your Accounting or Audit?",
      subtitle: "No surprises. Your satisfaction and clarity matter most.",
      primaryButtonText: "Get a Demo",
      secondaryButtonText: "Request a Proposal"
    }
  }
};

interface DynamicPageProps {
  pageType?: 'audit' | 'accounting' | 'business';
}

const DynamicPage = ({ pageType = 'audit' }: DynamicPageProps) => {
  const config = pageConfigurations[pageType];
  
  // Dynamic pricing tiers based on page type
  const getPricingTiers = () => {
    switch (pageType) {
      case 'audit':
        return [
          {
            id: 1,
            name: "Audit Firm Starter",
            description: "Branded portal + basic audit modules (planning, working papers, document requests)",
            price: "€X,XXX",
            priceNote: "One-time implementation",
            features: [
              "Branded portal setup",
              "Basic audit modules (planning, working papers)",
              "Document request management",
              "Client collaboration portal",
              "Basic integrations",
              "Standard support",
              "Up to 10 concurrent clients"
            ],
            popular: false
          },
          {
            id: 2,
            name: "Audit Growth",
            description: "Starter + integrations, advanced workflows, volume client support",
            price: "€Y,YYY",
            priceNote: "One-time implementation",
            features: [
              "Everything in Starter",
              "Advanced integrations",
              "Advanced workflows",
              "Volume client support",
              "Custom reporting",
              "Priority support",
              "Up to 50 concurrent clients",
              "API access",
              "Custom branding options"
            ],
            popular: true
          },
          {
            id: 3,
            name: "Enterprise / Custom",
            description: "Full suite including accounting portal integration, APIs, priority support",
            price: "Custom",
            priceNote: "Contact us for pricing",
            features: [
              "Everything in Growth",
              "Full accounting portal integration",
              "Advanced APIs",
              "Dedicated support",
              "Custom development",
              "Unlimited clients",
              "White-label mobile apps",
              "Advanced security features",
              "Custom compliance modules"
            ],
            popular: false
          }
        ];
      case 'accounting':
        return [
          {
            id: 1,
            name: "Firm Starter",
            description: "Perfect for small to medium accounting practices getting started",
            price: "€X,XXX",
            priceNote: "One-time implementation",
            features: [
              "Branded portal setup",
              "Core accounting modules",
              "Client onboarding for up to 10 clients",
              "Basic integrations",
              "Standard support",
              "Basic reporting"
            ],
            popular: false
          },
          {
            id: 2,
            name: "Firm Growth",
            description: "Ideal for growing practices with multiple clients and complex needs",
            price: "€Y,YYY",
            priceNote: "One-time implementation",
            features: [
              "Everything in Starter",
              "More clients support",
              "Advanced integrations",
              "Dashboards & KPIs",
              "Priority support",
              "Custom reporting",
              "API access"
            ],
            popular: true
          },
          {
            id: 3,
            name: "Enterprise / Custom",
            description: "Tailored solutions for large practices with specific requirements",
            price: "Custom",
            priceNote: "Contact us for pricing",
            features: [
              "Everything in Growth",
              "Full audit module integration",
              "Advanced APIs",
              "Dedicated support",
              "Custom development",
              "Unlimited clients",
              "White-label mobile apps",
              "Advanced security features"
            ],
            popular: false
          }
        ];
      case 'business':
        return [
          {
            id: 1,
            name: "Accounting Starter",
            description: "Core bookkeeping, statements, compliance, dashboard",
            price: "€X,XXX",
            priceNote: "One-time implementation",
            features: [
              "Core bookkeeping services",
              "Monthly statements",
              "Compliance support",
              "Basic dashboard",
              "Document processing",
              "Standard support"
            ],
            popular: false
          },
          {
            id: 2,
            name: "Audit-Ready Business",
            description: "Core + audit support module (audit structure, working paper prep)",
            price: "€Y,YYY",
            priceNote: "One-time implementation",
            features: [
              "Everything in Accounting Starter",
              "Audit support module",
              "Working paper preparation",
              "Audit structure setup",
              "Compliance readiness",
              "Priority support"
            ],
            popular: true
          },
          {
            id: 3,
            name: "Full Service Business + Audit",
            description: "End-to-end accounting + audit deliverables",
            price: "Custom",
            priceNote: "Contact us for pricing",
            features: [
              "Everything in Audit-Ready",
              "Complete audit deliverables",
              "Working papers & reports",
              "Dedicated support",
              "Custom development",
              "Unlimited volume"
            ],
            popular: false
          }
        ];
      default:
        return [];
    }
  };

  const pricingTiers = getPricingTiers();

  const additionalPricingInfo = {
    title: "Optional Maintenance & Support",
    description: "Choose ongoing support for updates, bug fixes, and enhancements. No long-term commitments — you control when and how you want support.",
    features: [
      { title: "Flexible", description: "Add or remove support as needed" },
      { title: "Transparent", description: "Clear pricing with no hidden fees" },
      { title: "Scalable", description: "Grows with your practice" }
    ]
  };

  return (
    <PersonaProvider>
      <div className="min-h-screen">
      {/* Section 1: Hero - Light */}
      <AuditFirmsHero 
        title={config.hero.title}
        subtitle={config.hero.subtitle}
        primaryCTA={config.hero.primaryCTA}
        secondaryCTA={config.hero.secondaryCTA}
        trustText={config.hero.trustText}
      />
      
      {/* Section 2: Introduction - Dark */}
      <div className="relative bg-black overflow-hidden">
        <AuditFirmsIntroduction 
          title={config.introduction.title}
          content={config.introduction.content}
        />
      </div>
      
      {/* Section 3: Challenges - Light */}
      <AuditFirmsChallenges 
        title={config.challenges.title}
        points={config.challenges.points}
        transition={config.challenges.transition}
      />
      
      {/* Section 4: Offerings - Dark */}
      <div className="relative bg-black overflow-hidden">
        <AuditFirmsOfferings 
          title={config.offerings.title}
          items={config.offerings.items}
        />
      </div>
      
      {/* Section 5: Workflow - Light */}
      <AuditFirmsWorkflow 
        title={config.workflow.title}
        steps={config.workflow.steps}
      />
      
      {/* Section 6: Advantages - Dark */}
      <div className="relative bg-black overflow-hidden">
        <AuditFirmsAdvantages 
          title={config.advantages.title}
          points={config.advantages.points}
        />
      </div>
      
      {/* Section 7: Pricing - Light */}
      <AuditFirmsPricing
        title={config.pricing.title}
        subtitle={config.pricing.subtitle}
        description={config.pricing.description}
        tiers={pricingTiers}
        additionalInfo={additionalPricingInfo}
      />
      
      {/* Section 8: FAQ - Dark */}
      <div className="relative bg-black overflow-hidden">
        <AuditFirmsFAQ 
          title={config.faq.title}
          questions={config.faq.questions}
        />
        </div>
      
      {/* Section 9: CTA - Light */}
      <CTASection
        backgroundColor="white"
        badgeText={config.cta.badgeText}
        title={config.cta.title}
        subtitle={config.cta.subtitle}
        primaryButtonText={config.cta.primaryButtonText}
        secondaryButtonText={config.cta.secondaryButtonText}
        isHomepage={false}
        primaryButtonIcon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        }
        secondaryButtonIcon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        }
      />
      </div>
    </PersonaProvider>
  );
};

// Default export for audit firms (backward compatibility)
const AuditFirmsPage = () => <DynamicPage pageType="audit" />;

export default AuditFirmsPage;
export { DynamicPage };