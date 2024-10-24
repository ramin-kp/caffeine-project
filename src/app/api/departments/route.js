import connectToDB from "@/configs/connectToDB";
import departmentModel from "@/models/Department";

export const POST = async (req) => {
  try {
    connectToDB();
    const body = await req.json();
    const { title } = body;
    if (!title.trim()) {
      return Response.json(
        { message: "نام دپارتمان معتبر نمی باشد" },
        { status: 400 }
      );
    }
    await departmentModel.create({ title });
    return Response.json(
      { message: "دپارتمان مورد نظر با موفقیت ایجاد شد" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "مشکلی سمت سرور رخ داده است" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    connectToDB();
    const departments = await departmentModel.find({});
    return Response.json(departments);
  } catch (error) {
    return Response.json(
      { message: "مشکلی سمت سرور رخ داده است" },
      { status: 500 }
    );
  }
};
