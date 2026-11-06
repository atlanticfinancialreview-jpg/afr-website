const SITE = {
  name: "Atlantic Financial Review",
  short: "AFR",
  domain: "https://atlanticfinancialreview.com",
  description: "Independent financial perspectives for Nigerians at home and across the global diaspora."
};

const stories = [
  {
    slug: "send-money-to-nigeria",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Person reviewing an international money transfer on a laptop",
    category: "DIASPORA FINANCE",
    title: "Sending money to Nigeria: what diaspora families should compare",
    summary: "A practical guide to comparing exchange rates, transfer fees, delivery times and payout options before sending money home.",
    date: "Updated 6 November 2026",
    read: "6 min read",
    body: [
      ["Start with the amount that arrives", "When sending money to Nigeria, the most useful comparison is not the advertised fee or the headline exchange rate on its own. It is the final amount the recipient is expected to receive. Two providers may quote the same transfer fee but deliver different naira amounts because their exchange-rate margins differ. Before confirming a transaction, enter the same sending amount with each provider and compare the recipient payout, using the same payment method and delivery option."],
      ["Understand the full cost", "A transfer can involve several costs: a stated service fee, a margin built into the exchange rate, a card or bank-payment charge, and sometimes a receiving charge. Some providers advertise zero fees but use a less favourable rate. Others charge a visible fee while offering a more competitive rate. Compare the total cost in the currency you are sending and the net amount arriving in Nigeria. Check whether the quote changes when you pay by debit card, credit card, bank transfer or another method."],
      ["Check delivery time and payout method", "A low-cost transfer is not necessarily suitable when a family member needs funds urgently. Check the estimated delivery time and whether the recipient can receive the money into the intended Nigerian bank account or supported wallet. Confirm that the recipient's name and account details match their bank records. Weekend, public-holiday, compliance or bank-processing delays may affect when funds become available. Do not assume that an instant quote means instant access to the money."],
      ["Use a provider you can verify", "Before sending, check that the provider is authorised to offer the service in the country from which you are paying. Use its official website or app, read the terms for cancellations and refunds, and understand what identification may be required. Be cautious of unsolicited messages, unofficial agents and requests to pay into a personal account. Never share passwords, one-time codes or banking credentials with someone claiming to help process a transfer."],
      ["Keep records and plan regular support", "Save the transaction receipt and note the date, amount sent, exchange rate, fees, recipient and reference number. These records help resolve a delayed or disputed transfer and make it easier to understand the cost of regular family support. If you send money monthly, compare providers periodically rather than assuming the one that was cheapest last time remains cheapest. Consider agreeing with family on a realistic schedule and keeping emergency support separate from routine transfers."],
      ["A simple checklist before you press send", "Compare the final naira payout for the same amount; check every fee and the exchange-rate margin; confirm the delivery estimate and payout method; verify the provider through official channels; double-check the recipient details; and save the receipt. Exchange rates and provider terms change, so use the live quote shown at the point of transaction. AFR's indicative currency references are for general information and are not guaranteed transfer quotes."],
      ["The key takeaway", "The best transfer is the one that safely delivers the amount your recipient needs at a fair total cost and within a suitable time. Looking beyond the headline rate helps diaspora households make more informed decisions and avoid preventable surprises."]
    ]
  },
  {
    slug: "understanding-naira-exchange-rates",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Financial market charts displayed on a trading screen",
    category: "CURRENCY & MARKETS",
    title: "Understanding the different naira exchange rates",
    summary: "Why official reference rates, bank quotes and money-transfer rates differ—and how to read each figure correctly.",
    date: "Updated 6 November 2026",
    read: "6 min read",
    body: [
      ["One currency, several different quotes", "People often speak about the naira exchange rate as if there is only one number. In practice, the figure depends on the market, transaction and source being discussed. An official reference or market benchmark, a commercial bank's customer quote, a card-network conversion and a money-transfer provider's payout rate may all be different. These figures are not automatically contradictory: they may describe different transactions and include different costs."],
      ["What an official reference rate tells you", "The Central Bank of Nigeria publishes information about the official foreign-exchange market and its framework. A published reference figure is useful for understanding the official market context, but it should not be mistaken for a guaranteed rate available to every individual or business. The date, market segment, calculation method and whether the figure is a buying, selling or weighted reference all matter. Readers should consult the relevant CBN publication for the definition attached to a particular figure."],
      ["Why bank and transfer-provider rates differ", "A bank or remittance company quotes a rate for a particular service. Its price may reflect the rate at which it obtains currency, operating costs, liquidity, payment method, risk and commercial margin. A provider may also charge a separate fee. For someone sending money from the United States, United Kingdom, Canada or Europe, the most relevant number is often the final naira amount delivered after all charges—not a market headline viewed in isolation."],
      ["Buying, selling and mid-market rates", "A buying rate is the price at which a provider buys a currency; a selling rate is the price at which it sells. The mid-market rate is generally the midpoint between the two sides of a market quote and is often used by currency-data services as an indicative conversion reference. It is not necessarily a rate a consumer can transact at. A public currency converter can therefore be useful for orientation while still differing from the amount a bank or transfer provider will actually offer."],
      ["Check the timestamp and source", "A rate without a date and source is incomplete information. Check when the figure was published, when the underlying provider last updated its data, and when AFR retrieved it. Those timestamps can be different. A page checked this morning may still be displaying an upstream data point last updated earlier. Also check whether the source reports a live quote, a daily close, a weighted average or an indicative midpoint. Avoid comparing a current retail quote with an older official reference as if both were captured at the same time."],
      ["A practical way to compare rates", "For a remittance, enter the same sending amount and payment method on two or more regulated providers and compare the final payout and delivery time. For a business invoice, ask the bank or authorised dealer which rate and charges will apply to the actual transaction. For general reading, use official publications for official-market context and label indicative data clearly. Keep a record of the source and timestamp when a figure is important to a decision."],
      ["The AFR distinction", "AFR's public currency figures are labelled as indicative mid-market references. They are not CBN quotations, bank-counter offers or guaranteed remittance rates. The distinction matters: a transparent label helps readers understand what a number can—and cannot—tell them. Always confirm the rate and total charges directly with the institution or regulated provider handling your transaction."]
    ]
  },
  {
    slug: "diaspora-tax-and-financial-records",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Organised financial paperwork and calculator on a desk",
    category: "TAX & PLANNING",
    title: "Cross-border money: financial records diaspora households should keep",
    summary: "A practical record-keeping guide for Nigerians abroad who earn, save, invest or support family across borders.",
    date: "Updated 6 November 2026",
    read: "6 min read",
    body: [
      ["Why good records matter", "Living in one country while supporting family, holding assets or earning income in another can create a complicated financial picture. Clear records make it easier to understand where money came from, where it went and what a transaction was for. They can also help answer questions from a bank, accountant or tax authority. Keeping records does not by itself determine whether tax is due, but it gives you and a qualified adviser a more reliable starting point."],
      ["Keep a transfer trail", "For significant international transfers, save the confirmation or receipt showing the date, amount, sending currency, exchange rate if supplied, fees, recipient and transaction reference. Keep evidence of the purpose where appropriate—for example, household support, education costs, medical bills, savings or a business payment. If a transfer is split into several payments, retain the records for each one rather than relying on a message thread or memory."],
      ["Separate personal, family and business money", "Where practical, use separate accounts or clearly labelled records for personal spending, family support, rental income and business transactions. Mixing all activity in one account can make it harder to explain a payment later. If you operate a business, keep invoices, contracts, receipts and statements together. Do not describe a business payment as family support, or the reverse, merely because one label seems more convenient."],
      ["Record income and assets in each country", "Keep payslips, employment statements, business income records, bank and investment statements, property documents and evidence of major purchases or sales. Note the currency and date for each amount. If you convert figures for a report or tax return, record the exchange-rate source and method used. This is particularly useful when income or assets are denominated in different currencies or when a transaction spans more than one tax year."],
      ["Tax residence is not simply citizenship", "Tax obligations can depend on residence tests, the source and type of income, the location of assets and the domestic rules of the countries involved. Citizenship alone does not answer every tax question. A person may need to consider reporting duties in more than one jurisdiction, while a tax treaty or local exemption may affect the outcome. Rules differ and change; do not rely on a general online article to decide your own filing position. Seek advice from a qualified tax professional familiar with the relevant countries."],
      ["Protect sensitive financial information", "Store statements and receipts securely, use strong unique passwords and enable multi-factor authentication where available. Avoid sending full account details or identity documents through unverified channels. Keep only the records you need, but retain important documents for the period required by the relevant law or adviser. If you are unsure how long to keep a document, ask a qualified professional before discarding it."],
      ["Build a simple monthly routine", "Once a month, download bank and provider statements, save transfer receipts, label major transactions and reconcile balances. Keep a separate folder for tax documents and another for property or business records. A modest routine is easier to maintain than trying to reconstruct several years of activity when a deadline or query arrives."],
      ["The key takeaway", "Cross-border finances become easier to manage when records are accurate, organised and secure. Keep evidence of significant transfers and income, separate different types of activity, and get professional advice on the rules that apply to your own circumstances. This article is general information, not personal legal or tax advice."]
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
.article-hero{width:100%;height:auto;max-height:390px;object-fit:cover;border-radius:6px;margin:18px 0 22px;display:block}.article{background:#fff;border:1px solid var(--line);border-radius:7px;padding:clamp(22px,4vw,42px);max-width:850px;margin:auto}.article h1{font:700 clamp(30px,5vw,46px)/1.12 Georgia,serif;color:var(--navy);margin:10px 0 14px}.article .intro{font-size:18px;color:var(--muted)}.article h2{font:700 23px Georgia,serif;color:var(--navy);margin:27px 0 7px}.article p{color:#34445a}.article-meta{font-size:12px;color:var(--muted);margin-bottom:22px}
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
  <main class="wrap"><article class="article"><div class="tag">${story.category}</div><h1>${esc(story.title)}</h1><p class="intro">${esc(story.summary)}</p><div class="article-meta">${story.date} · ${story.read}</div><img class="article-hero" src="${esc(story.image)}" alt="${esc(story.imageAlt)}" loading="lazy" decoding="async">${story.body.map(([h,p])=>`<h2>${esc(h)}</h2><p>${esc(p)}</p>`).join("")}<div class="notice">This article is general information, not individual financial, legal or tax advice. Check current rules and consult a qualified professional where necessary.</div><p style="margin-top:25px"><a class="text-link" href="/diaspora">← BACK TO DIASPORA FINANCE</a></p></article></main>`;
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
