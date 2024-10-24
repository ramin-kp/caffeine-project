import connectToDB from "@/configs/connectToDB";
import ticketModel from "@/models/Ticket";
import { authUser } from "@/utils/serverHelpers";

export const POST = async (req) => {
  try {
    connectToDB();
    const reqBody = await req.json();
    const { departmentID, subDepartmentID, priority, title, body } = reqBody;
    if (!departmentID || !subDepartmentID || !priority || !title || !body) {
      return Response.json(
        { message: "لطفا فیلدها رو کامل کنید" },
        { status: 400 }
      );
    }
    const userData = await authUser();

    await ticketModel.create({
      title,
      body,
      user: userData._id,
      department: departmentID,
      subDepartment: subDepartmentID,
      priority,
    });
    return Response.json(
      { message: "تیکت شما با موفقیت ارسال شد" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "مشکلی سمت سرور رخ داده است" },
      { status: 500 }
    );
  }
};
