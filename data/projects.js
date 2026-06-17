/*
 * projects.js — curated portfolio projects, best first.
 * Rendered into the Projects grid by js/render.js.
 *
 * Each entry:
 *   { name, featured, blurb, highlights[], tags[], link, linkLabel, note, image, icon, accent }
 *   - featured: true   → rendered as a large, full-width showcase card
 *   - link: null       → no public link (renders the `note`/contact CTA instead)
 *   - image: path|null → screenshot; featured cards show it as a top banner,
 *                        regular cards as a top thumbnail. Optimized WebP in img/projects/.
 *   - accent           → icon-tile color: '' (blue, default), blue, violet, green, amber, rose
 */
window.PROJECTS = [
  {
    name: "Chicago Capital Research",
    featured: true,
    blurb:
      "An AI-assisted investment-research platform that turns raw market data, news, and SEC filings into automated, analyst-grade research reports and Bloomberg-style dashboards.",
    highlights: [
      "Automated research pipeline ingests market data, fundamentals, technicals, news, and SEC filings from many financial data providers, then scores each company with numeric ratio analysis and AI-based news sentiment.",
      "Customizable, drag-and-drop dashboards with charts, KPI widgets, and a rotation/“wall-monitor” mode; on-demand and scheduled PDF/HTML report generation with email delivery.",
      "React 19 + Vite single-page app shipping to web and Android (via Capacitor) from one codebase, backed by an Express 5 + PostgreSQL API with cron-driven data pipelines.",
      "Production-grade security & reliability: argon2id + JWT auth, role-based authorization, Helmet/CSRF/WAF rules, rate limiting, automated backups with replication, logging/monitoring, and a ~900-test suite."
    ],
    tags: ["React", "Vite", "Capacitor", "Node.js", "Express", "PostgreSQL", "OpenAI", "REST APIs", "Cron", "JWT / argon2", "Quantitative Analysis", "Recharts", "Data Visualization", "Fintech", "Puppeteer", "CRUD Systems", "Front-End", "Back-End", "Deployment"],
    link: null,
    note: "Private platform — get in touch for a walkthrough or demo.",
    image: "img/projects/ccr.webp",
    icon: "fa-solid fa-chart-line",
    accent: ""
  },
  {
    name: "Email Outreach Agent",
    featured: false,
    blurb:
      "An autonomous, goal-driven outreach engine that automates campaigns relating to communication, leads, business, and networking. You define a goal in the database, and it discovers organizations via web search and crawling, uses an AI API to assess the legitimacy and relevance of content parsed from scraped pages, drafts personalized emails, and sends them under strict compliance controls — surfacing only the replies that actually need a human.",
    highlights: [],
    tags: ["Node.js", "Express", "PostgreSQL", "Puppeteer", "Anthropic Claude API"],
    link: null,
    note: "Private project — get in touch for a walkthrough or demo.",
    image: "img/projects/email_outreach_agent.webp",
    icon: "fa-solid fa-paper-plane",
    accent: "violet"
  },
  {
    name: "AI Scribble Art Generator Web App",
    featured: false,
    blurb:
      "A comedic, “so-bad-it's-good” AI art generator built on a deliberately contrarian premise: instead of fixing your bad drawing, it commits to it. A user scribbles crude, lumpy, single-stroke colored outlines, names each one, and the AI paints hyper-detailed, photorealistic art that's forced to stay inside those exact pixel outlines — no smoothing, no “correcting” the wonky proportions — so a beautiful texture ends up jammed into a terrible doodle shape. A config-driven generation pipeline (reasoning model + image-generation tool) preserves the literal outline that cheaper direct-edit endpoints normalize away, with a per-image cost dashboard and swappable model profiles to keep generation under ~$0.02/image. A two-stage AI moderation gate (judging the typed words and the drawn shapes) plus graduated, proportionate enforcement — reject, warn, or ban — keeps it safe without being trigger-happy, and logged-out users can try it free, save work to reusable templates, and publish to a rated public gallery.",
    highlights: [],
    tags: ["Node.js", "Express", "PostgreSQL", "React", "OpenAI API (Responses + image tool)", "sharp", "Capacitor"],
    link: null,
    note: "Private project — get in touch for a walkthrough or demo.",
    image: "img/projects/ai_scribble_art_generator.webp",
    icon: "fa-solid fa-paintbrush",
    accent: "rose"
  },
  {
    name: "MTS2 — Metrics & Tracking System 2",
    featured: false,
    blurb:
      "A proprietary healthcare web application supporting data entry, data aggregation, on-demand reports, dashboards, administration, resident management, medication tracking, and incident tracking across 100+ skilled nursing facilities.",
    highlights: [],
    tags: ["Java", "Spring Boot", "Angular", "T-SQL", "AWS", "Hibernate", "SOAP APIs", "REST APIs", "CRUD Systems", "Stored Procedures", "HQL", "Front-End", "Back-End", "Deployment"],
    link: null,
    note: "Proprietary — built for Legacy Healthcare.",
    icon: "fa-solid fa-notes-medical",
    accent: "blue"
  },
  {
    name: "PMTS — Performance Metrics Tracking System",
    featured: false,
    blurb:
      "A healthcare web app for clinical and operational data entry, aggregation, on-demand reporting, dashboards, and resident/medication/incident tracking — built on a LAMP-style XAMPP stack.",
    highlights: [],
    tags: ["PHP", "MySQL", "Apache", "JavaScript", "XAMPP", "Maintaining Legacy Code"],
    link: null,
    note: "Proprietary — built for Legacy Healthcare.",
    icon: "fa-solid fa-gauge-high",
    accent: "green"
  },
  {
    name: "GainzPlanner",
    featured: false,
    blurb:
      "An AI workout planner: describe the workout you want in plain English and it infers the muscle groups involved, queries a PostgreSQL exercise database, and builds a tailored routine you can save and share.",
    highlights: [],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "OpenAI", "Netlify", "Heroku", "REST API", "Front-End", "Back-End", "Deployment"],
    link: "https://gainzplanner.ai/",
    linkLabel: "Visit site",
    image: "img/projects/gainzplanner.webp",
    icon: "fa-solid fa-dumbbell",
    accent: "violet"
  },
  {
    name: "WeVote / WeConnect",
    featured: false,
    blurb:
      "Open-source contributions to WeVote, a nonpartisan nonprofit focused on increasing voter awareness (~150K users) — full-stack feature work and testing across a user-facing app and an internal admin app.",
    highlights: [],
    tags: ["React", "Python", "Django", "Node.js", "PostgreSQL", "Open Source", "Express", "Linting", "Front-End", "Back-End"],
    link: "https://wevote.us/",
    linkLabel: "About WeVote",
    image: "img/projects/wevote.webp",
    icon: "fa-solid fa-check-to-slot",
    accent: "blue"
  },
  {
    name: "Report Automation",
    featured: false,
    blurb:
      "Scheduled report pipelines that generate and email operational and clinical reports for Legacy Healthcare's skilled-nursing operations, and investment-research reports for Chicago Capital Research — with data warehousing, templating, and automated delivery.",
    highlights: [],
    tags: ["JasperReports", "Jasper Server", "Apache POI", "XLSX.js", "Nodemailer", "T-SQL", "PostgreSQL", "ORM", "Java", "JavaScript", "Node.js", "Puppeteer", "Cron / Quartz", "Email"],
    link: null,
    image: "img/projects/report_automation.webp",
    icon: "fa-solid fa-file-invoice",
    accent: "amber"
  },
  {
    name: "Task Scheduling & Automation",
    featured: false,
    blurb:
      "Background job systems built on cron and Quartz for API integrations, notifications, report generation, and self-healing checks that detect and correct bad data automatically.",
    highlights: [],
    tags: ["Quartz", "Cron", "node-cron", "Node.js", "Java", "JavaScript", "PowerShell", "Bash", "REST APIs"],
    link: null,
    image: "img/projects/task_scheduling.webp",
    icon: "fa-solid fa-clock",
    accent: "green"
  },
  {
    name: "2D MMO Engine",
    featured: false,
    blurb:
      "A browser-based 2D MMORPG engine with tile-based movement and collision detection, plus a companion desktop level editor that visually edits JSON map data.",
    highlights: [],
    tags: ["Angular", "Java", "Spring Boot", "PostgreSQL", "JavaFX", "JDBC"],
    link: "https://github.com/0x416c616e/2drpggamengine",
    linkLabel: "View on GitHub",
    image: "img/projects/mmo_engine.webp",
    icon: "fa-solid fa-gamepad",
    accent: "rose"
  },
  {
    name: "AdiaScript",
    featured: false,
    blurb:
      "A custom scripting language and IDE for automating keyboard and mouse input — a from-scratch interpreter plus an editor for writing and running macros.",
    highlights: [],
    tags: ["Java", "Language Design", "Interpreters", "IDE"],
    link: "https://github.com/0x416c616e/AdiaScript",
    linkLabel: "View on GitHub",
    image: "img/projects/adiascript.webp",
    icon: "fa-solid fa-terminal",
    accent: "amber"
  },
  {
    name: "Soundboard",
    featured: false,
    blurb:
      "A React soundboard app wrapped for Android with Capacitor — a fun personal project I built for my girlfriend to play custom sound clips on their phone.",
    highlights: [],
    tags: ["React", "Vite", "Capacitor", "Android", "JavaScript"],
    link: null,
    image: "img/projects/soundboard.webp",
    icon: "fa-solid fa-music",
    accent: "violet"
  },
  {
    name: "Free Coding Tutorials",
    featured: false,
    blurb:
      "A ~200,000-word library of programming tutorials I wrote covering Java, Python, C++, Bash, Git, web development, security, data structures, algorithms, cloud, and more.",
    highlights: [],
    tags: ["Technical Writing", "Education", "Full Stack"],
    link: "https://freecodingtutorials.com/",
    linkLabel: "Visit site",
    image: "img/projects/free_coding_tutorials.webp",
    icon: "fa-solid fa-book-open",
    accent: "rose"
  },
  {
    name: "EZcrypt",
    featured: false,
    blurb:
      "A desktop file-encryption tool with a simple GUI — encrypts and decrypts files using Blowfish so you can protect sensitive data with a standalone Java app.",
    highlights: [],
    tags: ["Java", "Desktop App", "JavaFX", "Encryption", "Security", "Privacy"],
    link: "https://github.com/0x416c616e/ezcrypt",
    linkLabel: "View on GitHub",
    image: "img/projects/ezcrypt.webp",
    icon: "fa-solid fa-lock",
    accent: "amber"
  },
  {
    name: "Intro to Security",
    featured: false,
    blurb:
      "An e-book I wrote introducing information security — covering the OWASP Top 10, common web vulnerabilities, and core defensive concepts.",
    highlights: [],
    tags: ["Information Security", "OWASP", "Technical Writing"],
    link: "https://github.com/0x416c616e/intro_to_security",
    linkLabel: "View on GitHub",
    image: "img/projects/intro_to_security.webp",
    icon: "fa-solid fa-shield-halved",
    accent: "blue"
  },
  {
    name: "Security Tools",
    featured: false,
    blurb:
      "A growing collection of internal security and penetration-testing utilities. Kept private to prevent misuse — more details available to employers on request.",
    highlights: [],
    tags: ["Security", "Penetration Testing", "Python", "Bash"],
    link: null,
    note: "Details available on request.",
    image: "img/projects/security_tools.webp",
    icon: "fa-solid fa-bug",
    accent: "green"
  }
];
