"use client";

import React, { useState, useEffect } from "react";
import { UINavSection } from "@/lib/types";
import Badge from "@/components/ui/Badge";
import Logo from "@/components/ui/Logo";
import {
    ChartBarIcon,
    WalletIcon,
    GlobeAltIcon,
    UserGroupIcon,
    Cog6ToothIcon,
    QuestionMarkCircleIcon,
    SunIcon,
    MoonIcon,
    UserPlusIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon
} from "@heroicons/react/24/outline";

interface SideNavProps {
    nav: UINavSection[];
}

const iconMap: Record<string, any> = {
    Trading: ChartBarIcon,
    "Payments & wallet": WalletIcon,
    Analytics: ChartBarIcon,
    "Finovation benefits": UserGroupIcon,
    "Copy Trading": UserGroupIcon,
    "Support Hub": QuestionMarkCircleIcon,
    Settings: Cog6ToothIcon
};

export default function SideNav({ nav }: SideNavProps) {
    const [openSection, setOpenSection] = useState<string | null>("Trading");
    const [collapsed, setCollapsed] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme") || "light";
        setTheme(saved as "light" | "dark");
        document.documentElement.setAttribute("data-theme", saved);
    }, []);

    const toggleTheme = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.setAttribute("data-theme", next);
    };

    return (
        <aside
            className={`${collapsed ? "w-20" : "w-72"
                } transition-all duration-300 bg-[rgb(var(--background))] border-r border-[rgb(var(--border))] h-screen flex flex-col`}
        >
            <div className="p-6 border-b border-[rgb(var(--border))] flex items-center justify-center h-20">
                {!collapsed ? <Logo /> : <div className="font-bold text-[rgb(var(--btn-primary))]">T</div>}
            </div>

            <nav className="flex-1 p-4 space-y-1 text-sm overflow-y-auto">
                {nav.map((section) => {
                    const Icon = iconMap[section.label] || ChartBarIcon;

                    return (
                        <div key={section.label} className="mb-2">
                            {"route" in section ? (
                                <a
                                    href={section.route}
                                     className="flex items-center justify-between px-3 py-2.5 rounded-md font-medium
                                 text-[rgb(var(--label))] hover:bg-[rgb(var(--background-soft))] 
                                 hover:text-[rgb(var(--label-hover))] transition-colors"
                                >
                                    <span className="flex items-center gap-3">
                                        <Icon className="w-5 h-5" />
                                        {!collapsed && section.label}
                                    </span>
                                    {!collapsed && section.badge && <Badge>{section.badge}</Badge>}
                                </a>
                            ) : (
                                <>
                                    <button
                                        className="flex w-full items-center justify-between 
                               px-3 py-2.5 rounded-md font-medium
                               text-[rgb(var(--label))] hover:text-[rgb(var(--label-hover))] transition-colors"
                                        onClick={() =>
                                            setOpenSection(openSection === section.label ? null : section.label)
                                        }
                                    >
                                        <span className="flex items-center gap-3">
                                            <Icon className="w-5 h-5" />
                                            {!collapsed && section.label}
                                        </span>
                                        {!collapsed && (
                                            <span className="text-[rgb(var(--foreground-muted))] text-xs">
                                                {openSection === section.label ? "−" : "+"}
                                            </span>
                                        )}
                                    </button>

                                    {!collapsed && openSection === section.label && "items" in section && (
                                        <ul className="mt-1 ml-4 border-l border-[rgb(var(--border))] pl-2 space-y-1">
                                            {section.items.map((item) => (
                                                <li key={item.label}>
                                                    <a
                                                        href={item.route}
                                                        target={item.external ? "_blank" : "_self"}
                                                        className="block rounded-md px-3 py-1.5 
                                       text-[rgb(var(--label))] hover:bg-[rgb(var(--background-soft))] 
                                       hover:text-[rgb(var(--label-hover))] transition-colors"
                                                    >
                                                        {item.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            )}
                        </div>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-[rgb(var(--border))] flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <GlobeAltIcon className="w-5 h-5 text-[rgb(var(--label))] cursor-pointer hover:text-[rgb(var(--label-hover))]" />
                    {!collapsed && (
                        <button
                            onClick={toggleTheme}
                            className="p-1 rounded-full hover:bg-[rgb(var(--background-soft))] text-[rgb(var(--label))]"
                        >
                            {theme === "light" ? (
                                <MoonIcon className="w-5 h-5" />
                            ) : (
                                <SunIcon className="w-5 h-5" />
                            )}
                        </button>
                    )}
                </div>

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-2 rounded-md hover:bg-[var(--backgroundSoft)] text-[var(--label-color)]"
                >
                    {collapsed ? (
                        <ChevronDoubleRightIcon className="w-5 h-5" />
                    ) : (
                        <ChevronDoubleLeftIcon className="w-5 h-5" />
                    )}
                </button>
            </div>
        </aside>
    );
}
