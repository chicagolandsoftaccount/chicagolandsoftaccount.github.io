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
    role: "Application & Reports Developer",
    org: "Legacy Healthcare",
    location: "Skokie, IL",
    start: "2021",
    end: "2025",
    kind: "work",
    summary:
      "Developed and maintained in-house clinical web applications and reporting for 100+ skilled nursing facilities.",
    highlights: [
      "Built backend services and clinical dashboards with Java, Spring Boot, T-SQL, Angular, and AWS in a regulated healthcare environment.",
      "Designed scheduled automation for data warehousing, report generation, email delivery, and third-party API integrations.",
      "Strengthened application security through manual penetration testing, internal security tooling, and WAF rule maintenance protecting sensitive clinical data.",
      "Tested, deployed, and supported production releases with minimal disruption to clinical workflows."
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
