"use client";

import Button from "@/components/ui/Button";

interface AlertCardProps {
  title: string;
  description: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export default function AlertCard({
  title,
  description,
  ctaLabel,
  onCtaClick
}: AlertCardProps) {
  return (
    <div className="w-full p-4 rounded-lg border border-[var(--border-color)] bg-[var(--backgroundSoft)] flex items-center justify-between">
      
      <div>
        <h3 className="text-[var(--text)] font-semibold">{title}</h3>
        <p className="text-[var(--textLight)] text-sm mt-1">{description}</p>
      </div>

      {ctaLabel && (
        <Button variant="primary" className="whitespace-nowrap" onClick={onCtaClick}>
          {ctaLabel}
        </Button>
      )}
    </div>
  );
}
