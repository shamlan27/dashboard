import uiConfig from "@/app/api/mock/ui-config.json";
import accounts from "@/app/api/mock/accounts.json";
import { UIConfig, AccountsResponse } from "@/lib/types";

export async function fetchUIConfig(): Promise<UIConfig> {
  return uiConfig as UIConfig;
}

export async function fetchAccounts(): Promise<AccountsResponse> {
  return accounts as AccountsResponse;
}