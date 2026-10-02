import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * shadcn/ui cn utility — merges Tailwind classes cleanly.
 * Usage: cn("px-4", isActive && "bg-cyan-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
