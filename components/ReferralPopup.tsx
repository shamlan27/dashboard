"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

interface ReferralPopupProps {
  open: boolean;
  onClose: () => void;
  link: string;
}

export default function ReferralPopup({ open, onClose, link }: ReferralPopupProps) {
  const copy = () => navigator.clipboard.writeText(link);

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-lg font-semibold text-[var(--text)]">
        Invite friends and earn money
      </h2>

      <div className="mt-4 bg-[rgb(var(--background-soft))] p-3 rounded-lg border border-[rgb(var(--border))]">
        <p className="text-xs text-[var(--textLight)] mb-1">Your referral link</p>

        <div className="flex items-center justify-between gap-2">
          <span className="text-[var(--text)] text-xs break-all flex-1">
            {link}
          </span>

          <Button size="sm" variant="outline" onClick={copy}>
            Copy
          </Button>
        </div>
      </div>

      <h3 className="mt-5 font-semibold text-[var(--text)]">How it works?</h3>

      <ul className="mt-3 space-y-2 text-sm text-[var(--textLight)]">
        <li>• Share your unique link with friends</li>
        <li>• Your friends become traders</li>
        <li>• You get rewarded for their every trade</li>
      </ul>

      <button className="mt-4 text-[rgb(var(--btn-primary))] hover:text-[rgb(var(--btn-primary-hover))] text-sm font-medium transition-colors">
        Read more
      </button>
    </Modal>
  );
}
