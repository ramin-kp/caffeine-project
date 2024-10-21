import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function ProductSlider() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={20}
      className="mySwiper mt-2 w-96 rounded-lg"
    >
      <SwiperSlide>
        <Image
          src="/Images/products/p-5.png"
          className="rounded-lg shadow w-full object-cover lg:w-96 lg:h-fit"
          width={400}
          height={400}
          alt="product img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Images/products/p-4.png"
          className="rounded-lg shadow w-full  object-cover lg:w-96 lg:h-fit"
          width={400}
          height={400}
          alt="product img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Images/products/p-1.png"
          className="rounded-lg shadow w-full  object-cover lg:w-96 lg:h-fit"
          width={400}
          height={400}
          alt="product img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Images/products/p-4.png"
          className="rounded-lg shadow w-full  object-cover lg:w-96 lg:h-fit"
          width={400}
          height={400}
          alt="product img"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default ProductSlider;
