import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import AboutUsInfo from "@/components/templates/aboutUs/AboutUsInfo/AboutUsInfo";
import Breadcrumb from "@/components/templates/aboutUs/Breadcrumb/Breadcrumb";
import { authUser } from "@/utils/serverHelpers";
import React from "react";

async function AboutUs() {
  const user = await authUser();

  return (
    <>
      <Navbar user={user} />

      <main className="container child:mt-8">
        <Breadcrumb />
        <AboutUsInfo />
      </main>
      <Footer />
    </>
  );
}

export default AboutUs;
