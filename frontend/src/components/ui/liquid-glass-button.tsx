import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────
   SVG Filter — defines the glass-distortion filter used by
   LiquidButton. Render once per page (already embedded inside
   every LiquidButton as a hidden element).
───────────────────────────────────────────────────────────── */
export function GlassFilter() {
  return (
    <svg className="hidden" aria-hidden>
      <defs>
        <filter
          id="liquid-glass-filter"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Standard Button (shadcn-compatible)
───────────────────────────────────────────────────────────── */
const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-primary-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

/* ─────────────────────────────────────────────────────────────
   LiquidButton — glass-morphism button with SVG displacement
   filter and inset shadow highlights.
   
   Usage:
     <LiquidButton size="lg">Explore Projects</LiquidButton>
     <LiquidButton asChild size="sm"><Link to="/team">Team</Link></LiquidButton>
───────────────────────────────────────────────────────────── */
const liquidbuttonVariants = cva(
  "inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:scale-105 duration-300 transition text-white",
        ghost: "hover:bg-white/5 text-gray-300",
        cyan: "bg-transparent text-cyan-300 hover:scale-105 duration-300 transition",
      },
      size: {
        sm:  "h-8  px-4  text-xs  gap-1.5",
        md:  "h-9  px-5  text-sm  gap-2",
        lg:  "h-10 px-6  text-sm  gap-2",
        xl:  "h-12 px-8  text-base gap-2.5",
        xxl: "h-14 px-10 text-base gap-3",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "lg" },
  }
);

/* The glass shimmer shadows — light mode & dark mode */
const GLASS_SHADOW = [
  /* outer */
  "0 0 6px rgba(0,0,0,0.03)",
  "0 2px 6px rgba(0,0,0,0.08)",
  /* inset rim highlights (dark mode: white) */
  "inset 3px 3px 0.5px -3.5px rgba(255,255,255,0.09)",
  "inset -3px -3px 0.5px -3.5px rgba(255,255,255,0.85)",
  "inset 1px 1px 1px -0.5px rgba(255,255,255,0.6)",
  "inset -1px -1px 1px -0.5px rgba(255,255,255,0.6)",
  "inset 0 0 6px 6px rgba(255,255,255,0.12)",
  "inset 0 0 2px 2px rgba(255,255,255,0.06)",
  /* outer glow */
  "0 0 12px rgba(0,0,0,0.15)",
].join(",");

interface LiquidButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof liquidbuttonVariants> {
  asChild?: boolean;
}

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: LiquidButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="liquid-button"
      className={cn(
        "relative",
        liquidbuttonVariants({ variant, size, className })
      )}
      {...props}
    >
      {/* Glass surface (shadow highlights) */}
      <div
        className="absolute inset-0 z-0 h-full w-full rounded-full transition-all"
        style={{ boxShadow: GLASS_SHADOW }}
      />

      {/* Backdrop distortion layer */}
      <div
        className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-full"
        style={{ backdropFilter: 'blur(12px) saturate(1.4) url(#liquid-glass-filter)' }}
      />

      {/* Content */}
      <span className="pointer-events-none relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Embedded SVG filter (hidden) */}
      <GlassFilter />
    </Comp>
  );
}

export { Button, buttonVariants, liquidbuttonVariants, LiquidButton };
export default LiquidButton;
