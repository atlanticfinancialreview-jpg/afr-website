const SITE = {
  name: "Atlantic Financial Review",
  short: "AFR",
  domain: "https://atlanticfinancialreview.com",
  description: "Independent financial perspectives for Nigerians at home and across the global diaspora."
};

const stories = [
  {
    slug: "send-money-to-nigeria",
    category: "DIASPORA FINANCE",
    title: "Sending money to Nigeria: what diaspora families should compare",
    summary: "Compare the exchange rate, transfer fee, delivery speed and payout method—not just the advertised fee.",
    date: "AFR Explainer",
    read: "5 min read",
    body: [
      ["Compare the amount received", "A transfer service can advertise a low fee while offering a less favourable exchange rate. Compare the final naira amount that the recipient will receive for the same amount sent."],
      ["Check the full cost", "Review the transfer fee, exchange-rate margin, payment method charges and any receiving-bank fees. The total cost matters more than one headline figure."],
      ["Confirm the payout method", "Check whether the recipient can receive funds into a bank account or supported wallet, and confirm the expected delivery time before paying."],
      ["Use regulated providers", "Check the provider's authorisation in the country where you are sending from. Keep the transaction receipt and use the provider's official support channel if a transfer is delayed."]
    ]
  },
  {
    slug: "understanding-naira-exchange-rates",
    category: "CURRENCY & MARKETS",
    title: "Understanding the different naira exchange rates",
    summary: "Why official reference rates, bank rates and retail transfer quotes may not be identical.",
    date: "AFR Explainer",
    read: "4 min read",
    body: [
      ["Not every rate measures the same thing", "An official reference rate, a bank's customer quote and a money-transfer provider's payout rate can differ because they serve different purposes and include different costs."],
      ["Look at the date and source", "Exchange rates move. Always check when a figure was published, which market it represents and whether it is a buying, selling or midpoint figure."],
      ["Compare the final transaction", "For remittances, compare the final amount received after fees. For business or investment decisions, use the rate and market definition relevant to the transaction."]
    ]
  },
  {
    slug: "diaspora-tax-and-financial-records",
    category: "TAX & PLANNING",
    title: "Cross-border money: financial records diaspora households should keep",
    summary: "A practical record-keeping checklist for people managing income, savings and family support across borders.",
    date: "AFR Explainer",
    read: "5 min read",
    body: [
      ["Keep a clear transfer trail", "Save receipts showing the date, amount, currency, provider, fees and recipient for significant transfers."],
      ["Separate personal and business records", "Where possible, keep business transactions separate from personal remittances and household support."],
      ["Check the rules that apply to you", "Tax residence and reporting obligations depend on individual circumstances and the laws of the countries involved. Seek advice from a qualified tax professional for personal decisions."]
    ]
  }
];

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[c]);
}

