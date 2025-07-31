import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "text";
type ButtonSize = "none" | "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

const baseClasses =
  "inline-flex items-center justify-center font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-stone-900 text-white hover:bg-stone-700 shadow",
  secondary: "bg-white text-stone-900 border border-stone-300 hover:bg-stone-100 shadow-sm",
  outline: "bg-transparent border border-stone-900 text-stone-900 hover:bg-stone-100",
  ghost: "bg-transparent text-stone-900 hover:bg-stone-100",
  text: "bg-transparent text-stone-900 hover:underline justify-start",
};

const sizeClasses: Record<ButtonSize, string> = {
  none: "p-0 text-sm",
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2 text-base",
  lg: "px-8 py-3 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}