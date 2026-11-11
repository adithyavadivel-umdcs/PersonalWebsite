// Per-page search metadata. Used by the build-time prerender (scripts/prerender.mjs)
// and by the client when navigating between pages.
export const SITE_URL = "https://adithyavadivel.me";

export const pageMeta = {
  "/": {
    title: "Adithya Vadivel | CS & Data Science Student, Software Developer",
    description:
      "Adithya Vadivel is a Computer Science and Data Science student at the University of Maryland and a Software Developer Intern at CMS, building healthcare and cloud software.",
  },
  "/resume": {
    title: "Resume | Adithya Vadivel",
    description:
      "Resume of Adithya Vadivel: software development and data analyst internships at CMS, DevOps at RAINN, research at Northeastern University, skills, and certifications.",
  },
  "/projects": {
    title: "Projects | Adithya Vadivel",
    description:
      "Projects by Adithya Vadivel, including the AWS SATv2 Findings Assistant, ChoirMap AI, and this React portfolio, plus a browsable list of GitHub repositories.",
  },
  "/contact": {
    title: "Contact | Adithya Vadivel",
    description:
      "Contact Adithya Vadivel about internships, research opportunities, and software projects. Email, GitHub, LinkedIn, and resume download.",
  },
};

export const notFoundMeta = {
  title: "Page not found | Adithya Vadivel",
  description: pageMeta["/"].description,
};

export function metaFor(pathname) {
  return pageMeta[pathname] ?? notFoundMeta;
}

export function canonicalFor(pathname) {
  return pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
}

const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Page-specific <head> tags, injected at build time for each prerendered page. */
export function headTags(pathname) {
  const { title, description } = metaFor(pathname);
  const url = canonicalFor(pathname);
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
  ].join("\n    ");
}
