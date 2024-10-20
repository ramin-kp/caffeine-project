import React from "react";

//components
import FormBox from "@/components/templates/contactUs/FormBox/FormBox";
import Breadcrumb from "@/components/templates/contactUs/breadcrumb/Breadcrumb";
import Map from "@/components/templates/contactUs/Map/Map";

function ContactUs() {
  return (
    <main className="container child:mt-8">
      <Breadcrumb />
      <FormBox />
      <Map />
    </main>
  );
}

export default ContactUs;
