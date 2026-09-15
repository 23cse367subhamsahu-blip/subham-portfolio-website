export const PROFILE = {
  name: "Subham Sahu",
  brand: "SUBHAM.DEV // 2026",
  tagline: "I build software, solve technical problems, and turn data into decisions.",
  location: "Gunupur, Odisha, India",
  availability: "OPEN TO INTERNSHIPS — SWE / TECH SUPPORT / DATA ANALYST",
  email: "hello@subhamsahu.tech",
  phone: "+91 9777929566",
  phoneHref: "tel:+919777929566",
  linkedin: "https://www.linkedin.com/in/subham2005",
  linkedinLabel: "linkedin.com/in/subham2005",
  github: "https://github.com/Subhamsahu-19",
  githubLabel: "github.com/Subhamsahu-19",
  domain: "subhamsahu.tech",
};

export const HERO_METRICS = [
  { label: "INCIDENTS RESOLVED", value: "50+", sub: "ServiceNow ESM/CSM" },
  { label: "WORKFLOWS ENGINEERED", value: "10+", sub: "Enterprise automation" },
  { label: "TECHNICAL CERTS", value: "07", sub: "Oracle · Akamai · Altair" },
  { label: "INTERNSHIPS", value: "02", sub: "Consulting + SDE" },
];

export const MARQUEE_ITEMS = [
  "PYTHON", "DJANGO REST FRAMEWORK", "SERVICENOW ESM/CSM", "POSTGRESQL", "PL/SQL",
  "DATABRICKS", "ORACLE CLOUD AI", "AKAMAI NETWORKING", "PANDAS & ML",
  "INCIDENT RESOLUTION", "REST API DESIGN", "PREDICTIVE ANALYTICS",
];

export const MANIFESTO = [
  {
    number: "01",
    title: "Software that holds up in production",
    description:
      "From configuring 10+ ServiceNow workflows for enterprise clients to architecting Django REST APIs for fintech, I build systems with clear contracts, tested behavior, and documentation that outlives the sprint.",
  },
  {
    number: "02",
    title: "Data into decisions",
    description:
      "I turn raw workforce, market, and operational data into dashboards, stored procedures, and predictive models that people actually act on — with Python, Pandas, PL/SQL, and Databricks.",
  },
  {
    number: "03",
    title: "Support is an engineering discipline",
    description:
      "50+ incidents resolved at inMorphis taught me that root cause analysis, SLA discipline, and a well-maintained knowledge base are as much engineering as any codebase.",
  },
];

