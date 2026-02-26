"use client";

import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    title?: string;
}

export default function Card({ children, title, className = "", ...props }: CardProps) {
    return (
        <div className={`card ${className}`} {...props}>
            {title && (
                <div className="mb-4 pb-2 border-b border-[rgb(var(--border))]">
                    <h3 className="font-semibold text-[rgb(var(--foreground))]">{title}</h3>
                </div>
            )}
            <div>{children}</div>
        </div>
    );
}
