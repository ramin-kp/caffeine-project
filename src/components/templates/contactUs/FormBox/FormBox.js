"use client";
import React, { useState } from "react";
import ShopInfo from "./ShopInfo";
import Link from "next/link";
import { showSwal } from "@/utils/helpers";
import { verifyEmail, verifyPhoneNumber } from "@/utils/auth";

function FormBox() {
  const [data, setData] = useState({
    phone: "",
    title: "",
    name: "",
    email: "",
    body: "",
  });
  const changeData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log("data", data);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { phone, title, name, email, body } = data;
    if (
      !phone.trim() ||
      !title.trim() ||
      !name.trim() ||
      !email.trim() ||
      !body.trim()
    ) {
      return showSwal("لطفا فیلد هارو کامل کنید", "error", "تایید");
    }
    const verifiedPhone = verifyPhoneNumber(phone);
    if (!verifiedPhone) {
      return showSwal("شماره موبایل وارد شده معتبر نمی باشد", "error", "تایید");
    }
    const verifiedEmail = verifyEmail(data.email);
    if (!verifiedEmail) {
      return showSwal("ایمیل وارد شده معتبر نمی باشد", "error", "تایید");
    }
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const contactData = await res.json();
    if (res.status === 201) {
      showSwal(`${contactData.message}`, "success", "تایید").then(() =>
        setData({
          phone: "",
          title: "",
          name: "",
          email: "",
          body: "",
        })
      );
    } else if (res.status === 500) {
      showSwal(
        `مشکلی سمت سرور رخ داده است لطفا بعدا دوباره امتحان کنید`,
        "error",
        "تایید"
      );
    } else {
      return showSwal(`${contactData.message}`, "error", "تایید");
    }
  };

  return (
    <section className="w-full p-5 rounded-lg shadow bg-white dark:bg-zinc-700">
      <h2 className="font-MorabbaMedium text-xl flex w-fit border-b-2 border-green-500 pb-1">
        تماس با ما
      </h2>
      <p className="text-gray-500 dark:text-gray-200 font-DanaMedium mt-4 mb-8 text-sm lg:text-base">
        قبل از مطرح کردن هر گونه سوال بخش{" "}
        <Link className="text-green-500" href="/">
          سوالات متداول
        </Link>{" "}
        را مطالعه نمایید
      </p>
      <div className="flex flex-col lg:flex-row items-start gap-x-8">
        <div className="w-full lg:w-3/4">
          <form
            className="w-full grid grid-cols-12 gap-4"
            onSubmit={submitHandler}
          >
            <input
              type="text"
              placeholder="نام"
              className="tailwind-input col-span-6"
              name="name"
              value={data.name}
              onChange={changeData}
            />
            <input
              type="text"
              placeholder="عنوان"
              className="tailwind-input col-span-6"
              name="title"
              value={data.title}
              onChange={changeData}
            />
            <input
              type="text"
              placeholder="ایمیل"
              className="tailwind-input col-span-6 "
              name="email"
              value={data.email}
              onChange={changeData}
            />
            <input
              type="number"
              placeholder="شماره موبایل"
              className="tailwind-input col-span-6"
              name="phone"
              value={data.phone}
              onChange={changeData}
              onWheel={(e) => e.target.blur()}
            />
            <textarea
              className="tailwind-input col-span-12 h-24"
              name="body"
              value={data.body}
              onChange={changeData}
              placeholder="متن دیدگاه"
            ></textarea>
            <button
              className="mx-auto rounded-lg col-span-12 w-32 p-2 bg-green-500 hover:bg-green-600 text-white transition-all"
              type="submit"
            >
              ارسال پیام
            </button>
          </form>
        </div>
        <ShopInfo />
      </div>
    </section>
  );
}

export default FormBox;
