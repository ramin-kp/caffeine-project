"use client";
import Link from "next/link";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import ProductCard from "@/components/modules/products/ProductCard";

function Offer() {
  return (
    <section className="container mt-14">
      <div className="flex flex-col overflow-hidden lg:flex-row items-center lg:gap-x-10 bg-white dark:bg-zinc-700 rounded-lg shadow p-5">
        <div className="lg:h-full flex flex-col justify-evenly gap-y-2 mb-3 lg:mb-0">
          <div className="flex justify-between flex-col gap-y-3 font-MorabbaMedium">
            <p className="text-base lg:text-lg">پیشنهاد های</p>
            <h2 className="text-2xl lg:text-4xl text-green-500">شگفت انگیز</h2>

            <Link
              href="#"
              className="hidden lg:flex items-center justify-center gap-x-1 w-32 rounded-lg px-2 py-1 text-white bg-green-500 dark:bg-green-600 hover:bg-green-600 transition-colors"
            >
              مشاهده همه
              <svg className="w-4 h-4">
                <use href="#chevron-left"></use>
              </svg>
            </Link>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-DanaMedium text-lg mr-2 hidden lg:flex">
              فقط تا :
            </h2>
            <div className="mt-2 flex items-center gap-x-2 child:flex child:flex-col child:items-center child:justify-evenly child:shadow child:rounded-lg">
              <div className="w-16 h-[70px] px-2 bg-white dark:bg-zinc-500">
                <h2 className="font-MorabbaMedium dark:text-white text-rose-400">
                  ثانیه
                </h2>
                <p className="font-DanaDemiBold seconds">10</p>
              </div>
              <div className="w-16 h-[70px] px-2 bg-white dark:bg-zinc-500">
                <h2 className="font-MorabbaMedium dark:text-white text-rose-400">
                  دقیقه
                </h2>
                <p className="font-DanaDemiBold minutes">30</p>
              </div>
              <div className="w-16 h-[70px] px-2 bg-white dark:bg-zinc-500">
                <h2 className="font-MorabbaMedium dark:text-white text-rose-400">
                  ساعت
                </h2>
                <p className="font-DanaDemiBold hours">2</p>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          speed={1000}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
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
          className="mySwiper"
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
      </div>
    </section>
  );
}

export default Offer;
