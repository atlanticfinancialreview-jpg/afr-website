const BRAND = "Atlantic Financial Review";
const KV = "AFR_DATA";
const FX_API = "https://open.er-api.com/v6/latest/USD";
const CURRENCIES = ["NGN", "GBP", "EUR", "CAD"];

function esc(s = "") {
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function fmt(n) {
  return Number.isFinite(n) ? new Intl.NumberFormat("en", {maximumFractionDigits: 2}).format(n) : "—";
}
function render(data) {
  const r = data?.rates || {};
  const updated = data?.updatedAt
    ? new Date(data.updatedAt).toLocaleString("en-GB", {timeZone:"Africa/Lagos", dateStyle:"medium", timeStyle:"short"}) + " Lagos time"
    : "Awaiting first scheduled update";
  const cards = CURRENCIES.map(code => {
    const value = code === "NGN" ? r.NGN : (r.NGN && r[code] ? r.NGN / r[code] : null);
    const name = code === "NGN" ? "US dollar (USD)" : code;
    return `<article class="rate"><span>1 ${name}</span><strong>${value ? "₦" + fmt(value) : "—"}</strong><small>Indicative naira equivalent</small></article>`;
  }).join("");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="Atlantic Financial Review: practical financial information for Nigerians and diaspora readers.">
<title>Atlantic Financial Review | Diaspora Finance</title>
<style>
:root{color-scheme:dark;--bg:#071329;--panel:#102342;--blue:#35b8ee;--muted:#b8c7da;--white:#f7fbff}
*{box-sizing:border-box}body{margin:0;background:linear-gradient(145deg,#071329,#102b53);color:var(--white);font:16px/1.6 Arial,sans-serif}
header{max-width:1100px;margin:auto;padding:22px 20px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.brand{font-weight:800;letter-spacing:.04em;font-size:22px}.brand span{color:var(--blue)}nav a{color:#dcecff;text-decoration:none;margin-left:18px;font-size:14px}
main{max-width:1100px;margin:auto;padding:36px 20px 70px}.hero{padding:42px 0 30px}.eyebrow{color:var(--blue);font-weight:bold;letter-spacing:.12em;text-transform:uppercase;font-size:12px}
h1{font-size:clamp(34px,6vw,62px);line-height:1.08;margin:12px 0 18px;max-width:780px}p{color:var(--muted);max-width:760px}
.actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}.actions a{padding:11px 16px;border-radius:8px;background:var(--blue);color:#061329;text-decoration:none;font-weight:bold}
section{margin-top:34px}.section-head{display:flex;justify-content:space-between;gap:16px;align-items:end;flex-wrap:wrap}h2{font-size:26px;margin:0 0 8px}.stamp{font-size:12px;color:var(--muted)}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:14px;margin-top:18px}.rate,.panel{background:rgba(16,35,66,.92);border:1px solid rgba(145,190,230,.18);border-radius:14px;padding:20px}.rate span,.rate small{display:block;color:var(--muted)}.rate strong{display:block;font-size:27px;margin:8px 0;color:#fff}
.notice{font-size:12px;color:#c3d1e3;margin-top:14px}.columns{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}.panel h3{margin:0 0 8px;color:#fff}.panel p{margin:0}
footer{border-top:1px solid rgba(145,190,230,.2);padding:24px 20px;color:var(--muted);text-align:center;font-size:13px}
@media(max-width:600px){header{align-items:flex-start;flex-direction:column}nav a{margin:0 14px 0 0}main{padding-top:18px}.hero{padding-top:26px}}
</style></head><body>
<header><div class="brand">ATLANTIC <span>FINANCIAL REVIEW</span></div><nav><a href="#rates">Exchange rates</a><a href="#coverage">Coverage</a><a href="#about">About AFR</a></nav></header>
<main><div class="hero"><div class="eyebrow">Finance beyond borders</div><h1>Clear financial information for Nigerians at home and across the world.</h1><p>Exchange-rate context, diaspora money matters, banking, markets and practical financial explainers — presented with transparent sources.</p><div class="actions"><a href="#rates">View exchange rates</a><a href="#coverage">Explore our coverage</a></div></div>
<section id="rates"><div class="section-head"><div><div class="eyebrow">Daily reference</div><h2>Indicative exchange rates</h2></div><div class="stamp">Last update: ${esc(updated)}</div></div>
<div class="grid">${cards}</div><p class="notice">Indicative reference conversions from a third-party USD-based exchange-rate feed. These are not CBN/NFEM official quotations, bank offers, or guaranteed transfer payouts. Confirm rates and fees with your provider before transacting.</p></section>
<section id="coverage"><div class="eyebrow">What we cover</div><h2>Financial insight for a global audience</h2><div class="columns">
<article class="panel"><h3>Send money &amp; remittances</h3><p>Compare transfer methods, fees, exchange-rate margins and payout choices.</p></article>
<article class="panel"><h3>Diaspora banking &amp; tax</h3><p>Understand cross-border accounts, financial obligations and practical planning.</p></article>
<article class="panel"><h3>Global markets</h3><p>Accessible explainers on companies, industries, equities and commodities.</p></article>
<article class="panel"><h3>Nigeria finance</h3><p>Follow banking, fintech, policy and economic developments that matter to diaspora readers.</p></article>
</div></section>
<section id="about"><div class="panel"><h2>About Atlantic Financial Review</h2><p>AFR is an independent financial information publication for Nigerians and readers interested in the financial connections between Nigeria and the wider world. We aim to explain the numbers, identify the source, and make the implications easier to understand.</p></div></section>
</main><footer>© ${new Date().getFullYear()} Atlantic Financial Review. Educational information, not personal financial advice.</footer>
</body></html>`;
}
async function updateRates(env) {
  const response = await fetch(FX_API, {headers:{"accept":"application/json"}});
  if (!response.ok) throw new Error(`FX provider HTTP ${response.status}`);
  const payload = await response.json();
  if (payload.result !== "success" || !payload.rates || !Number.isFinite(payload.rates.NGN)) throw new Error("No usable NGN rate in provider response");
  const record = {
    provider:"ExchangeRate-API open endpoint", base:"USD",
    rates:{NGN:payload.rates.NGN,GBP:payload.rates.GBP,EUR:payload.rates.EUR,CAD:payload.rates.CAD},
    providerUpdatedAt:payload.time_last_update_utc || null, updatedAt:new Date().toISOString()
  };
  await env[KV].put("latest-rates", JSON.stringify(record));
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/health") return Response.json({ok:true,service:BRAND,kvConfigured:Boolean(env[KV])});
    if (url.pathname === "/api/rates") {
      const raw = await env[KV]?.get("latest-rates");
      return Response.json(raw ? JSON.parse(raw) : {status:"waiting_for_first_scheduled_update"});
    }
    const raw = await env[KV]?.get("latest-rates");
    return new Response(render(raw ? JSON.parse(raw) : null), {
      headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}
    });
  },
  async scheduled(controller, env, ctx) { ctx.waitUntil(updateRates(env)); }
};
