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
  ,
  {
    slug: "nigerian-bank-accounts-for-diaspora",
    image: "https://raw.githubusercontent.com/atlanticfinancialreview-jpg/afr-website/main/assets/afr-diaspora-banking-hero.jpg",
    imageAlt: "Nigerian diaspora client in a navy suit meeting a bank manager in a premium Nigerian bank office",
    category: "DIASPORA BANKING",
    title: "Nigerian bank accounts for the diaspora: what to know before opening one",
    summary: "A practical guide to account types, identity checks, foreign-currency accounts, fees and managing your Nigerian banking from abroad.",
    date: "6 November 2026",
    read: "7 min read",
    body: [
      ["Start with the reason you need the account", "Before applying, decide what the account must do. You may want to receive naira payments, support relatives, pay local bills, manage rental income or hold funds for a future visit. A regular naira account and a foreign-currency domiciliary account serve different purposes. The right choice depends on the currency you receive, how you expect to use the money and the bank's current eligibility rules."],
      ["Understand the account types", "A naira account is designed for transactions in local currency. A domiciliary account is intended to hold an approved foreign currency, subject to the bank's terms and applicable regulation. Do not assume that every account accepts every currency or that a foreign-currency balance can be withdrawn or transferred without limits, charges or documentation. Ask the bank to explain deposits, withdrawals, transfers, minimum balances and transaction fees in writing."],
      ["Ask about non-resident onboarding", "Banks may offer different procedures for customers living outside Nigeria. Identity verification, proof of address, passport details, a Nigerian identification number or other documents may be requested depending on the product and current requirements. Confirm the exact list directly with the bank through its official website or verified customer-service channel. Requirements can change, and an old checklist shared online may no longer apply."],
      ["Check how you will operate the account", "For a customer abroad, reliable remote access matters. Ask whether the bank supports online and mobile banking, international access, secure transaction approvals, card delivery overseas and customer support across time zones. Find out how to replace a lost phone or restore access if your Nigerian SIM stops working. Keep your registered email and phone number current, and never disclose a password or one-time security code to anyone."],
      ["Compare the full cost", "Look beyond account-opening promotions. Ask about maintenance fees, card charges, transfer fees, foreign-currency handling, cash withdrawal charges and the cost of moving money between your overseas bank and Nigeria. Also ask which exchange rate applies if a transaction converts currencies. A convenient account can become expensive if you make frequent small transfers or rely on services with unfavourable conversion terms."],
      ["Keep the account secure and well documented", "Use a unique password, enable multi-factor authentication and turn on transaction alerts. Review statements regularly and report unfamiliar activity promptly using the bank's official contact details. Keep records explaining significant incoming payments, especially where they relate to business, rent or family support. Do not allow another person to operate the account using your login credentials."],
      ["Questions to ask before you apply", "Can I open and maintain this account while resident overseas? Which documents are required now? Which currencies can it hold? What are the fees and limits? Can I complete transfers and security checks from my country of residence? How do I get help if I lose access? Clear answers to these questions are more useful than choosing an account based on an advertisement alone."],
      ["The key takeaway", "A Nigerian bank account can make legitimate financial connections with home easier, but the details matter. Match the account to your purpose, verify current non-resident requirements directly with the bank and understand fees, limits and security arrangements before moving money."]
    ]
  },
  {
    slug: "diaspora-property-investment-nigeria",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Modern residential property in a landscaped development",
    category: "PROPERTY & INVESTMENT",
    title: "Buying property in Nigeria from abroad: checks to make before you pay",
    summary: "A due-diligence guide for Nigerians overseas considering land, a home or an investment property in Nigeria.",
    date: "6 November 2026",
    read: "8 min read",
    body: [
      ["Treat distance as a risk to manage", "Buying property while living abroad can be convenient, but distance makes independent verification essential. Photographs, promotional videos and assurances from an agent do not establish ownership, planning approval, physical boundaries or the condition of a building. Build a process in which qualified professionals verify the property and documents independently before you make a substantial payment."],
      ["Verify the seller's authority", "Establish who owns the property and whether the person negotiating has legal authority to sell it. Request copies of title documents and have an independent property lawyer investigate them with the relevant land registry and public authorities. Depending on the location and transaction, relevant records may include a registered title, certificate of occupancy, deed, survey plan, consent or other approvals. The documents required and their legal effect vary by state and property history."],
      ["Confirm the land and its boundaries", "Use a qualified surveyor to check the survey plan, coordinates, boundaries and any overlap or dispute concerns. Visit the site independently or appoint a trusted professional who is not financially tied to the seller. Check access roads, drainage, utilities, permitted use and any government acquisition or planning restrictions that may affect the land. A location pin or estate brochure is not a substitute for a proper survey and title search."],
      ["Inspect the building and development", "For a completed property, arrange an independent physical inspection of the structure, roof, plumbing, electrical installation, drainage and visible defects. For an off-plan purchase, examine the developer's track record, approvals, construction timetable, specifications, payment milestones and remedies for delay or non-completion. Ask what happens if the finished property differs from the plans or the project does not proceed."],
      ["Understand the full cost", "The advertised price may not include legal fees, survey costs, registration, consent, taxes, service charges, agency commission, maintenance or later construction expenses. Request a written schedule of all charges and clarify which party is responsible for each. For an investment property, prepare a realistic budget for vacancy periods, repairs, insurance, security and property management rather than assuming rent will cover every cost."],
      ["Use controlled payments and written agreements", "Avoid paying large sums into a personal account simply because an agent requests it. Have your lawyer confirm the correct recipient, payment milestones, refund terms and conditions that must be met before completion. Ensure the agreement identifies the property precisely and records the parties, price, payment schedule, completion obligations and consequences of breach. Keep receipts and bank evidence for every payment."],
      ["Plan for management after purchase", "If you will not live in the property, decide who will inspect it, collect rent, arrange repairs, pay approved bills and report problems. Use a written management agreement with clear authority, reporting intervals and fee arrangements. Keep ownership documents and important contacts in secure digital and physical records. Do not hand over unlimited control of the property or its income without defined safeguards."],
      ["The key takeaway", "Property can be part of a long-term financial plan, but it is not a guaranteed return and it is not risk-free. Independent legal, survey and technical checks should come before payment. This guide is general information; obtain advice from professionals familiar with the state and transaction involved."]
    ]
  },
  {
    slug: "global-markets-diaspora-investors",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Global financial market data displayed on trading screens",
    category: "GLOBAL MARKETS",
    title: "Global markets and the Nigerian diaspora: five signals worth watching",
    summary: "A framework for understanding interest rates, currencies, inflation, energy and company earnings without reacting to every market headline.",
    date: "6 November 2026",
    read: "7 min read",
    body: [
      ["Look beyond the daily market move", "A sharp move in a share index or currency can dominate headlines, but a single session rarely explains the whole economic picture. Diaspora households may have income, savings, investments and family commitments in several currencies. A more useful approach is to follow a small set of indicators consistently and ask how each could affect borrowing costs, purchasing power, employment, business conditions and long-term investment risk."],
      ["1. Central-bank interest-rate decisions", "Policy rates influence the cost of borrowing and the return available on some savings products, although the effect is not immediate or identical across countries. Watch the decision itself, the central bank's explanation and its assessment of inflation and economic activity. A rate cut does not automatically mean shares will rise, and a rate increase does not automatically make every investment unattractive. Markets often move in response to the difference between a decision and what investors had already expected."],
      ["2. Inflation and household purchasing power", "Inflation measures how prices change over time. For a household supporting relatives in Nigeria while paying rent, transport or school costs abroad, inflation in both countries can matter. Look at the official statistical release, the period covered and the categories contributing to the change. Headline inflation can hide different experiences across food, housing, transport and services. Compare like-for-like measures rather than mixing monthly changes with annual rates."],
      ["3. Currency movements and conversion needs", "Exchange-rate changes affect the value of overseas income when converted into naira and the cost of obligations denominated in foreign currency. The impact depends on when money is converted, the rate actually available and the purpose of the payment. Avoid treating a public mid-market chart as a guaranteed bank or remittance quote. For a planned transfer, compare executable provider quotes and the final amount received."],
      ["4. Energy prices and the wider economy", "Oil and gas prices can influence government revenue, foreign-exchange inflows, transport costs and company earnings, but the relationship is not one-to-one. Production levels, fiscal arrangements, imports, infrastructure and global demand all matter. For Nigeria, readers should distinguish the international benchmark price from domestic production, realised revenue and the effect on public finances. One headline price cannot tell the full story."],
      ["5. Company earnings and business conditions", "Company results can reveal whether revenue, costs, debt and cash flow are improving or deteriorating. Read the report rather than relying only on a share-price reaction. Compare the same reporting period, note one-off items and examine management's explanation of risks. A profitable company can still face valuation or liquidity risks, while a temporary fall in earnings does not by itself establish a long-term trend."],
      ["Build a calm monitoring routine", "Choose a few official sources: central banks for policy statements, national statistics agencies for inflation and labour data, exchange operators and regulators for market disclosures, and company filings for results. Record the publication date and the period each figure describes. Review the information on a regular schedule instead of refreshing market prices throughout the day. If you invest, align decisions with your objectives, time horizon, diversification and ability to bear losses."],
      ["The key takeaway", "Global markets are connected, but their effects on each household are personal. Following a small number of reliable indicators—and understanding what each one measures—can help diaspora readers interpret headlines without confusing market noise with a decision they must make immediately. This article is educational, not investment advice."]
    ]
  },
  {
    slug: "naira-exchange-rate-november-2026",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Close-up of international currency notes",
    category: "NIGERIA ECONOMY",
    title: "The naira exchange rate: how to read the market in November 2026",
    summary: "A clear guide to official-market references, retail quotes, currency data timestamps and the forces that can shape the naira.",
    date: "6 November 2026",
    read: "8 min read",
    body: [
      ["Start by identifying the rate being quoted", "There is no single exchange-rate number that describes every naira transaction. An official-market reference, a bank's customer quote, a remittance payout rate and an indicative currency-converter figure may represent different markets, methods and costs. Before comparing two numbers, identify the source, date, market segment, whether it is a buying or selling rate and whether fees are included."],
      ["Official market data needs context", "The Central Bank of Nigeria publishes official foreign-exchange market information and policy material. Readers should use the original publication and its definitions when reporting an official figure. A reference or weighted average is not necessarily an offer available to every customer. If a report quotes a daily market figure, it should state the date and the exact measure rather than describing every number simply as 'the CBN rate'."],
      ["Why retail quotes can be different", "Banks and regulated transfer providers price specific services. Their quotes may reflect their funding costs, liquidity, operating expenses, risk controls and commercial margins. A transfer provider may also charge a separate fee or offer different rates depending on how the sender pays. For a household sending money home, compare the final payout for the same amount and payment method, not only the headline exchange rate."],
      ["Watch the data timestamp", "A rate page can be checked today while displaying source data last updated yesterday or earlier. These are two different timestamps. A responsible rate display should identify when AFR retrieved the data and, where supplied, when the data provider says its underlying rates were updated. A fresh retrieval does not make old source data current. Readers should treat delayed or indicative information accordingly."],
      ["Understand the forces that may matter", "Currency markets can be influenced by foreign-exchange supply and demand, export receipts, import needs, portfolio flows, investor confidence, monetary policy, inflation expectations and global dollar conditions. These factors interact and their influence can change. A single announcement or commodity-price movement does not provide a reliable forecast of the next exchange-rate level."],
      ["What diaspora households can do", "For regular remittances, compare providers at the time you are ready to send and consider whether timing, delivery certainty or the final amount matters most. For tuition, property or business commitments, plan for currency movements and avoid assuming that today's quote will remain available. Keep records of the rate and fees applied to each transaction. If a payment is large or legally significant, obtain advice from the bank or qualified professional handling it."],
      ["How AFR labels its figures", "AFR's public currency monitor presents indicative mid-market conversions from a public data service. It is not a CBN quotation, an interbank execution price, a bank-counter offer or a guaranteed remittance payout. The page should be read as a general reference, with the provider timestamp checked alongside AFR's retrieval time. Always confirm an actual transaction rate with the institution or regulated provider."],
      ["The key takeaway", "The most useful exchange-rate report is one that tells you what the number represents, who published it and when the underlying data was updated. Clear labels and consistent comparisons are more valuable than presenting a single figure without context."]
    ]
  },
  {
    "slug": "nigerian-diaspora-bonds-guide",
    "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=85",
    "imageAlt": "diaspora investment editorial photograph",
    "category": "DIASPORA INVESTMENT",
    "title": "Nigeria’s diaspora bonds: how Nigerians abroad can evaluate the opportunity",
    "summary": "What a diaspora bond is, how to assess its terms, currency exposure, issuer risk and official offer documents.",
    "date": "6 November 2026",
    "read": "8 min read",
    "body": [
      [
        "The issue in context",
        "A diaspora bond is a debt instrument intended to attract savings from citizens living abroad and other eligible investors. The investor lends money to the issuer for a defined period and receives interest under the offer terms; it is not a bank deposit, donation or ownership share in a company."
      ],
      [
        "What to check first",
        "Start with the legal issuer and official offer document. Read the prospectus for the borrower, governing law, regulator, use of proceeds, maturity, interest dates, currency, minimum subscription, fees, tax treatment and application process. Confirm that the offer is current and the named transaction parties are genuine."
      ],
      [
        "Understand the risks",
        "Currency changes can alter the result. A dollar-denominated bond may suit some investors who spend in dollars, but repayment still depends on the issuer's ability to obtain foreign currency. A naira return may lose value when converted. Compare yield only after considering inflation, maturity, credit and currency risk."
      ],
      [
        "Practical steps",
        "Check liquidity before investing. A bond may be listed yet still have limited buyers or trade below its original purchase price. Verify payment channels through the Debt Management Office, the issuer and relevant regulators; never pay into a personal account. This is education, not a recommendation to buy."
      ]
    ]
  },
  {
    "slug": "nigerian-treasury-bills-and-bonds-diaspora",
    "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85",
    "imageAlt": "fixed income editorial photograph",
    "category": "FIXED INCOME",
    "title": "Nigerian Treasury bills and government bonds: a guide for diaspora investors",
    "summary": "How bills and bonds differ, what yields mean, how auctions work and what to verify before committing funds from abroad.",
    "date": "6 November 2026",
    "read": "8 min read",
    "body": [
      [
        "The issue in context",
        "Treasury bills are short-term government securities commonly issued at a discount and redeemed at face value on maturity. Government bonds generally have longer maturities and may pay interest periodically. Both are debt instruments: the investor lends to the government rather than buying a company share."
      ],
      [
        "What to check first",
        "A discount rate, purchase price, coupon and yield are not interchangeable. A bill's return depends on the price paid and time to maturity. A bond's coupon is calculated on face value, while market yield also reflects price. Ask for the effective yield after fees and compare like with like."
      ],
      [
        "Understand the risks",
        "Ask a Nigerian bank or regulated dealer about non-resident onboarding, identification, BVN requirements where applicable, funding, minimum investment, custody, settlement currency and how proceeds are paid. For new issues, read the official auction notice; for existing bonds, ask for price, accrued interest, yield to maturity and liquidity."
      ],
      [
        "Practical steps",
        "Inflation can erode nominal returns, and a naira investment may lose value when translated into dollars, pounds or euros. Market prices can fall before maturity. Match maturity to when you need the money, use regulated channels and avoid schemes promising unusually high guaranteed returns."
      ]
    ]
  },
  {
    "slug": "nigerian-stocks-diaspora-investors-guide",
    "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=85",
    "imageAlt": "nigerian equities editorial photograph",
    "category": "NIGERIAN EQUITIES",
    "title": "How Nigerians abroad can invest in the Nigerian stock market",
    "summary": "A beginner’s guide to regulated access, brokerage accounts, company research, costs, custody and share-market risks.",
    "date": "6 November 2026",
    "read": "8 min read",
    "body": [
      [
        "The issue in context",
        "A listed share represents an ownership interest in a company. Its price can rise or fall, dividends are not guaranteed, and investors can lose some or all of the money committed. Shares are not fixed deposits and should not be judged by a recent price increase alone."
      ],
      [
        "What to check first",
        "Identify a properly registered stockbroker and the custody and settlement arrangements used for the account. Ask whether the broker accepts non-resident clients, which identity and address documents are needed, how funds are transferred and whether statements and trade confirmations are available electronically."
      ],
      [
        "Understand the risks",
        "Read audited financial statements, interim results and material announcements. Consider revenue quality, debt, cash flow, governance, competitive position and exposure to currency or regulation. Check trading volume, bid-ask spread, brokerage commission, exchange charges, custody fees and taxes; thinly traded shares may be difficult to sell quickly."
      ],
      [
        "Practical steps",
        "Diversification matters. A portfolio concentrated in one company, sector or currency can be vulnerable to a single shock. Consider how Nigerian shares fit alongside investments and obligations in your country of residence. Keep trade confirmations and dividend records, and obtain qualified tax advice."
      ]
    ]
  },
  {
    "slug": "diaspora-property-rental-income-risks",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
    "imageAlt": "real estate editorial photograph",
    "category": "REAL ESTATE",
    "title": "Owning rental property in Nigeria from abroad: income, costs and risks",
    "summary": "A realistic guide to rental yield, vacancies, maintenance, property managers, tax and protecting a property investment from overseas.",
    "date": "6 November 2026",
    "read": "8 min read",
    "body": [
      [
        "The issue in context",
        "Rent collected is not the same as profit. Account for vacancies, repairs, insurance where available, security, service charges, management fees, taxes and periodic refurbishment. Gross rental yield is only a starting point because it excludes acquisition costs and ongoing expenses."
      ],
      [
        "What to check first",
        "Compare similar homes in the same neighbourhood and ask for evidence of completed lets, not only advertised rents. Consider tenant demand, access to transport and services, lease length, competing supply and nearby infrastructure. Forecast income conservatively rather than accepting an agent's best-case estimate."
      ],
      [
        "Understand the risks",
        "Choose a property manager with written responsibilities and limits. Agree fees, rent collection, inspections, maintenance approval thresholds, reporting frequency and dispute escalation. Require invoices and bank statements that reconcile rent due with money received."
      ],
      [
        "Practical steps",
        "Keep title documents, survey plans, approvals, tenancy agreements, inventories and payment histories securely. Have a local lawyer review the documents. Set aside a reserve for urgent repairs and empty periods; measure results in the currency in which you spend. Property is illiquid and returns are not guaranteed."
      ]
    ]
  },
  {
    "slug": "diaspora-business-startup-nigeria",
    "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    "imageAlt": "business & entrepreneurship editorial photograph",
    "category": "BUSINESS & ENTREPRENEURSHIP",
    "title": "Starting or buying a business in Nigeria from abroad: the checks that matter",
    "summary": "How diaspora entrepreneurs can test demand, verify partners, structure funding, register properly and monitor a business from overseas.",
    "date": "6 November 2026",
    "read": "8 min read",
    "body": [
      [
        "The issue in context",
        "A business idea is not yet a business case. Identify the customer, the problem being solved, what buyers currently pay for alternatives and why they would switch. Speak with potential customers and test demand with a small pilot before committing significant capital."
      ],
      [
        "What to check first",
        "If buying an existing business, review registration, ownership, tax records, bank statements, debts, contracts, licences, staff obligations, litigation and suppliers. Reconcile reported sales with bank deposits and inventory. Interview customers and suppliers independently, and appoint your own lawyer and accountant."
      ],
      [
        "Understand the risks",
        "Choose a model that can be supervised remotely, with documented procedures, digital sales records, inventory controls and measurable management targets. Check registration and sector permits with the Corporate Affairs Commission and relevant regulators; registration alone does not authorise every regulated activity."
      ],
      [
        "Practical steps",
        "Separate startup capital from working capital and emergency reserves. Put in writing whether funds are equity, a loan or payment for goods. Require monthly accounts, bank reconciliations, tax and payroll records and inventory reports. Distance magnifies weak governance; obtain professional advice."
      ]
    ]
  },
  {
    "slug": "nigerian-fintech-digital-banking-diaspora",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
    "imageAlt": "fintech & digital banking editorial photograph",
    "category": "FINTECH & DIGITAL BANKING",
    "title": "Nigerian fintech and digital banking: what diaspora customers should check",
    "summary": "A practical guide to transfers, wallets, payment apps, security, licensing, customer support and the limits of digital finance services.",
    "date": "6 November 2026",
    "read": "8 min read",
    "body": [
      [
        "The issue in context",
        "A financial app may make transfers, bill payments or account access easier, but convenience alone does not establish whether it is suitable. Identify the legal provider, exact product, supported countries and whether it is a bank, payment service, remittance provider or technology interface working with another institution."
      ],
      [
        "What to check first",
        "Verify the provider and any regulated partner using official regulator information. Read the terms to understand who holds customer funds, whether balances are deposits or stored value, what protection applies if the provider fails and how complaints are handled. Do not assume every app offering a financial feature has a banking licence."
      ],
      [
        "Understand the risks",
        "Compare total transfer costs: exchange-rate margin, visible fee, payment method, delivery time, payout method and refund procedure. A zero-fee promotion may still use a less favourable conversion rate. Confirm that the app permits use from your country of residence and ask how to update identity documents and contact details."
      ],
      [
        "Practical steps",
        "Download only from official app stores. Use a unique password, device lock, multi-factor authentication and transaction alerts. Never share PINs or one-time codes with someone claiming to be support. Keep an alternative payment route, save receipts and use the provider's official complaint process."
      ]
    ]
  },
  {
    "slug": "nigerian-retirement-planning-diaspora",
    "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
    "imageAlt": "retirement & long-term planning editorial photograph",
    "category": "RETIREMENT & LONG-TERM PLANNING",
    "title": "Retirement planning for Nigerians in the diaspora: build a plan across countries",
    "summary": "How to coordinate pensions, savings, property, healthcare and currency exposure when retirement may involve more than one country.",
    "date": "6 November 2026",
    "read": "8 min read",
    "body": [
      [
        "The issue in context",
        "Your plan changes depending on whether you expect to remain abroad, return to Nigeria or split time between countries. Consider healthcare access, housing, residency status, tax rules, travel costs, family responsibilities and the reliability of income in each location. Model more than one scenario."
      ],
      [
        "What to check first",
        "List every source of retirement income: workplace pensions, public pensions, personal retirement accounts, investments, rental income and business interests. Note the currency, access age, payment rules, inflation adjustments, survivor benefits and restrictions on overseas payment. Obtain current statements rather than relying on memory."
      ],
      [
        "Understand the risks",
        "Pension portability, transfer options, tax relief and withdrawal rules depend on the countries and schemes involved. Moving a pension can create fees, tax consequences or loss of valuable guarantees. Do not transfer a pension because a salesperson promises a higher return; ask the scheme administrator and a qualified cross-border adviser for written explanations."
      ],
      [
        "Practical steps",
        "If income is paid in one currency while expenses are in another, exchange-rate changes can affect purchasing power. Model healthcare, insurance, travel and family support. Review pension statements, spending assumptions, tax residence, beneficiaries and emergency contacts annually. Seek advice in the relevant countries."
      ]
    ]
  },
  {
    "slug": "nigeria-cross-border-tax-diaspora-guide",
    "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85",
    "imageAlt": "tax & compliance editorial photograph",
    "category": "TAX & COMPLIANCE",
    "title": "Nigeria and cross-border tax: what Nigerians abroad should review",
    "summary": "A plain-language guide to tax residence, Nigerian-source income, records, property, business interests and professional advice for diaspora households.",
    "date": "6 November 2026",
    "read": "8 min read",
    "body": [
      [
        "The issue in context",
        "Citizenship alone does not settle tax residence. Each jurisdiction has its own residence tests, and the facts of a person's circumstances matter. A person may have reporting obligations in more than one country, so check current statutory tests, the relevant tax year and any applicable treaty."
      ],
      [
        "What to check first",
        "Identify income connected with Nigeria, such as rental income, business profits, director fees, interest, dividends or proceeds from asset sales. The source and legal character of income can affect its treatment. Keep contracts, invoices, bank statements, property records and withholding-tax certificates."
      ],
      [
        "Understand the risks",
        "Separate Nigerian rules from the rules in your country of residence. That country may require disclosure of foreign bank accounts, rental property, company interests or investment income even if tax has been paid in Nigeria. Relief from double taxation may be available, but eligibility and documentation matter."
      ],
      [
        "Practical steps",
        "Keep records of income, expenses, tax withheld, dates, currencies and exchange-rate methods. Do not assume a remittance is automatically taxable income or that calling a payment a gift removes every tax consequence. Obtain qualified advice; this is general information, not tax advice."
      ]
    ]
  },
  {
    "slug": "nigeria-oil-gas-energy-investment-outlook",
    "image": "https://images.unsplash.com/photo-1513828583688-c52646e4e6a3?auto=format&fit=crop&w=1400&q=85",
    "imageAlt": "energy & commodities editorial photograph",
    "category": "ENERGY & COMMODITIES",
    "title": "Nigeria’s oil, gas and energy outlook: what diaspora investors should understand",
    "summary": "A framework for reading oil production, gas development, power supply, regulation and the risks behind Nigeria’s energy opportunities.",
    "date": "6 November 2026",
    "read": "8 min read",
    "body": [
      [
        "The issue in context",
        "International crude prices influence revenue expectations, but realised earnings also depend on production volumes, quality differentials, operating costs, security, infrastructure, contracts and fiscal arrangements. A higher global price does not automatically translate into a proportionate increase in government revenue or local company profits."
      ],
      [
        "What to check first",
        "Distinguish nameplate capacity, actual production, domestic supply and export volumes. Maintenance, pipeline availability, operational disruption and investment can affect output. Use official production and regulatory publications for the relevant period, and check whether figures are provisional or revised."
      ],
      [
        "Understand the risks",
        "Gas can support electricity generation, industrial users, processing and exports, but projects require pipelines, processing capacity, contracts, financing and dependable customers. The power sector also faces transmission, distribution, commercial and payment challenges. An announced project is not the same as a completed asset generating cash flow."
      ],
      [
        "Practical steps",
        "Energy investments may involve licences, joint ventures, host-community obligations, environmental approvals, local-content rules and long timelines. Commodity prices are volatile and projects can face cost overruns, delays, foreign-exchange shortages and policy changes. Verify licences and disclosures independently; this is not an investment recommendation."
      ]
    ]
  },
  {
    "slug": "diversified-nigeria-investment-portfolio-diaspora",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    "imageAlt": "portfolio strategy editorial photograph",
    "category": "PORTFOLIO STRATEGY",
    "title": "Building a diversified Nigeria-focused investment portfolio from abroad",
    "summary": "How to think about cash, fixed income, shares, property and currency risk without concentrating wealth in one market or asset.",
    "date": "6 November 2026",
    "read": "8 min read",
    "body": [
      [
        "The issue in context",
        "Separate funds needed for near-term commitments from capital intended for long-term growth. Money for school fees, medical expenses, a home purchase or family support should not carry the same risk as savings that can remain invested for years. Define the time horizon, currency of future spending and loss you could tolerate."
      ],
      [
        "What to check first",
        "Diversification means more than owning several products. A portfolio can still be concentrated if holdings depend on the same sector, borrower, currency or economic condition. Consider exposure across asset classes, issuers, sectors and currencies, including assets in the country where you live."
      ],
      [
        "Understand the risks",
        "Cash can provide liquidity, although inflation erodes purchasing power. Treasury bills and bonds may provide scheduled returns but carry issuer, interest-rate, inflation, liquidity and currency risks. Shares can participate in company growth but prices fall and dividends are not guaranteed. Property can produce rent but is illiquid and brings title, maintenance and management risks."
      ],
      [
        "Practical steps",
        "Account fees, brokerage commissions, transfer charges, custody, property management, taxes and conversion spreads reduce net returns. Confirm who legally holds each asset and how statements are issued. Review allocations periodically and seek qualified financial and tax advice; there is no single portfolio suitable for every diaspora investor."
      ]
    ]
  },
  {
    "slug": "nigeria-agriculture-investment-diaspora",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85",
    "imageAlt": "agribusiness & food editorial photograph",
    "category": "AGRIBUSINESS & FOOD",
    "title": "Agribusiness in Nigeria: opportunities and checks for diaspora investors",
    "summary": "A practical introduction to food production, processing, storage, distribution and the operational risks behind agricultural ventures.",
    "date": "6 November 2026",
    "read": "8 min read",
    "body": [
      [
        "The issue in context",
        "Agriculture offers several different business models: crop production, livestock, processing, storage, logistics, inputs and distribution. Each has different capital needs, seasons, skills, buyers and risks. Do not invest simply because food demand is essential; a viable business still needs reliable production, customers and cost control."
      ],
      [
        "What to check first",
        "Start with a defined product and market. Identify the buyer, quality standard, volume, price, delivery schedule and competing suppliers. Verify access to land, water, power, storage, transport and skilled operators. For processing, confirm raw-material supply and equipment maintenance before projecting capacity."
      ],
      [
        "Understand the risks",
        "Agricultural projects face weather, pests, disease, price volatility, spoilage, theft, logistics and policy risks. Build realistic budgets for inputs, labour, insurance where available, storage and transport. Test the operation on a manageable scale before expanding and obtain local technical advice."
      ],
      [
        "Practical steps",
        "Use written agreements with landowners, operators, suppliers and buyers. Verify land rights and permits independently, separate business funds from personal spending and require production, inventory and sales reports. Diaspora investors should appoint trusted independent oversight; projected yields and returns are not guarantees."
      ]
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
  <a class="market" href="https://ngxgroup.com/" target="_blank" rel="noopener"><b>Nigeria</b><span>NGX, banking, monetary policy, energy and the wider economy. Visit Nigerian Exchange Group.</span></a>
  <a class="market" href="https://www.federalreserve.gov/" target="_blank" rel="noopener"><b>United States</b><span>US equities, Federal Reserve policy, Treasury markets and the dollar. Visit the Federal Reserve.</span></a>
  <a class="market" href="https://www.ecb.europa.eu/" target="_blank" rel="noopener"><b>Europe</b><span>European markets, ECB policy, banking and cross-border regulation. Visit the European Central Bank.</span></a>
  <a class="market" href="https://www.adb.org/" target="_blank" rel="noopener"><b>Asia</b><span>Asian economies, regional development, trade and financial context. Visit the Asian Development Bank.</span></a>
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
    headers: {
      "Accept": "application/json",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache"
    },
    cf: { cacheTtl: 0, cacheEverything: false }
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
          headers: { "Cache-Control": "no-store, no-cache, must-revalidate", "Pragma": "no-cache", "Access-Control-Allow-Origin": "*" }
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
