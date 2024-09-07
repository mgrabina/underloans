import React, { Dispatch, SetStateAction, useMemo } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { useRole } from "./ScaffoldEthAppWithProviders";
import { ToastProvider } from "./ui/toast";
import { Toaster } from "./ui/toaster";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  AwardIcon,
  FileKey2Icon,
  GiftIcon,
  ScanBarcodeIcon,
  Settings,
  ShoppingCart,
  Tornado,
  Users2,
  UsersIcon,
  WalletIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { WagmiProvider, useAccount } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { ProgressBar } from "~~/components/scaffold-eth/ProgressBar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~~/components/ui/tooltip";
import MorphLogo from "~~/public/logos/morph-logo.png";
import ChilizLogo from "~~/public/logos/chiliz-logo.png";
import CHZTokenLogo from "~~/public/logos/chz-token.png";
import KintoLogo from "~~/public/logos/kinto-logo.png";
// import { useInitializeNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import Iden3AuthComponent from "~~/utils/privadoId/iden3component";
import { Role } from "~~/utils/privadoId/identities";

const CustomSidebar = () => {
  // Get current page
  const pathname = usePathname();

  return (
    <>
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Tornado className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Tornado Codes</span>
        </Link>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/early-access"
              className={`${
                pathname === "/early-access" ? "bg-accent" : ""
              }  flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <Image className="w-4" src={MorphLogo} alt="morph-logo" />
              <span className="sr-only">MorphL2</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">MorphL2</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/giftcard"
              className={`${
                pathname === "/giftcard" ? "bg-accent" : ""
              }  flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <GiftIcon className="h-7 w-7" />
              <span className="sr-only">Giftcard</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Giftcard</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/airdrop-nft"
              className={`${
                pathname === "/airdrop-nft" ? "bg-accent" : ""
              }  flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <AwardIcon className="h-7 w-7" />
              <span className="sr-only">Airdrop NFT</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Airdrop NFT</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/chiliz"
              className={`${
                pathname.includes("/chiliz") ? "bg-accent" : ""
              }  flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <Image className="w-4" src={ChilizLogo} alt="chiliz-logo" />
              <span className="sr-only">Chiliz</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Chiliz</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/chiliz-ticket"
              className={`${
                pathname.includes("/chiliz-ticket") ? "bg-accent" : ""
              }  flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <Image className="w-4" src={CHZTokenLogo} alt="chiliz-logo" />
              <span className="sr-only">Chiliz Ticket</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Chiliz Ticket</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/kinto"
              className={`${
                pathname.includes("/kinto") ? "bg-accent" : ""
              }  flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <Image className="h-7 w-7" src={KintoLogo} alt="kinto-logo" />
              <span className="sr-only">Kinto</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Kinto</TooltipContent>
        </Tooltip>
      </nav>
    </>
  );
};

export { CustomSidebar };
