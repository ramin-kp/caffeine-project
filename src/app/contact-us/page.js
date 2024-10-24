import React from "react";

//components
import FormBox from "@/components/templates/contactUs/FormBox/FormBox";
import Breadcrumb from "@/components/templates/contactUs/breadcrumb/Breadcrumb";
// import Map from "@/components/templates/contactUs/Map/Map";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import { authUser } from "@/utils/serverHelpers";
import dynamic from "next/dynamic";
import Head from "next/head";

async function ContactUs() {
  const user = await authUser();

  const Map = dynamic(
    () => import("../../components/templates/contactUs/Map/Map"),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false,
    }
  );

  return (
    <>
      <Navbar user={user} />
      <main className="container child:mt-8">
        <Breadcrumb />
        <FormBox />
        <Map />
      </main>
      <Footer />
    </>
  );
}

export default ContactUs;
