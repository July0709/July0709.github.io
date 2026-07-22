// Generate RSS 2.0 feed (feed.xml) from assets/js/blog-data.js
// Usage: node scripts/generate-feed.js
// 新增文章后运行一次本脚本，再提交 feed.xml 即可。

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const SITE_URL = "https://july0709.github.io";
const FEED_TITLE = "July 的博客";
const FEED_TITLE_EN = "July's Blog";
const FEED_DESCRIPTION = "关于医学、科研与生活的思考";
const FEED_LINK = `${SITE_URL}/blog.html`;
const OUTPUT = path.join(ROOT, "feed.xml");

// ── Load blogPosts from blog-data.js (it declares `var blogPosts`) ──
const dataFile = path.join(ROOT, "assets", "js", "blog-data.js");
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(dataFile, "utf8"), sandbox);
const posts = (sandbox.blogPosts || []).slice();

if (posts.length === 0) {
  console.error("No posts found in assets/js/blog-data.js");
  process.exit(1);
}

// Newest first
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// ── XML helpers ──
function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Wrap in CDATA, guarding against "]]>" inside content
function cdata(s) {
  return "<![CDATA[" + String(s).replace(/]]>/g, "]]]]><![CDATA[>") + "]]>";
}

function toRfc822(dateStr) {
  // "YYYY-MM-DD" → RFC-822 (use 08:00 UTC+8 so it stays the same calendar day in CN)
  return new Date(`${dateStr}T08:00:00+08:00`).toUTCString();
}

// ── Build items ──
const items = posts
  .map((p) => {
    const link = `${SITE_URL}/blog-post.html?id=${p.id}`;
    const imageUrl = `${SITE_URL}/${p.image}`;
    const content = (p.content || "").trim();
    const contentEn = (p.contentEn || "").trim();
    return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${toRfc822(p.date)}</pubDate>
      <author>${escapeXml(p.author)}</author>
      <category>${escapeXml(p.category)}</category>
      <description>${escapeXml(p.excerpt)}</description>
      <content:encoded>${cdata(
        `<img src="${imageUrl}" alt="${escapeXml(p.title)}" />\n` +
          content +
          (contentEn ? `\n<hr />\n${contentEn}` : "")
      )}</content:encoded>
    </item>`;
  })
  .join("\n");

const lastBuild = new Date().toUTCString();
const latestPost = toRfc822(posts[0].date);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${FEED_LINK}</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>zh-cn</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <pubDate>${latestPost}</pubDate>
    <generator>scripts/generate-feed.js</generator>
${items}
  </channel>
</rss>
`;

fs.writeFileSync(OUTPUT, xml, "utf8");
console.log(`✔ feed.xml generated with ${posts.length} posts → ${OUTPUT}`);
console.log(`  Subscribe URL: ${SITE_URL}/feed.xml`);
