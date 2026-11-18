#!/usr/bin/env node
/**
 * SEC EDGAR, UK Companies House & Global LEI Corporate Intelligence MCP Server (sec-edgar-companies-house-mcp)
 * Dual-Transport Model Context Protocol (MCP) Server:
 *   1. Local stdio transport (default: `npx -y github:willowswt/sec-edgar-companies-house-mcp`)
 *   2. Streamable HTTP transport (`--http` or remote hosted endpoint `https://church-of-loujess--sec-edgar-companies-house-mcp.apify.actor/mcp`)
 *
 * Schema discovery (`initialize`, `tools/list`, `ping`, `resources/list`, `prompts/list`)
 * runs locally with zero latency and requires no API key.
 * Live tool execution (`tools/call`) routes through the cloud Standby cluster at:
 *   https://church-of-loujess--sec-edgar-companies-house-mcp.apify.actor/mcp
 * Get your free Apify API token ($5.00/mo free credit included) at:
 *   https://console.apify.com/settings/integrations
 * Apify Store listing & documentation:
 *   https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp
 */

import http from 'node:http';
import readline from 'node:readline';
import crypto from 'node:crypto';

const SERVER_NAME = "sec-edgar-companies-house-mcp";
const SERVER_VERSION = '1.0.0';
const REMOTE_MCP_ENDPOINT = "https://church-of-loujess--sec-edgar-companies-house-mcp.apify.actor/mcp";
const STORE_URL = "https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp";
const SUPPORTED_PROTOCOLS = new Set(['2025-06-18', '2025-03-26', '2024-11-05']);

const SERVER_INSTRUCTIONS = "Streamable-HTTP & stdio MCP server for US SEC EDGAR 10-K/10-Q/8-K filings & XBRL financials, UK Companies House registries & officers, and GLEIF global LEI parent/subsidiary ownership trees. Remote Streamable-HTTP endpoint: https://church-of-loujess--sec-edgar-companies-house-mcp.apify.actor/mcp | Store: https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp";

const TOOLS = [
  {
    "name": "lookup_public_company_cik_and_filings",
    "description": "Resolve any US public company ticker (e.g. 'NVDA', 'AAPL', 'MSFT') or SEC CIK and retrieve entity metadata (CIK, SIC industry, state of incorporation, fiscal year end) plus recent SEC EDGAR filings (filterable by form types such as '10-K,10-Q,8-K,4,DEF 14A') with direct EDGAR document links.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "tickerOrCik": {
          "type": "string",
          "description": "US stock ticker or SEC CIK (e.g. 'NVDA', 'AAPL', '0000320193')."
        },
        "forms": {
          "type": "string",
          "description": "Optional comma-separated form filter (e.g. '10-K,10-Q,8-K,4')."
        },
        "maxFilings": {
          "type": "integer",
          "description": "Maximum recent filings to return (1-25, default 10).",
          "default": 10
        }
      },
      "required": [
        "tickerOrCik"
      ]
    },
    "annotations": {
      "title": "Lookup Public Company Cik And Filings",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  },
  {
    "name": "search_sec_edgar_filings_fulltext",
    "description": "Full-text search across official US SEC EDGAR filings via EFTS (`efts.sec.gov`) for any keyword or phrase (e.g. 'cybersecurity incident', 'material weakness', 'artificial intelligence', 'going concern'), with optional form filter (`forms` like '10-K,8-K') and start date (`startDate` YYYY-MM-DD).",
    "inputSchema": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string",
          "description": "Exact phrase or keyword query to search across SEC filings."
        },
        "forms": {
          "type": "string",
          "description": "Optional comma-separated forms (e.g. '10-K,10-Q,8-K', default '10-K,10-Q,8-K').",
          "default": "10-K,10-Q,8-K"
        },
        "startDate": {
          "type": "string",
          "description": "Optional start date YYYY-MM-DD (e.g. '2025-01-01')."
        },
        "maxResults": {
          "type": "integer",
          "description": "Max hits to return (1-25, default 10).",
          "default": 10
        }
      },
      "required": [
        "query"
      ]
    },
    "annotations": {
      "title": "Search Sec Edgar Filings Fulltext",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  },
  {
    "name": "get_company_xbrl_financial_facts",
    "description": "Fetch audited US-GAAP XBRL historical financial metrics from SEC EDGAR (`Revenues`, `NetIncomeLoss`, `Assets`, `Liabilities`, `CashAndCashEquivalentsAtCarryingValue`, `OperatingIncomeLoss`, `EarningsPerShareDiluted`) for any US ticker or CIK (`tickerOrCik`), returning annual (10-K) and quarterly (10-Q) reported figures.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "tickerOrCik": {
          "type": "string",
          "description": "US stock ticker or SEC CIK (e.g. 'AAPL', 'MSFT', 'NVDA')."
        }
      },
      "required": [
        "tickerOrCik"
      ]
    },
    "annotations": {
      "title": "Get Company Xbrl Financial Facts",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  },
  {
    "name": "lookup_uk_companies_house",
    "description": "Search official UK Companies House (`find-and-update.company-information.service.gov.uk`) by UK company name or 8-character company number (`query`), returning registration status, incorporation date, registered address, SIC industry codes, and active officers/directors — zero API key required.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string",
          "description": "UK company name or company number (e.g. 'Revolut', 'DeepMind', '08804411')."
        },
        "enrichTopOfficers": {
          "type": "boolean",
          "description": "Also fetch SIC codes & active officers for top match (default true).",
          "default": true
        },
        "maxResults": {
          "type": "integer",
          "description": "Maximum matching UK companies to return (1-15, default 5).",
          "default": 5
        }
      },
      "required": [
        "query"
      ]
    },
    "annotations": {
      "title": "Lookup Uk Companies House",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  },
  {
    "name": "trace_global_corporate_ownership_lei",
    "description": "Search the official GLEIF Global Legal Entity Identifier (LEI) Registry (`api.gleif.org`) by legal entity name or 20-character LEI (`query`) across 200+ jurisdictions, returning LEI, legal name, jurisdiction, registration ID, headquarters address, entity status, and direct/ultimate parent ownership links.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string",
          "description": "Company legal name or 20-char LEI code (e.g. 'Stripe', 'Revolut', 'ASML')."
        },
        "maxResults": {
          "type": "integer",
          "description": "Maximum entities to return (1-15, default 6).",
          "default": 6
        }
      },
      "required": [
        "query"
      ]
    },
    "annotations": {
      "title": "Trace Global Corporate Ownership Lei",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  }
];

