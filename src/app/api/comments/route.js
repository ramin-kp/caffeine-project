import mongoose from "mongoose";

import connectToDB from "@/configs/connectToDB";
import commentModel from "@/models/Comment";
import productModel from "@/models/Product";

export const POST = async (req) => {
  try {
    connectToDB();
    const reqBody = await req.json();
    const { username, title, body, recommend, productID } = reqBody;

    if (!username || !title || !body || !recommend || !productID) {
      return Response.json(
        { message: "لطفا فیلد ها رو کامل کنید" },
        { status: 400 }
      );
    }
    if (!mongoose.isValidObjectId(productID)) {
      return Response.json(
        { message: "شناسه محصول نامعتبر است" },
        { status: 400 }
      );
    }
    const isProductExist = await productModel.findOne({ _id: productID });

    console.log("isProductExist ->", isProductExist);

    if (!isProductExist) {
      return Response.json(
        { message: "محصولی با این مشخصات وجود ندارد" },
        { status: 404 }
      );
    }
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

export const GET = async () => {
  try {
    connectToDB();
    const comments = await commentModel.find({ isAccept: true });

    return Response.json({ data: comments });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
};
