import {
  generateAccessToken,
  hashPassword,
  verifyEmail,
  verifyPassword,
  verifyUsername,
} from "@/utils/auth";
import { roles } from "@/utils/constant";

//config
import connectToDB from "@/configs/connectToDB";

//model
import userModel from "@/models/User";

const POST = async (req) => {
  try {
    connectToDB();
    const body = await req.json();

    const { username, email, password } = body;

    const isValidUserName = verifyUsername(username);
    if (!isValidUserName) {
      return Response.json(
        { message: "نام کاربری وارد شده معتبر نمی باشد" },
        { status: 422 }
      );
    }
    const isValidEmail = verifyEmail(email);
    if (!isValidEmail) {
      return Response.json(
        { message: "ایمیل وارد شده معتبر نمی باشد" },
        { status: 422 }
      );
    }
    const isValidPassword = verifyPassword(password);
    if (!isValidPassword) {
      return Response.json(
        { message: "رمز عبور وارد شده معتبر نمی باشد" },
        { status: 422 }
      );
    }

    const isUserExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserExist) {
      return Response.json(
        {
          message: "کاربری با این نام کاربری یا ایمیل قبلا ثبت نام کرده است.",
        },
        { status: 409 }
      );
    }
    const hashedPassword = await hashPassword(password);

    const users = await userModel.find({});
    const token = generateAccessToken({ email });

    await userModel.create({
      username,
      email,
      password: hashedPassword,
      role: users.length > 0 ? roles.USER : roles.ADMIN,
    });

    return Response.json(
      { message: "ثبت نام شما با موفقیت انجام شد." },
      {
        status: 201,
        headers: {
          "Set-Cookie": `token=${token};path=/;httpOnly=true;maxAge=${
            24 * 60 * 60
          }`,
        },
      }
    );
  } catch (error) {
    console.log("server internal error", error);
    return Response.json({ message: error }, { status: 500 });

  }
};

export { POST };
