import React from "react";
import Banner from "@/components/templates/index/Banner";
import Category from "@/components/templates/index/Category";
import Latest from "@/components/templates/index/Latest";
import BestSeller from "@/components/templates/index/BestSeller";
import ProductBanner from "@/components/templates/index/ProductBanner";

function Home() {
  return (
    <>
      <Banner />
      <Category />
      <Latest />
      <BestSeller />
      <ProductBanner />
    </>
  );
}

export default Home;
