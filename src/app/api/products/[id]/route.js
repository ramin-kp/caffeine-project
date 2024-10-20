import connectToDB from "@/configs/connectToDB";
import productModel from "@/models/Product";

export const GET = async (req, { params }) => {
  try {
    connectToDB();
    const products = await productModel.findOne({ _id: params.id }, "nameFa");
    if (!products) {
      return Response.json({ data: "محصولی یافت نشد" }, { status: 404 });
    }

    return Response.json({ data: products });
  } catch (error) {
    return Response.json(
      { message: "internal server error", error },
      { status: 500 }
    );
  }
};
