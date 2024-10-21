import React from "react";
import mongoose from "mongoose";

//components
import Breadcrumb from "@/components/modules/productBreadcrumb/Breadcrumb";
import ProductComments from "@/components/templates/products/comments/ProductComments";

//model
import productModel from "@/models/Product";

//utils
import { authUser } from "@/utils/serverHelpers";

//components
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import Gallery from "@/components/templates/products/gallery/Gallery";
import SimilarProducts from "@/components/templates/products/similarProducts/SimilarProducts";
import notFound from "@/app/not-found";
import connectToDB from "@/configs/connectToDB";

export async function generateMetadata({ params }) {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
  const product = await res.json();

  const title = `قهوه تلخ | ${product.data.nameFa} `;
  const description = `قهوه تلخ - صفحه جزئیات محصول ${product.data.nameFa}`;

  return { title, description };
}

async function ProductDetails({ params }) {
  if (!mongoose.isValidObjectId(params.id)) {
    return notFound();
  }
  connectToDB();
  const data = await productModel.findOne({ _id: params.id }, "-__v").populate({
    path: "comments",
    match: { isAccept: true },
    select: "-__v -productID",
  });

  if (!data) {
    return notFound();
  }

  const productDetails = JSON.parse(JSON.stringify(data));
  const user = await authUser();

  return (
    <>
      <Navbar user={user} />
      <main className="container child:mt-8">
        <Breadcrumb productDetails={true} href={productDetails._id} />
        <Gallery productData={productDetails} user={user} />
        <ProductComments
          productId={params.id}
          comments={productDetails.comments}
          userData={user}
        />
        <SimilarProducts />
      </main>
      <Footer />
    </>
  );
}

export default ProductDetails;
