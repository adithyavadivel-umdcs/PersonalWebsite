// Build-time prerender: turns the client build in dist/ into one real HTML file per
// page, so search engines and link previews see full content without running JS.
//
//   dist/index.html            -> "/"
//   dist/<page>.html           -> "/<page>"  (uploaded to S3 under the key "<page>")
//
// Run after `vite build` and `vite build --ssr src/entry-server.jsx --outDir dist-server`.
import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverDir = path.join(root, "dist-server");

const { render, headTags, pageMeta } = await import(
  pathToFileURL(path.join(serverDir, "entry-server.js")).href
);

const template = await readFile(path.join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->")) {
  throw new Error("dist/index.html is missing the <!--app-head--> / <!--app-html--> placeholders");
}

for (const route of Object.keys(pageMeta)) {
  const html = template
    .replace("<!--app-head-->", headTags(route))
    .replace("<!--app-html-->", render(route));
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  await writeFile(path.join(dist, file), html);
  console.log(`prerendered ${route.padEnd(10)} -> dist/${file}`);
}

await rm(serverDir, { recursive: true, force: true });
