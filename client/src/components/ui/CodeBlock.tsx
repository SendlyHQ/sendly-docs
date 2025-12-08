import { Highlight, themes } from "prism-react-renderer";
import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ code, language = "javascript", filename, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("group relative rounded-lg border border-border bg-[#0a0a0a] overflow-hidden my-4", className)}>
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-[#121212]">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <Terminal className="w-3 h-3" />
            <span>{filename}</span>
          </div>
          <div className="flex items-center gap-2">
             <span className="text-[10px] text-muted-foreground uppercase">{language}</span>
          </div>
        </div>
      )}
      
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary hover:bg-primary/10"
          onClick={onCopy}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </Button>

        <Highlight
          theme={themes.vsDark}
          code={code.trim()}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={cn("p-4 overflow-x-auto text-sm font-mono leading-relaxed", className)} style={{ ...style, background: 'transparent' }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="inline-block w-8 select-none text-muted-foreground/30 text-xs text-right mr-4">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
