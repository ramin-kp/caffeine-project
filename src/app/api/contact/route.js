import connectToDB from "@/configs/connectToDB";
import { verifyEmail, verifyPhoneNumber } from "@/utils/auth";
import contactModel from "@/models/Contact";

export const POST = async (req) => {
  try {
    connectToDB();
    const reqBody = await req.json();
    const { phone, title, name, email, body } = reqBody;
    if (
      !phone.trim() ||
      !title.trim() ||
      !name.trim() ||
      !email.trim() ||
      !body.trim()
    ) {
      return Response.json(
        { message: "لطفا فیلد هارو پرکنید" },
        { status: 400 }
      );
    }
    const verifiedPhone = verifyPhoneNumber(phone);
    if (!verifiedPhone) {
      return Response.json(
        { message: "شماره موبایل وارد شده صحیح نمی باشد" },
        { status: 422 }
      );
    }
    const verifiedEmail = verifyEmail(email);
    if (!verifiedEmail) {
      return Response.json(
        { message: "ایمیل وارد شده صحیح نمی باشد" },
        { status: 422 }
      );
    }

    await contactModel.create({ phone, title, name, email, body });
    return Response.json(
      {
        message:
          "پیام شما با موفقیت ارسال شد و بعد برسی مدیران سایت با شما تماس گرفته می‌شود",
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
};
