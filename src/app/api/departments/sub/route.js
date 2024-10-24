import mongoose from "mongoose";
import connectToDB from "@/configs/connectToDB";
import subDepartmentModel from "@/models/SubDepartment";

export const POST = async (req) => {
  try {
    connectToDB();
    const body = await req.json();
    const { title, department } = body;

    if (!title.trim()) {
      return Response.json(
        { message: "نام ساب دپارتمان معتبر نمی باشد" },
        { status: 400 }
      );
    }
    if (!mongoose.isValidObjectId(department)) {
      return Response.json(
        { message: "شناسه دپارتمان معتبر نمی باشد" },
        { status: 400 }
      );
    }
    await subDepartmentModel.create({ title, department });
    return Response.json(
      { message: "ساب دپارتمان مورد نظر با موفقیت ایجاد شد" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "مشکلی سمت سرور رخ داده است" },
      { status: 500 }
    );
  }
};
