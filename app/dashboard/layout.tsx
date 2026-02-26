import { fetchUIConfig } from "@/lib/api.service";
import ThemeProvider from "@/components/ThemeProvider";
import DashboardShell from "@/components/layout/DashboardLayout";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const config = await fetchUIConfig();

  return (
    <ThemeProvider>
      <DashboardShell nav={config.nav} balance={config.balance}>
        {children}
        <Footer footer={config.footer} />
      </DashboardShell>
    </ThemeProvider>
  );
}