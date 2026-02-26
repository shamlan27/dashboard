import React from "react";

interface LogoProps {
    className?: string;
}

export default function Logo({ className = "h-8" }: LogoProps) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[rgb(var(--btn-primary))]"
            >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="font-bold text-xl tracking-tight text-[rgb(var(--foreground))]">TRADING CRM</span>
        </div>
    );
}
