"use client";

import { useState } from "react";
import { Account } from "@/lib/types";
import AccountsList from "./AccountsList";

interface AccountsTabsProps {
  accounts: Account[];
}

export default function AccountsTabs({ accounts }: AccountsTabsProps) {
  const [tab, setTab] = useState<"real" | "demo">("real");

  return (
    <div className="bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg p-4">
      <div className="flex gap-4 border-b border-[rgb(var(--border))] mb-4 text-sm">
        <button
          onClick={() => setTab("real")}
          className={
            tab === "real"
              ? "pb-2 border-b-2 border-[rgb(var(--btn-primary))] text-[rgb(var(--label-active))] font-semibold"
              : "pb-2 text-[rgb(var(--foreground-muted))] hover:text-[rgb(var(--label-hover))]"
          }
        >
          Real
        </button>
        <button
          onClick={() => setTab("demo")}
          className={
            tab === "demo"
              ? "pb-2 border-b-2 border-[rgb(var(--btn-primary))] text-[rgb(var(--label-active))] font-semibold"
              : "pb-2 text-[rgb(var(--foreground-muted))] hover:text-[rgb(var(--label-hover))]"
          }
        >
          Demo
        </button>
      </div>
      <AccountsList accounts={accounts.filter((account) => {
        if (tab === 'real' && account.live_account) {
          return account;
        } else if (tab === 'demo' && !account.live_account) {
          return account;
        } else {
          return null;
        }
      })} />
    </div>
  );
}
