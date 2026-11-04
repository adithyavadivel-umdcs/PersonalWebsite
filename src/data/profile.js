export const links = {
  email: "avadivel@umd.edu",
  github: "https://github.com/adithyavadivel-umdcs",
  linkedin: "https://www.linkedin.com/in/adithya-vadivel-45882b233/",
  resumePdf: "/assets/Adithya_Vadivel_Resume.pdf",
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "Kotlin", "Python", "TypeScript", "JavaScript", "C/C++", "SQL", "MATLAB", "HTML/CSS"],
  },
  {
    label: "Frameworks & Tools",
    items: ["React.js", "Vite", "Firebase", "Pandas", "Pytest", "Git"],
  },
  {
    label: "Coursework",
    items: [
      "Object Oriented Programming",
      "Data Structures and Algorithms",
      "Discrete Structures",
      "Databases",
    ],
  },
];

export const marqueeSkills = [
  "Java", "Kotlin", "Python", "TypeScript", "JavaScript", "C/C++", "SQL", "MATLAB",
  "React", "Vite", "AWS", "Firebase", "Pandas", "Pytest", "Maven", "Git",
];

export const experiences = [
  {
    company: "U.S. Centers for Medicare & Medicaid Services (CMS)",
    role: "Software Developer Intern",
    healthcare: true,
    employmentType: "Part-Time",
    location: "Woodlawn, MD",
    dates: "Sep 2026 - Present",
    current: true,
    bullets: [
      "Develop and maintain large-scale Medicare pricing applications (“Pricers”), implementing updates to core logic, configuration pipelines, and data models using Java, Maven, and Git.",
      "Convert internal SAS programs to Python under an HHS CIO directive to modernize legacy analytics code.",
      "Automate and monitor release workflows for annual, quarterly, and off-cycle Pricer updates using GitHub, Jira, Confluence, and Slack, ensuring seamless deployment across DEV, IMPL, and PROD environments.",
      "Conduct code reviews and partner with technical leads to enforce coding standards, security (CVE suppression), and SonarQube quality gates prior to production release.",
      "Build and validate automated pipelines that transform policy input files (CSV, YAML, Excel) into fee schedules and pricing files for Medicare claim reimbursement.",
    ],
  },
  {
    company: "U.S. Centers for Medicare & Medicaid Services (CMS)",
    role: "Data Analyst Intern",
    healthcare: true,
    employmentType: "Full-Time",
    location: "Woodlawn, MD",
    dates: "Jun 2026 - Aug 2026",
    bullets: [
      "Built an animated, graphics-driven presentation application in TypeScript, implementing reusable slide components and programmatic chart animations to communicate case-routing workflows to staff and leadership.",
      "Automated recurring case-data reporting through formula-driven pipelines and pivot-based aggregations, eliminating manual tracking steps and reducing turnaround time on recurring deliverables.",
      "Queried and analyzed claims and case-routing data from internal CMS systems, transforming raw extracts into summary dashboards that surfaced patterns used for team decision-making.",
      "Translated stakeholder requirements into structured technical specifications for internal tooling, and documented a SharePoint migration covering folder hierarchy, metadata schema, and access configuration.",
    ],
  },
  {
    company: "RAINN",
    role: "DevOps Engineer Intern",
    employmentType: "Part-Time",
    location: "Washington, DC",
    dates: "Jun 2026 - Aug 2026",
    bullets: [
      "Root-caused an 8-month silent outage in a production CloudWatch → SNS → Lambda → Slack alerting pipeline by mining 30 days of logs to prove all 147 invocations returned 400 invalid_token, isolating error handling that never inspected the outbound HTTP status.",
      "Restored and hardened the Python notifier by rotating the dead webhook and migrating a hardcoded secret into SSM Parameter Store, adding status-code validation so delivery failures surface as real CloudWatch errors.",
      "Re-architected alarm routing, splitting URL/downtime alerts from infrastructure health alarms into dedicated Slack channels to cut noise and improve on-call signal.",
      "Authored least-privilege IAM policies in JSON and automated a standardized AWS resource tagging strategy across existing infrastructure, hardening security and improving cost visibility.",
    ],
  },
  {
    company: "Northeastern University - Center for Drug Discovery",
    role: "Research Intern",
    healthcare: true,
    location: "Boston, MA",
    dates: "Oct 2024 - Dec 2024",
    bullets: [
      "Supported academic research workflows by reviewing scientific literature related to drug discovery and public health outcomes.",
      "Organized findings across research tools and databases to improve reference tracking, source analysis, and synthesis quality.",
      "Worked in a detail-oriented environment that required structured documentation, accuracy, and clear communication.",
    ],
  },
  {
    company: "Aegle Nutrition",
    role: "Quality Control Intern",
    location: "Carrollton, TX",
    dates: "Jul 2024 - Oct 2024",
    bullets: [
      "Assisted with quality control processes by documenting checks, reviewing product information, and maintaining consistency across records.",
      "Contributed to process reliability by catching discrepancies early and helping keep operational data organized.",
      "Strengthened analytical and process-focused thinking while working in a fast-moving, standards-driven setting.",
    ],
  },
];

// Short-form project entries used on the Resume page.
export const resumeProjects = [
  {
    name: "AWS SATv2 Findings Assistant",
    year: "2026",
    stack: ["Python", "Pandas", "Pytest", "HTML", "Git"],
    description:
      "Developed a privacy-first Python CLI that parses AWS SATv2/Prowler exports, redacts sensitive infrastructure data, and generates AI-ready remediation summaries without exposing raw CSV records. Engineered a streaming pipeline processing large CSVs in constant memory, normalizing multiple export schemas and classifying findings by severity into HTML/Markdown reports, backed by a Pytest privacy-validation suite.",
  },
  {
    name: "Personal Portfolio",
    year: "2026",
    stack: ["React", "Vite", "JavaScript", "AWS", "Git"],
    description:
      "Built and deployed a responsive single-page application with React and Vite using a component-based architecture. Implemented cloud hosting and CDN delivery on AWS S3 and CloudFront with Route 53 domain routing and HTTPS via Certificate Manager; optimized load times through asset bundling and cache-control tuning.",
  },
];

// Long-form project entries used on the Projects page.
export const projects = [
  {
    title: "AWS SATv2 Findings Assistant",
    year: "2026",
    kind: "Security tooling · CLI",
    description:
      "Developed a privacy-first Python application that processes AWS SATv2/Prowler assessment exports, automatically redacting sensitive cloud infrastructure data and generating AI-ready remediation summaries without exposing confidential cloud resources. Built an automated findings analysis pipeline that streams large CSV files, normalizes multiple SATv2/Prowler export formats, and classifies and prioritizes security findings into HTML and Markdown reports to accelerate remediation workflows. Implemented automated privacy validation and comprehensive unit tests to ensure sensitive infrastructure data is never included in AI-ready outputs, while maintaining reliable parsing, classification, and reporting across assessment formats.",
    tags: ["Python", "Pandas", "Pytest", "HTML", "Git"],
  },
  {
    title: "Personal Portfolio",
    year: "2026",
    kind: "Web · Cloud",
    description:
      "Built a single-page portfolio with React and Vite to present my background, projects, and resume in a clean, responsive interface. Structured the site for straightforward updates and deployed it with AWS S3, CloudFront, Route 53, and HTTPS.",
    tags: ["React", "Vite", "AWS", "Responsive UI"],
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "PCEP Certified Entry-Level Python Programmer",
];
