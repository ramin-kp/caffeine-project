import React from "react";

//components
import Navbar from "@/components/modules/navbar/Navbar";
import Banner from "@/components/templates/index/Banner";
import Category from "@/components/templates/index/Category";
import Latest from "@/components/templates/index/Latest";
import BestSeller from "@/components/templates/index/BestSeller";
import ProductBanner from "@/components/templates/index/ProductBanner";
import Offer from "@/components/templates/index/Offer";
import Blog from "@/components/templates/index/Blog";
import Footer from "@/components/modules/footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <Latest />
      <BestSeller />
      <ProductBanner />
      <Offer />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
