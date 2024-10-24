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
  return (
    <div className=" shadow justify-start col-span-6 sm:col-span-2 p-2  rounded-lg flex gap-x-4 items-center sm:justify-center">
      <div
        onClick={singOutHandler}
        className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer"
      >
        <svg className="w-6 h-6 text-green-500">
          <use href="#arrow-left-start-on-rectangle"></use>
        </svg>
      </div>
      <p className="block sm:hidden">خروج</p>
    </div>
  );
}

export default SignOut;
