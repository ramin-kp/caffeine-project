import AboutUsInfo from "@/components/templates/aboutUs/AboutUsInfo/AboutUsInfo";
import Breadcrumb from "@/components/templates/aboutUs/Breadcrumb/Breadcrumb";
import React from "react";

function AboutUs() {
  return (
    <main className="container child:mt-8">
      <Breadcrumb />
      <AboutUsInfo />
    </main>
  );
}

export default AboutUs;
