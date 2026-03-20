import React from "react";
import { Code, Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/5 bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          © {year} Jeriel Nkouadja Mbiedou. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5">
          <span>Built with</span>
          <Code className="w-4 h-4 text-primary" />
          <span>and</span>
          <Heart className="w-4 h-4 text-red-500" />
        </div>
      </div>
    </footer>
  );
}
