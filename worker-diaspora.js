const SOURCE = "https://raw.githubusercontent.com/atlanticfinancialreview-jpg/afr-website/main/content/diaspora-finance-series-10-articles.md";
const BRAND = "Atlantic Financial Review";

function esc(s) {
  return s.replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
}
function inline(s) {
  return esc(s)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}
function markdown(s) {
  const lines = s.split(/\r?\n/);
  const out = [];
  let paragraph = [];
  let list = false;
  const flush = () => {
    if (paragraph.length) { out.push("<p>" + inline(paragraph.join(" ")) + "</p>"); paragraph = []; }
  };
  const closeList = () => { if (list) { out.push("</ul>"); list = false; } };
  for (const line of lines) {
    if (!line.trim() || /^---+$/.test(line.trim())) { flush(); closeList(); continue; }
    if (/^#{1,6}\s/.test(line)) {
      flush(); closeList();
      const n = line.match(/^#+/)[0].length;
      out.push("<h" + Math.min(n, 3) + ">" + inline(line.replace(/^#{1,6}\s+/, "")) + "</h" + Math.min(n, 3) + ">");
    } else if (/^[-*]\s/.test(line)) {
      flush(); if (!list) { out.push("<ul>"); list = true; }
      out.push("<li>" + inline(line.replace(/^[-*]\s+/, "")) + "</li>");
    } else {
      closeList(); paragraph.push(line.trim());
    }
  }
  flush(); closeList();
  return out.join("\n");
}
function extractArticles(md) {
  const chunks = md.split(/(?=^# \d+\. )/m).filter(x => /^# \d+\. /m.test(x));
  return chunks.map((chunk, i) => {
    const title = (chunk.match(/^# \d+\. (.+)$/m) || [,"AFR Feature"])[1].trim();
    const desc = (chunk.match(/^\*\*SEO description:\*\* (.+)$/m) || [,"A global finance feature from Atlantic Financial Review."])[1].trim();
    const body = chunk.replace(/^# \d+\. .*\n/, "").replace(/^\*\*SEO description:\*\* .*\n\n?/, "");
    return { id: i + 1, title, desc, body };
  });
}
function page(title, description, body) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${esc(description)}"><title>${esc(title)} | ${BRAND}</title><style>
:root{color-scheme:light}*{box-sizing:border-box}body{margin:0;background:#f5f7fa;color:#172334;font:17px/1.75 Georgia,serif}.top{background:#102b46;color:white;padding:22px max(22px,calc((100% - 900px)/2));font:700 20px Arial,sans-serif}.top a{color:white;text-decoration:none}.wrap{max-width:900px;margin:38px auto;padding:0 22px}.article{background:white;padding:clamp(24px,5vw,58px);border:1px solid #e4e9ef;border-radius:12px}h1,h2,h3{font-family:Arial,sans-serif;line-height:1.25;color:#102b46}h1{font-size:clamp(30px,5vw,44px)}h2{margin-top:36px;font-size:25px}h3{font-size:20px}p{margin:0 0 20px}a{color:#1769aa}.dek{font:18px/1.5 Arial,sans-serif;color:#526477}.back{font:14px Arial,sans-serif;margin-bottom:18px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px}.item{background:white;padding:22px;border:1px solid #e4e9ef;border-radius:10px}.item h2{font-size:20px;margin:0 0 10px}.item p{font:15px/1.55 Arial,sans-serif;color:#526477}.item a{font:700 14px Arial,sans-serif;text-decoration:none}.foot{font:13px Arial,sans-serif;color:#667;margin:28px 0}.notice{background:#f0f4f8;padding:14px 18px;border-radius:8px;font:13px/1.5 Arial,sans-serif;color:#526477;margin-top:30px}
</style></head><body><header class="top"><a href="/">ATLANTIC FINANCIAL REVIEW</a></header><main class="wrap">${body}</main></body></html>`;
}
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    try {
      const response = await fetch(SOURCE, { cf: { cacheTtl: 300, cacheEverything: true } });
      if (!response.ok) return new Response("Editorial content is temporarily unavailable.", { status: 502 });
      const md = await response.text();
      const articles = extractArticles(md);
      const match = url.pathname.match(/^\/(?:diaspora\/)?(\d+)\/?$/);
      if (match) {
        const article = articles.find(a => a.id === Number(match[1]));
        if (!article) return new Response("Article not found", { status: 404 });
        const body = '<p class="back"><a href="/diaspora/">← All diaspora features</a></p><article class="article"><h1>' + esc(article.title) + '</h1><p class="dek">' + esc(article.desc) + '</p>' + markdown(article.body) + '<div class="notice">This feature is general financial information, not personal investment, legal or tax advice. Verify current rules and seek qualified advice for your circumstances.</div></article>';
        return new Response(page(article.title, article.desc, body), { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" } });
      }
      const cards = articles.map(a => '<section class="item"><h2>' + esc(a.title) + '</h2><p>' + esc(a.desc) + '</p><a href="/diaspora/' + a.id + '/">READ FEATURE →</a></section>').join("");
      const body = '<article class="article"><p class="back">AFR SPECIAL SERIES</p><h1>African Diaspora Finance</h1><p class="dek">Ten practical features on remittances, cross-border wealth, property, retirement, currency, entrepreneurship and estate planning.</p><div class="grid">' + cards + '</div><div class="notice">General financial education only. This series is not personal investment, legal or tax advice. Statistics, legislation and tax guidance should be checked against current official sources before publication.</div></article>';
      return new Response(page("African Diaspora Finance", "Ten practical features for African diaspora readers.", body), { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" } });
    } catch (e) {
      return new Response("AFR Diaspora publisher error. Please try again later.", { status: 500 });
    }
  }
};