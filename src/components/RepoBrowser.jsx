import { useEffect, useMemo, useState } from "react";
import { defaultRepoGroup, hiddenRepos, links, repoGroups } from "../data/profile";

export const GITHUB_USER = new URL(links.github).pathname.replace(/\//g, "");
const API = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`;
const CACHE_KEY = `gh-repos-${GITHUB_USER}`;
const CACHE_MS = 10 * 60 * 1000;

const nameCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
const SORTS = [
  { label: "most recent", fn: (a, b) => new Date(b.pushed_at) - new Date(a.pushed_at) },
  { label: "name", fn: (a, b) => nameCollator.compare(a.name, b.name) },
];

const GROUP_OF = new Map(repoGroups.flatMap((g) => g.repos.map((r) => [r.toLowerCase(), g.name])));
const GROUPS = [{ name: defaultRepoGroup }, ...repoGroups];
const SHOW = [
  { label: "everything", group: null },
  ...GROUPS.map((g) => ({ label: g.name.toLowerCase(), group: g.name })),
];
const HIDDEN = new Set(hiddenRepos.map((r) => r.toLowerCase()));
const NUMERALS = ["I", "II", "III", "IV", "V", "VI"];

const monthYear = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });

function readCache() {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY));
    if (cached && Date.now() - cached.at < CACHE_MS) return cached.repos;
  } catch {
    /* storage unavailable */
  }
  return null;
}

function writeCache(repos) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ repos, at: Date.now() }));
  } catch {
    /* storage unavailable */
  }
}

async function fetchRepos() {
  const res = await fetch(API);
  if (res.status === 403) throw new Error("GitHub is rate-limiting requests right now. Try again in a few minutes.");
  if (!res.ok) throw new Error("Couldn't reach GitHub right now.");
  return res.json();
}

/** Small inline button that steps through a list of options each click. */
function Cycle({ options, index, onChange }) {
  return (
    <button
      type="button"
      className="ix-cycle"
      onClick={() => onChange((index + 1) % options.length)}
      title="Click to change"
    >
      {options[index].label}
    </button>
  );
}

export default function RepoBrowser() {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(0);
  const [sort, setSort] = useState(0);
  const [closed, setClosed] = useState(() => new Set(repoGroups.map((g) => g.name)));

  useEffect(() => {
    // Cache is read here (not in useState) so the prerendered HTML matches first render.
    const cached = readCache();
    const load = cached
      ? Promise.resolve(cached)
      : fetchRepos().then((r) => {
          writeCache(r);
          return r;
        });
    let cancelled = false;
    load
      .then((r) => !cancelled && setRepos(r))
      .catch((e) => !cancelled && setError(e.message));
    return () => {
      cancelled = true;
    };
  }, []);

  const visibleRepos = useMemo(
    () =>
      (repos ?? [])
        .filter((r) => !HIDDEN.has(r.name.toLowerCase()))
        .map((r) => ({ ...r, group: GROUP_OF.get(r.name.toLowerCase()) ?? defaultRepoGroup })),
    [repos],
  );

  const q = query.trim().toLowerCase();
  const onlyGroup = SHOW[show].group;

  const chapters = useMemo(() => {
    const match = visibleRepos
      .filter((r) => !onlyGroup || r.group === onlyGroup)
      .filter(
        (r) =>
          !q ||
          r.name.toLowerCase().includes(q) ||
          (r.language ?? "").toLowerCase().includes(q) ||
          (r.description ?? "").toLowerCase().includes(q),
      )
      .sort(SORTS[sort].fn);
    return GROUPS.map((g, i) => ({
      ...g,
      numeral: NUMERALS[i],
      repos: match.filter((r) => r.group === g.name),
    })).filter((c) => c.repos.length > 0);
  }, [visibleRepos, onlyGroup, q, sort]);

  const toggle = (name) =>
    setClosed((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });

  return (
    <div className="ix">
      <div className="ix-bar">
        <p className="ix-sentence">
          Showing <Cycle options={SHOW} index={show} onChange={setShow} />, sorted by{" "}
          <Cycle options={SORTS} index={sort} onChange={setSort} />.
        </p>
        <label className="ix-find">
          <span>Find</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="a repo or language"
            aria-label="Search repositories"
          />
        </label>
      </div>

      {error && <p className="ix-note">{error}</p>}
      {!repos && !error && <p className="ix-note ix-loading">Pulling the list from GitHub…</p>}
      {repos && chapters.length === 0 && <p className="ix-note">Nothing matches “{query}”.</p>}

      {chapters.map((ch) => {
        const open = q !== "" || onlyGroup !== null || !closed.has(ch.name);
        const id = `ix-${ch.name.replace(/\W+/g, "-").toLowerCase()}`;
        return (
          <section className="ix-chapter" key={ch.name}>
            <button
              type="button"
              className="ix-chapter-head"
              aria-expanded={open}
              aria-controls={id}
              onClick={() => toggle(ch.name)}
            >
              <span className="ix-numeral">{ch.numeral}.</span>
              <span className="ix-chapter-name">{ch.name}</span>
              {ch.note && <span className="ix-chapter-note">{ch.note}</span>}
              <span className="ix-chapter-count">
                {ch.repos.length} {ch.repos.length === 1 ? "repo" : "repos"}
                <span className="ix-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
              </span>
            </button>

            {open && (
              <ol className="ix-list" id={id}>
                {ch.repos.map((r, i) => (
                  <li key={r.id} style={{ "--i": Math.min(i, 10) }}>
                    <a className="ix-row" href={r.html_url} target="_blank" rel="noreferrer">
                      <span className="ix-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="ix-name">
                        {r.name}
                        {r.description && <span className="ix-desc">{r.description}</span>}
                      </span>
                      <span className="ix-leader" aria-hidden="true" />
                      <span className="ix-lang">{r.language ?? "—"}</span>
                      <span className="ix-date">{monthYear(r.pushed_at)}</span>
                      <span className="ix-go" aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ol>
            )}
          </section>
        );
      })}

      <p className="ix-foot">
        Everything here is public at{" "}
        <a href={links.github} target="_blank" rel="noreferrer">
          github.com/{GITHUB_USER}
        </a>
        .
      </p>
    </div>
  );
}
