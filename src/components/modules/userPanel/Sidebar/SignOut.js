"use client";
import React from "react";
import { showSwal } from "@/utils/helpers";

function SignOut() {
  const singOutHandler = () => {
    showSwal("آیا میخواهید از حساب کاربری خود خارج شوید؟", "warning", [
      "خیر",
      "بله",
    ]).then(async (result) => {
      if (result) {
        const res = await fetch("/api/auth/signout", { method: "POST" });
        if (res.status == 200) {
          showSwal(
            `باموفقیت از حساب کاربری خود خارج شدید`,
            "success",
            "تایید"
          ).then(() => {
            location.replace("/");
          });
        }
      }
    });
  };
  return <div onClick={singOutHandler}>خروج از حساب </div>;
}

export default SignOut;
