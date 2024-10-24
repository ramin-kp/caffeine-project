import connectToDB from "@/configs/connectToDB";
import userModel from "@/models/User";
import {
  generateAccessToken,
  hashPassword,
  verifyEmail,
  verifyPassword,
  verifyPhoneNumber,
  verifyUsername,
} from "@/utils/auth";

export const POST = async (req) => {
  try {
    connectToDB();
    const body = await req.json();
    const { lastName, username, email, phone, password, date } = body;
    if (
      !lastName.trim() ||
      !username.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password.trim() ||
      !date
    ) {
      return Response.json(
        { message: "لطفا همه فیلد‌ها رو کامل کنید" },
        { status: 400 }
      );
    }
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

    const verifiedPhone = verifyPhoneNumber(phone);
    if (!verifiedPhone) {
      return Response.json(
        { message: "شماره موبایل وارد شده معتبر نمی باشد" },
        { status: 422 }
      );
    }
    const user = await userModel.findOne({ username, email });
    if (!user) {
      return Response.json(
        { message: "کاربری با این مشخصات وجود ندارد" },
        { status: 404 }
      );
    }
    const hashedPassword = await hashPassword(password);
    await userModel.findOneAndUpdate({
      lastName,
      username,
      email,
      phone,
      password: hashedPassword,
      date,
    });

    const newToken = generateAccessToken({ email });

    return Response.json(
      { message: "مشخصات کاربر با موفقیت تغییر کرد" },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${newToken};path="/";httpOnly=true;maxAge=${
            24 * 60 * 60
          }`,
        },
      }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
};
