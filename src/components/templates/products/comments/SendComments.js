"use client";
import React, { useEffect, useState } from "react";

//utils
import { showSwal } from "@/utils/helpers";
import { useRouter } from "next/navigation";

function SendComments({ productId, userData }) {
  console.log(userData);
  const [commentsData, setCommentData] = useState({
    username: "",
    title: "",
    body: "",
    recommend: "",
    productID: "",
  });
  const router = useRouter();

  useEffect(() => {
    setCommentData({ ...commentsData, productID: productId });
  }, []);

  const commentsDataHandler = (e) => {
    setCommentData({ ...commentsData, [e.target.name]: e.target.value });
  };
  const sendCommentHandler = async () => {
    const currentUrl = window.location.pathname;
    if (!userData || !userData?._id) {
      return showSwal(
        "لطفا برای ثبت کامنت اول وارد اکانت خود شوید",
        "error",
        "ورد به حساب کاربری"
      ).then(() => router.push(`/signin?redirect=${currentUrl}`));
    }
    const { username, title, body, recommend, productID } = commentsData;
    if (
      !username.trim() ||
      !title.trim() ||
      !body.trim() ||
      !recommend ||
      !productID
    ) {
      return showSwal("لطفا فیلد هارو پرکنید", "error", "باشه");
    }
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentsData),
    });
    const data = await res.json();
    if (res.status === 201) {
      showSwal(
        "کامنت شما با موفقیت ثبت شد بعد از تایید مدیر سایت نمایش داده می‌شود",
        "success",
        "تایید"
      );
      setCommentData({
        username: "",
        title: "",
        body: "",
        recommend: "",
        productID: "",
      });
    } else {
      showSwal(`${data.message}`, "error", "تایید");
    }
  };

  return (
    <div className="lg:w-1/4 flex flex-col w-full ">
      <p className="font-DanaMedium text-lg mb-2">ثبت دیدگاه</p>
      <input
        type="text"
        placeholder="نام کاربری"
        name="username"
        value={commentsData.username}
        onChange={commentsDataHandler}
        className="tailwind-input"
      />
      <input
        type="text"
        placeholder="عنوان"
        name="title"
        value={commentsData.title}
        onChange={commentsDataHandler}
        className="tailwind-input"
      />

      <p className="text-gray-500 dark:text-white text-sm mb-4">
        این محصول را به دیگران پیشنهاد :{" "}
      </p>
      <div
        className="grid grid-cols-12 child:col-span-6 gap-4 child:w-full  child:flex child:items-center child:justify-center child:gap-x-2 child:rounded-lg child:shadow child:py-2 mb-5 child:font-DanaMedium child:duration-300 
                  child:transition-all"
      >
        <button
          className={`text-green-600 ring-transparent ring-1  dark:ring-white/20 focus:ring-green-600 focus:dark:ring-green-600 ${
            commentsData.recommend === "true"
              ? "ring-green-600 dark:ring-green-600"
              : ""
          } `}
          onClick={() => setCommentData({ ...commentsData, recommend: "true" })}
        >
          <svg className="w-5 h-5">
            <use href="#hand-up"></use>
          </svg>
          میکنم
        </button>
        <button
          className={`text-red-500 ring-transparent ring-1  dark:ring-white/20 focus:ring-[#EF4343] focus:dark:ring-[#EF4343] ${
            commentsData.recommend === "false"
              ? "ring-[#EF4343] dark:ring-[#EF4343]"
              : ""
          }`}
          onClick={() =>
            setCommentData({ ...commentsData, recommend: "false" })
          }
        >
          <svg className="w-5 h-5">
            <use href="#hand-down"></use>
          </svg>
          نمیکنم
        </button>
      </div>
      <textarea
        className="h-24 tailwind-input"
        placeholder="متن دیدگاه"
        name="body"
        value={commentsData.body}
        onChange={commentsDataHandler}
      ></textarea>
      <button
        className="rounded-lg p-2 bg-green-500 hover:bg-green-600 text-white transition-all"
        onClick={sendCommentHandler}
      >
        ثبت
      </button>
    </div>
  );
}

export default SendComments;
