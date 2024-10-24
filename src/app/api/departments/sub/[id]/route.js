import connectToDB from "@/configs/connectToDB";
import mongoose from "mongoose";
import subDepartmentModel from "@/models/SubDepartment";

export const GET = async (req, { params }) => {
  try {
    connectToDB();
    const { id } = params;
    const subDepartments = await subDepartmentModel.find({
      department: id,
    });
    return Response.json(subDepartments);
  } catch (error) {
    return Response.json(
      { message: "مشکلی سمت سرور رخ داده است" },
      { status: 500 }
    );
  }
};
