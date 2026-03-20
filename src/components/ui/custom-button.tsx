import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "glass";
  size?: "sm" | "default" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";
    
    const variants = {
      default: "bg-primary text-primary-foreground shadow-[0_0_20px_-5px_hsl(var(--primary))] hover:shadow-[0_0_25px_-2px_hsl(var(--primary))] hover:-translate-y-0.5",
      outline: "border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground",
      ghost: "hover:bg-secondary text-foreground",
      glass: "bg-white/5 border border-white/10 text-foreground backdrop-blur-md hover:bg-white/10",
    };

    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 rounded-lg px-4 text-sm",
      lg: "h-14 rounded-2xl px-8 text-lg",
      icon: "h-12 w-12",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
