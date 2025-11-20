import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "plane" | "solid" | "outline";

export type ButtonPropType = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;
