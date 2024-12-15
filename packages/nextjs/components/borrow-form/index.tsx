"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { toast } from "../ui/use-toast";
import { Address, formatUnits, parseUnits } from "viem";
import { useAccount, useReadContract, useReadContracts, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import KYCButton from "~~/components/KYCButton.tsx";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { ContractAddresses } from "~~/constants";
import { UserContext } from "~~/context";
import { LendingProtocol__factory } from "~~/contracts-data/typechain-types";
import { OptimismSepoliaChainId } from "~~/contracts/addresses";
import { UserStatus } from "~~/types/entities/user";
import { TransactionExplorerBaseUrl } from "~~/utils/explorer";

export const TOKEN_DECIMALS = 18;

export default function RequestLoanForm({
  prepareLoanData,
}: {
  prepareLoanData: (
    documentNumber: number,
    address: Address,
  ) => Promise<{
    signedMessage: Address;
    maxLoanAmount: string;
  }>;
}) {
  const { user } = useContext(UserContext);
  const account = useAccount();
  const [amount, setAmount] = useState<string>("");
  const chainId = account.chainId || OptimismSepoliaChainId;
  const { writeContractAsync, isPending, isSuccess, data: txHash } = useWriteContract();
  const { data: fetchedContractsData } = useReadContracts({
    contracts: [
      {
        abi: LendingProtocol__factory.abi,
        address: ContractAddresses[chainId].lendingProtocol,
        functionName: "totalSuppliedAmount",
      },
      {
        abi: LendingProtocol__factory.abi,
        address: ContractAddresses[chainId].lendingProtocol,
        functionName: "totalBorrowedAmount",
      },
    ],
  });
  const receipt = useWaitForTransactionReceipt({ chainId, hash: txHash });
  const hasReceiptRef = useRef(false);
  const kycCompleted = user?.status === UserStatus.done;

  const handleTransaction = async () => {
    if (!user || !amount) return;
    const { maxLoanAmount, signedMessage } = await prepareLoanData(Number(user.document), user.wallet as Address);

    if (Number(amount) > Number(maxLoanAmount)) {
      toast({
        title: "Amount exceeds maximum",
        variant: "destructive",
      });
      return;
    }

    await writeContractAsync({
      abi: LendingProtocol__factory.abi,
      address: ContractAddresses[chainId].lendingProtocol,
      functionName: "borrow",
      args: [parseUnits(amount, TOKEN_DECIMALS), parseUnits(maxLoanAmount, TOKEN_DECIMALS), signedMessage],
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

  const TVL = (fetchedContractsData?.[0].result || 0n) - (fetchedContractsData?.[1].result || 0n);

  return (
    <div className="flex flex-col gap-20 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Collateral-Free Borrowing</CardTitle>
          <CardDescription>Experience the freedom of borrowing without the need for collateral.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">Total value locked: {formatUnits(TVL, TOKEN_DECIMALS)} USDC</p>
          <KYCButton />
          <Input placeholder="XXX USDC" value={amount} onChange={e => setAmount(e.target.value)} />
        </CardContent>
        <CardFooter className="flex flex-col gap-6">
          <Button onClick={handleTransaction} disabled={!kycCompleted || isPending || !amount} className="w-full">
            Request Loan
          </Button>
          {txHash && (
            <Link target="_blank" href={`${TransactionExplorerBaseUrl[chainId]}/${txHash}`}>
              See transaction in explorer
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
