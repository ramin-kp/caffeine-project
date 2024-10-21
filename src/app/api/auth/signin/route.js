import connectToDB from "@/configs/connectToDB";

import userModel from "@/models/User";
import {
  generateAccessToken,
  validPassword,
  verifyEmail,
  verifyUsername,
  verifyPassword,
} from "@/utils/auth";

const POST = async (req) => {
  connectToDB();
  try {
    const body = await req.json();
    const { identifier, password } = body;
    const isUserExist = await userModel.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });

    const isValidUsername = verifyUsername(identifier);
    const isValidEmail = verifyEmail(identifier);
    if (!isValidUsername && !isValidEmail) {
      return Response.json(
        { message: "نام کاربر یا ایمیل وارد شده صحیح نمی باشد" },
        {
          status: 422,
        }
      );
    }
    console.log("pass", password);
    const isValidPassword = verifyPassword(password);
    console.log("isValidPassword ->", isValidPassword);
    if (!isValidPassword) {
      return Response.json(
        { message: "رمز عبور وارد شده صحیح نمی باشد" },
        {
          status: 422,
        }
      );
    }
    console.log("username ->", isUserExist);

    if (!isUserExist) {
      return Response.json(
        {
          message: "هیچ کاربری با این نام کاربری یا رمز عبور وجود ندارد",
        },
        {
          status: 401,
        }
      );
    }
    const verifiedPassword = await validPassword(
      password,
      isUserExist.password
    );
    if (!verifiedPassword) {
      return Response.json(
        {
          message: "هیچ کاربری با این نام کاربری یا رمز عبور وجود ندارد",
        },
        {
          status: 401,
        }
      );
    }
    const token = generateAccessToken({ email: isUserExist.email });

    return Response.json(
      { message: "با موفقیت وارد حساب کاربری خود شدید" },
      {
        status: 200,
        headers: {
          "Set-cookie": `token=${token};path=/;httpOnly=true;maxAge=${
            24 * 60 * 60
          }`,
        },
      }
    );
  } catch (error) {
    console.log("internal server error ->", error);
    return Response.json({ message: error }, { status: 500 });
  }
};

export { POST };
