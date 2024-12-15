"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { toast } from "../ui/use-toast";
import { MaxUint256 } from "ethers";
import { Address, formatUnits, parseUnits } from "viem";
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import KYCButton from "~~/components/KYCButton.tsx";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { ContractAddresses } from "~~/constants";
import { UserContext } from "~~/context";
import { ERC20__factory, LendingProtocol__factory } from "~~/contracts-data/typechain-types";
import { OptimismSepoliaChainId } from "~~/contracts/addresses";
import { UserStatus } from "~~/types/entities/user";
import { TransactionExplorerBaseUrl } from "~~/utils/explorer";

export const TOKEN_DECIMALS = 18;

export default function SupplyForm({}: {}) {
  const { user } = useContext(UserContext);
  const account = useAccount();
  const [amount, setAmount] = useState<string>("");
  const chainId = account.chainId || OptimismSepoliaChainId;
  const { writeContractAsync, isPending, isSuccess, data: txHash } = useWriteContract();
  const { data: usdcBalance } = useReadContract({
    abi: ERC20__factory.abi,
    address: ContractAddresses[chainId].usdc,
    functionName: "balanceOf",
    args: [account.address || "0x123"],
  });
  const receipt = useWaitForTransactionReceipt({ chainId, hash: txHash });
  const hasReceiptRef = useRef(false);

  const formattedBalance = formatUnits(BigInt((usdcBalance as bigint) || 0), TOKEN_DECIMALS);

  const handleTransaction = async () => {
    if (!user || !amount) return;

    if (Number(amount) > Number(formattedBalance)) {
      toast({
        title: "Amount exceeds balance",
        variant: "destructive",
      });
      return;
    }

    await writeContractAsync({
      abi: LendingProtocol__factory.abi,
      address: ContractAddresses[chainId].lendingProtocol,
      functionName: "supply",
      args: [parseUnits(amount, TOKEN_DECIMALS)],
    });

    toast({
      title: "Transaction sent",
    });
  };

  const handleApproval = async () => {
    if (!user || !amount) return;

    await writeContractAsync({
      abi: ERC20__factory.abi,
      address: ContractAddresses[chainId].usdc,
      functionName: "approve",
      args: [ContractAddresses[chainId].lendingProtocol, MaxUint256],
    });

    toast({
      title: "Transaction sent",
    });
  };

  useEffect(() => {
    if (hasReceiptRef.current) return;

    if (receipt) {
      hasReceiptRef.current = true;
      toast({
        title: "Transaction confirmed",
      });
    }
  }, [receipt]);

  return (
    <div className="flex flex-col gap-20 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Supply and Earn</CardTitle>
          <CardDescription>Supply your assets and start earning interest.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="XXX USDC" value={amount} onChange={e => setAmount(e.target.value)} />
          <p className="text-sm text-muted-foreground">Balance: {formattedBalance}</p>
        </CardContent>
        <CardFooter className="flex flex-col gap-6">
          <Button onClick={handleApproval} disabled={!amount} className="w-full" variant="outline">
            Approve
          </Button>
          <Button onClick={handleTransaction} disabled={isPending || !amount} className="w-full">
            Supply and start earning
          </Button>
          {txHash && <Link target="_blank" href={`${TransactionExplorerBaseUrl[chainId]}/${txHash}`} />}
        </CardFooter>
      </Card>
    </div>
  );
}
