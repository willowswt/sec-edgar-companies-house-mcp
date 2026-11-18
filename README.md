[![Glama MCP Server](https://glama.ai/mcp/servers/willowswt/sec-edgar-companies-house-mcp/badges/score.svg)](https://glama.ai/mcp/servers/willowswt/sec-edgar-companies-house-mcp) [![Apify Store Actor](https://img.shields.io/badge/Apify_Store-sec_edgar_companies_house_mcp-00C853?logo=apify&logoColor=white)](https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp) [![MCP Protocol](https://img.shields.io/badge/MCP-2025--06--18_Streamable_HTTP_%26_stdio-blue)](https://modelcontextprotocol.io) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **⚡ Instant Remote Streamable-HTTP Endpoint (Zero Local Install):** `https://church-of-loujess--sec-edgar-companies-house-mcp.apify.actor/mcp`  
> **🔑 Get Your Free API Token (`$5.00/mo` Free Credit Included):** [Apify Console -> Settings -> Integrations](https://console.apify.com/settings/integrations)  
> **🌐 Hosted Apify Store Page & Interactive Runner:** [https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp](https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp)

## What can SEC EDGAR, UK Companies House & LEI MCP Server do?

**SEC EDGAR, UK Companies House & LEI MCP Server** is a live, **zero-API-key Streamable-HTTP Model Context Protocol (`MCP`) server** running in **128 MB Standby Mode** (`https://church-of-loujess--sec-edgar-companies-house-mcp.apify.actor/mcp`). Equip **Claude Desktop, Cursor, ChatGPT, Windsurf, Codex, and financial/legal AI agents** with **5 authoritative corporate due-diligence, KYC/KYB, and financial-filing tools** spanning **US SEC EDGAR (`data.sec.gov` + `efts.sec.gov`), UK Companies House, and the GLEIF Global LEI Registry across 200+ jurisdictions**:

<table>
<tr>
<th>📦 What you can extract</th>
<th>⚙️ Features & integrations</th>
</tr>
<tr>
<td valign="top">

🏛️ **US SEC EDGAR filings** (`lookup_public_company_cik_and_filings` — `10-K`, `10-Q`, `8-K`, `Form 4`, `DEF 14A`, `13F`) <br>
🔎 **EDGAR full-text search (`EFTS`)** (`search_sec_edgar_filings_fulltext` — search inside every public SEC filing by phrase) <br>
🧮 **Audited US-GAAP XBRL facts** (`get_company_xbrl_financial_facts` — Revenue, Net Income, Assets, Cash, Liabilities, EPS) <br>
🇬🇧 **UK Companies House & directors** (`lookup_uk_companies_house` — status, SIC codes, address & active officers, zero key!) <br>
🌍 **Global LEI corporate ownership** (`trace_global_corporate_ownership_lei` — 200+ jurisdictions + parent/ultimate-parent links) <br>
💸 **`$0.00` free MCP discovery** `initialize`, `tools/list` & `ping` are `$0.00`; pay only per `tools/call`

</td>
<td valign="top">

⚡ **Ultra-lean 128 MB Standby** compliant SEC `User-Agent` headers + instant ticker-to-CIK caching <br>
🔓 **Zero Companies House API key** no UK government developer registration required <br>
📐 **Audited XBRL precision** eliminates LLM hallucinated revenue/cash numbers with exact SEC `10-K`/`10-Q` tags <br>
🔀 **Dual-Mode execution** works both as a live `/mcp` endpoint AND as a Console/API Batch Actor <br>
⬇️ **Direct filing URLs** every record includes clickable `sec.gov/Archives/edgar/...`, Companies House, or GLEIF URLs <br>
🤖 **Finance, Legal & KYC ready** built for M&A diligence, equity research, compliance & vendor risk agents

</td>
</tr>
</table>

Financial analysts, M&A attorneys, KYC/AML compliance teams, and quant researchers waste hours bouncing between SEC EDGAR, UK Companies House, and global entity registries — while standard web-search LLMs hallucinate historical financial figures. This MCP server grounds every answer in primary statutory filings.

## What data can I extract with SEC EDGAR, UK Companies House & LEI MCP Server?

Every tool connects directly to official statutory registries (`data.sec.gov`, `efts.sec.gov`, `company-information.service.gov.uk`, `api.gleif.org`):

- **US SEC EDGAR submissions & full-text search:** _every `10-K`, `10-Q`, `8-K`, `Form 4` insider trade, `DEF 14A` proxy & `13F`_. Resolves any US ticker (`NVDA`, `BRK-B`), company name, or CIK into exact accession numbers, filing/report dates, form types, and direct `https://www.sec.gov/Archives/edgar/data/...` document links — plus cross-market keyword search via `efts.sec.gov`.

- **Audited US-GAAP XBRL financial time-series:** _zero-hallucination accounting facts_. Extracts standardized XBRL tags (`Revenues` / `RevenueFromContractWithCustomerExcludingAssessedTax`, `NetIncomeLoss`, `OperatingIncomeLoss`, `Assets`, `Liabilities`, `CashAndCashEquivalentsAtCarryingValue`, `EarningsPerShareDiluted`) with exact fiscal period (`FY` / `Q1`–`Q3`), end date, form, and USD values.

- **UK Companies House & Global GLEIF KYB/ownership:** _cross-border corporate verification_. Verifies UK private & public companies (incorporation dates, SIC codes, active directors/officers) alongside global Legal Entity Identifiers (`LEI`) and parent-subsidiary trees across Europe, North America, APAC, and offshore hubs.

### 🛠️ Live MCP Tools Included on This Server

| MCP Tool Name | Arguments (`params.arguments`) | What It Returns |
| :--- | :--- | :--- |
| `lookup_public_company_cik_and_filings` | `tickerOrCik` (required, e.g. `"NVDA"`, `"0000320193"`), `forms` (e.g. `"10-K,10-Q,8-K,4"`), `maxFilings` | Resolve US ticker/company name to 10-digit SEC CIK, entity metadata (SIC, state, FY end) & recent filings with direct `sec.gov` document URLs. |
| `search_sec_edgar_filings_fulltext` | `query` (required), `forms` (default `"10-K,10-Q,8-K"`), `startDate` (`YYYY-MM-DD`), `maxResults` | Full-text search across all US SEC filings via `efts.sec.gov` for risk disclosures, material weaknesses, litigation, AI capex, or customer names. |
| `get_company_xbrl_financial_facts` | `tickerOrCik` (required, e.g. `"AAPL"`, `"MSFT"`) | Pull audited US-GAAP XBRL annual (`10-K`) & quarterly (`10-Q`) series for Revenue, Net Income, Operating Income, Assets, Liabilities, Cash & Diluted EPS. |
| `lookup_uk_companies_house` | `query` (required, UK company name or 8-char number e.g. `"DeepMind"`, `"08804411"`), `enrichTopOfficers`, `maxResults` | Search UK Companies House without an API key, returning company status, incorporation date, registered office, SIC codes & active directors/secretaries. |
| `trace_global_corporate_ownership_lei` | `query` (required, legal entity name or 20-char LEI e.g. `"ASML"`, `"Revolut"`), `maxResults` | Query the official GLEIF registry across 200+ jurisdictions for LEI, legal name, registration authority ID, HQ address & direct/ultimate parent entities. |

> Need more specialized workflows? Combine this Actor with these dedicated tools from our suite:
>
> - 📡 [Yahoo Finance, Trends, News & Reddit MCP Server](https://apify.com/church_of_loujess/market-news-sentiment-mcp): pair audited SEC XBRL facts with live Yahoo Finance valuation multiples, OHLCV & breaking news via MCP
> - 🧬 [Pharma, FDA & Clinical Trials MCP Server](https://apify.com/church_of_loujess/pharma-fda-clinical-trials-mcp): combine biotech SEC 10-K/8-K filings with live ClinicalTrials.gov & OpenFDA intelligence
> - 💹 [Yahoo Finance Scraper](https://apify.com/church_of_loujess/yahoo-finance-scraper): batch-export stock quotes, options chains & analyst targets
> - 🌐 [Website Email, Phone & Tech Stack Finder](https://apify.com/church_of_loujess/website-email-phone-finder): enrich corporate domains with executive/IR contact emails & tech stacks

## How much will SEC EDGAR, UK Companies House & LEI MCP Server cost?

SEC EDGAR, UK Companies House & LEI MCP Server uses transparent **Pay-Per-Event (PPE)** pricing where one event (`mcp-tool-call`) equals one successful **MCP Tool Call**. Connecting your AI client (`initialize`), inspecting tool schemas (`tools/list`), and health/keepalive checks (`ping`) are **`$0.00` FREE** — there is **$0.00 Actor start fee** on MCP calls.

Paid Apify plans automatically unlock volume discounts up to **55% off** ($0.028 on Starter/Bronze, $0.022 on Scale/Silver, and **$0.018** on Business/Gold, Platinum & Diamond) with zero residential proxy surcharges:

| Apify Plan / Tier | Price per MCP `tools/call` execution | Price per 1,000 MCP tool calls | Batch Depth & Unmasking | Approx. Monthly Capacity |
| :--- | :--- | :--- | :--- | :--- |
| **Free (`FREE` Trial Preview)** | `$0.04` | `$40.00` | **3 records/call trial** (first 2 unmasked, 3rd preview-masked) | **~125** trial calls |
| **Starter (`BRONZE` — `$29/mo`)** | `$0.028` | `$28.00` | **Unlimited depth & 100% unmasked** | **~1,035** MCP tool calls |
| **Scale (`SILVER` — `$199/mo`)** | `$0.022` | `$22.00` | **Unlimited depth & 100% unmasked** | **~9,045** MCP tool calls |
| **Business (`GOLD` — `$999/mo`)** | `$0.018` | `$18.00` | **Unlimited depth & 100% unmasked** | **~55,500** MCP tool calls |
| **Enterprise (`PLATINUM` / `DIAMOND`)** | `$0.018` / `$0.018` | `$18.00` | **Unlimited depth & 100% unmasked** | Custom high-volume SLA |

> **Free Trial vs. Paid Plan Unlock:** On the Apify Free tier, each `mcp-tool-call` returns up to **3 trial records** (first `2` records `100%` unmasked, `3rd` record preview-masked). Upgrading to **[Apify Starter (`$29/mo`)](https://console.apify.com/billing/subscription)** or higher unlocks full multi-record batch depth, `100%` unmasked records, and up to **55% lower per-call rates**. Check the [pricing tab](https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp/pricing) for full details.

## How do I use SEC EDGAR, UK Companies House & LEI MCP Server?

SEC EDGAR, UK Companies House & LEI MCP Server is engineered for **zero-friction setup** whether you are connecting an AI coding/chat client over **Streamable HTTP (`/mcp`)** or running batch extractions in **Apify Console**:

### Option A: Connect to Claude Desktop, Cursor, Windsurf, or ChatGPT in 60 seconds
1. [Create](https://console.apify.com/sign-up) a free Apify account and copy your **Personal API Token** from [Console -> Settings -> Integrations](https://console.apify.com/settings/integrations).
2. Add the live Streamable-HTTP endpoint **`https://church-of-loujess--sec-edgar-companies-house-mcp.apify.actor/mcp`** to your AI client's `mcpServers` config:

```json
{
  "mcpServers": {
    "sec-edgar-companies-house-mcp": {
      "url": "https://church-of-loujess--sec-edgar-companies-house-mcp.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_APIFY_API_TOKEN>"
      }
    }
  }
}
```

3. Restart or reload your MCP client — it will automatically run `initialize` and `tools/list` (`$0.00` free) and expose all live tools to your AI assistant.
4. Ask your question in plain English; your AI agent will select the right tool, pass structured arguments, and cite live primary sources.

### Option B: Run directly in Apify Console (No-Code Batch Mode)
1. Open **[SEC EDGAR, UK Companies House & LEI MCP Server](https://console.apify.com/actors/eDuTr16jIEiUBJ9KD)** in Apify Console.
2. Choose which tool to execute under **MCP Tool to Execute (Batch Mode)** (`tool`).
3. Fill in the matching input parameters (`tickerOrCik`, `forms`, `query`) in the Console input form.
4. Click **Save & Start** and wait a few seconds for live extraction to finish.
5. Preview your results in the **Storage -> Dataset** tab and export in **JSON, CSV, Excel, or XML**, or fetch via the Apify REST API.

## ⬇️ Input

Connect any MCP client to **`https://church-of-loujess--sec-edgar-companies-house-mcp.apify.actor/mcp`**, or run any tool via **Console Batch Mode**.

### Mode 1: Live Streamable-HTTP MCP Diligence & Research (`/mcp`)

Plug into Claude Desktop, Cursor, Windsurf, or ChatGPT — ask complex multi-jurisdictional finance, accounting, and KYB questions in plain English.

| Input / Configuration | What it returns |
| :--- | :--- |
| `get_company_xbrl_financial_facts` (`{"tickerOrCik": "NVDA"}`) | Audited 10-K & 10-Q Revenue, Net Income, Cash, Assets & Diluted EPS |
| `search_sec_edgar_filings_fulltext` (`{"query": "material weakness", "forms": "10-K,8-K"}`) | Recent public companies disclosing internal-control material weaknesses |
| `lookup_uk_companies_house` (`{"query": "DeepMind"}`) | UK company number, registered address, SIC codes & active directors |

**Input JSON example:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
        "name": "get_company_xbrl_financial_facts",
        "arguments": {
            "tickerOrCik": "NVDA"
        }
    }
}
```

### Mode 2: Apify Console & REST API Batch Mode

Select `tool`, enter `tickerOrCik` (and optional `forms` or `query`), and export structured records to JSON/CSV/Excel.

| Input / Configuration | What it returns |
| :--- | :--- |
| `tool: "lookup_public_company_cik_and_filings"` + `tickerOrCik: "NVDA"` + `forms: "10-K,10-Q,8-K"` | Recent periodic & current reports saved to your Apify Dataset |

**Input JSON example:**

```json
{
    "tool": "lookup_public_company_cik_and_filings",
    "tickerOrCik": "NVDA",
    "forms": "10-K,10-Q,8-K,4",
    "maxResults": 10
}
```

### Complete Input Parameter Reference

| Parameter | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `tool` | `string` (`lookup_public_company_cik_and_filings`, `search_sec_edgar_filings_fulltext`, `get_company_xbrl_financial_facts`, `lookup_uk_companies_house`, `trace_global_corporate_ownership_lei`) | `"lookup_public_company_cik_and_filings"` | No | Select which SEC / Companies House / GLEIF tool to execute in Batch Mode. |
| `tickerOrCik` | `string` | `"NVDA"` | No | US stock ticker or CIK (e.g. 'NVDA', 'AAPL', 'MSFT', '0000320193'). |
| `forms` | `string` | `—` | No | Optional comma-separated SEC form filter (e.g. '10-K,10-Q,8-K,4'). |
| `query` | `string` | `—` | No | Search phrase for EDGAR full-text search, UK Companies House company name/number, or GLEIF legal entity name. |
| `maxResults` | `integer` | `10` | No | Maximum records to return (1-25). |

## ⬆️ Output and setup

All extracted records stream incrementally into your run's **Dataset** under the **Storage** tab in Apify Console. Preview results as a clean interactive table, download in **JSON, JSONL, CSV, Excel (`.xlsx`), XML, or RSS**, or consume items directly via the Apify REST API, Python/Node.js SDKs, or MCP.

### 📦 Verified dataset output sample #1

```json
{
    "tool": "lookup_public_company_cik_and_filings",
    "recordType": "sec_filing",
    "identifier": "CIK:0001045810",
    "title": "NVIDIA CORP — Form 4/A",
    "organization": "NVIDIA CORP",
    "statusOrPhase": "4/A",
    "date": "2026-10-13",
    "url": "https://www.sec.gov/Archives/edgar/data/1045810/000215218826000007/xslF345X06/wk-form4a_1791925767.xml",
    "details": {
        "form": "4/A",
        "filingDate": "2026-10-13",
        "reportDate": "2026-09-09",
        "accessionNumber": "0002152188-26-000007",
        "description": "FORM 4/A",
        "documentUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000215218826000007/xslF345X06/wk-form4a_1791925767.xml"
    }
}
```

### 📦 Verified dataset output sample #2

```json
{
    "tool": "lookup_public_company_cik_and_filings",
    "recordType": "sec_filing",
    "identifier": "CIK:0001045810",
    "title": "NVIDIA CORP — Form 4",
    "organization": "NVIDIA CORP",
    "statusOrPhase": "4",
    "date": "2026-10-09",
    "url": "https://www.sec.gov/Archives/edgar/data/1045810/000119764726000011/xslF345X06/wk-form4_1791579847.xml",
    "details": {
        "form": "4",
        "filingDate": "2026-10-09",
        "reportDate": "2026-10-07",
        "accessionNumber": "0001197647-26-000011",
        "description": "FORM 4",
        "documentUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000119764726000011/xslF345X06/wk-form4_1791579847.xml"
    }
}
```

### Output Field Dictionary

| Output Field | Type | Description |
| :--- | :--- | :--- |
| `tool / recordType` | `string` | Executed MCP tool and record class (`sec_filing`, `sec_search_hit`, `xbrl_metric`, `uk_company`, `lei_entity`). |
| `identifier / organization` | `string` | SEC `CIK`, UK company number, or 20-char `LEI` + legal entity name. |
| `title / statusOrPhase / date` | `string` | Filing/metric summary, form/status code, and filing/incorporation/period date. |
| `url` | `string` | Direct verification URL on `sec.gov`, `company-information.service.gov.uk`, or `search.gleif.org`. |
| `details` | `object` | Complete structured filing metadata, XBRL historical series, UK active officers, or LEI parent links. |

## Notes, tips, and exceptions

- **`$0.00` free MCP discovery:** `initialize`, `tools/list`, and `ping` cost `$0.00`; billing (`$0.04` Free down to `$0.018` Gold–Diamond) applies strictly once per `tools/call`.
- **SEC Fair-Access compliance:** Requests to `data.sec.gov` and `efts.sec.gov` include compliant institutional `User-Agent` identification and respect SEC rate guidelines.
- **128 MB Standby efficiency:** Ultra-lightweight `httpx` async I/O runs cleanly in `128 MB` RAM with sub-second response latency.
- **Informational & research scope:** Outputs provide direct public statutory data and links — not legal, tax, or investment advice.

## What can you do with data from SEC EDGAR, UK Companies House & LEI MCP Server?

SEC EDGAR, UK Companies House & LEI MCP Server powers high-ROI automation, lead generation, and AI agent pipelines. Here are four proven step-by-step recipes:

### 📈 Institutional equity & 8-K / Form 4 insider monitor in Claude

Audit audited GAAP trends alongside recent insider trades and material `8-K` events in one conversation.

**Recipe:**

1. **Connect both `sec-edgar-companies-house-mcp` + `market-news-sentiment-mcp`.** Add both `/mcp` endpoints to Claude Desktop.

2. **Run cross-source analysis.** Ask Claude: *'Compare AMD and NVDA audited 10-K/10-Q revenue & cash trends from SEC XBRL, pull their latest 8-K and Form 4 filings, and check current forward P/E on Yahoo Finance.'*

Every single number traces 1-to-1 to an audited SEC filing or live market quote.

### ⚖️ Automated KYB, vendor onboarding & cross-border entity verification

Compliance & procurement agents can verify supplier legal existence, directors, and parent ownership in seconds.

**Recipe:**

1. **Check UK counterparties via `lookup_uk_companies_house`.** Confirm `Active` status, incorporation age, registered office, and active directors.

2. **Trace global entities via `trace_global_corporate_ownership_lei`.** Verify 20-character LEI status and ultimate parent hierarchy across 200+ jurisdictions.

Zero paid Dun & Bradstreet or Companies House API setup required.

### 🔎 Thematic SEC filing screen (`search_sec_edgar_filings_fulltext`)

Find every US public company mentioning a specific vendor, litigation topic, cybersecurity breach (`Item 1.05`), or regulatory risk.

**Recipe:**

1. **Query `efts.sec.gov`.** Call `search_sec_edgar_filings_fulltext` with `query: "Item 1.05 cybersecurity"` or a B2B software vendor name (`"Snowflake"`, `"Databricks"`) and `startDate: "2026-01-01"`.

Uncovers enterprise customer references hidden inside 10-K footnotes.

### 🧬 Biotech cash-runway vs. Phase 3 readout check

Pair `CashAndCashEquivalentsAtCarryingValue` + quarterly `OperatingIncomeLoss` burn from `get_company_xbrl_financial_facts` with **[Pharma, FDA & Clinical Trials MCP](https://apify.com/church_of_loujess/pharma-fda-clinical-trials-mcp)**.

**Recipe:**

1. **Pull latest 10-Q cash & operating burn.** Compute quarters of cash runway remaining.

2. **Compare against `primaryCompletionDate`.** Spot biotechs whose Phase 3 readout occurs before dilution risk.

Institutional-grade biotech screening in two 128 MB MCP servers.

## Want to get other B2B, Social, Financial, or MCP Agent data?

Chain this tool with our other **128 MB / 256 MB zero-proxy Apify Scrapers and Live Streamable-HTTP MCP Servers**:

<table>
<tr>
<td>📡 <a href="https://apify.com/church_of_loujess/market-news-sentiment-mcp">Yahoo Finance, Trends, News & Reddit MCP Server</a></td>
<td>🧬 <a href="https://apify.com/church_of_loujess/pharma-fda-clinical-trials-mcp">Pharma, FDA & Clinical Trials MCP Server</a></td>
</tr>
<tr>
<td>🔌 <a href="https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp">Substack, B2B Churn & Startup Lead MCP Server</a></td>
<td>💹 <a href="https://apify.com/church_of_loujess/yahoo-finance-scraper">Yahoo Finance Stock Quotes, Financials & Options API</a></td>
</tr>
<tr>
<td>📰 <a href="https://apify.com/church_of_loujess/google-news-scraper-fast">Google News Scraper Fast (Decoded URLs + RAG)</a></td>
<td>📈 <a href="https://apify.com/church_of_loujess/google-trends-fast-scraper">Google Trends Scraper & Breakout Keyword API</a></td>
</tr>
<tr>
<td>🌐 <a href="https://apify.com/church_of_loujess/website-email-phone-finder">Website Email, Phone, Socials & Tech Stack Finder</a></td>
<td>🕸️ <a href="https://apify.com/church_of_loujess/fast-website-content-crawler">Fast Website Content & AI/RAG Markdown Crawler</a></td>
</tr>
</table>

## 🔌 Using SEC EDGAR, UK Companies House & LEI MCP Server with the Apify API, SDKs & MCP

Automate **SEC EDGAR, UK Companies House & LEI MCP Server** programmatically from Python, Node.js/TypeScript, cURL, workflow builders (**n8n, Make, Zapier, Clay, Pipedream**), or **Model Context Protocol (`MCP`)** AI clients.

### Python (`apify-client`)

```python
from apify_client import ApifyClient

client = ApifyClient("<YOUR_APIFY_API_TOKEN>")
run = client.actor("church_of_loujess/sec-edgar-companies-house-mcp").call(
    run_input={
    "tool": "lookup_public_company_cik_and_filings",
    "tickerOrCik": "NVDA",
    "forms": "10-K,10-Q,8-K,4",
    "maxResults": 10
}
)

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

### Node.js / TypeScript (`apify-client`)

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: '<YOUR_APIFY_API_TOKEN>' });
const run = await client.actor('church_of_loujess/sec-edgar-companies-house-mcp').call({
    "tool": "lookup_public_company_cik_and_filings",
    "tickerOrCik": "NVDA",
    "forms": "10-K,10-Q,8-K,4",
    "maxResults": 10
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(`Extracted ${items.length} items:`, items);
```

### One-Line Synchronous REST API (`cURL` — ideal for n8n, Make & Clay HTTP Columns)

```bash
curl -X POST "https://api.apify.com/v2/acts/church_of_loujess~sec-edgar-companies-house-mcp/run-sync-get-dataset-items?token=<YOUR_APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tool": "lookup_public_company_cik_and_filings", "tickerOrCik": "NVDA", "forms": "10-K,10-Q,8-K,4", "maxResults": 10}'
```

### Claude Desktop, Cursor, Windsurf & OpenAI MCP Configuration

```json
{
  "mcpServers": {
    "sec-edgar-companies-house-mcp": {
      "url": "https://church-of-loujess--sec-edgar-companies-house-mcp.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_APIFY_API_TOKEN>"
      }
    }
  }
}
```

#### Claude Code CLI one-liner:
```bash
claude mcp add --transport http sec-edgar-companies-house-mcp "https://church-of-loujess--sec-edgar-companies-house-mcp.apify.actor/mcp" --header "Authorization: Bearer <YOUR_APIFY_API_TOKEN>"
```

## ❓ Frequently Asked Questions

### Does `lookup_uk_companies_house` require a UK Companies House API key?

No! Our server queries official public UK Companies House company & officer records directly with **zero external API keys required**.

### Can I pass a stock ticker like `AAPL` instead of a 10-digit SEC CIK?

Yes — both `lookup_public_company_cik_and_filings` and `get_company_xbrl_financial_facts` accept standard US tickers (`AAPL`, `NVDA`, `MSFT`), company names, or numeric CIKs (`0000320193`) and cache `sec.gov/files/company_tickers.json` in memory for instant resolution.

### Are `initialize` and `tools/list` free when connecting Claude or Cursor?

Yes — **`$0.00` FREE**. Billing (`$0.04` Free down to `$0.018` Gold–Diamond) occurs strictly once per `tools/call` execution.

### Which SEC form types can I filter by in `forms`?

Any SEC form code — e.g. `10-K` (annual), `10-Q` (quarterly), `8-K` (current material events), `4` (insider transactions), `DEF 14A` (proxy/exec comp), `13F-HR` (institutional holdings), `S-1` (IPO), or `20-F` (foreign private issuers).

### How many jurisdictions does `trace_global_corporate_ownership_lei` cover?

Over 200 jurisdictions worldwide via the official Global Legal Entity Identifier Foundation (`GLEIF`) v1 API (`api.gleif.org`), including direct and ultimate parent relationship reporting.

### Can I run this from Apify Console without an MCP client?

Yes — choose `tool` in the Console input form and run it like any standard Apify Dataset Actor.

### Is it legal to extract public data with SEC EDGAR, UK Companies House & LEI MCP Server?

SEC EDGAR, UK Companies House & LEI MCP Server only accesses **publicly available web pages, feeds, and registries** that require no private account login or authentication bypass. Keep in mind that extracted contact fields (such as public business emails, names, or usernames) can still qualify as personal data under frameworks like the [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) or CCPA depending on jurisdiction. Always ensure you have a lawful basis (such as legitimate B2B interest) and consult Apify's guide on [the legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).

### Can I integrate SEC EDGAR, UK Companies House & LEI MCP Server with Clay, n8n, Make, Zapier, or Google Sheets?

Yes. Every run outputs clean, flat-friendly fields alongside nested detail objects and integrates natively with **Clay, n8n, Make, Zapier, Slack, HubSpot, Airtable, Google Sheets, Airbyte, LangChain, and CrewAI** via [Apify Integrations](https://apify.com/integrations). You can also attach [webhooks](https://docs.apify.com/integrations/webhooks) to trigger downstream workflows automatically the instant a run succeeds.

### Can I call SEC EDGAR, UK Companies House & LEI MCP Server programmatically via the Apify API?

Yes. Use the official `apify-client` [Python package](https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp/api/python) or [Node.js NPM package](https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp/api/javascript), or call the synchronous `/run-sync-get-dataset-items` REST endpoint directly. Full specifications are in the [Apify API v2 reference](https://docs.apify.com/api/v2).

### SEC EDGAR, UK Companies House & LEI MCP Server not working or need a custom feature?

We actively maintain and monitor all 26 Actors and MCP Servers in our portfolio. If you encounter an edge case, unexpected output, or want to request a new field, please open a ticket on the Actor's [Issues tab](https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp/issues/open) with your Run ID so we can resolve it rapidly.
