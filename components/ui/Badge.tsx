import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const variantClasses = {
    default: "bg-[rgb(var(--background-soft))] text-[rgb(var(--foreground-muted))]",
    primary: "bg-[rgb(var(--btn-primary))] text-white",
    success: "bg-[var(--success)] text-white",
    warning: "bg-[var(--warning)] text-white",
    danger: "bg-[var(--danger)] text-white",
  };

  return (
    <span className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
