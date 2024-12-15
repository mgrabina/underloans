import { ethers } from "ethers";
import { Address, parseUnits, toHex } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import RequestLoanForm from "~~/components/borrow-form";
import RepayLoanForm from "~~/components/repay-loan-form";
import { calculateScoreAndMaxAmount } from "~~/repository/bcra/generateScore";

const TOKEN_DECIMALS = 18;

async function prepareLoanData(userDocument: number, address: Address) {
  "use server";
  const { maxLoanAmount } = await calculateScoreAndMaxAmount(userDocument);
  const abi = new ethers.AbiCoder();

  const parsedMaximumAmount = parseUnits(maxLoanAmount.toString(), TOKEN_DECIMALS);

  const packedMessage = abi.encode(["address", "uint256"], [address, parsedMaximumAmount]);

  const packedMessageBytes = ethers.getBytes(packedMessage);

  const backendSigner = new ethers.Wallet("0x" + (process.env.DEPLOYER_PRIVATE_KEY || ""));

  const signature = await backendSigner.signMessage(packedMessageBytes);

  return { signedMessage: signature as Address, maxLoanAmount: maxLoanAmount.toString() };
}

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row gap-20 flex-1 justify-center">
      <RequestLoanForm prepareLoanData={prepareLoanData} />
      <RepayLoanForm />
    </div>
  );
}
