"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TOKEN_DECIMALS } from "../borrow-form";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";
import { MaxUint256 } from "ethers";
import { formatUnits, parseUnits } from "viem";
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ContractAddresses } from "~~/constants";
import { ERC20__factory, LendingProtocol__factory } from "~~/contracts-data/typechain-types";
import { OptimismSepoliaChainId } from "~~/contracts/addresses";
import { TransactionExplorerBaseUrl } from "~~/utils/explorer";

const RepayLoanForm = () => {
  const [amount, setAmount] = useState("");
  const account = useAccount();
  const chainId = account.chainId || OptimismSepoliaChainId;

  const { data: totalBorrowedData } = useReadContract({
    abi: LendingProtocol__factory.abi,
    address: ContractAddresses[chainId].lendingProtocol,
    functionName: "totalBorrowed",
    args: [account.address || "0x123"],
  });
  const hasReceiptRef = useRef(false);
  const { writeContractAsync, isPending, isSuccess, data: txHash } = useWriteContract();
  const receipt = useWaitForTransactionReceipt({ chainId, hash: txHash });

  const totalBorrowed = formatUnits((totalBorrowedData as bigint) || 0n, TOKEN_DECIMALS);

  const handleTransaction = async () => {
    if (!amount) return;

    if (Number(amount) > Number(totalBorrowed)) {
      toast({
        title: "Amount exceeds maximum",
        variant: "destructive",
      });
      return;
    }

    await writeContractAsync({
      abi: LendingProtocol__factory.abi,
      address: ContractAddresses[chainId].lendingProtocol,
      functionName: "repay",
      args: [parseUnits(amount, TOKEN_DECIMALS)],
    });

    toast({
      title: "Transaction sent",
    });
  };

  const handleApproval = async () => {
    if (!amount) return;

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

    if (receipt.isSuccess) {
      hasReceiptRef.current = true;
      toast({
        title: "Transaction confirmed",
      });
    }
  }, [receipt]);

  if (BigInt((totalBorrowedData as bigint) || 0) === 0n) return null;

  return (
    <div className="flex flex-col gap-20 max-w-md flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Repay Your Loan</CardTitle>
          <CardDescription>Repay your outstanding loan balance.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="XXX USDC" value={amount} onChange={e => setAmount(e.target.value)} />
          <p className="text-sm">Your total debt is {totalBorrowed} USDC</p>
        </CardContent>
        <CardFooter className="flex flex-col gap-6">
          <Button onClick={handleApproval} disabled={!amount} className="w-full" variant="outline">
            Approve
          </Button>
          <Button onClick={handleTransaction} disabled={isPending || !amount} className="w-full">
            Repay
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
};

export default RepayLoanForm;
