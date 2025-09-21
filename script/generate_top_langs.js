/**
 * Simple script to compute account-wide top languages and write a small SVG.
 * - Requires node and @octokit/rest (installed via package.json)
 * - Reads GITHUB_TOKEN from env
 *
 * Notes:
 * - Aggregates bytes from repo languages API
 * - Skips forks and archived repos
 * - Outputs output/top-langs.svg (creates output/ if missing)
 */

const fs = require('fs');
const path = require('path');
const { Octokit } = require('@octokit/rest');

const TOKEN = process.env.GITHUB_TOKEN;
const USER = process.env.GITHUB_USER || 'KunjShah95';
if (!TOKEN) {
  console.error('GITHUB_TOKEN is required in env');
  process.exit(1);
}

const octokit = new Octokit({ auth: TOKEN });

async function listAllRepos(username) {
  const repos = [];
  for await (const response of octokit.paginate.iterator(octokit.rest.repos.listForUser, {
    username,
    per_page: 100,
  })) {
    repos.push(...response.data);
  }
  return repos;
}

async function getOrgRepos(username) {
  // In case you have org repos owned by a user, include repositories you own as well.
  // For simplicity, we focus on user repos here (listForUser).
  return [];
}

async function aggregateLanguages(repos, owner) {
  const totals = {};
  for (const repo of repos) {
    try {
      if (repo.fork || repo.archived) continue;
      const res = await octokit.rest.repos.listLanguages({
        owner,
        repo: repo.name,
      });
      const langs = res.data;
      for (const [lang, bytes] of Object.entries(langs)) {
        totals[lang] = (totals[lang] || 0) + bytes;
      }
    } catch (err) {
      console.warn(`Skipping ${repo.name}: ${err.message}`);
    }
  }
  return totals;
}

function topNFromTotals(totals, n = 8) {
  const arr = Object.entries(totals);
  arr.sort((a, b) => b[1] - a[1]);
  const totalBytes = arr.reduce((s, [, b]) => s + b, 0) || 1;
  return arr.slice(0, n).map(([lang, bytes]) => ({
    lang,
    bytes,
    pct: Math.round((bytes / totalBytes) * 1000) / 10, // 1 decimal
  }));
}

function generateSimpleSVG(items, outPath) {
  const width = 600;
  const lineHeight = 28;
  const height = 40 + items.length * lineHeight;
  const colors = [
    '#f34b7d','#3572A5','#E34C26','#4F5D95','#2b7489','#cbcb41',
    '#1f8ceb','#f1e05a','#b07219','#198844'
  ];

  const rows = items.map((it, i) => {
    const barWidth = Math.round((it.pct / 100) * (width - 220));
    const color = colors[i % colors.length];
    return `
      <g transform="translate(20, ${50 + i * lineHeight})">
        <text x="0" y="14" font-size="13" fill="#000">${it.lang}</text>
        <rect x="120" y="2" rx="4" ry="4" width="${barWidth}" height="16" fill="${color}" />
        <text x="${120 + Math.max(barWidth, 8) + 8}" y="14" font-size="12" fill="#333">${it.pct}%</text>
      </g>
    `;
  }).join('\n');

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <style>
      .title { font: 700 16px 'Segoe UI', Roboto, Helvetica, Arial; }
    </style>
    <rect width="100%" height="100%" fill="#fff" rx="8"/>
    <text x="20" y="28" class="title">Top languages — ${new Date().toISOString().slice(0,10)}</text>
    ${rows}
  </svg>
  `.trim();

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, svg, 'utf8');
  console.log(`Wrote ${outPath}`);
}

(async () => {
  try {
    console.log(`Listing repos for ${USER}...`);
    const repos = await listAllRepos(USER);
    console.log(`Found ${repos.length} repos (user). Aggregating languages...`);
    const totals = await aggregateLanguages(repos, USER);
    const top = topNFromTotals(totals, 8);
    generateSimpleSVG(top, path.join(process.cwd(), 'output', 'top-langs.svg'));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
