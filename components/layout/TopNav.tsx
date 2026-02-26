"use client";

import React from "react";
import Button from "@/components/ui/Button";

interface TopNavProps {
    balance: string;
}

export default function TopNav({ balance }: TopNavProps) {
    return (
        <header className="bg-[rgb(var(--background))] border-b border-[rgb(var(--border))] h-16 px-6 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <nav>
                    <ul className="flex gap-6 text-sm font-medium">
                        <li className="text-[rgb(var(--label-hover))] cursor-pointer border-b-2 border-[rgb(var(--btn-primary))] pb-1">
                            Dashboard
                        </li>
                        <li className="text-[rgb(var(--label))] hover:text-[rgb(var(--label-hover))] cursor-pointer transition-colors pb-1 border-b-2 border-transparent">
                            Trading
                        </li>
                        <li className="text-[rgb(var(--label))] hover:text-[rgb(var(--label-hover))] cursor-pointer transition-colors pb-1 border-b-2 border-transparent">
                            Bonuses
                        </li>
                        <li className="text-[rgb(var(--label))] hover:text-[rgb(var(--label-hover))] cursor-pointer transition-colors pb-1 border-b-2 border-transparent">
                            Rewards
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                    <span className="text-[rgb(var(--foreground-muted))] text-[10px] uppercase tracking-wider font-bold">Total Balance</span>
                    <span className="text-[rgb(var(--foreground))] font-semibold">{balance} USD</span>
                </div>
                <div className="h-8 w-[1px] bg-[rgb(var(--border))] mx-1" />
                <Button size="sm">Deposit</Button>
            </div>
        </header>
    );
}
