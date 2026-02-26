"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
}

/**
 * 🎨 Industry Standard Button Component (Tailwind v4)
 * Colors controlled via CSS variables in app/globals.css
 * Compatible with Tailwind utility classes
 */
export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-[rgb(var(--btn-primary))] text-[rgb(var(--btn-primary-text))] hover:bg-[rgb(var(--btn-primary-hover))]",
        secondary: "bg-[rgb(var(--btn-secondary))] text-[rgb(var(--btn-secondary-text))] hover:bg-[rgb(var(--btn-secondary-hover))]",
        outline: "border border-[rgb(var(--border))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--background-soft))]",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

