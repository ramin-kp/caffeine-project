import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";
import userModel from "@/models/User";
import connectToDB from "@/configs/connectToDB";

export const GET = async () => {
  try {
    connectToDB();
    const token = cookies().get("token");

    if (!token) {
      return Response.json({ message: "کاربر احراز نیست!" }, { status: 401 });
    }

    const tokenPayload = verifyAccessToken(token.value);
    if (!tokenPayload) {
      return Response.json({ message: "کاربر احراز نیست!" }, { status: 401 });
    }

    const userData = await userModel.findOne(
      { email: tokenPayload.email },
      "-__v -password"
    );
    if (!userData) {
      return Response.json(
        { message: "کاربری با این مشخصات وجود ندارد" },
        { status: 404 }
      );
    }
    return Response.json({ data: userData });
  } catch (error) {
    console.log("errrorrrrrrr", error);
    return Response.json({ message: error }, { status: 500 });
  }
};
