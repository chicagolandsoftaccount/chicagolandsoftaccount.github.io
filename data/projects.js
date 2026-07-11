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
    images: [
      "img/projects/ccr.webp",
      "img/projects/ccr_aqi_dashboard.webp",
      "img/projects/ccr_aqi.webp",
      "img/projects/ccr_aqi_todo.webp"
    ],
    icon: "fa-solid fa-chart-line",
    accent: ""
  },
  {
    name: "Chicago Web Hunter",
    featured: true,
    blurb:
      "An automated security-auditing platform that finds vulnerabilities in web, embedded, and industrial systems so you don't have to pentest by hand — run it as a pre-deployment gate to prove code is secure before it ships to production, or point it at a live target to surface real issues and generate proof-of-concept exploit payloads. It answers two questions about an app or codebase: is it exploitable, and is it trustworthy?",
    highlights: [
      "Bespoke SAST + DAST + a Kali “second opinion” (built): a custom static analyzer (SAST) reads source code for 88 classes of vulnerability — SQLi, RCE, XSS, broken authentication and access control (the OWASP Top 10 and well beyond) — across six languages; a dynamic verifier (DAST) then confirms which findings are actually exploitable against a running instance and produces PoC payloads; and it remotely scripts a Kali Linux VM over SSH to run industry-standard tools (wpscan, nuclei, sqlmap, OWASP ZAP) as an independent cross-check. All three merge into one ranked, CWE-mapped report.",
      "Built for signal, not noise (built): most scanners bury you in false positives — this one ranks by confidence, knows which files are tests or third-party code, recognizes existing safeguards, and measures its own recall against a benchmark of known-vulnerable apps. Proven end-to-end in a home lab, confirming live vulnerabilities in OWASP Juice Shop and catching a known-vulnerable WordPress plugin at every layer.",
      "Safe by design (built): the static scanner never runs, imports, or builds the code it inspects and treats every project as hostile input; the live DAST and Kali modes only run against targets you own and explicitly authorize. Container and git-history scanning, professional report exports (SARIF/HTML/PDF), a CI security gate, and a 400+-test suite.",
      "Trust analysis (in development): a separate mode with a different question — not “is there an accidental bug” but “is this code a backdoor?” — targeting the compromised-maintainer and malicious-dependency attacks that have hit major open-source packages (axios, xz-utils), using YARA malware signatures, provenance checks, and behavioral analysis.",
      "Roadmap: industrial and IoT targets — PLCs and SCADA/smart-factory software, plus the cheap, rarely-patched web servers inside consumer smart-home devices; per-dependency supply-chain scanning; and known-CVE regression testing of real software on restorable VMs."
    ],
    tags: ["Python", "SAST", "DAST", "OWASP Top 10", "Kali Linux", "Penetration Testing", "PoC Exploit Generation", "YARA", "Supply-Chain Security", "SCADA / ICS", "IoT Security", "CWE / MITRE ATT&CK"],
    link: null,
    note: "Not yet publicly released — get in touch for a walkthrough or demo.",
    image: "img/projects/chicago_web_hunter.svg",
    icon: "fa-solid fa-crosshairs",
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
    name: "AI Message Queue",
    featured: false,
    blurb:
      "I built a message queue system that lets multiple agents communicate, collaborate, and share context through an issue tracker and wiki-style knowledge base, allowing features to be worked on in parallel.",
    highlights: [],
    tags: ["Multi-Agent Systems", "Message Queue", "Issue Tracker", "Knowledge Base", "AI Agents"],
    link: null,
    note: "Private project — get in touch for a walkthrough or demo.",
    image: "img/projects/ai_message_queue.webp",
    icon: "fa-solid fa-list-check",
    accent: "amber"
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
    images: [
      "img/projects/email_outreach_agent.webp",
      "img/projects/email_outreach_tool.webp"
    ],
    icon: "fa-solid fa-paper-plane",
    accent: "violet"
  },
  {
    name: "Scribble Slop",
    featured: false,
    blurb:
      "Scribble Slop is an AI art tool that turns rough scribbles into fully rendered images while preserving the original shape and intent — no “entity normalization.” A user scribbles crude, single-stroke colored outlines, names each one, and the AI paints hyper-detailed art that's forced to stay inside those exact pixel outlines, so a beautiful texture ends up jammed into a wonky doodle shape. A config-driven generation pipeline (reasoning model + image-generation tool) preserves the literal outline that cheaper direct-edit endpoints normalize away, while a two-stage automated AI moderation gate (judging both the typed words and the drawn shapes) with graduated, proportionate enforcement — reject, warn, or ban — keeps the rated public gallery safe. Built with React, Node, Express, and PostgreSQL, with auth, admin features, email flows, and AI API integration.",
    highlights: [],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "OpenAI API (Responses + image tool)", "Auth", "Email Flows", "AI Moderation", "sharp", "Capacitor"],
    link: null,
    note: "Private project — get in touch for a walkthrough or demo.",
    images: [
      "img/projects/scribble_slop_1.webp",
      "img/projects/scribble_slop_2.webp"
    ],
    icon: "fa-solid fa-paintbrush",
    accent: "rose"
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
    name: "Browser-Based 3D Online Multiplayer Game Engine",
    featured: false,
    blurb:
      "I built a browser-based multiplayer 3D game engine (client and server) using React, TypeScript, Three.js, Node, Express, PostgreSQL, WebSockets, and REST APIs. It uses tile-based logic, A* pathfinding, server-side validation, action queues, game ticks, lazy-loaded assets and versioned caching with hashes, and scoped WebSocket updates for performance. The goal was to better understand REST vs. WebSockets, improve TypeScript skills, and think more deeply about real-time systems.",
    highlights: [],
    tags: ["React", "TypeScript", "Three.js", "Node.js", "Express", "PostgreSQL", "WebSockets", "REST APIs", "A* Pathfinding", "Real-Time Systems"],
    link: null,
    image: "img/projects/multiplayer_game.webp",
    icon: "fa-solid fa-cube",
    accent: "blue"
  },
  {
    name: "3D Model Viewer and Editor",
    featured: false,
    blurb:
      "I wrote a script to have an AI API auto-generate the 3D models by using a prompt template and iterating through an entity string array. I also made a web-based viewer/editor tool for it which allows rudimentary edits as well, though it can't make full 3D models from scratch. It's more for editing/fixing AI-generated models.",
    highlights: [],
    tags: ["Three.js", "TypeScript", "React"],
    link: null,
    image: "img/projects/3d_model_viewer.webp",
    icon: "fa-solid fa-cubes",
    accent: "green"
  },
  {
    name: "2D MMO Engine (Old)",
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
