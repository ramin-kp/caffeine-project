import Link from "next/link";
import React from "react";

//components
import FormBox from "@/components/templates/contactUs/FormBox/FormBox";
import Breadcrumb from "@/components/templates/contactUs/breadcrumb/Breadcrumb";

function ContactUs() {
  return (
    <main className="container child:mt-8">
      <Breadcrumb />
      <FormBox />
    </main>
  );
}

export default ContactUs;
