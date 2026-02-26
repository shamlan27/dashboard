import { Account } from "@/lib/types";
import Button from "@/components/ui/Button";

interface AccountsListProps {
  accounts: Account[];
}

export default function AccountsList({ accounts }: AccountsListProps) {
  return (
    <div className="space-y-3">
      {accounts.map((acc) => (
        <div
          key={acc.id}
          className="flex items-center justify-between p-4 border border-[var(--border-color)] rounded-lg bg-[var(--backgroundSoft)]"
        >
          <div>
            <p className="text-[var(--text)] font-semibold">
              {acc.type}
            </p>
            <p className="text-[var(--textLight)] text-sm">
              {acc.platform}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[var(--text)] font-semibold">
              {acc.balance} {acc.currency}
            </p>
            <Button variant="secondary" size="sm">
              Manage
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
