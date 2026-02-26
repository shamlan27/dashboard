"use client";

import { UIAlert, KycStatus } from "@/lib/types";
import AlertCard from "./AlertCard";

interface AlertCenterProps {
  alerts: UIAlert[];
  kycStatus: KycStatus;
}

export default function AlertCenter({ alerts, kycStatus }: AlertCenterProps) {
  const visibleAlerts = alerts.filter((alert) => {
    if (!alert.visibleWhenKyc) return true;
    return alert.visibleWhenKyc.includes(kycStatus);
  });

  if (visibleAlerts.length === 0) return null;

  return (
    <div className="space-y-3">
      {visibleAlerts.map((alert) => (
        <AlertCard
          key={alert.id}
          title={alert.title}
          description={alert.description}
          ctaLabel={alert.ctaLabel}
          onCtaClick={() => {
            if (alert.ctaRoute) {
              window.location.href = alert.ctaRoute;
            }
          }}
        />
      ))}
    </div>
  );
}
