"use client";
import React from "react";
import SendComments from "./SendComments";

function ProductComments({ productId, comments }) {
  console.log("comments", comments);
  return (
    <section className="w-full rounded-lg bg-white dark:bg-zinc-700 shadow p-5">
      <div className="flex items-center gap-x-2 mb-6">
        <h2 className="font-MorabbaMedium text-2xl ">دیدگاه ها</h2>
        <p className="text-sm text-blue-500">(28 دیدگاه)</p>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10">
        <SendComments productId={productId} />
        <ul className="lg:w-3/4 flex flex-col gap-y-2 child:w-full  ">
          <li className="child:flex py-4 border-b border-gray-200 child:border-white/20">
            <div className="flex items-center gap-x-2">
              <h2 className="font-DanaMedium text-lg mb-1">
                عطر و طعم قهوه عالی{" "}
              </h2>
              <span className="px-2 py-1 mb-2 rounded-lg bg-green-500 text-white text-xs">
                خریدار
              </span>
            </div>
            <div className="flex-col">
              <h2 className="flex items-center gap-x-1 text-green-500 mb-4">
                <svg className="w-4 h-4">
                  <use href="#hand-up"></use>
                </svg>
                پیشنهاد میشود
              </h2>
              <p className="text-gray-500 dark:text-gray-200 mb-2 line-clamp-2">
                عالی از هر لحاظ به شدت خریدش رو توصیه میکنم کیفیت محصول خوب بود
                بسته بندی عالی بود
              </p>
            </div>
            <div className="mt-2 lg:mt-0 flex-col lg:flex-row gap-y-2 lg:items-center justify-between">
              <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                <p>11 بهمن 1402</p>
                <p>امیررضا کریمی</p>
              </div>
              <div className="flex items-center gap-x-2 flex-wrap mt-2">
                <p className="text-gray-400 text-sm">
                  آیا این دیدگاه برایتان مفید بود؟
                </p>
                <div
                  className="flex items-center gap-x-2 child:flex child:items-center child:gap-x-1 child:rounded-lg child:p-2 child:font-DanaMedium child:duration-300 
                          child:transition-all child:text-sm"
                >
                  <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600  dark:focus:ring-green-600">
                    78
                    <svg className="w-4 h-4">
                      <use href="#hand-up"></use>
                    </svg>
                  </button>
                  <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343]  dark:focus:ring-[#EF4343]">
                    25
                    <svg className="w-4 h-4">
                      <use href="#hand-down"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className="child:flex py-4 border-b border-gray-200 child:border-white/20">
            <div className="flex items-center gap-x-2">
              <h2 className="font-DanaMedium text-lg mb-1">
                {" "}
                بسته بندی خوب نبود{" "}
              </h2>
              <span className="px-2 py-1 mb-2 rounded-lg bg-green-500 text-white text-xs">
                خریدار
              </span>
            </div>
            <div className="flex-col">
              <h2 className="flex items-center gap-x-1 text-red-500 mb-4">
                <svg className="w-4 h-4">
                  <use href="#hand-down"></use>
                </svg>
                پیشنهاد نمیشود
              </h2>
              <p className="text-gray-500 dark:text-gray-200 mb-2">
                بسته بندی محصول ایراد داشت.
              </p>
            </div>
            <div className="mt-2 lg:mt-0  flex-col lg:flex-row gap-y-2 lg:items-center justify-between">
              <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                <p>12 بهمن 1402</p>
                <p>علی محمدی</p>
              </div>
              <div className="flex items-center gap-x-2 flex-wrap mt-2">
                <p className="text-gray-400 text-sm ">
                  آیا این دیدگاه برایتان مفید بود؟
                </p>
                <div
                  className="flex items-center gap-x-2 child:flex child:items-center child:gap-x-1 child:rounded-lg child:p-2 child:font-DanaMedium child:duration-300 
                          child:transition-all child:text-sm"
                >
                  <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600  dark:focus:ring-green-600">
                    4
                    <svg className="w-4 h-4">
                      <use href="#hand-up"></use>
                    </svg>
                  </button>
                  <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343]  dark:focus:ring-[#EF4343]">
                    15
                    <svg className="w-4 h-4">
                      <use href="#hand-down"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className="child:flex py-4 border-b border-gray-200 child:border-white/20">
            <div className="flex items-center gap-x-2">
              <h2 className="font-DanaMedium text-lg mb-1">برشته و تازه بود</h2>
              <span className="px-2 py-1 mb-2 rounded-lg bg-green-500 text-white text-xs">
                خریدار
              </span>
            </div>
            <div className="flex-col">
              <h2 className="flex items-center gap-x-1 text-green-500 mb-4">
                <svg className="w-4 h-4">
                  <use href="#hand-up"></use>
                </svg>
                پیشنهاد میشود
              </h2>
              <p className="text-gray-500 dark:text-gray-200 mb-2">
                کیفیت محصول عالیه
              </p>
            </div>
            <div className="mt-2 lg:mt-0 flex-col lg:flex-row gap-y-2 lg:items-center justify-between">
              <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                <p>1 بهمن 1402</p>
                <p>محمد صفدری</p>
              </div>
              <div className="flex items-center gap-x-2 flex-wrap mt-2">
                <p className="text-gray-400 text-sm">
                  آیا این دیدگاه برایتان مفید بود؟
                </p>
                <div
                  className="flex items-center gap-x-2 child:flex child:items-center child:gap-x-1 child:rounded-lg child:p-2 child:font-DanaMedium child:duration-300 
                          child:transition-all child:text-sm"
                >
                  <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600  dark:focus:ring-green-600">
                    7
                    <svg className="w-4 h-4">
                      <use href="#hand-up"></use>
                    </svg>
                  </button>
                  <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343]  dark:focus:ring-[#EF4343]">
                    5
                    <svg className="w-4 h-4">
                      <use href="#hand-down"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li className="hidden-comment-item hidden child:flex py-4 border-b border-gray-200 child:border-white/20">
            <div className="flex items-center gap-x-2">
              <h2 className="font-DanaMedium text-lg mb-1">
                عطر و طعم قهوه عالی{" "}
              </h2>
              <span className="px-2 py-1 mb-2 rounded-lg bg-green-500 text-white text-xs">
                خریدار
              </span>
            </div>
            <div className="flex-col">
              <h2 className="flex items-center gap-x-1 text-green-500 mb-4">
                <svg className="w-4 h-4">
                  <use href="#hand-up"></use>
                </svg>
                پیشنهاد میشود
              </h2>
              <p className="text-gray-500 dark:text-gray-200 mb-2 line-clamp-2">
                عالی از هر لحاظ به شدت خریدش رو توصیه میکنم کیفیت محصول خوب بود
                بسته بندی عالی بود
              </p>
            </div>
            <div className="mt-2 lg:mt-0 flex-col lg:flex-row gap-y-2 lg:items-center justify-between">
              <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                <p>11 بهمن 1402</p>
                <p>امیررضا کریمی</p>
              </div>
              <div className="flex items-center gap-x-2 flex-wrap mt-2">
                <p className="text-gray-400 text-sm">
                  آیا این دیدگاه برایتان مفید بود؟
                </p>
                <div
                  className="flex items-center gap-x-2 child:flex child:items-center child:gap-x-1 child:rounded-lg child:p-2 child:font-DanaMedium child:duration-300 
      child:transition-all child:text-sm"
                >
                  <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600  dark:focus:ring-green-600">
                    78
                    <svg className="w-4 h-4">
                      <use href="#hand-up"></use>
                    </svg>
                  </button>
                  <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343]  dark:focus:ring-[#EF4343]">
                    25
                    <svg className="w-4 h-4">
                      <use href="#hand-down"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className="hidden-comment-item hidden child:flex py-4 border-b border-gray-200 child:border-white/20">
            <div className="flex items-center gap-x-2">
              <h2 className="font-DanaMedium text-lg mb-1">
                {" "}
                بسته بندی خوب نبود{" "}
              </h2>
              <span className="px-2 py-1 mb-2 rounded-lg bg-green-500 text-white text-xs">
                خریدار
              </span>
            </div>
            <div className="flex-col">
              <h2 className="flex items-center gap-x-1 text-red-500 mb-4">
                <svg className="w-4 h-4">
                  <use href="#hand-down"></use>
                </svg>
                پیشنهاد نمیشود
              </h2>
              <p className="text-gray-500 dark:text-gray-200 mb-2">
                بسته بندی محصول ایراد داشت.
              </p>
            </div>
            <div className="mt-2 lg:mt-0  flex-col lg:flex-row gap-y-2 lg:items-center justify-between">
              <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                <p>12 بهمن 1402</p>
                <p>علی محمدی</p>
              </div>
              <div className="flex items-center gap-x-2 flex-wrap mt-2">
                <p className="text-gray-400 text-sm">
                  آیا این دیدگاه برایتان مفید بود؟
                </p>
                <div
                  className="flex items-center gap-x-2 child:flex child:items-center child:gap-x-1 child:rounded-lg child:p-2 child:font-DanaMedium child:duration-300 
      child:transition-all child:text-sm"
                >
                  <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600  dark:focus:ring-green-600">
                    4
                    <svg className="w-4 h-4">
                      <use href="#hand-up"></use>
                    </svg>
                  </button>
                  <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343]  dark:focus:ring-[#EF4343]">
                    15
                    <svg className="w-4 h-4">
                      <use href="#hand-down"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className="hidden-comment-item hidden child:flex py-4 border-b border-gray-200 child:border-white/20">
            <div className="flex items-center gap-x-2">
              <h2 className="font-DanaMedium text-lg mb-1">برشته و تازه بود</h2>
              <span className="px-2 py-1 mb-2 rounded-lg bg-green-500 text-white text-xs">
                خریدار
              </span>
            </div>
            <div className="flex-col">
              <h2 className="flex items-center gap-x-1 text-green-500 mb-4">
                <svg className="w-4 h-4">
                  <use href="#hand-up"></use>
                </svg>
                پیشنهاد میشود
              </h2>
              <p className="text-gray-500 dark:text-gray-200 mb-2">
                کیفیت محصول عالیه
              </p>
            </div>
            <div className="mt-2 lg:mt-0 flex-col lg:flex-row gap-y-2 lg:items-center justify-between">
              <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                <p>1 بهمن 1402</p>
                <p>محمد صفدری</p>
              </div>
              <div className="flex items-center gap-x-2 flex-wrap mt-2">
                <p className="text-gray-400 text-sm">
                  آیا این دیدگاه برایتان مفید بود؟
                </p>
                <div
                  className="flex items-center gap-x-2 child:flex child:items-center child:gap-x-1 child:rounded-lg child:p-2 child:font-DanaMedium child:duration-300 
      child:transition-all child:text-sm"
                >
                  <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600  dark:focus:ring-green-600">
                    7
                    <svg className="w-4 h-4">
                      <use href="#hand-up"></use>
                    </svg>
                  </button>
                  <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343]  dark:focus:ring-[#EF4343]">
                    5
                    <svg className="w-4 h-4">
                      <use href="#hand-down"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <button className="more-comment-btn w-full flex items-center justify-center gap-x-1 my-4 text-green-600 font-DanaMedium">
            <p className="more-comment-text">مشاهده بیشتر</p>
            <svg className="w-4 h-4 more-comment-icon">
              <use href="#chevron-down"></use>
            </svg>
          </button>
        </ul>
      </div>
    </section>
  );
}

export default ProductComments;
