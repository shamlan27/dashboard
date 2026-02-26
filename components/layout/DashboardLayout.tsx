"use client";

import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { UINavSection } from "@/lib/types";

interface DashboardLayoutProps {
    children: React.ReactNode;
    nav: UINavSection[];
    balance: string;
}

export default function DashboardLayout({
    children,
    nav,
    balance,
}: DashboardLayoutProps) {
    return (
        <div className="flex h-screen bg-[var(--backgroundSoft)] overflow-hidden">
            <SideNav nav={nav} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopNav balance={balance} />
                <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
