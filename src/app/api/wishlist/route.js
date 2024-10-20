import connectToDB from "@/configs/connectToDB";
import mongoose from "mongoose";
import wishlistModel from "@/models/Wishlist";

export const POST = async (req) => {
  try {
    connectToDB();
    const body = await req.json();
    const { userID, productID } = body;
    if (!userID.trim()) {
      return Response.json(
        { message: "شناسه‌ کاربری را وارد کنید" },
        { status: 400 }
      );
    }
    if (!productID.trim()) {
      return Response.json(
        { message: "شناسه‌ محصول را وارد کنید" },
        { status: 400 }
      );
    }
    if (!mongoose.isValidObjectId(userID)) {
      return Response.json(
        { message: "شناسه‌ کاربری صحیح نمی‌باشد" },
        { status: 400 }
      );
    }
    if (!mongoose.isValidObjectId(productID)) {
      return Response.json(
        { message: "شناسه‌ محصول صحیح نمی‌باشد" },
        { status: 400 }
      );
    }

    const isWishExist = await wishlistModel.findOne({ userID, productID });
    if (isWishExist) {
      return Response.json(
        { message: "محصول مورد نظر از قبل ثبت شده است" },
        {
          status: 200,
        }
      );
    }
    await wishlistModel.create({ userID, productID });

    return Response.json(
      { message: "محصول مورد نظر با موفقیت ثبت شد" },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
};
