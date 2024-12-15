import { ethers } from "ethers";
import { Address, parseUnits, toHex } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import RepayLoanForm from "~~/components/repay-loan-form";
import RequestLoanForm, { TOKEN_DECIMALS } from "~~/components/request-loan-form";
import { calculateScoreAndMaxAmount } from "~~/repository/bcra/generateScore";

async function prepareLoanData(userDocument: number, address: Address) {
  "use server";
  const { maxLoanAmount } = await calculateScoreAndMaxAmount(userDocument);
  const abi = new ethers.AbiCoder();

  const packedMessage = abi.encode(
    ["address", "uint256"],
    [address, parseUnits(maxLoanAmount.toString(), TOKEN_DECIMALS)],
  );

  const packedMessageBytes = ethers.getBytes(packedMessage);

  const backendSigner = new ethers.Wallet("0x" + (process.env.DEPLOYER_PRIVATE_KEY || ""));
  console.log(backendSigner.address);

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
