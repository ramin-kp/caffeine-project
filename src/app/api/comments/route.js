import connectToDB from "@/configs/connectToDB";
import commentModel from "@/models/comment";
import productModel from "@/models/product";

export const POST = async (req) => {
  try {
    connectToDB();
    const reqBody = await req.json();
    const { username, title, body, recommend, productID } = reqBody;
    const comment = await commentModel.create({
      username,
      title,
      body,
      recommend,
      productID,
    });
    await productModel.findOneAndUpdate(
      { _id: productID },
      { $push: { comments: comment._id } }
    );
    return Response.json(
      { message: "کامنت شما با موفقیت ایجاد شد" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
};
