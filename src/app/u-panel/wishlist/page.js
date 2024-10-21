import UserPanelLayout from "@/components/Layouts/UserPanelLayout/UserPanelLayout";
import Image from "next/image";
import React from "react";

function Wishlist() {
  return (
    <UserPanelLayout>
      <div className="grid grid-cols-12 gap-6 lg:gap-12 mt-6">
        <div className="col-span-12">
          <p className="text-lg">محصولات مورد علاقه من:</p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-8 child:cursor-pointer child:overflow-hidden child:rounded-lg child:bg-white child:dark:bg-zinc-700 child:shadow  child:relative">
            {/* <!-- PRODUCT ITEM --> */}
            <div className="group">
              {/* <!-- PRODUCT IMGAE --> */}
              <Image
                src="/Images/products/p1.png"
                alt="product-1"
                width={200}
                height={200}
                className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
              />
              {/* <!-- PRODUCT MAIN --> */}
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
                </div>
              </div>
              {/* <!-- PRODUCT FOOTER --> */}
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
            {/* <!-- PRODUCT ITEM --> */}
            <div className="group">
              {/* <!-- PRODUCT IMGAE --> */}
              <Image
                src="/Images/products/p2.png"
                alt="product-1"
                width={200}
                height={200}
                className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
              />
              {/* <!-- PRODUCT MAIN --> */}
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
                </div>
              </div>
              {/* <!-- PRODUCT FOOTER --> */}
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
            {/* <!-- PRODUCT ITEM --> */}
            <div className="group">
              {/* <!-- PRODUCT IMGAE --> */}
              <Image
                src="/Images/products/p3.png"
                alt="product-1"
                width={200}
                height={200}
                className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
              />
              {/* <!-- PRODUCT MAIN --> */}
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
                </div>
              </div>
              {/* <!-- PRODUCT FOOTER --> */}
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
            {/* <!-- PRODUCT ITEM --> */}
            <div className="group">
              {/* <!-- OFF BADGE --> */}
              <span className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 text-xs bg-green-500  rounded-full text-white z-20">
                20%
              </span>

              {/* <!-- PRODUCT IMGAE --> */}
              <Image
                src="/Images/products/p4.png"
                alt="product-1"
                width={200}
                height={200}
                className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
              />
              {/* <!-- PRODUCT MAIN --> */}
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
              {/* <!-- PRODUCT FOOTER --> */}
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
          {/* <!-- PAGINATION --> */}
          <div className="mt-10 w-full flex items-center justify-center">
            <ul className="flex items-center gap-x-3 child:flex child:items-center child:justify-center child:w-8 child:h-8 child:cursor-pointer child:shadow child:rounded-lg child:transition-all child:duration-300">
              <li className="bg-white dark:bg-zinc-700 hover:bg-green-500 hover:text-white">
                <svg className="w-5 h-5 rotate-180">
                  <use href="#chevron-left"></use>
                </svg>
              </li>
              <li className="text-white bg-green-500">
                <a href="#">1</a>
              </li>
              <li className="bg-white dark:bg-zinc-700 hover:bg-green-500 hover:text-white">
                <a href="#">2</a>
              </li>
              <li className="bg-white dark:bg-zinc-700 hover:bg-green-500 hover:text-white">
                <a href="#">...</a>
              </li>
              <li className="bg-white dark:bg-zinc-700 hover:bg-green-500 hover:text-white">
                <svg className="w-5 h-5">
                  <use href="#chevron-left"></use>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
}

export default Wishlist;
