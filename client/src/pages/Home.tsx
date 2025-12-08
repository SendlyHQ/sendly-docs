import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, Shield, Globe, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
              <Zap className="w-6 h-6 text-primary fill-primary" />
              <span>DevDocs</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Documentation
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Terminal className="w-3 h-3" />
              <span>v2.0 is now live</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              Build Faster <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                With Better Docs.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              The developer-first platform for building, documenting, and scaling your APIs. 
              Beautiful by default, powerful by design.
            </p>
            
            <div className="flex items-center justify-center gap-4 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Link href="/docs">
                <Button size="lg" className="h-14 px-8 text-lg bg-primary text-black hover:bg-primary/90 font-bold rounded-full">
                  Read the Docs
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 hover:bg-white/10 rounded-full">
                Get API Key <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-20 pointer-events-none" />
      </div>

      {/* Feature Grid */}
      <div className="py-24 border-t border-white/5 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Scale",
                desc: "Deploy your documentation to edge locations worldwide for lightning-fast access."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "SOC2 Type II compliant infrastructure with granular access controls."
              },
              {
                icon: Code2,
                title: "Typed SDKs",
                desc: "Auto-generated SDKs for Node, Python, Go, and Ruby. Always in sync."
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-bold text-xl text-muted-foreground">
            <Zap className="w-6 h-6" />
            <span>DevDocs</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 DevDocs Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
