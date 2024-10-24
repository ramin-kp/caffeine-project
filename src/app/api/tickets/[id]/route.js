import connectToDB from "@/configs/connectToDB";
import ticketModel from "@/models/Ticket";
// import { authUser } from "@/utils/serverHelpers";

export const POST = async (req, { params }) => {
  try {
    connectToDB();
    const user = "67135e62e0e03cf4f2d2c025";
    const reqBody = await req.json();
    const { text } = reqBody;
    const newAnswerTicket = await ticketModel.create({
      title: "پاسخ",
      body: text,
      isAnswer: true,
      user,
    });
    const updateTicket = await ticketModel.findOneAndUpdate(
      { _id: params.id },
      { $set: { hasAnswer: text, mainAnswer: newAnswerTicket._id } }
    );
    return Response.json(
      { message: "پاسخ تیکت با موفقیت ثبت شد", data: updateTicket },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "مشکلی سمت سرور رخ داده است" },
      { status: 500 }
    );
  }
};
