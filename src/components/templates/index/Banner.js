"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

function Banner() {
  const prevButton = useRef();
  const nextButton = useRef();

  return (
    <div className="relative px-[9px] mt4 lg:mt-6">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevButton.current,
          nextEl: nextButton.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevButton.current;
          swiper.params.navigation.nextEl = nextButton.current;
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        speed={2000}
        className="mySwiper relative w-full"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              className="w-full h-48 md:h-72 lg:h-[450px] object-cover"
              src="/images/slider/slide-1.png"
              width={2000}
              height={2000}
              quality={90}
              alt="slider image"
            />
            <div className="flex items-start  flex-col absolute  right-5 top-5 md:right-10 md:top-10 lg:top-20 lg:right-40 xl:right-48  text-white">
              <h2 className="font-MorabbaMedium text-xl lg:text-5xl mb-2 lg:mb-4">
                دانه قهوه اسپرسو جیورنو
              </h2>
              <p className="inline-block text-base lg:text-2xl font-MorabbaLight border-b border-gray-300 pb-2 lg:pb-4 mb-2 lg:mb-4">
                یک طعم باورنکردنی !
              </p>
              <p class="w-[60%] text-sm lg:text-base lg:leading-8 mb-2 lg:mb-4 line-clamp-2">
                قطعا نام آشنای جیورنو را شنیده اید، جیورنو یکی از گونه های قهوه
                است که در نواحی مختلف کمربند قهوه کشت میشود.
              </p>
              <Link
                href="#"
                class="flex items-center bg-green-500 hover:bg-green-600 transition-all rounded-lg px-1  lg:px-2 py-1 lg:py-1.5 text-sm lg:text-base"
              >
                <p class="hidden lg:flex ml-1"> مشاهده </p> فروشگاه
                <svg class="w-4 h-4">
                  <use href="#chevron-left"></use>
                </svg>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              className="w-full h-48 md:h-72 lg:h-[450px] object-cover"
              src="/images/slider/slide-1.png"
              width={2000}
              height={2000}
              quality={90}
              alt="slider image"
            />
            <div className="flex items-start  flex-col absolute  right-5 top-5 md:right-10 md:top-10 lg:top-20 lg:right-40 xl:right-48  text-white">
              <h2 className="font-MorabbaMedium text-xl lg:text-5xl mb-2 lg:mb-4">
                دانه قهوه اسپرسو جیورنو
              </h2>
              <p className="inline-block text-base lg:text-2xl font-MorabbaLight border-b border-gray-300 pb-2 lg:pb-4 mb-2 lg:mb-4">
                یک طعم باورنکردنی !
              </p>
              <p class="w-[60%] text-sm lg:text-base lg:leading-8 mb-2 lg:mb-4 line-clamp-2">
                قطعا نام آشنای جیورنو را شنیده اید، جیورنو یکی از گونه های قهوه
                است که در نواحی مختلف کمربند قهوه کشت میشود.
              </p>
              <Link
                href="#"
                class="flex items-center bg-green-500 hover:bg-green-600 transition-all rounded-lg px-1  lg:px-2 py-1 lg:py-1.5 text-sm lg:text-base"
              >
                <p class="hidden lg:flex ml-1"> مشاهده </p> فروشگاه
                <svg class="w-4 h-4">
                  <use href="#chevron-left"></use>
                </svg>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <div
          class="container absolute  flex items-center justify-end gap-x-3 left-4 lg:left-0 bottom-5 z-30 child:cursor-pointer
                child:bg-white 
                child:dark:bg-zinc-700 child:shadow child:rounded-full child:p-1 child:lg:p-1.5 "
        >
          <button class="button-prev" ref={prevButton}>
            <svg class="w-5 h-5">
              <use href="#arrow-long-right"></use>
            </svg>
          </button>
          <button
            class="button-next dark:bg-zinc-700 shadow rounded-full p-1 lg:p-1.5"
            ref={nextButton}
          >
            <svg class="w-5 h-5">
              <use href="#arrow-long-left"></use>
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default Banner;
