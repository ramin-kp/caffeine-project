"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { FreeMode, Navigation, Autoplay } from "swiper/modules";

//component
import ProductCard from "@/components/modules/products/ProductCard";

function SimilarProducts() {
  const prevButton = useRef();
  const nextButton = useRef();
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col gap-y-2">
          <h2 className="font-MorabbaMedium text-xl lg:text-3xl">
            محصولات مرتبط
          </h2>
        </div>
        <div className="flex items-center gap-x-2 child:p-2 child:bg-white child:dark:bg-zinc-700 child:shadow child:rounded-full">
          <button className="prevButton" ref={prevButton}>
            <svg className="w-4 h-4">
              <use href="#chevron-right"></use>
            </svg>
          </button>
          <button className="nextButton" ref={nextButton}>
            <svg className="w-4 h-4">
              <use href="#chevron-left"></use>
            </svg>
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        navigation={{
          prevEl: prevButton.current,
          nextEl: nextButton.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevButton.current;
          swiper.params.navigation.nextEl = nextButton.current;
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={1000}
        modules={[FreeMode, Navigation, Autoplay]}
        breakpoints={{
          370: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1260: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="mySwiper flex"
      >
        <SwiperSlide className="products-card-item">
          <ProductCard img={"p1.png"} />
        </SwiperSlide>
        <SwiperSlide className="products-card-item">
          <ProductCard img={"p2.png"} />
        </SwiperSlide>
        <SwiperSlide className="products-card-item">
          <ProductCard img={"p3.png"} />
        </SwiperSlide>
        <SwiperSlide className="products-card-item">
          <ProductCard img={"p4.png"} />
        </SwiperSlide>
        <SwiperSlide className="products-card-item">
          <ProductCard img={"p5.png"} />
        </SwiperSlide>
        <SwiperSlide className="products-card-item">
          <ProductCard img={"p6.png"} />
        </SwiperSlide>
        <SwiperSlide className="products-card-item">
          <ProductCard img={"p7.png"} />
        </SwiperSlide>
        <SwiperSlide className="products-card-item">
          <ProductCard img={"p8.png"} />
        </SwiperSlide>
      </Swiper>
      {/* <div className="swiper BestSelling rounded-lg" dir="rtl">
        <div className="swiper-wrapper rounded-lg mb-2 child:cursor-pointer child:overflow-hidden child:rounded-lg child:bg-white child:dark:bg-zinc-700 child:shadow child:w-64 child:relative">
          <div className="swiper-slide group">
            <span className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 text-xs bg-green-500  rounded-full text-white z-30">
              20%
            </span>

            <img
              src="./Images/products/p7.png"
              alt="product-1"
              className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
            />
            <div className="px-2 lg:px-4 mb-3">
              <a
                href="product-details.html"
                className="line-clamp-2 font-DanaMedium mb-2 text-sm lg:text-base"
              >
                قهوه ترک گرمی مقدار 200 گرم رنگ بنفش خط دوم طولانی
              </a>
              <div className="flex items-center gap-x-1 lg:gap-x-3">
                <p className="font-DanaDemiBold text-green-600 dark:text-green-500">
                  200,000
                  <span className="font-Dana text-sm">تومان</span>
                </p>
                <del className="font-Dana text-xs lg:text-sm text-rose-300 hidden lg:inline">
                  230,000
                  <span className="">تومان</span>
                </del>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
              <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
                <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white">
                  <svg className="w-4 h-4">
                    <use href="#shopping-cart"></use>
                  </svg>
                </span>
                <span className="hover:text-green-600">
                  <svg className="w-4 h-4">
                    <use href="#heart"></use>
                  </svg>
                </span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-300">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="swiper-slide group">
            <img
              src="./Images/products/p6.png"
              alt="product-1"
              className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
            />
            <div className="px-2 lg:px-4 mb-3">
              <a
                href="product-details.html"
                className="line-clamp-2 font-DanaMedium mb-2 text-sm lg:text-base"
              >
                پودر قهوه اسپرسو آرتیمان مقدار 250 گرم خط دوم طولانی
              </a>
              <div className="flex items-center gap-x-1 lg:gap-x-3">
                <p className="font-Dana text-red-400">فعلا موجود نیست</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
              <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
                <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white">
                  <svg className="w-4 h-4">
                    <use href="#shopping-cart"></use>
                  </svg>
                </span>
                <span className="hover:text-green-600">
                  <svg className="w-4 h-4">
                    <use href="#heart"></use>
                  </svg>
                </span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-300">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="swiper-slide group">
            <span className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 text-xs bg-green-500  rounded-full text-white z-30">
              20%
            </span>

            <img
              src="./Images/products/p5.png"
              alt="product-1"
              className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
            />
            <div className="px-2 lg:px-4 mb-3">
              <a
                href="product-details.html"
                className="line-clamp-2 font-DanaMedium mb-2 text-sm lg:text-base"
              >
                قهوه ترک گرمی مقدار 200 گرم رنگ بنفش خط دوم طولانی
              </a>
              <div className="flex items-center gap-x-1 lg:gap-x-3">
                <p className="font-DanaDemiBold text-green-600 dark:text-green-500">
                  200,000
                  <span className="font-Dana text-sm">تومان</span>
                </p>
                <del className="font-Dana text-xs lg:text-sm text-rose-300 hidden lg:inline">
                  230,000
                  <span className="">تومان</span>
                </del>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
              <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
                <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white">
                  <svg className="w-4 h-4">
                    <use href="#shopping-cart"></use>
                  </svg>
                </span>
                <span className="hover:text-green-600">
                  <svg className="w-4 h-4">
                    <use href="#heart"></use>
                  </svg>
                </span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-300">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="swiper-slide group">
            <span className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 text-xs bg-green-500  rounded-full text-white z-30">
              20%
            </span>

            <img
              src="./Images/products/p4.png"
              alt="product-1"
              className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
            />
            <div className="px-2 lg:px-4 mb-3">
              <a
                href="product-details.html"
                className="line-clamp-2 font-DanaMedium mb-2 text-sm lg:text-base"
              >
                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی خط دوم طولانی
              </a>
              <div className="flex items-center gap-x-1 lg:gap-x-3">
                <p className="font-DanaDemiBold text-green-600 dark:text-green-500">
                  154,000
                  <span className="font-Dana text-sm">تومان</span>
                </p>
                <del className="font-Dana text-xs lg:text-sm text-rose-300 hidden lg:inline">
                  230,000
                  <span>تومان</span>
                </del>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
              <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
                <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white">
                  <svg className="w-4 h-4">
                    <use href="#shopping-cart"></use>
                  </svg>
                </span>
                <span className="hover:text-green-600">
                  <svg className="w-4 h-4">
                    <use href="#heart"></use>
                  </svg>
                </span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-300">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="swiper-slide group">
            <img
              src="./Images/products/p3.png"
              alt="product-1"
              className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
            />
            <div className="px-2 lg:px-4 mb-3">
              <a
                href="product-details.html"
                className="line-clamp-2 font-DanaMedium mb-2 text-sm lg:text-base"
              >
                دانه قهوه اسپرسو کد 200 مقدار 100 گرم خط دوم طولانی
              </a>
              <div className="flex items-center gap-x-1 lg:gap-x-3">
                <p className="font-DanaDemiBold text-green-600 dark:text-green-500">
                  80,000
                  <span className="font-Dana text-sm">تومان</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
              <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
                <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white">
                  <svg className="w-4 h-4">
                    <use href="#shopping-cart"></use>
                  </svg>
                </span>
                <span className="hover:text-green-600">
                  <svg className="w-4 h-4">
                    <use href="#heart"></use>
                  </svg>
                </span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-300">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="swiper-slide group">
            <img
              src="./Images/products/p2.png"
              alt="product-1"
              className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
            />
            <div className="px-2 lg:px-4 mb-3">
              <a
                href="product-details.html"
                className="line-clamp-2 font-DanaMedium mb-2 text-sm lg:text-base"
              >
                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی خط دوم طولانی
              </a>
              <div className="flex items-center gap-x-1 lg:gap-x-3">
                <p className="font-Dana text-red-400">فعلا موجود نیست</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
              <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
                <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white">
                  <svg className="w-4 h-4">
                    <use href="#shopping-cart"></use>
                  </svg>
                </span>
                <span className="hover:text-green-600">
                  <svg className="w-4 h-4">
                    <use href="#heart"></use>
                  </svg>
                </span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-300">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4 text-yellow-400">
                  <use href="#star"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default SimilarProducts;
