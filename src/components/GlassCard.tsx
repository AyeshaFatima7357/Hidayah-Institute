import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type GlassCardProps = HTMLAttributes<HTMLDivElement>;

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("glass-card", className)} {...props} />
  ),
);
GlassCard.displayName = "GlassCard";