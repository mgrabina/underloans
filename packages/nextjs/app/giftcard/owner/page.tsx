"use client";

import { useState } from "react";
import Link from "next/link";
import GiftCardAbi from "../../../contracts-data/deployments/polygonAmoy/GiftCards.json";
import { Address, parseUnits } from "viem";
import { erc20Abi } from "viem";
import { useWaitForTransactionReceipt } from "wagmi";
import { useAccount } from "wagmi";
import { useWriteContract } from "wagmi";
import { Button } from "~~/components/ui/button";
import { Input } from "~~/components/ui/input";
import { useToast } from "~~/components/ui/use-toast";
import { generateTransfer } from "~~/contracts-data/helpers/helpers";
import { OptimismSepoliaChainId } from "~~/contracts/addresses";
import { MorfiAddress } from "~~/contracts/addresses";
import { GiftCardAddress } from "~~/contracts/addresses";
import { compressEncryptAndEncode } from "~~/helper";
import { TransactionExplorerBaseUrl } from "~~/utils/explorer";

const GiftCardOwnerPage = () => {
  //SmartContract stuff
  const {
    data: approvalHash,
    isPending: isPendingApproval,
    error: approvalError,
    writeContractAsync: writeApprovalAsync,
  } = useWriteContract();
  const {
    data: createGiftcardHash,
    isPending: isPendingCreateGiftcard,
    error: createGiftcardError,
    writeContractAsync: writeCreateGiftcardAsync,
  } = useWriteContract();
  const account = useAccount();
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [compressObject, setCompressObject] = useState<string>("");
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash: approvalHash });
  const { isLoading: isConfirmingCreated, isSuccess: isConfirmedCreated } = useWaitForTransactionReceipt({
    hash: createGiftcardHash,
  });

  const chainId = account.chainId || OptimismSepoliaChainId;

  const handleApprove = async () => {
    try {
      const result = await writeApprovalAsync({
        address: MorfiAddress[chainId] as Address,
        abi: erc20Abi,
        functionName: "approve",
        args: [GiftCardAddress[chainId], parseUnits(amount, 18)],
      });
      console.log(result);
    } catch (error) {
      console.log(error);
      toast({
        description: "Error approving document",
      });
    }
  };

  const createGiftCardCode = async (commitment: string) => {
    return await writeCreateGiftcardAsync({
      address: GiftCardAddress[chainId],
      account: account.address,
      abi: GiftCardAbi.abi,
      functionName: "createGiftCard",
      args: [commitment, [], parseUnits(amount, 18), "dummy_metadata"],
    });
  };

  const onSubmit = async () => {
    const parsedNumber = Number(amount);
    if (isNaN(parsedNumber) || parsedNumber <= 0) {
      alert("Please enter a valid number");
      return;
    }
    const transfer = generateTransfer();
    const { commitment, nullifier, secret } = transfer;
    const responseObject = {
      commitment: commitment,
      nullifier: nullifier,
      secret: secret,
    };
    const compressedObject = compressEncryptAndEncode(responseObject);
    console.log(compressedObject);
    setCompressObject(compressedObject);

    try {
      const result = await createGiftCardCode(commitment);
      console.log("ReturnedResult", result);
    } catch (e) {
      console.error("Error creating giftcard", e);
    } finally {
      console.log("createGiftcardHash", createGiftcardHash);
      console.log("isPendingCreateGiftcard", isPendingCreateGiftcard);
      console.log("createGiftcardError", createGiftcardError);
    }
  };

  // @ts-expect-error
  const explorerUrl = TransactionExplorerBaseUrl[chainId];

  //Render stuff
  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-4">
        <div className="relative w-96 h-56 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden mb-8">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-opacity-20 bg-white pointer-events-none">
            <svg
              className="absolute top-0 right-0 w-32 h-32 opacity-50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
            >
              <circle cx="250" cy="250" r="250" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fff" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Gift Card Content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            {/* Gift Card Title */}
            <div>
              <h2 className="text-white text-3xl font-bold">Gift Card</h2>
              <p className="text-white text-sm">A special gift just for you</p>
            </div>

            {/* Gift Card Amount */}
            <div className="text-center">
              <p className="text-white text-lg">Amount:</p>
              <p id="previewAmount" className="text-4xl font-bold text-yellow-400">
                {amount} Morfi
              </p>
            </div>
          </div>
          {/* Additional Decorative Element */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600 bg-opacity-30 rounded-full transform translate-y-16 -translate-x-16"></div>
        </div>
        {isConfirmedCreated && (
          <div>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto w-96 h-56 mb-8">
              <code className="font-mono">{compressObject}</code>
            </pre>
          </div>
        )}
        {!isConfirmed ? (
          <div className="w-96 h-56 mb-8">
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="border p-2 rounded"
              placeholder="Amount"
            />
            <Button className="mt-3" onClick={handleApprove}>
              {"Aprobar fondos"}
            </Button>
          </div>
        ) : !isConfirmingCreated ? (
          !isConfirmedCreated && (
            <div className="w-96 h-56 mb-8">
              <Input
                id="amount"
                type="number"
                value={amount}
                disabled={true}
                className="border p-2 rounded"
                placeholder="Amount"
              />
              <Button className="mt-3" onClick={onSubmit}>
                {"Crear giftcard"}
              </Button>
            </div>
          )
        ) : (
          <div>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto grid-cols-3">
              <code className="font-mono">Waiting for confirmation</code>
            </pre>
          </div>
        )}
        {createGiftcardHash && (
          <p>
            See transaction in{" "}
            <Link className="cursor-pointer text-blue-500" target="_blank" href={`${explorerUrl}${createGiftcardHash}`}>
              Explorer
            </Link>
          </p>
        )}
      </div>
    </>
  );
};

export default GiftCardOwnerPage;
