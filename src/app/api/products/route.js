import connectToDB from "@/configs/connectToDB";
import productModel from "@/models/Product";

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

    if (
      !nameFa ||
      !nameEn ||
      !shortDescription ||
      !variant ||
      !amount ||
      !birthplace ||
      !Ingredients ||
      !price ||
      !quantity
    ) {
      return Response.json(
        { message: "لطفا فیلد ها رو کامل کنید" },
        { status: 400 }
      );
    }

    const isProductsExist = await productModel.findOne({
      $or: [{ nameEn }, { nameFa }],
    });

    if (isProductsExist) {
      return Response.json(
        { message: "محصولی با این مشخصات موجود است." },
        { status: 409 }
      );
    }

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

export const GET = async () => {
  try {
    connectToDB();
    const products = await productModel.find({}).populate("comments");

    return Response.json({ data: products });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
};