async function forwardToolCallToRemote(name, args) {
    const token = (
        process.env.APIFY_API_TOKEN ||
        process.env.APIFY_TOKEN ||
        process.env.MCP_API_TOKEN ||
        ''
    ).trim();

    if (!token) {
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(
                        {
                            status: 'configuration_required',
                            server: SERVER_NAME,
                            tool: name,
                            message:
                                'APIFY_API_TOKEN is required to execute live data extraction tools. ' +
                                'Create a free Apify account ($5.00 monthly credit included) and copy your token from ' +
                                'https://console.apify.com/settings/integrations, or connect directly to the remote ' +
                                `Streamable-HTTP endpoint: ${REMOTE_MCP_ENDPOINT}`,
                            remoteStreamableHttpEndpoint: REMOTE_MCP_ENDPOINT,
                            apifyStoreUrl: STORE_URL,
                        },
                        null,
                        2
                    ),
                },
            ],
            isError: true,
        };
    }

    const rpcPayload = {
        jsonrpc: '2.0',
        id: crypto.randomUUID(),
        method: 'tools/call',
        params: { name, arguments: args || {} },
    };

    const resp = await fetch(REMOTE_MCP_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(rpcPayload),
    });

    if (!resp.ok) {
        const errBody = await resp.text();
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify({
                        error: `Remote Standby HTTP ${resp.status}: ${errBody.slice(0, 400)}`,
                        endpoint: REMOTE_MCP_ENDPOINT,
                        storeUrl: STORE_URL,
                    }),
                },
            ],
            isError: true,
        };
    }

    const data = await resp.json();
    if (data && data.result) {
        return data.result;
    }
    if (data && data.error) {
        return {
            content: [{ type: 'text', text: JSON.stringify(data.error) }],
            isError: true,
        };
    }
    return {
        content: [{ type: 'text', text: JSON.stringify(data) }],
        isError: false,
    };
}

