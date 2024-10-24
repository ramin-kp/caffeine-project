import { cookies } from "next/headers";

export const POST = async () => {
  try {
    cookies().delete("token");
    return Response.json({ message: "با موفقیت از حساب کاربری خود خارج شدید" });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
};
