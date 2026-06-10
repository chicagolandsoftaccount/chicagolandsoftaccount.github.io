/*
 * profile.js — top-level identity, hero copy, contact links, and headline stats.
 * All site content lives in these data/*.js files (loaded as globals before
 * js/render.js runs) so the markup stays free of hard-coded copy.
 *
 * Email is split into parts and reassembled in JS to discourage naive scrapers.
 */
window.PROFILE = {
  name: "Alan",
  brand: "Chicagoland Software",
  role: "Software Engineer",
  // Short, punchy hero subtitle.
  tagline: "Back-end-focused full-stack engineer building secure, production software across healthcare and fintech.",
  location: "Chicago, IL",
  available: "Open to senior / staff back-end and full-stack roles",
  // One-line "what I'm up to" strip under the hero stats.
  now: "Currently building Chicago Capital Research and volunteering as a senior engineer at WeVote.",
  // Shown beneath the experience timeline so the trimmed early jobs don't read as a gap.
  experienceNote: "Earlier non-technical and IT-support positions (going back to 2012) are omitted here to keep the focus on software engineering. My full work history — with no employment gaps — is available on request.",
  // Longer intro paragraph for the About section.
  about: [
    "I'm a back-end-focused full-stack software engineer with 5+ years of experience building, securing, and maintaining production applications. Most recently I built clinical web applications and reporting automation for a healthcare provider operating 100+ skilled nursing facilities.",
    "These days I'm building Chicago Capital Research, an AI-assisted investment-research platform, and I volunteer as a senior engineer for the WeVote nonprofit. I care a lot about application security, clean data pipelines, and software that holds up under real-world load.",
    "I'm a continual learner — I pick up new languages, frameworks, and tools quickly, and I build side projects to stay sharp on whatever the industry is moving toward next."
  ],
  links: {
    github: "https://github.com/0x416c616e",
    linkedin: "https://www.linkedin.com/in/acompsci/",
    // Email assembled at runtime in js/main.js from these parts.
    emailUser: "alancompsci",
    emailDomain: "gmail.com"
  },
  // Animated counters in the hero. `value` is the target; `suffix`/`prefix` decorate it.
  stats: [
    { label: "Years building production software", value: 5, suffix: "+" },
    { label: "Skilled-nursing facilities supported", value: 100, suffix: "+" },
    { label: "Users reached via WeVote", value: 150, suffix: "K+" },
    { label: "APIs integrated: finance, AI, healthcare & more", value: 20, suffix: "+" }
  ],
  // Education, kept compact.
  education: [
    { school: "Fullstack Academy", detail: "Web Development Bootcamp", year: "2025" },
    { school: "Northeastern Illinois University", detail: "Computer Science coursework", year: "2018" },
    { school: "Southern Illinois University Edwardsville", detail: "Computer Science coursework", year: "2016–2018" }
  ]
};