async function handleRpcMessage(msg) {
    if (!msg || typeof msg !== 'object' || msg.jsonrpc !== '2.0') {
        return { jsonrpc: '2.0', id: msg?.id ?? null, error: { code: -32600, message: 'Invalid JSON-RPC 2.0 request' } };
    }
    const method = String(msg.method || '');
    const hasId = msg.id !== undefined && msg.id !== null;
    if (!hasId || method.startsWith('notifications/')) {
        return null;
    }
    const id = msg.id;
    const params = msg.params && typeof msg.params === 'object' ? msg.params : {};

    if (method === 'initialize') {
        const clientPv = String(params.protocolVersion || '2025-06-18');
        const protocolVersion = SUPPORTED_PROTOCOLS.has(clientPv) ? clientPv : '2025-06-18';
        return {
            jsonrpc: '2.0',
            id,
            result: {
                protocolVersion,
                capabilities: {
                    tools: { listChanged: false },
                    resources: { subscribe: false, listChanged: false },
                    prompts: { listChanged: false },
                },
                serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
                instructions: SERVER_INSTRUCTIONS,
            },
        };
    }

    if (method === 'ping') {
        return { jsonrpc: '2.0', id, result: {} };
    }

    if (method === 'tools/list') {
        return { jsonrpc: '2.0', id, result: { tools: TOOLS } };
    }

    if (method === 'resources/list') {
        return { jsonrpc: '2.0', id, result: { resources: [] } };
    }

    if (method === 'resources/templates/list') {
        return { jsonrpc: '2.0', id, result: { resourceTemplates: [] } };
    }

    if (method === 'prompts/list') {
        return { jsonrpc: '2.0', id, result: { prompts: [] } };
    }

    if (method === 'tools/call') {
        const toolName = String(params.name || '').trim();
        const toolArgs = params.arguments && typeof params.arguments === 'object' ? params.arguments : {};
        const toolDef = TOOLS.find((t) => t.name === toolName);
        if (!toolDef) {
            return {
                jsonrpc: '2.0',
                id,
                error: { code: -32602, message: `Unknown tool: ${toolName}` },
            };
        }
        for (const reqField of toolDef.inputSchema?.required || []) {
            if (toolArgs[reqField] === undefined || toolArgs[reqField] === null || String(toolArgs[reqField]).trim() === '') {
                return {
                    jsonrpc: '2.0',
                    id,
                    error: { code: -32602, message: `Missing required parameter: ${reqField}` },
                };
            }
        }
        try {
            const toolResult = await forwardToolCallToRemote(toolName, toolArgs);
            return { jsonrpc: '2.0', id, result: toolResult };
        } catch (err) {
            return {
                jsonrpc: '2.0',
                id,
                result: {
                    content: [{ type: 'text', text: JSON.stringify({ error: String(err?.message || err) }) }],
                    isError: true,
                },
            };
        }
    }

    return {
        jsonrpc: '2.0',
        id,
        error: { code: -32601, message: `Method not found: ${method}` },
    };
}

const isHttpMode = process.argv.includes('--http') || process.argv.includes('--standby') || process.env.MCP_TRANSPORT === 'http';

if (isHttpMode) {
    const port = Number(process.env.PORT || process.env.ACTOR_WEB_SERVER_PORT || 4321);
    const server = http.createServer(async (req, res) => {
        const urlPath = (req.url || '/').split('?')[0];
        if (req.method === 'GET' && (urlPath === '/' || urlPath === '/health')) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(
                JSON.stringify({
                    status: 'ok',
                    server: SERVER_NAME,
                    version: SERVER_VERSION,
                    remoteEndpoint: REMOTE_MCP_ENDPOINT,
                    storeUrl: STORE_URL,
                    tools: TOOLS.map((t) => t.name),
                })
            );
            return;
        }
        if (urlPath === '/mcp' && req.method === 'POST') {
            const chunks = [];
            for await (const ch of req) chunks.push(ch);
            let body;
            try {
                body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
            } catch {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }));
                return;
            }
            const out = await handleRpcMessage(body);
            if (!out) {
                res.writeHead(202);
                res.end();
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(out));
            return;
        }
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    });
    server.listen(port, '0.0.0.0', () => {
        console.error(`[${SERVER_NAME}] HTTP MCP server listening on 0.0.0.0:${port}/mcp`);
    });
} else {
    const rl = readline.createInterface({
        input: process.stdin,
        terminal: false,
    });
    rl.on('line', async (line) => {
        const trimmed = line.trim();
        if (!trimmed) return;
        let parsed;
        try {
            parsed = JSON.parse(trimmed);
        } catch {
            process.stdout.write(
                JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }) + '\n'
            );
            return;
        }
        if (Array.isArray(parsed)) {
            const responses = [];
            for (const item of parsed) {
                const r = await handleRpcMessage(item);
                if (r) responses.push(r);
            }
            if (responses.length > 0) {
                process.stdout.write(JSON.stringify(responses) + '\n');
            }
            return;
        }
        const resp = await handleRpcMessage(parsed);
        if (resp) {
            process.stdout.write(JSON.stringify(resp) + '\n');
        }
    });
}