export const SKILL_GROUPS = [
  {
    name: "Languages & Backend",
    icon: "code",
    skills: [
      { name: "Python", level: "Advanced", detail: "Backend services, scripting & automation" },
      { name: "Django & DRF", level: "Advanced", detail: "RESTful APIs, ORM & auth systems" },
      { name: "Java", level: "Proficient", detail: "OOP & Symphony bot development" },
      { name: "SQL & PL/SQL", level: "Advanced", detail: "Stored procedures & query optimization" },
    ],
  },
  {
    name: "Data & Analytics",
    icon: "chart",
    skills: [
      { name: "PostgreSQL & MySQL", level: "Advanced", detail: "Schema design, indexing & tuning" },
      { name: "Pandas", level: "Proficient", detail: "Data cleaning & exploratory analysis" },
      { name: "Machine Learning", level: "Certified", detail: "Altair RapidMiner ML Professional" },
      { name: "Excel Dashboards", level: "Advanced", detail: "KPI tracking & trend visualization" },
    ],
  },
  {
    name: "Platforms & Cloud",
    icon: "cloud",
    skills: [
      { name: "ServiceNow", level: "Production", detail: "ITSM, CSM & ESM workflow engines" },
      { name: "Oracle Cloud (OCI)", level: "Certified", detail: "AI Foundations Associate 2025" },
      { name: "Akamai Networking", level: "Certified", detail: "Edge delivery & CDN fundamentals" },
      { name: "Databricks", level: "Certified", detail: "Unified data analytics fundamentals" },
    ],
  },
  {
    name: "Practices & Delivery",
    icon: "cpu",
    skills: [
      { name: "Agile & SDLC", level: "Practiced", detail: "Sprints, code reviews & planning" },
      { name: "System Testing", level: "Practiced", detail: "Validation & requirement analysis" },
      { name: "Root Cause Analysis", level: "50+ cases", detail: "Incident triage & resolution" },
      { name: "Technical Docs", level: "Practiced", detail: "Knowledge bases & project docs" },
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Technical Consultant Intern",
    company: "inMorphis",
    period: "May 2026 – Jul 2026",
    location: "Noida, Uttar Pradesh · On-site",
    badge: "ServiceNow ESM & CSM",
    current: true,
    highlights: [
      "Supported configuration, testing, and documentation for 10+ ServiceNow workflows across Enterprise Service Management (ESM) and Customer Service Management (CSM), improving process consistency.",
      "Analyzed and resolved 50+ incidents, service requests, and support tickets by validating solutions with technical teams, improving service delivery efficiency.",
      "Drove CSM operations: case management, request tracking, workflow automation, SLA monitoring, and knowledge-base updates.",
      "Partnered with cross-functional teams on requirement analysis, system testing, and project documentation across ITSM and digital workflow solutions.",
    ],
    tags: ["ServiceNow", "ESM / CSM", "Workflow Automation", "SLA Monitoring", "Technical Documentation"],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Bluestock",
    period: "May 2025 – Jun 2025",
    location: "Pune District, Maharashtra · Remote",
    badge: "Full-Stack API Engineering",
    current: false,
    highlights: [
      "Designed and developed an IPO web application and RESTful API using Python, Django, and PostgreSQL, delivering scalable fintech functionality.",
      "Built responsive front-end components and optimized PostgreSQL database performance, improving application reliability and user experience.",
      "Implemented authentication, access control, and data-protection best practices aligned with industry security standards.",
      "Collaborated in Agile sprints through code reviews, sprint planning, and interface design — delivering every milestone on schedule.",
    ],
    tags: ["Python", "Django REST Framework", "PostgreSQL", "PL/SQL", "Agile / SDLC"],
  },
];

export const PROJECTS = [
  {
    id: "workforce",
    index: "01",
    title: "Workforce & Industry Trend Analyzer",
    category: "Data Analytics · Predictive Modeling",
    period: "Nov 2025 – Feb 2026",
    description:
      "A data-driven analyzer tracking labor market shifts, skill demand, and hiring patterns across industries — built to support real workforce-planning decisions.",
    highlights: [
      "Python scripts to collect, clean, and analyze workforce datasets, surfacing trends in skill demand and hiring activity.",
      "PL/SQL queries and stored procedures managing structured HR and labor-market data for fast retrieval and reporting.",
      "Interactive Excel dashboards visualizing trend shifts, skill gaps, and industry benchmarks for HR decision-making.",
      "Predictive analysis applied to workforce planning and skill-gap identification.",
    ],
    stack: ["Python", "PL/SQL", "Microsoft Excel", "Data Analysis", "Data Visualization", "Predictive Analytics"],
    testid: "project-card-workforce",
  },
  {
    id: "ipo",
    index: "02",
    title: "IPO Management Web Application",
    category: "Full-Stack · Fintech",
    period: "May 2025 – Jun 2025",
    description:
      "A full-stack IPO platform and RESTful API supporting fintech workflows and IPO-related data management, built at Bluestock.",
    highlights: [
      "RESTful API endpoints in Django for IPO listings, subscriptions, and data retrieval, supporting scalable backend operations.",
      "Responsive front-end components integrated with the Django backend for a smooth user experience.",
      "PostgreSQL schemas designed and optimized, improving query performance and data reliability.",
      "Authentication, access control, and data protection aligned with fintech security standards.",
    ],
    stack: ["Python", "Django REST Framework", "PostgreSQL", "REST APIs", "Database Design", "Agile"],
    testid: "project-card-ipo",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Akamai Network Engineering Professional",
    issuer: "Akamai Technologies",
    issued: "Mar 2026",
    credentialId: "KAQIY9ERRWHV",
    link: "https://coursera.org/share/73bc2f7070e6000ee0753320a35f065d",
    icon: "network",
    color: "#00F0FF",
  },
  {
    title: "Akamai Customer Consulting and Support Professional",
    issuer: "Akamai Technologies",
    issued: "Mar 2026",
    credentialId: "Y7XUSTR7COYM",
    link: "https://coursera.org/share/b724ed711d1c8b2c41f5cfc203be044c",
    icon: "users",
    color: "#38BDF8",
  },
  {
    title: "Machine Learning Professional Certification",
    issuer: "Altair RapidMiner",
    issued: "Sep 2025",
    credentialId: "a1fc5277…814cdc",
    link: "https://openbadgefactory.com/v1/assertion/a1fc527753892c932babce79284d3e92ab814cdc",
    icon: "brain",
    color: "#A855F7",
  },
  {
    title: "OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issued: "Mar 2025",
    credentialId: "318589406OCI25AICFA",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A8D05611045BAA8E74CAF51F53B71E45747CA906072F42B092CD2738F8E75442",
    icon: "cpu",
    color: "#F97316",
  },
  {
    title: "Symphony Certified Bot Developer (Python & Java)",
    issuer: "Symphony",
    issued: "Mar 2025",
    credentialId: "4970-E124-D4B7-40D7",
    link: "https://www.credly.com/badges/cd6a4fa1-f50a-480f-ad44-f8e1b5963a6e/public_url",
    icon: "bot",
    color: "#10B981",
  },
  {
    title: "Databricks Fundamentals",
    issuer: "Databricks",
    issued: "2025",
    credentialId: null,
    link: null,
    icon: "database",
    color: "#EF4444",
  },
  {
    title: "Product Analytics Certification",
    issuer: "Pendo.io",
    issued: "2025",
    credentialId: null,
    link: null,
    icon: "chart",
    color: "#EC4899",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Technology — Computer Science & Engineering",
  institution: "GIET University, Gunupur",
  location: "Gunupur, Odisha, India",
  timeline: "Aug 2023 – Aug 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Object-Oriented Programming",
    "Software Engineering",
  ],
};
