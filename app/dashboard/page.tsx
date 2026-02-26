import { fetchUIConfig, fetchAccounts } from "@/lib/api.service";
import IdentityCard from "@/components/IdentityCard";
import InfoCards from "@/components/InfoCard";
import AccountsTabs from "@/components/AccountsTabs";
import AlertCenter from "@/components/AlertCenter";

export default async function DashboardPage() {
  const config = await fetchUIConfig();
  const data = await fetchAccounts();

  return (
    <div className="space-y-6">
      <IdentityCard user={config.user} />
      <AlertCenter alerts={config.alerts} kycStatus={config.user.kycStatus} />
      <InfoCards cards={config.infoCards} />
      <AccountsTabs accounts={data.accounts} />
    </div>
  );
}