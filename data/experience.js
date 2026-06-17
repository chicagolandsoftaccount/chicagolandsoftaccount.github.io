/*
 * experience.js — professional & volunteer experience, newest first.
 * Rendered into the Experience timeline by js/render.js.
 *
 * Each entry: { role, org, location, start, end, kind, summary, highlights[], tags[] }
 *   kind: "work" | "volunteer"  (controls the badge shown on the card)
 */
window.EXPERIENCE = [
  {
    role: "Senior Software Engineer",
    org: "Chicago Capital Research",
    location: "Chicago, IL · Remote",
    start: "2026",
    end: "Present",
    kind: "work",
    summary:
      "Building a full-stack platform that automates investment research, financial reporting, and analyst workflows.",
    highlights: [
      "Architected a React + Node/Express + PostgreSQL platform with REST APIs, task scheduling, data warehousing, and web + Android clients.",
      "Integrated six financial and AI data providers to power market-data ingestion, news analysis, and research automation.",
      "Built customizable dashboards, data visualizations, and automated PDF/HTML reports for stocks, news, SEC filings, and AI sentiment.",
      "Cut manual research effort by 90%+ through scheduled pipelines that generate and deliver reports automatically."
    ],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "OpenAI", "REST APIs", "Capacitor"]
  },
  {
    role: "Junior Application and Reports Developer",
    org: "Legacy Healthcare",
    location: "Skokie, IL",
    start: "2021",
    end: "2025",
    kind: "work",
    summary:
      "One of two developers supporting EMR-backed clinical web applications, dashboards, and operational reporting for 100+ skilled nursing, assisted living, and rehab facilities at a healthcare provider with $400M+ in annual revenue.",
    highlights: [
      "Identified and remediated critical security vulnerabilities, including remote code execution (RCE) and SQL injection (SQLi) flaws in existing production code, protecting HIPAA-regulated patient data.",
      "Implemented a web application firewall (WAF) and built automated penetration-testing tooling that generated and deployed new WAF rules, establishing compensating controls for legacy systems that could not be patched.",
      "Introduced version control and modernized development practices for a large, legacy codebase at an organization that had no source control in place prior.",
      "Built and refactored full-stack services and dashboards using Java, Spring Boot, T-SQL, Angular, and AWS, resolving ORM performance bottlenecks across a sprawling production system.",
      "Designed scheduled automation for data warehousing, report generation, email delivery, and third-party API integrations supporting clinical and operational workflows.",
      "Owned the full support lifecycle — diagnosing and resolving production issues directly with clinical end users by phone and email, then deploying fixes with minimal disruption to patient care workflows."
    ],
    tags: ["Java", "Spring Boot", "Angular", "T-SQL", "AWS", "WAF / Security"]
  },
  {
    role: "Senior Software Engineer (Volunteer)",
    org: "WeVote USA",
    location: "Oakland, CA · Remote",
    start: "2026",
    end: "Present",
    kind: "volunteer",
    summary:
      "Contributing full-stack to WeVote, a nonpartisan nonprofit focused on increasing voter awareness, reaching roughly 150,000 users.",
    highlights: [
      "Develop, maintain, and test two web applications: WeVote (user-facing) and WeConnect (internal).",
      "Write front-end and back-end code across React, JavaScript, Python/Django, Node/Express, and PostgreSQL.",
      "Participate in weekly engineering meetings and deliver assigned Jira tickets on an open-source codebase."
    ],
    tags: ["React", "Python", "Django", "Node.js", "PostgreSQL", "Open Source"]
  },
  {
    role: "Software Developer",
    org: "Smart Financial Research",
    location: "Wheaton, IL",
    start: "2016",
    end: "2018",
    kind: "work",
    summary:
      "Supported and enhanced Java-based and WordPress applications in a production environment.",
    highlights: [
      "Worked across software development and IT support to troubleshoot, maintain, and improve system reliability.",
      "Implemented remote troubleshooting techniques to resolve common software and hardware issues."
    ],
    tags: ["Java", "WordPress", "Production Support"]
  }
];
