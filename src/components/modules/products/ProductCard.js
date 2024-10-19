import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard({ img }) {
  return (
    <div className="group">
      <Image
        src={`/Images/products/${img}`}
        alt={`${img}`}
        width={200}
        height={200}
        className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
      />
      <div className="px-2 lg:px-4 mb-3">
        <Link
          href="#"
          className="line-clamp-2 font-DanaMedium hover:text-green-600 dark:hover:text-green-500 mb-2 text-sm lg:text-base transition-all duration-150"
        >
          دانه قهوه اسپرسو یونیکا مقدار 250 گرم خط دوم طولانی
        </Link>
        <div className="flex items-center gap-x-1 lg:gap-x-3">
          <p className="font-DanaDemiBold text-green-600 dark:text-green-500">
            340,000
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
  );
}

export default ProductCard;
