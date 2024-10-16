import connectToDB from "@/configs/connectToDB";
import productModel from "@/models/product";

export const POST = async (req) => {
  try {
    connectToDB();
    const body = await req.json();
    const {
      nameFa,
      nameEn,
      shortDescription,
      variant,
      amount,
      birthplace,
      Ingredients,
      price,
      quantity,
    } = body;

    const product = await productModel.create({
      nameFa,
      nameEn,
      shortDescription,
      variant,
      amount,
      birthplace,
      Ingredients,
      price,
      quantity,
    });

    return Response.json(
      { message: "محصول مورد نظر با موفقیت ایجاد شد", data: product },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
};