function shell(content, active = "Home", title = SITE.name, description = SITE.description, canonicalPath = "/") {
  const nav = [
    ["Home", "/"], ["Markets", "/markets"], ["Naira Rates", "/rates"],
    ["Diaspora", "/diaspora"], ["About", "/about"]
  ];
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#071a36">
<link rel="canonical" href="${SITE.domain}${canonicalPath}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<style>
:root{--navy:#071a36;--navy2:#102b52;--blue:#1769aa;--gold:#d7ad57;--ink:#152238;--muted:#637187;--line:#e5eaf0;--paper:#f5f7fa;--white:#fff}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-family:Arial,Helvetica,sans-serif;line-height:1.6}
a{color:inherit;text-decoration:none}.wrap{width:min(1160px,92%);margin:auto}
.topline{background:#041126;color:#d9e4f2;font-size:12px;padding:7px 0}.topline .wrap{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}
header{background:var(--navy);color:#fff;border-bottom:3px solid var(--gold)}.head{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:21px 0}
.brand{display:flex;align-items:center;gap:13px;min-width:0}.mark{width:54px;height:54px;border:2px solid var(--gold);border-radius:50%;display:grid;place-items:center;color:#fff;font-family:Georgia,serif;font-weight:bold;font-size:19px;flex:none}.brand-name{display:block;font:700 clamp(19px,3vw,27px)/1.12 Georgia,serif;letter-spacing:.2px}.brand-tag{display:block;font-size:10px;letter-spacing:2.3px;color:#b9cbe0;margin-top:6px}
nav{display:flex;align-items:center;gap:22px;flex-wrap:wrap}nav a{font-size:13px;font-weight:700;color:#e9eff7;padding:8px 0;border-bottom:2px solid transparent}nav a:hover,nav a.active{color:#f2cf82;border-color:var(--gold)}
.hero{background:linear-gradient(100deg,rgba(7,26,54,.94) 0%,rgba(7,26,54,.78) 52%,rgba(7,26,54,.45) 100%),url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80') center/cover no-repeat;color:#fff;padding:55px 0 48px;position:relative;overflow:hidden}.hero:after{content:"";position:absolute;width:440px;height:440px;border:1px solid rgba(215,173,87,.24);border-radius:50%;right:-140px;top:-210px;box-shadow:0 0 0 35px rgba(255,255,255,.025),0 0 0 75px rgba(255,255,255,.02)}
.eyebrow{color:var(--gold);font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase}.hero h1{font:700 clamp(32px,5.2vw,57px)/1.08 Georgia,serif;max-width:760px;margin:13px 0 16px}.hero p{max-width:670px;color:#d5e0ee;font-size:17px;margin:0}.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:25px}
.btn{display:inline-block;padding:12px 18px;border-radius:4px;font-size:13px;font-weight:bold;background:var(--gold);color:#10213a}.btn.secondary{border:1px solid #8fa6c3;color:#fff;background:transparent}
.ticker{background:#fff;border-bottom:1px solid var(--line);box-shadow:0 3px 12px rgba(7,26,54,.04)}.ticker-inner{display:flex;align-items:center;gap:22px;overflow:auto;white-space:nowrap;padding:12px 0;font-size:12px}.ticker-label{font-weight:bold;color:#9b762f;letter-spacing:1px}.ticker-item strong{color:var(--navy)}.ticker-item span{color:var(--muted)}
main{padding:35px 0 55px}.section-head{display:flex;justify-content:space-between;align-items:end;gap:15px;margin-bottom:18px}.section-head h2{font:700 27px Georgia,serif;color:var(--navy);margin:0}.section-head p{margin:4px 0 0;color:var(--muted);font-size:13px}.text-link{font-size:12px;font-weight:bold;color:var(--blue)}
.grid{display:grid;grid-template-columns:1.55fr 1fr;gap:22px}.lead{background:var(--navy);color:#fff;min-height:350px;padding:34px;display:flex;flex-direction:column;justify-content:end;position:relative;overflow:hidden;border-radius:7px}.lead:before{content:"AFR";position:absolute;right:20px;top:5px;font:700 150px Georgia,serif;color:rgba(255,255,255,.045)}.lead h2{font:700 clamp(27px,3.6vw,39px)/1.15 Georgia,serif;margin:12px 0}.lead p{color:#d3deec;max-width:570px;margin:0 0 18px}.tag{color:var(--gold);font-size:10px;font-weight:bold;letter-spacing:1.5px}.lead .text-link{color:#f4d58e}
.side-stories{display:grid;gap:14px}.story{background:#fff;border:1px solid var(--line);border-radius:7px;padding:20px}.story h3{font:700 19px/1.25 Georgia,serif;color:var(--navy);margin:8px 0}.story p{font-size:13px;color:var(--muted);margin:0 0 12px}.story .text-link{display:inline-block}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.feature{background:#fff;border:1px solid var(--line);padding:22px;border-radius:7px}.feature .icon{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:#f5eddd;color:#8a6728;font-weight:bold;margin-bottom:14px}.feature h3{font:700 18px Georgia,serif;color:var(--navy);margin:0 0 8px}.feature p{font-size:13px;color:var(--muted);margin:0}
.rate-panel{background:#fff;border:1px solid var(--line);border-radius:7px;padding:22px}.rate-head{display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap}.rate-head h2{font:700 24px Georgia,serif;color:var(--navy);margin:0}.rate-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:18px 0}.rate-box{background:#f6f8fb;border:1px solid var(--line);padding:17px;border-radius:5px}.rate-box small{color:var(--muted);font-weight:bold}.rate-box strong{display:block;font:700 24px Georgia,serif;color:var(--navy);margin-top:7px}.rate-note{font-size:11px;color:var(--muted);margin:8px 0 0}
.market-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:13px}.market{background:#fff;border:1px solid var(--line);border-radius:6px;padding:17px}.market b{display:block;color:var(--navy);font:700 17px Georgia,serif;margin-bottom:6px}.market span{font-size:12px;color:var(--muted)}
.article{background:#fff;border:1px solid var(--line);border-radius:7px;padding:clamp(22px,4vw,42px);max-width:850px;margin:auto}.article h1{font:700 clamp(30px,5vw,46px)/1.12 Georgia,serif;color:var(--navy);margin:10px 0 14px}.article .intro{font-size:18px;color:var(--muted)}.article h2{font:700 23px Georgia,serif;color:var(--navy);margin:27px 0 7px}.article p{color:#34445a}.article-meta{font-size:12px;color:var(--muted);margin-bottom:22px}
.page-title{background:var(--navy);color:#fff;padding:35px 0}.page-title h1{font:700 clamp(30px,4vw,44px) Georgia,serif;margin:7px 0}.page-title p{color:#d4dfec;max-width:720px;margin:0}
.notice{background:#fff8e9;border-left:4px solid var(--gold);padding:13px 16px;color:#5d4a28;font-size:12px;margin-top:15px}
footer{background:#041126;color:#d5dfeb;padding:34px 0 20px;border-top:3px solid var(--gold)}.foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:30px}.foot-grid h3{color:#fff;font:700 17px Georgia,serif}.foot-grid p,.foot-grid a{font-size:12px;color:#b9c7d8}.foot-links{display:grid;gap:8px}.copyright{border-top:1px solid #24344b;margin-top:25px;padding-top:16px;color:#8fa1b8;font-size:11px}
.mobile-menu{display:none}
@media(max-width:760px){.head{align-items:flex-start;flex-direction:column;gap:13px;padding:16px 0}.brand-name{font-size:19px}.brand-tag{font-size:9px;letter-spacing:1.7px;margin-top:5px}nav{gap:15px;width:100%;overflow-x:auto;flex-wrap:nowrap;padding-bottom:3px}nav a{white-space:nowrap;font-size:12px}.hero{padding:39px 0}.hero p{font-size:15px}.grid{grid-template-columns:1fr}.lead{min-height:300px;padding:25px}.cards{grid-template-columns:1fr}.rate-grid{grid-template-columns:repeat(2,1fr)}.market-grid{grid-template-columns:repeat(2,1fr)}.section-head{align-items:flex-start;flex-direction:column}.foot-grid{grid-template-columns:1fr;gap:12px}}
@media(max-width:380px){.rate-box strong{font-size:20px}.ticker-inner{gap:14px}}
</style>
</head>
<body>
<div class="topline"><div class="wrap"><span>INDEPENDENT FINANCIAL PERSPECTIVES</span><span>Markets · Investments · Economy · Diaspora</span></div></div>
<header><div class="wrap head">
<a class="brand" href="/" aria-label="Atlantic Financial Review home"><span class="mark">AFR</span><span><span class="brand-name">ATLANTIC FINANCIAL REVIEW</span><span class="brand-tag">GLOBAL FINANCE · AFRICAN PERSPECTIVES</span></span></a>
<nav aria-label="Main navigation">${nav.map(([label, href]) => `<a class="${active === label ? "active" : ""}" href="${href}">${label}</a>`).join("")}</nav>
</div></header>
${content}
<footer><div class="wrap"><div class="foot-grid">
<div><div class="brand"><span class="mark">AFR</span><span><span class="brand-name">ATLANTIC FINANCIAL REVIEW</span><span class="brand-tag">GLOBAL FINANCE · AFRICAN PERSPECTIVES</span></span></div><p>Independent financial perspectives and practical information for Nigerians at home and across the global diaspora.</p></div>
<div><h3>Explore</h3><div class="foot-links"><a href="/markets">Markets</a><a href="/rates">Naira exchange rates</a><a href="/diaspora">Diaspora finance</a></div></div>
<div><h3>About AFR</h3><div class="foot-links"><a href="/about">About us</a><a href="/about#disclaimer">Editorial disclaimer</a><a href="mailto:editor@atlanticfinancialreview.com">Contact the editor</a></div></div>
</div><div class="copyright">© ${new Date().getFullYear()} Atlantic Financial Review. Information is for general education and should not be treated as personal financial, investment or tax advice.</div></div></footer>
<script>
async function loadRates(){
 const box=document.getElementById("rate-values"); if(!box)return;
 try{
  const response=await fetch("/api/rates",{headers:{"Accept":"application/json"}});
  if(!response.ok)throw new Error("Rate service unavailable");
  const data=await response.json();
  if(!data.rates)throw new Error("No rate data");
  const names=[["USD","US dollar"],["GBP","British pound"],["EUR","Euro"],["CAD","Canadian dollar"]];
  box.innerHTML=names.map(([code,label])=>{const value=data.rates[code];const shown=value?"₦"+Number(value).toLocaleString("en-NG",{maximumFractionDigits:2}):"Unavailable";return '<div class="rate-box"><small>'+label+' ('+code+')</small><strong>'+shown+'</strong><small>per 1 '+code+'</small></div>'}).join("");
  const updated=document.getElementById("rate-updated");
  if(updated){const fetched=data.fetchedAt||data.updated;updated.textContent="Indicative mid-market reference · AFR checked "+new Date(fetched).toLocaleString()+(data.updated&&data.fetchedAt?" · Provider data timestamp "+new Date(data.updated).toLocaleString():"");}
 }catch(e){box.innerHTML='<div class="rate-box"><small>Currency data</small><strong>Temporarily unavailable</strong></div>';const updated=document.getElementById("rate-updated");if(updated)updated.textContent="Please check again shortly. No rate has been estimated."}
}
loadRates();
</script>
</body></html>`;
}

function rateSection() {
  return `<section class="rate-panel"><div class="rate-head"><div><div class="eyebrow">CURRENCY WATCH</div><h2>Indicative Naira exchange rates</h2></div><a class="text-link" href="/rates">VIEW RATE GUIDE →</a></div>
  <div id="rate-values" class="rate-grid"><div class="rate-box"><small>Currency data</small><strong>Loading…</strong></div></div>
  <p id="rate-updated" class="rate-note">Retrieving the latest available reference data…</p>
  <p class="rate-note">These are indicative mid-market conversions, not CBN, bank-counter or money-transfer provider quotes. Actual transaction rates and fees vary. Check the provider before sending money.</p></section>`;
}

function homePage() {
  const content = `<section class="hero"><div class="wrap"><div class="eyebrow">A GLOBAL VIEW. AN AFRICAN PERSPECTIVE.</div><h1>Financial insight for a world without borders.</h1><p>Independent perspectives on currencies, markets, investments and the financial decisions connecting Nigerians across the diaspora.</p><div class="hero-actions"><a class="btn" href="/rates">Check Naira Rates</a><a class="btn secondary" href="/diaspora">Explore Diaspora Finance</a></div></div></section>
  <div class="ticker"><div class="wrap ticker-inner"><span class="ticker-label">AFR COVERAGE</span><span class="ticker-item"><strong>NIGERIA</strong> <span>Currency · Economy</span></span><span class="ticker-item"><strong>UNITED STATES</strong> <span>Markets · Policy</span></span><span class="ticker-item"><strong>EUROPE</strong> <span>Banking · Economy</span></span><span class="ticker-item"><strong>ASIA</strong> <span>Markets · Trade</span></span></div></div>
  <main class="wrap">
  <div class="section-head"><div><h2>From the AFR desk</h2><p>Practical explainers for cross-border financial decisions.</p></div><a class="text-link" href="/diaspora">MORE ANALYSIS →</a></div>
  <div class="grid"><article class="lead"><span class="tag">FEATURED · DIASPORA FINANCE</span><h2>Make every transfer count: look beyond the headline exchange rate</h2><p>Fees, exchange-rate margins, delivery time and payout options all affect what reaches home. Here is what to compare before you send.</p><a class="text-link" href="/article/send-money-to-nigeria">READ THE AFR EXPLAINER →</a></article>
  <div class="side-stories">${stories.slice(1).map(s=>`<article class="story"><span class="tag">${s.category}</span><h3>${s.title}</h3><p>${s.summary}</p><a class="text-link" href="/article/${s.slug}">READ MORE →</a></article>`).join("")}</div></div>
  <section style="margin-top:36px">${rateSection()}</section>
  <section style="margin-top:38px"><div class="section-head"><div><h2>Four areas. One global perspective.</h2><p>Follow the financial themes shaping households, businesses and investors.</p></div></div><div class="cards">
  <a class="feature" href="/markets"><div class="icon">M</div><h3>Global markets</h3><p>Coverage of Nigeria, the United States, Europe and Asia, with context for long-term readers.</p></a>
  <a class="feature" href="/diaspora"><div class="icon">D</div><h3>Diaspora finance</h3><p>Remittances, banking, cross-border money management and financial planning.</p></a>
  <a class="feature" href="/rates"><div class="icon">₦</div><h3>Currency & economy</h3><p>Naira reference rates, currency explainers and economic developments.</p></a>
  </div></section></main>`;
  return shell(content, "Home");
}

function ratesPage() {
  const content = `<section class="page-title"><div class="wrap"><div class="eyebrow">CURRENCY & ECONOMY</div><h1>Naira exchange-rate monitor</h1><p>Indicative currency conversions for readers managing money between Nigeria and international markets.</p></div></section>
  <main class="wrap"><div style="max-width:900px;margin:auto">${rateSection()}<div class="article" style="margin-top:20px"><h2>How to use these figures</h2><p>The figures above are indicative mid-market conversions retrieved from a public currency-data service. They are useful as a general reference, but they are not an official Central Bank of Nigeria quotation and are not guaranteed transaction rates.</p><h2>Before you transfer</h2><p>Compare the final amount the recipient will receive, including the provider's exchange-rate margin and all fees. A bank, money-transfer company and card provider may each quote a different rate.</p><h2>Official reference points</h2><p>For official Nigerian monetary-policy information, consult the <a class="text-link" href="https://www.cbn.gov.ng/" target="_blank" rel="noopener">Central Bank of Nigeria</a>. Always confirm the applicable rate directly with your bank or regulated transfer provider.</p><div class="notice">AFR does not execute currency trades or money transfers. Rates are informational and may be delayed or unavailable.</div></div></div></main>`;
  return shell(content, "Naira Rates", "Naira Exchange Rates | Atlantic Financial Review", "Indicative Naira exchange-rate conversions and practical guidance for diaspora transfers.", "/rates");
}

function marketsPage() {
  const content = `<section class="page-title"><div class="wrap"><div class="eyebrow">GLOBAL MARKETS</div><h1>Markets beyond borders</h1><p>Financial-market coverage and economic context across the regions that matter to globally connected Nigerian readers.</p></div></section>
  <main class="wrap"><div class="market-grid">
  <div class="market"><b>Nigeria</b><span>NGX, banking, monetary policy, energy and the wider economy.</span></div>
  <div class="market"><b>United States</b><span>US equities, Federal Reserve policy, Treasury markets and the dollar.</span></div>
  <div class="market"><b>Europe</b><span>European markets, ECB policy, banking and cross-border regulation.</span></div>
  <div class="market"><b>Asia</b><span>Asian equities, trade, currencies and regional economic developments.</span></div>
  </div><div class="article" style="margin-top:22px"><h2>Our market coverage</h2><p>AFR explains market movements and economic developments in context. This page is a guide to our coverage areas; it does not display live stock prices or investment recommendations.</p><h2>Primary information sources</h2><p>Readers can consult official market and policy sources, including the <a class="text-link" href="https://ngxgroup.com/" target="_blank" rel="noopener">Nigerian Exchange Group</a>, <a class="text-link" href="https://www.sec.gov/" target="_blank" rel="noopener">US Securities and Exchange Commission</a>, <a class="text-link" href="https://www.federalreserve.gov/" target="_blank" rel="noopener">Federal Reserve</a>, <a class="text-link" href="https://www.ecb.europa.eu/" target="_blank" rel="noopener">European Central Bank</a> and <a class="text-link" href="https://www.nasdaq.com/" target="_blank" rel="noopener">Nasdaq</a>.</p></div></main>`;
  return shell(content, "Markets", "Global Markets | Atlantic Financial Review", "Financial-market coverage across Nigeria, the United States, Europe and Asia.", "/markets");
}

function diasporaPage() {
  const content = `<section class="page-title"><div class="wrap"><div class="eyebrow">DIASPORA FINANCE</div><h1>Managing money across borders</h1><p>Useful financial information for Nigerians living, working, investing and supporting family across countries.</p></div></section>
  <main class="wrap"><div class="cards">
  <a class="feature" href="/article/send-money-to-nigeria"><div class="icon">↗</div><h3>Remittances</h3><p>Compare transfer costs, exchange rates, payout methods and delivery times.</p></a>
  <a class="feature" href="/article/diaspora-tax-and-financial-records"><div class="icon">£</div><h3>Tax & records</h3><p>Understand record keeping and the importance of checking cross-border tax rules.</p></a>
  <a class="feature" href="/rates"><div class="icon">₦</div><h3>Currency decisions</h3><p>Follow indicative rates and understand what different exchange-rate quotes mean.</p></a>
  </div><div style="margin-top:30px"><div class="section-head"><div><h2>Practical AFR explainers</h2><p>Start with these guides.</p></div></div><div class="side-stories">${stories.map(s=>`<article class="story"><span class="tag">${s.category}</span><h3>${s.title}</h3><p>${s.summary}</p><a class="text-link" href="/article/${s.slug}">READ ARTICLE →</a></article>`).join("")}</div></div></main>`;
  return shell(content, "Diaspora", "Diaspora Finance | Atlantic Financial Review", "Remittances, banking, tax and cross-border financial planning for the Nigerian diaspora.", "/diaspora");
}

function articlePage(story) {
  const content = `<section class="page-title"><div class="wrap"><div class="eyebrow">AFR KNOWLEDGE DESK</div><p>Independent explainers for informed financial decisions.</p></div></section>
  <main class="wrap"><article class="article"><div class="tag">${story.category}</div><h1>${esc(story.title)}</h1><p class="intro">${esc(story.summary)}</p><div class="article-meta">${story.date} · ${story.read}</div>${story.body.map(([h,p])=>`<h2>${esc(h)}</h2><p>${esc(p)}</p>`).join("")}<div class="notice">This article is general information, not individual financial, legal or tax advice. Check current rules and consult a qualified professional where necessary.</div><p style="margin-top:25px"><a class="text-link" href="/diaspora">← BACK TO DIASPORA FINANCE</a></p></article></main>`;
  return shell(content, "Diaspora", story.title + " | Atlantic Financial Review", story.summary, "/article/" + story.slug);
}

function aboutPage() {
  const content = `<section class="page-title"><div class="wrap"><div class="eyebrow">ABOUT AFR</div><h1>Independent perspectives. Global relevance.</h1><p>Atlantic Financial Review connects financial developments in Nigeria and international markets to the decisions facing globally connected readers.</p></div></section>
  <main class="wrap"><div class="article"><h2>Our focus</h2><p>AFR covers markets, investments, the economy, business and diaspora finance, with particular attention to the financial links between Nigeria and the wider world.</p><h2>Our approach</h2><p>We aim to make financial information clear, useful and grounded in identifiable sources. Where figures are indicative, estimates or subject to change, we aim to say so.</p><h2 id="disclaimer">Editorial disclaimer</h2><p>Content on this website is for general information and education. It is not personal financial, investment, legal or tax advice. Market data and exchange rates can change and may be delayed. Readers should verify important information with the relevant official institution or regulated provider before making decisions.</p><h2>Contact</h2><p>Editorial enquiries: <a class="text-link" href="mailto:editor@atlanticfinancialreview.com">editor@atlanticfinancialreview.com</a></p></div></main>`;
  return shell(content, "About", "About Atlantic Financial Review", "About AFR's independent global financial coverage and editorial approach.", "/about");
}

async function getRates() {
  const upstream = await fetch("https://open.er-api.com/v6/latest/USD", {
    headers: { "Accept": "application/json" },
    cf: { cacheTtl: 900, cacheEverything: true }
  });
  if (!upstream.ok) throw new Error("Currency service error");
  const data = await upstream.json();
  if (data.result !== "success" || !data.rates || !data.rates.NGN) throw new Error("Currency data unavailable");
  const ngn = Number(data.rates.NGN);
  const rates = {};
  for (const code of ["USD", "GBP", "EUR", "CAD"]) {
    const perUsd = Number(data.rates[code]);
    rates[code] = code === "USD" ? ngn : (perUsd > 0 ? ngn / perUsd : null);
  }
  return {
    base: "USD",
    quote: "NGN",
    rates,
    updated: data.time_last_update_utc || new Date().toISOString(),
    source: "ExchangeRate-API open endpoint",
    type: "indicative-mid-market"
  };
}

async function refreshAndStoreRates(env) {
  const data = await getRates();
  if (env.AFR_DATA) {
    const payload = { ...data, fetchedAt: new Date().toISOString() };
    await env.AFR_DATA.put("rates:latest", JSON.stringify(payload));
    const day = new Date().toISOString().slice(0, 10);
    await env.AFR_DATA.put(`rates:${day}`, JSON.stringify(payload), { expirationTtl: 60 * 60 * 24 * 400 });
    return payload;
  }
  return data;
}

export default {
  // Cloudflare Cron Trigger: 0 7 * * * (07:00 UTC = 08:00 Lagos time).
  async scheduled(controller, env, ctx) {
    ctx.waitUntil(refreshAndStoreRates(env));
  },

  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname).replace(/\/+$/, "") || "/";

    if (path === "/robots.txt") {
      return new Response("User-agent: *\nAllow: /\nSitemap: " + SITE.domain + "/sitemap.xml\n", {
        headers: { "content-type": "text/plain; charset=utf-8" }
      });
    }

    if (path === "/sitemap.xml") {
      const urls = ["/", "/rates", "/markets", "/diaspora", "/about", ...stories.map(s => "/article/" + s.slug)];
      const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(p => `<url><loc>${SITE.domain}${p}</loc></url>`).join("")}</urlset>`;
      return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8" } });
    }

    if (path === "/api/rates") {
      try {
        let data = null;
        if (env.AFR_DATA) {
          const saved = await env.AFR_DATA.get("rates:latest");
          if (saved) data = JSON.parse(saved);
        }
        // First-visit fallback: populate KV if the scheduled job has not run yet.
        if (!data) data = await refreshAndStoreRates(env);
        return Response.json(data, {
          headers: { "Cache-Control": "public, max-age=900", "Access-Control-Allow-Origin": "*" }
        });
      } catch (error) {
        return Response.json({ error: "Currency data is temporarily unavailable." }, {
          status: 503,
          headers: { "Cache-Control": "no-store", "Access-Control-Allow-Origin": "*" }
        });
      }
    }

    let html;
    if (path === "/") html = homePage();
    else if (path === "/rates") html = ratesPage();
    else if (path === "/markets") html = marketsPage();
    else if (path === "/diaspora") html = diasporaPage();
    else if (path === "/about") html = aboutPage();
    else if (path.startsWith("/article/")) {
      const slug = path.slice("/article/".length);
      const story = stories.find(s => s.slug === slug);
      html = story ? articlePage(story) : shell(`<main class="wrap"><div class="article"><h1>Article not found</h1><p>The page may have moved.</p><a class="text-link" href="/">RETURN HOME →</a></div></main>`);
    } else {
      html = shell(`<main class="wrap"><div class="article"><h1>Page not found</h1><p>The page you requested could not be found.</p><a class="text-link" href="/">RETURN HOME →</a></div></main>`);
    }

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      }
    });
  }
};
