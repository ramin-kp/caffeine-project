"use client";
import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";

import ProductCard from "@/components/modules/products/ProductCard";

function BestSeller() {
  const prevButton = useRef();
  const nextButton = useRef();
  return (
    <section className="container mt-14">
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col gap-y-2">
          <h2 className="font-MorabbaMedium text-xl lg:text-3xl">
            محصولات پر فروش
          </h2>
        </div>
        <div className="flex items-center gap-x-2 child:p-2 child:bg-white child:dark:bg-zinc-700 child:shadow child:rounded-full">
          <button className="nextButton " ref={nextButton}>
            <svg className="w-4 h-4">
              <use href="#chevron-right"></use>
            </svg>
          </button>
          <button className="nextButton " ref={prevButton}>
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
    </section>
  );
}

export default BestSeller;
