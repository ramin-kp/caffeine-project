import React from "react";
import Banner from "@/components/templates/index/Banner";
import Category from "@/components/templates/index/Category";
import Latest from "@/components/templates/index/Latest";
import BestSeller from "@/components/templates/index/BestSeller";
import ProductBanner from "@/components/templates/index/ProductBanner";
import Offer from "@/components/templates/index/Offer";

function Home() {
  return (
    <>
      <Banner />
      <Category />
      <Latest />
      <BestSeller />
      <ProductBanner />
      <Offer />
    </>
  );
}

export default Home;
