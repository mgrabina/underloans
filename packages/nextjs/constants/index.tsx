import { Address } from "viem";
import addresses from "~~/contracts-data/deployments/addresses.json";
import { OptimismSepoliaChainId } from "~~/contracts/addresses";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
    : typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:" + process.env.PORT;

type deployedContracts = keyof (typeof addresses)["optimismSepolia"];

export const ContractAddresses: Record<number, Record<deployedContracts, Address>> = {
  [OptimismSepoliaChainId]: addresses["optimismSepolia"] as Record<deployedContracts, Address>,
};
