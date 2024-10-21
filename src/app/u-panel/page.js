import UserPanelLayout from "@/components/Layouts/UserPanelLayout/UserPanelLayout";
import React from "react";

function UserPanel() {
  return (
    <UserPanelLayout>
      <div className="grid grid-cols-12 gap-6 lg:gap-12 mt-6">
        <div className="col-span-12 xl:col-span-5">
          <p className="text-lg">اطلاعات سفارش ها :</p>
          <div className="bg-white shadow child:flex child:items-center child:gap-x-2 mt-4 px-4 py-7 dark:bg-zinc-700 rounded-lg flex flex-col">
            <span>
              <svg className="w-5 h-5 mb-1">
                <use href="#shopping-bag"></use>
              </svg>
              <p>
                تعداد کل سفارش ها :{" "}
                <span className="font-DanaMedium text-blue-500">
                  10 <span className="text-sm">عدد</span>
                </span>
              </p>
            </span>
            <span className="border-t-2 border-dashed border-gray-200 dark:border-white/20 my-5"></span>
            <span>
              <svg className="w-5 h-5 mb-1">
                <use href="#wallet"></use>
              </svg>
              <p>
                جمع کل سفارش ها :{" "}
                <span className="font-DanaMedium text-green-500">
                  1,300,000 <span className="text-sm">تومان</span>
                </span>
              </p>
            </span>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-7">
          <p className="text-lg">جزییات سفارش ها :</p>
          <div className="w-full grid grid-cols-12 child:col-span-12 child:sm:col-span-6 child:md:col-span-4 gap-5 child:p-2 mt-4 child:rounded-lg child:flex child:gap-x-4 child:items-center child:text-white">
            <div className="bg-amber-500">
              <span className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6">
                  <use href="#check"></use>
                </svg>
              </span>
              <span>
                <p>تکمیل شده </p>
                <p>10</p>
              </span>
            </div>
            <div className="bg-sky-500">
              <span className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6">
                  <use href="#ellipsis"></use>
                </svg>
              </span>
              <span>
                <p>در انتظار بررسی </p>
                <p>6</p>
              </span>
            </div>
            <div className="bg-rose-500">
              <span className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6">
                  <use href="#x-close"></use>
                </svg>
              </span>
              <span>
                <p>لغو شده</p>
                <p>4</p>
              </span>
            </div>
            <div className="bg-violet-500">
              <span className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6">
                  <use href="#wallet"></use>
                </svg>
              </span>
              <span>
                <p>منتظر پرداخت</p>
                <p>2</p>
              </span>
            </div>
            <div className="bg-emerald-500">
              <span className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6">
                  <use href="#clock"></use>
                </svg>
              </span>
              <span>
                <p>در حال انجام</p>
                <p>0</p>
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-5">
          <p className="text-lg"> تیکت های شما :</p>
          <div className="bg-white shadow child:flex child:items-center child:gap-x-2 mt-4 px-4 py-7 dark:bg-zinc-700 rounded-lg flex flex-col">
            <span>
              <svg className="w-5 h-5 mb-1">
                <use href="#ticket"></use>
              </svg>
              <p>
                تعداد کل تیکت ها :{" "}
                <span className="font-DanaMedium text-blue-500">5</span>
              </p>
            </span>
            <span className="border-t-2 border-dashed border-gray-200 dark:border-white/20 my-5"></span>
            <span>
              <svg className="w-5 h-5 mb-1">
                <use href="#check"></use>
              </svg>
              <p>
                تیکت های بسته شده :{" "}
                <span className="font-DanaMedium text-green-500">4 </span>
              </p>
            </span>
          </div>
          <div className="mt-4 grid grid-cols-12 gap-4 child:bg-white child:dark:bg-zinc-700">
            <div className="col-span-12 shadow sm:col-span-8 p-2  rounded-lg flex gap-x-4 items-center">
              <span className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-500">
                  <use href="#map"></use>
                </svg>
              </span>
              <a
                href="dashboard-address.html"
                className="flex w-[75%] justify-between items-center gap-x-2"
              >
                <p>آدرس های من</p>
                <svg className="w-5 h-5">
                  <use href="#arrow-left"></use>
                </svg>
              </a>
            </div>
            <div className=" shadow justify-start col-span-6 sm:col-span-2 p-2  rounded-lg flex gap-x-4 items-center sm:justify-center">
              <a
                href="dashboard-account.html"
                className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center"
              >
                <svg className="w-6 h-6 text-green-500">
                  <use href="#cog"></use>
                </svg>
              </a>
              <p className="block sm:hidden">تنطیمات</p>
            </div>
            <div className=" shadow justify-start col-span-6 sm:col-span-2 p-2  rounded-lg flex gap-x-4 items-center sm:justify-center">
              <a
                href="index.html"
                className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center"
              >
                <svg className="w-6 h-6 text-green-500">
                  <use href="#arrow-left-start-on-rectangle"></use>
                </svg>
              </a>
              <p className="block sm:hidden">خروج</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-7">
          <p className="text-lg"> سفارش های اخیر من :</p>
          <div className="relative mt-4 overflow-x-auto shadow rounded-lg">
            <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-zinc-700 dark:text-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3.5">
                    نام محصول
                  </th>
                  <th scope="col" className="px-6 py-3.5">
                    تاریخ
                  </th>
                  <th scope="col" className="px-6 py-3.5">
                    قیمت
                  </th>
                  <th scope="col" className="px-6 py-3.5">
                    وضعیت
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-zinc-600">
                  <th
                    scope="row"
                    className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    قهوه 200 گرمی بن مانو
                  </th>
                  <td className="px-6 py-5">1402/11/11</td>
                  <td className="px-6 py-5">42,000 تومان</td>
                  <td className="px-6 py-5 text-red-500">لغو شده</td>
                </tr>
                <tr className="bg-white border-b dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-zinc-600">
                  <th
                    scope="row"
                    className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    قهوه 200 گرمی بن مانو
                  </th>
                  <td className="px-6 py-5">1402/11/11</td>
                  <td className="px-6 py-5">660,000 تومان</td>
                  <td className="px-6 py-5 text-yellow-500">درانتظار پرداخت</td>
                </tr>
                <tr className="bg-white border-b dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-zinc-600">
                  <th
                    scope="row"
                    className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    قهوه 200 گرمی بن مانو
                  </th>
                  <td className="px-6 py-5">1402/11/11</td>
                  <td className="px-6 py-5">742,000 تومان</td>
                  <td className="px-6 py-5 text-green-500">پرداخت شده</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
}

export default UserPanel;
