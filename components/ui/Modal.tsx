"use client";

import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-[rgb(var(--background))] rounded-xl p-6 w-[420px] shadow-xl border border-[rgb(var(--border))]">
        {children}

        <button
          onClick={onClose}
          className="mt-4 text-[rgb(var(--btn-primary))] hover:text-[rgb(var(--btn-primary-hover))] font-semibold text-sm transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
