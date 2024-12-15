// app/api/kyc/route.ts
import { NextRequest, NextResponse } from "next/server";
import {getUserAction} from "~~/repository/user/getUser.action";
import {updateUserAction} from "~~/repository/user/updateUser.action";
import {UserStatus} from "~~/types/entities/user";
import {MetamapStatusEnum} from "~~/types/entities/user";
import {getCuilFromDni} from "~~/utils/cuil";

export async function POST(req: NextRequest) {
  const metamapData = await req.json();
  console.log(`CallbackMetamap: ${JSON.stringify(metamapData)}, ${JSON.stringify(metamapData.metadata)} }`);
  if (metamapData.step.id === "document-reading") {
    const data = metamapData.step.data;
    const documentNumber = data.documentNumber ? data.documentNumber.value : "20399153916";
    const walletId  = metamapData.metadata.walletId;
    console.log(`wallet`, walletId);
    const sex =  data.sex ? data.sex.value : 'm'
    const user = await getUserAction({ wallet: walletId });
    console.log("user",user)
    if (!user) {
      throw new Error("User not found")
    }
    const [cuil, firstTwo, dniNumber, lastDigit] = getCuilFromDni(documentNumber, sex);
    await updateUserAction({ id: user.id, status: UserStatus.done, document: cuil.replace(/-/g, "") });
    return NextResponse.json({ message: "user update successfully" }, { status: 200 });
  } else {
    try {
      const status = metamapData.status
      const user = await getUserAction({ wallet: metamapData.metadata.walletId });
      if (!user) {
        throw new Error("User not found")
      }
      switch (status) {
        case MetamapStatusEnum.VERIFIED:
          await updateUserAction({ id: user.id, status: UserStatus.done });
          break;
        case MetamapStatusEnum.REJECTED:
        case MetamapStatusEnum.REVIEW_NEEDED:
          await updateUserAction({ id: user.id, status: UserStatus.error });
          break;
        case MetamapStatusEnum.WAITING:
          await updateUserAction({ id: user.id, status: UserStatus.pending_validation });
          break;
      }
      return NextResponse.json({ message: "user update successfully" }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error updating user with kyc", error }, { status: 500 });
    }
  }
}
