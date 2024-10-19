"use client";
import React, { useEffect, useState } from "react";
import ProductSlider from "./ProductSlider";

function Gallery({ productData }) {
  const [productQuantity, setProductQuantity] = useState(1);
  const {
    nameFa,
    nameEn,
    description,
    variant,
    amount,
    birthplace,
    Ingredients,
    score,
    price,
    quantity,
  } = productData;

  return (
    <section className="flex flex-col lg:flex-row items-start gap-4 child:rounded-lg child:bg-white child:dark:bg-zinc-700 child:shadow child:p-4">
      <div className="w-full lg:w-3/4 flex flex-col gap-y-8 ">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex lg:w-96 flex-col gap-y-4">
            <div className="flex items-center gap-x-3 mr-2">
              <div className="tooltip">
                <button className="rounded-full p-1.5 border-2 border-gray-200 dark:border-white/20">
                  <svg className="w-5 h-5">
                    <use href="#share"></use>
                  </svg>
                </button>
                <div className="tooltiptext duration-300 transition-all text-xs bg-zinc-700 dark:bg-zinc-500 text-white dark:to-zinc-700 after:border-t-zinc-700 after:dark:border-t-zinc-500">
                  اشتراک گذاری
                </div>
              </div>
              <div className="tooltip ">
                <button className="rounded-full p-1.5 border-2 border-gray-200 dark:border-white/20">
                  <svg className="w-5 h-5">
                    <use href="#heart"></use>
                  </svg>
                </button>
                <div className="tooltiptext duration-300 transition-all text-xs bg-zinc-700 dark:bg-zinc-500 text-white dark:to-zinc-700 after:border-t-zinc-700 after:dark:border-t-zinc-500">
                  افزودن به علاقمندی
                </div>
              </div>
              <div className="tooltip ">
                <button className="rounded-full p-1.5 border-2 border-gray-200 dark:border-white/20">
                  <svg className="w-5 h-5">
                    <use href="#arrows-up-down"></use>
                  </svg>
                </button>
                <div className="tooltiptext duration-300 transition-all text-xs bg-zinc-700 dark:bg-zinc-500 text-white dark:to-zinc-700 after:border-t-zinc-700 after:dark:border-t-zinc-500">
                  مقایسه
                </div>
              </div>
            </div>
            <ProductSlider />
          </div>
          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex items-start justify-between border-b border-b-gray-200 py-2">
              <div className="flex flex-col gap-y-1">
                <p className="text-sm text-gray-400">{nameEn}</p>
                <h3 className="text-2xl font-MorabbaMedium">{nameFa} </h3>
              </div>
              <div className="flex gap-x-1">
                <p className="font-DanaMedium mt-0.5">{score.toFixed(1)}</p>
                <svg className="w-5 h-5  text-yellow-400">
                  <use href="#star"></use>
                </svg>
              </div>
            </div>
            <div className="flex gap-x-1 text-gray-400 ">
              <svg className="w-5 h-5">
                <use href="#list-bullet"></use>
              </svg>
              <p>دسته‌بندی : دانه اسپرسو</p>
            </div>
            <p className="mt-2 font-DanaMedium">ویژگی های محصول :</p>
            <div className="grid grid-cols-12 gap-4 child:col-span-12 xl:child:col-span-6 child:dark:bg-zinc-800 child:bg-gray-100 child:h-12 child:rounded-lg child:text-sm child:flex child:items-center child:justify-center">
              <div>
                <p className="text-zinc-600 dark:text-gray-400">
                  گونه :{variant}
                </p>
              </div>
              <div>
                <p className="text-zinc-600 dark:text-gray-400">
                  میزان کافئین : {amount}
                </p>
              </div>
              <div>
                <p className="text-zinc-600 dark:text-gray-400">
                  خاستگاه :{birthplace}
                </p>
              </div>
              <div>
                <p className="text-zinc-600 dark:text-gray-400">
                  مواد تشکیل‌دهنده :{Ingredients}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mr-2 grid grid-cols-12 child:col-span-6 xl:child:col-span-3 gap-x-1 gap-y-2 lg:gap-4 child:border child:text-gray-400 child:dark:border-white/20 child:border-gray-200 child:rounded-lg child:h-12  child:p-2 child:flex child:items-center child:gap-x-1 lg:child:gap-x-2 child:text-sm lg:text-base">
          <span>
            <svg className="w-4 h-4 lg:w-6 lg:h-6">
              <use href="#arrow-path-rounded-square"></use>
            </svg>
            <p>ضمانت بازگشت کالا</p>
          </span>
          <span>
            <svg className="w-4 h-4 lg:w-6 lg:h-6">
              <use href="#check-badge"></use>
            </svg>
            <p>تضمین اصالت کالا</p>
          </span>
          <span>
            <svg className="w-4 h-4 lg:w-6 lg:h-6">
              <use href="#calender-day"></use>
            </svg>
            <p>پشتیبانی کل هفته</p>
          </span>
          <span>
            <svg className="w-4 h-4 lg:w-6 lg:h-6">
              <use href="#truck"></use>
            </svg>
            <p>ارسال به سراسر ایران </p>
          </span>
        </div>
        <div className="lg:mr-2">
          <h2 className="font-MorabbaMedium text-2xl pb-1 mb-2 ">
            معرفی محصول
          </h2>
          <p className="leading-10 text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/4 lg:sticky top-5 flex flex-col gap-y-6">
        <div className="flex items-center gap-x-1">
          <p className="text-2xl font-DanaDemiBold">163,000</p>
          <p className="">تومان</p>
        </div>

        <button className="w-full flex items-center justify-between gap-x-1 rounded-lg border border-gray-200 dark:border-white/20 py-2 px-3">
          <svg
            className={`w-6 h-6 ${
              productQuantity < quantity ? "text-green-600" : "text-gray-400"
            } `}
            onClick={() => {
              productQuantity < quantity &&
                setProductQuantity((prev) => prev + 1);
            }}
          >
            <use href="#plus"></use>
          </svg>
          <input
            type="number"
            name="customInput"
            id="customInput"
            min="1"
            max={quantity}
            value={productQuantity}
            className="custom-input mr-4 text-lg bg-transparent"
          />
          <svg
            className={`w-6 h-6 ${
              productQuantity > 1 ? "text-red-500" : "text-gray-400"
            }`}
            onClick={() => {
              productQuantity > 1 && setProductQuantity((prev) => prev - 1);
            }}
          >
            <use href="#minus"></use>
          </svg>
        </button>

        <button className="w-full flex items-center gap-x-1 justify-between dark:bg-zinc-800 dark:text-gray-400  bg-gray-100 transition-all rounded-lg py-2 px-2 xl:px-3 font-DanaMedium text-sm xl:text-base">
          <p>مجموع خرید :</p>
          <p>
            {new Intl.NumberFormat("fa-IR")
              .format(price * productQuantity)
              .toLocaleString()}
            تومان
          </p>
        </button>

        <button className="w-full flex items-center gap-x-1 justify-center bg-green-500 text-white hover:bg-green-600 transition-all rounded-lg shadow py-2">
          افزودن به سبد خرید
          <svg className="w-5 h-5">
            <use href="#shopping-bag"></use>
          </svg>
        </button>

        <div className="text-sm  text-gray-400 flex xl:items-center gap-x-1">
          <svg className="w-5 h-5">
            <use href="#info"></use>
          </svg>
          <p>ارسال رایگان برای خریدهای بالای 400 هزار تومان</p>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
