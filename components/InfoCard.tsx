"use client";

import { useState } from "react";
import { UIInfoCard } from "@/lib/types";
import ReferralPopup from "./ReferralPopup";
import Card from "@/components/ui/Card";

interface InfoCardsProps {
  cards: UIInfoCard[];
}

export default function InfoCards({ cards }: InfoCardsProps) {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleClick = (card: UIInfoCard) => {
    if (card.action === "open_partner_program") {
      setPopupOpen(true);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="cursor-pointer transition hover:opacity-90 active:scale-95"
            onClick={() => handleClick(card)}
          >
            <h3 className="font-bold text-[var(--text)]">{card.title}</h3>
            <p className="text-[var(--textLight)] mt-1">{card.description}</p>
          </Card>
        ))}
      </div>

      <ReferralPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        link="https://one.exnessonelink.com/a/uytd7ftzqy"
      />
    </>
  );
}
