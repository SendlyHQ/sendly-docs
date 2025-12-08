import { DocsLayout } from "@/components/layout/DocsLayout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight, Globe, Lock, Play } from "lucide-react";

export default function Docs() {
  return (
    <DocsLayout>
      <div className="flex flex-col xl:flex-row min-h-screen">
        {/* Left/Center Content Column */}
        <div className="flex-1 px-8 py-12 max-w-4xl mx-auto xl:mx-0 xl:max-w-none xl:w-[60%] border-r border-border/50">
          <div className="space-y-12">
            
            {/* Header Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10 rounded-full px-3 py-1">API v2.0</Badge>
                <span className="text-sm text-muted-foreground">Updated Dec 8, 2025</span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground font-sans">
                Messaging API
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Send and receive SMS, MMS, and WhatsApp messages globally. Our API is built for speed, reliability, and developer happiness.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Button className="bg-primary text-black hover:bg-primary/90 font-semibold h-12 px-6">
                  Get API Key <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary h-12 px-6">
                  View Status
                </Button>
              </div>
            </section>

            {/* Authentication Section */}
            <section id="auth" className="space-y-6 pt-12 border-t border-border/50">
              <h2 className="text-3xl font-bold text-foreground">Authentication</h2>
              <p className="text-muted-foreground leading-relaxed">
                The DevDocs API uses API keys to authenticate requests. You can view and manage your API keys in the Dashboard.
              </p>
              
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Lock className="w-5 h-5" />
                  <span className="font-semibold">Security Note</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
                </p>
              </div>
            </section>

            {/* Endpoint: Send Message */}
            <section id="send-message" className="space-y-8 pt-12 border-t border-border/50">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded bg-green-500/10 text-green-500 font-mono text-sm font-bold border border-green-500/20">POST</span>
                <code className="text-lg font-mono text-foreground">/v2/messages</code>
              </div>
              
              <h2 className="text-3xl font-bold text-foreground">Send a message</h2>
              <p className="text-muted-foreground">
                Send a message to a specific phone number. The message can be an SMS, MMS, or WhatsApp message.
              </p>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground">Body Parameters</h3>
                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-secondary/30 text-sm font-mono text-muted-foreground">
                    <div className="col-span-3">Parameter</div>
                    <div className="col-span-2">Type</div>
                    <div className="col-span-7">Description</div>
                  </div>
                  
                  <div className="divide-y divide-border">
                    <div className="grid grid-cols-12 gap-4 p-4 text-sm">
                      <div className="col-span-3 font-mono text-primary">to</div>
                      <div className="col-span-2 font-mono text-muted-foreground">string</div>
                      <div className="col-span-7 text-muted-foreground">The destination phone number in E.164 format.</div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 p-4 text-sm">
                      <div className="col-span-3 font-mono text-primary">from</div>
                      <div className="col-span-2 font-mono text-muted-foreground">string</div>
                      <div className="col-span-7 text-muted-foreground">Your DevDocs phone number or Sender ID.</div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 p-4 text-sm">
                      <div className="col-span-3 font-mono text-primary">text</div>
                      <div className="col-span-2 font-mono text-muted-foreground">string</div>
                      <div className="col-span-7 text-muted-foreground">The content of the message. Max 1600 characters.</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Right Column - Code Snippets (Sticky) */}
        <div className="hidden xl:block w-[40%] bg-sidebar/50 border-l border-border p-8 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar">
          <div className="space-y-12">
            
            {/* Auth Snippet */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Authentication</h3>
              </div>
              <CodeBlock 
                filename="auth_setup.js"
                language="javascript"
                code={`import { DevDocs } from '@devdocs/sdk';

const client = new DevDocs({
  apiKey: process.env.DEVDOCS_API_KEY
});

// Client is now ready to use`}
              />
            </div>

            {/* Request Snippet */}
            <div className="space-y-4 pt-12">
               <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Request</h3>
                <div className="flex gap-2">
                   <Badge variant="secondary" className="text-xs cursor-pointer hover:bg-primary hover:text-black transition-colors">Node</Badge>
                   <Badge variant="outline" className="text-xs cursor-pointer hover:bg-primary hover:text-black transition-colors">Python</Badge>
                   <Badge variant="outline" className="text-xs cursor-pointer hover:bg-primary hover:text-black transition-colors">cURL</Badge>
                </div>
              </div>
              
              <Tabs defaultValue="node" className="w-full">
                <CodeBlock 
                  filename="send_message.js"
                  language="javascript"
                  code={`const message = await client.messages.create({
  to: '+15558675309',
  from: '+15017250604',
  text: 'Hello from DevDocs! 🚀'
});

console.log(message.sid);`}
                />
              </Tabs>
            </div>

             {/* Response Snippet */}
             <div className="space-y-4">
               <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Response</h3>
                <span className="text-xs font-mono text-green-500">200 OK</span>
              </div>
              <CodeBlock 
                language="json"
                code={`{
  "sid": "SM8760542c864d1a92",
  "date_created": "2025-12-08T17:05:00.000Z",
  "date_updated": "2025-12-08T17:05:00.000Z",
  "direction": "outbound-api",
  "to": "+15558675309",
  "from": "+15017250604",
  "body": "Hello from DevDocs! 🚀",
  "status": "queued",
  "error_code": null,
  "price": null,
  "price_unit": "USD"
}`}
              />
            </div>

          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
