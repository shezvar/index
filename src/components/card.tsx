import React from "react";
import clsx from "clsx";

type CardVariant = "default" | "gradient" | "bordered" | "shadow";
type CardPadding = "none" | "sm" | "md" | "lg" | "xl";
type CardRadius = "default" | "none" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "full";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  radius?: CardRadius;
  children: React.ReactNode;
  className?: string;
}

const baseClasses =
  "rounded-2xl transition-shadow duration-200 shadow-sm border border-stone-200 gap-0 h-min";

const variantClasses: Record<CardVariant, string> = {
  default: "bg-white",
  gradient: "bg-gradient-to-br from-pink-100 via-white to-indigo-100",
  bordered: "bg-white border border-slate-200",
  shadow: "bg-white shadow-lg",
};

const paddingClasses: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-6",
  lg: "p-12",
  xl: "p-16",
};

const radiusClasses: Record<CardRadius, string> = {
  default: "rounded-2xl",
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  xxl: "rounded-2xl",
  xxxl: "rounded-3xl",
  full: "rounded-full",
};

export function Card({
  variant = "default",
  padding = "md",
  radius = "default",
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(baseClasses, variantClasses[variant], paddingClasses[padding], radiusClasses[radius], className)}
      {...props}
    >
      {children}
    </div>
  );
}