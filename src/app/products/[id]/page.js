import React from "react";
import mongoose from "mongoose";

//components
import Breadcrumb from "@/components/modules/productBreadcrumb/Breadcrumb";
import ProductComments from "@/components/templates/products/comments/ProductComments";
import Gallery from "@/components/templates/products/gallery/Gallery";
import SimilarProducts from "@/components/templates/products/similarProducts/SimilarProducts";
import notFound from "@/app/not-found";

//model
import productModel from "@/models/Product";

async function ProductDetails({ params }) {
  if (!mongoose.isValidObjectId(params.id)) {
    return notFound();
  }
  const data = await productModel
    .findOne({ _id: params.id }, "-__v")
    .populate("comments");

  const productDetails = JSON.parse(JSON.stringify(data));

  return (
    <main className="container child:mt-8">
      <Breadcrumb productDetails={true} />
      <Gallery productData={productDetails} />
      <ProductComments productId={params.id} comments={productDetails.comments} />
      <SimilarProducts />
    </main>
  );
}

export default ProductDetails;
