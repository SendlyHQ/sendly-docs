import { Lock, Sparkles, Zap, Code2, Globe, Shield, Terminal, Book, Cpu, ArrowRight, MessageSquare, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type DocSection = {
  id: string;
  title: string;
  content: React.ReactNode;
  codeBlocks?: {
    title: string;
    filename?: string;
    language: string;
    code: string;
    description?: string;
  }[];
};

export type DocPage = {
  title: string;
  subtitle: string;
  updatedAt: string;
  version?: string;
  sections: DocSection[];
};

export const docsContent: Record<string, DocPage> = {
  // Getting Started
  "/docs": {
    title: "Introduction",
    subtitle: "Welcome to the DevDocs API. Build powerful communication and AI experiences with our unified platform.",
    updatedAt: "Dec 9, 2025",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: (
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              DevDocs provides a modern, developer-friendly API for SMS, Voice, and AI services. 
              Our platform is designed to be composable, reliable, and easy to integrate into your existing stack.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors group">
                <div className="flex items-center gap-2 mb-3 font-semibold text-foreground group-hover:text-primary transition-colors">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Messaging
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Send and receive SMS/MMS globally with high deliverability. Support for alphanumeric sender IDs and short codes.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors group">
                 <div className="flex items-center gap-2 mb-3 font-semibold text-foreground group-hover:text-primary transition-colors">
                  <Sparkles className="w-5 h-5 text-primary" />
                  AI Assistants
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Build conversational AI agents that can speak and text. Seamlessly integrate with LLMs like GPT-4.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors group">
                 <div className="flex items-center gap-2 mb-3 font-semibold text-foreground group-hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  Voice
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Programmable voice calls with text-to-speech, recording, and conference capabilities.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors group">
                 <div className="flex items-center gap-2 mb-3 font-semibold text-foreground group-hover:text-primary transition-colors">
                  <Shield className="w-5 h-5 text-primary" />
                  Security
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Enterprise-grade security with SOC2 compliance, granular API keys, and IP whitelisting.
                </p>
              </div>
            </div>
          </div>
        ),
        codeBlocks: [
          {
            title: "Install SDK",
            filename: "terminal",
            language: "bash",
            code: "npm install @devdocs/sdk\n# or\npip install devdocs",
            description: "Get started by installing our official SDKs."
          }
        ]
      },
      {
        id: "base-url",
        title: "Base URL",
        content: (
           <div className="space-y-4">
             <p className="text-muted-foreground">
               All API requests should be made to our base URL. We recommend using our SDKs which handle the base URL configuration automatically.
             </p>
             <div className="flex items-center gap-2 bg-secondary/50 p-4 rounded-md border border-border font-mono text-sm">
               <Globe className="w-4 h-4 text-muted-foreground" />
               <span className="text-primary">https://api.devdocs.com/v2</span>
             </div>
             <p className="text-sm text-muted-foreground">
               The API supports HTTPS only. All requests must be encrypted.
             </p>
           </div>
        ),
        codeBlocks: [
           {
            title: "Health Check",
            language: "bash",
            code: "curl https://api.devdocs.com/v2/ping",
            description: "Verify connectivity to our API."
          }
        ]
      }
    ]
  },

  "/docs/auth": {
    title: "Authentication",
    subtitle: "Secure your API requests with API Keys.",
    updatedAt: "Dec 1, 2025",
    sections: [
      {
        id: "api-keys",
        title: "API Keys",
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              DevDocs uses API keys to authenticate requests. You can view and manage your API keys in the Dashboard.
              Your API keys carry many privileges, so be sure to keep them secure!
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg flex gap-3">
              <Lock className="w-5 h-5 text-yellow-500 shrink-0" />
              <div className="space-y-1">
                <p className="font-semibold text-yellow-500 text-sm">Security Best Practices</p>
                <ul className="text-sm text-yellow-500/80 list-disc list-inside space-y-1 mt-1">
                  <li>Never share your API keys in client-side code (browsers, mobile apps).</li>
                  <li>Do not commit API keys to version control (git).</li>
                  <li>Use environment variables to inject keys into your application.</li>
                  <li>Rotate your keys periodically.</li>
                </ul>
              </div>
            </div>
          </div>
        ),
        codeBlocks: [
          {
            title: "Authentication Header",
            language: "javascript",
            code: `const client = new DevDocs({
  apiKey: process.env.DEVDOCS_API_KEY
});`,
            description: "Initialize the client with your API key."
          },
          {
            title: "Raw HTTP",
            language: "http",
            code: `Authorization: Bearer YOUR_API_KEY`,
            description: "Pass the key in the Authorization header."
          }
        ]
      },
      {
        id: "errors",
        title: "Auth Errors",
        content: (
          <div className="space-y-4">
            <p className="text-muted-foreground">
              If authentication fails, the API will return a 401 Unauthorized response.
            </p>
            <div className="border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-secondary/30 text-sm font-mono font-bold">
                  <div className="col-span-3">Code</div>
                  <div className="col-span-9">Description</div>
                </div>
                <div className="divide-y divide-border">
                  <div className="grid grid-cols-12 gap-4 p-4 text-sm">
                    <div className="col-span-3 font-mono text-red-400">401</div>
                    <div className="col-span-9 text-muted-foreground">Invalid API Key or missing Authorization header.</div>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-4 text-sm">
                    <div className="col-span-3 font-mono text-red-400">403</div>
                    <div className="col-span-9 text-muted-foreground">API Key does not have permission to access this resource.</div>
                  </div>
                </div>
            </div>
          </div>
        ),
        codeBlocks: [
          {
            title: "Error Response",
            language: "json",
            code: `{
  "error": {
    "code": "authentication_failed",
    "message": "Invalid API Key provided."
  }
}`
          }
        ]
      }
    ]
  },

  // Messaging
  "/docs/sms": {
    title: "Send SMS",
    subtitle: "Programmatically send text messages to any number worldwide.",
    updatedAt: "Nov 28, 2025",
    version: "v2.1",
    sections: [
      {
        id: "send-message",
        title: "Send a Message",
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Send a message to a specific phone number. The message can be an SMS, MMS, or WhatsApp message depending on the content and sender.
            </p>
             <div className="flex items-center gap-2 my-4 p-3 bg-secondary/30 rounded-md border border-border w-fit">
                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 font-bold">POST</Badge>
                <code className="text-sm font-mono text-foreground">https://api.devdocs.com/v2/messages</code>
             </div>
             
             <h3 className="font-semibold text-foreground mt-8 mb-4 text-lg">Body Parameters</h3>
             <div className="border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-secondary/30 text-sm font-mono font-bold">
                  <div className="col-span-3">Parameter</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-7">Description</div>
                </div>
                <div className="divide-y divide-border">
                  <div className="grid grid-cols-12 gap-4 p-4 text-sm hover:bg-white/5 transition-colors">
                     <div className="col-span-3 font-mono text-primary">to</div>
                     <div className="col-span-2 font-mono text-muted-foreground">string</div>
                     <div className="col-span-7 text-muted-foreground">
                       The destination phone number in E.164 format (e.g., +15550001234).
                       <span className="ml-2 inline-block px-1.5 py-0.5 rounded border border-red-500/30 bg-red-500/10 text-red-500 text-[10px] uppercase font-bold">Required</span>
                     </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-4 text-sm hover:bg-white/5 transition-colors">
                     <div className="col-span-3 font-mono text-primary">from</div>
                     <div className="col-span-2 font-mono text-muted-foreground">string</div>
                     <div className="col-span-7 text-muted-foreground">
                       Your DevDocs phone number or Sender ID.
                       <span className="ml-2 inline-block px-1.5 py-0.5 rounded border border-red-500/30 bg-red-500/10 text-red-500 text-[10px] uppercase font-bold">Required</span>
                     </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-4 text-sm hover:bg-white/5 transition-colors">
                     <div className="col-span-3 font-mono text-primary">text</div>
                     <div className="col-span-2 font-mono text-muted-foreground">string</div>
                     <div className="col-span-7 text-muted-foreground">
                       The body of the message. Max 1600 characters.
                       <span className="ml-2 inline-block px-1.5 py-0.5 rounded border border-red-500/30 bg-red-500/10 text-red-500 text-[10px] uppercase font-bold">Required</span>
                     </div>
                  </div>
                   <div className="grid grid-cols-12 gap-4 p-4 text-sm hover:bg-white/5 transition-colors">
                     <div className="col-span-3 font-mono text-primary">media_urls</div>
                     <div className="col-span-2 font-mono text-muted-foreground">array</div>
                     <div className="col-span-7 text-muted-foreground">
                       List of media URLs to include in the message (MMS/WhatsApp only).
                     </div>
                  </div>
                </div>
             </div>
          </div>
        ),
        codeBlocks: [
          {
            title: "Request",
            language: "javascript",
            code: `const message = await client.messages.create({
  to: '+15558675309',
  from: '+15017250604',
  text: 'Your verification code is 123456'
});

console.log(message.sid);`
          },
          {
            title: "Response",
            language: "json",
            code: `{
  "sid": "SM8760542c864d1a92",
  "status": "queued",
  "to": "+15558675309",
  "from": "+15017250604",
  "body": "Your verification code is 123456",
  "date_created": "2025-11-28T10:30:00Z"
}`
          }
        ]
      }
    ]
  },

  // Voice
  "/docs/voice": {
    title: "Make a Call",
    subtitle: "Initiate outbound phone calls with programmable voice control.",
    updatedAt: "Oct 15, 2025",
    sections: [
      {
        id: "create-call",
        title: "Create Call",
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Start a new phone call to a destination number. You can control the call flow using our Call Control XML (CCXML) or by pointing to a webhook.
            </p>
             <div className="flex items-center gap-2 my-4 p-3 bg-secondary/30 rounded-md border border-border w-fit">
                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 font-bold">POST</Badge>
                <code className="text-sm font-mono text-foreground">https://api.devdocs.com/v2/calls</code>
             </div>
             
             <h3 className="font-semibold text-foreground mt-8 mb-4 text-lg">Body Parameters</h3>
             <div className="border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-secondary/30 text-sm font-mono font-bold">
                  <div className="col-span-3">Parameter</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-7">Description</div>
                </div>
                <div className="divide-y divide-border">
                  <div className="grid grid-cols-12 gap-4 p-4 text-sm hover:bg-white/5 transition-colors">
                     <div className="col-span-3 font-mono text-primary">to</div>
                     <div className="col-span-2 font-mono text-muted-foreground">string</div>
                     <div className="col-span-7 text-muted-foreground">
                       The destination phone number.
                       <span className="ml-2 inline-block px-1.5 py-0.5 rounded border border-red-500/30 bg-red-500/10 text-red-500 text-[10px] uppercase font-bold">Required</span>
                     </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-4 text-sm hover:bg-white/5 transition-colors">
                     <div className="col-span-3 font-mono text-primary">from</div>
                     <div className="col-span-2 font-mono text-muted-foreground">string</div>
                     <div className="col-span-7 text-muted-foreground">
                       Your DevDocs phone number.
                       <span className="ml-2 inline-block px-1.5 py-0.5 rounded border border-red-500/30 bg-red-500/10 text-red-500 text-[10px] uppercase font-bold">Required</span>
                     </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-4 text-sm hover:bg-white/5 transition-colors">
                     <div className="col-span-3 font-mono text-primary">url</div>
                     <div className="col-span-2 font-mono text-muted-foreground">string</div>
                     <div className="col-span-7 text-muted-foreground">
                       Absolute URL that returns CCXML instructions for the call.
                     </div>
                  </div>
                </div>
             </div>
          </div>
        ),
        codeBlocks: [
          {
            title: "Initiate Call",
            language: "javascript",
            code: `const call = await client.calls.create({
  to: '+14155551212',
  from: '+15017122661',
  url: 'https://demo.devdocs.com/voice.xml'
});

console.log(call.sid);`
          },
          {
            title: "Response",
            language: "json",
            code: `{
  "sid": "CAe1644a7...",
  "status": "queued",
  "direction": "outbound-api",
  "to": "+14155551212",
  "from": "+15017122661"
}`
          }
        ]
      }
    ]
  },

  // AI
  "/docs/ai/assistants": {
    title: "List Assistants",
    subtitle: "Retrieve a list of all AI Assistants configured by the user.",
    updatedAt: "Dec 9, 2025",
    version: "AI v1.0",
    sections: [
      {
        id: "intro",
        title: "Overview",
        content: (
          <div className="space-y-6">
             <p className="text-muted-foreground leading-relaxed">
              Retrieve a list of all AI Assistants configured by the user. 
              This endpoint returns a paginated list of assistants sorted by creation date.
            </p>
             <div className="flex items-center gap-2 my-4 p-3 bg-secondary/30 rounded-md border border-border w-fit">
                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 font-bold">GET</Badge>
                <code className="text-sm font-mono text-foreground">https://api.devdocs.com/v2/ai/assistants</code>
             </div>
             
             <h3 className="font-semibold text-foreground mt-8 mb-4 text-lg">Query Parameters</h3>
             <div className="border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-secondary/30 text-sm font-mono font-bold">
                  <div className="col-span-3">Parameter</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-7">Description</div>
                </div>
                <div className="divide-y divide-border">
                  <div className="grid grid-cols-12 gap-4 p-4 text-sm hover:bg-white/5 transition-colors">
                     <div className="col-span-3 font-mono text-primary">limit</div>
                     <div className="col-span-2 font-mono text-muted-foreground">integer</div>
                     <div className="col-span-7 text-muted-foreground">
                       Number of results to return. Default is 20.
                     </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-4 text-sm hover:bg-white/5 transition-colors">
                     <div className="col-span-3 font-mono text-primary">after</div>
                     <div className="col-span-2 font-mono text-muted-foreground">string</div>
                     <div className="col-span-7 text-muted-foreground">
                       Cursor for pagination.
                     </div>
                  </div>
                </div>
             </div>
          </div>
        ),
        codeBlocks: [
          {
            title: "List Request",
            language: "javascript",
            code: `const assistants = await client.ai.assistants.list({
  limit: 20
});

assistants.data.forEach(a => console.log(a.name));`
          }
        ]
      },
      {
        id: "response",
        title: "Response",
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Returns a list of Assistant objects containing configuration, tools, and voice settings.
            </p>
            <div className="border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-secondary/30 text-sm font-mono font-bold">
                  <div className="col-span-4">Field</div>
                  <div className="col-span-8">Description</div>
                </div>
                <div className="divide-y divide-border">
                  <div className="grid grid-cols-12 gap-4 p-4 text-sm hover:bg-white/5 transition-colors">
                    <div className="col-span-4 font-mono text-primary">id</div>
                    <div className="col-span-8 text-muted-foreground">Unique identifier for the assistant</div>
                  </div>
                  <div className="grid grid-cols-12 gap-4 p-4 text-sm hover:bg-white/5 transition-colors">
                    <div className="col-span-4 font-mono text-primary">model</div>
                    <div className="col-span-8 text-muted-foreground">The LLM model ID (e.g. gpt-4)</div>
                  </div>
                   <div className="grid grid-cols-12 gap-4 p-4 text-sm hover:bg-white/5 transition-colors">
                    <div className="col-span-4 font-mono text-primary">tools</div>
                    <div className="col-span-8 text-muted-foreground">Array of enabled tools (webhooks, retrieval, etc)</div>
                  </div>
                </div>
            </div>
          </div>
        ),
        codeBlocks: [
          {
             title: "Response Schema",
             language: "json",
             code: `{
  "data": [
    {
      "id": "asst_123",
      "name": "Support Bot",
      "model": "gpt-4",
      "tools": [{"type": "retrieval"}],
      "voice_settings": {
        "voice": "alloy"
      }
    }
  ],
  "meta": {
    "total_pages": 1,
    "current_page": 1
  }
}`
          }
        ]
      }
    ]
  },

  // Development
  "/docs/development": {
    title: "Development",
    subtitle: "Tools, libraries, and guides for building with DevDocs.",
    updatedAt: "Dec 5, 2025",
    sections: [
      {
        id: "sdks",
        title: "SDKs & Libraries",
        content: (
          <div className="space-y-4">
            <p className="text-muted-foreground">
              We provide official SDKs for major programming languages to help you integrate faster.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
               <div className="p-4 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="font-bold mb-2 text-primary flex items-center gap-2">
                     <Terminal className="w-4 h-4" /> Node.js
                  </div>
                  <code className="text-xs bg-secondary p-1 rounded">npm install @devdocs/sdk</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Official Node.js library. TypeScript support included.
                  </p>
               </div>
               <div className="p-4 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="font-bold mb-2 text-primary flex items-center gap-2">
                     <Cpu className="w-4 h-4" /> Python
                  </div>
                  <code className="text-xs bg-secondary p-1 rounded">pip install devdocs</code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Official Python client. Asyncio support available.
                  </p>
               </div>
            </div>
          </div>
        )
      },
      {
        id: "webhooks",
        title: "Webhooks",
        content: (
          <div className="space-y-4">
             <p className="text-muted-foreground">
               Webhooks allow your application to receive real-time updates about events that happen within DevDocs, such as incoming messages or call status changes.
             </p>
             <div className="bg-secondary/20 border border-border p-4 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">Verifying Webhooks</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  To ensure the request came from DevDocs, verify the signature header.
                </p>
                <code className="text-xs font-mono bg-secondary px-2 py-1 rounded text-primary">X-DevDocs-Signature</code>
             </div>
          </div>
        ),
        codeBlocks: [
          {
            title: "Webhook Handler (Express)",
            language: "javascript",
            code: `app.post('/webhooks/messages', (req, res) => {
  const signature = req.headers['x-devdocs-signature'];
  
  if (DevDocs.verify(req.body, signature)) {
    console.log('Received message:', req.body.text);
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});`,
            description: "Example of handling an incoming webhook."
          }
        ]
      }
    ]
  },

  // API Reference
  "/docs/api": {
    title: "API Reference",
    subtitle: "Complete reference documentation for all DevDocs API endpoints.",
    updatedAt: "Dec 9, 2025",
    sections: [
      {
        id: "endpoints",
        title: "All Endpoints",
        content: (
          <div className="space-y-4">
             <p className="text-muted-foreground">
                Browse our comprehensive API reference.
             </p>
             <div className="grid gap-2">
                <div className="p-3 border border-border rounded flex items-center justify-between hover:bg-secondary/50 cursor-pointer transition-colors">
                   <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">POST</Badge>
                      <span className="font-mono text-sm">/v2/messages</span>
                   </div>
                   <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
                 <div className="p-3 border border-border rounded flex items-center justify-between hover:bg-secondary/50 cursor-pointer transition-colors">
                   <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">GET</Badge>
                      <span className="font-mono text-sm">/v2/ai/assistants</span>
                   </div>
                   <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="p-3 border border-border rounded flex items-center justify-between hover:bg-secondary/50 cursor-pointer transition-colors">
                   <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">POST</Badge>
                      <span className="font-mono text-sm">/v2/calls</span>
                   </div>
                   <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
             </div>
          </div>
        )
      }
    ]
  }
};
