import Image from "next/image";
import React from "react";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Sidebar-Desktop */}
      <div className="sticky top-5 !h-screen hidden lg:block lg:w-1/4  xl:w-1/5 rounded-l-lg p-4 shadow bg-white dark:bg-zinc-700">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/20 py-3">
          <div className="flex items-center gap-x-3">
            <Image
              src="/Images/svg/user.png"
              className="w-12 h-12 ring-2 ring-gray-400/20 rounded-full"
              width={48}
              height={48}
              alt="AVATAR"
            />
            <span className="felx flex-col gap-y-2">
              <p className="font-DanaMedium text-lg">پارسا وصالی</p>
              <p className="text-gray-400">09100000001</p>
            </span>
          </div>
          <span>
            <svg className="w-6 h-6 cursor-pointer text-green-500">
              <use href="#edit"></use>
            </svg>
          </span>
        </div>
        <ul className="relative mt-4 space-y-2 child:duration-300 child:transition-all child:py-3  child:px-2 child:flex child:gap-x-2 text-lg child:cursor-pointer child:rounded-lg">
          <li className="bg-green-500/10 text-green-500">
            <svg className="w-6 h-6 ">
              <use href="#squares"></use>
            </svg>
            <a href="dashboard.html">داشبورد</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <svg className="w-6 h-6 ">
              <use href="#shopping-bag"></use>
            </svg>
            <a href="dashboard-orders.html">سفارش ها</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <svg className="w-6 h-6 ">
              <use href="#heart"></use>
            </svg>
            <a href="dashboard-favorite.html">علاقه‌مندی ها</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <svg className="w-6 h-6 ">
              <use href="#map"></use>
            </svg>
            <a href="dashboard-address.html">آدرس ها</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <svg className="w-6 h-6 ">
              <use href="#bell"></use>
            </svg>
            <a href="dashboard-messages.html">پیام ها</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <svg className="w-6 h-6 ">
              <use href="#cog"></use>
            </svg>
            <a href="dashboard-account.html">اطلاعات حساب </a>
          </li>
          <li className="text-red-400 hover:bg-red-500/20">
            <svg className="w-6 h-6 ">
              <use href="#arrow-left-start-on-rectangle"></use>
            </svg>
            <a href="index.html">خروج از حساب </a>
          </li>
        </ul>
      </div>
      {/* Sidebar-Mobile */}
      <div
        className={`${
          isOpen ? "right-0" : "-right-64"
        } flex flex-col lg:hidden fixed -right-64 top-0 bottom-0 w-64 bg-white dark:bg-zinc-700 z-50 shadow transition-all duration-300 px-4`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/20 py-3">
          <div className="flex items-center gap-x-3">
            <Image
              src="/Images/svg/user.png"
              className="w-10 h-10 ring-2 ring-gray-400/20 rounded-full"
              width={48}
              height={48}
              alt="AVATAR"
            />
            <span className="felx flex-col gap-y-2">
              <p className="font-DanaMedium">پارسا وصالی</p>
              <p className="text-gray-400 text-sm">09100000001</p>
            </span>
          </div>
          <span className="close-sidebar-btn" onClick={() => setIsOpen(false)}>
            <svg className="w-5 h-6 cursor-pointer">
              <use href="#close"></use>
            </svg>
          </span>
        </div>
        <ul className="relative mt-4 space-y-2 child:duration-300 child:transition-all child:p-2 child:flex child:items-center child:gap-x-2  child:cursor-pointer child:rounded-lg">
          <li className="bg-green-500/10 text-green-500">
            <svg className="w-5 h-5 ">
              <use href="#squares"></use>
            </svg>
            <a href="dashboard.html">داشبورد</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <svg className="w-5 h-5 ">
              <use href="#shopping-bag"></use>
            </svg>
            <a href="dashboard-orders.html">سفارش ها</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <svg className="w-5 h-5 ">
              <use href="#heart"></use>
            </svg>
            <a href="dashboard-favorite.html">علاقه‌مندی ها</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <svg className="w-5 h-5 ">
              <use href="#map"></use>
            </svg>
            <a href="dashboard-address.html">آدرس ها</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <svg className="w-5 h-5 ">
              <use href="#bell"></use>
            </svg>
            <a href="dashboard-messages.html">پیام ها</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <svg className="w-5 h-5 ">
              <use href="#cog"></use>
            </svg>
            <a href="dashboard-account.html">اطلاعات حساب </a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <svg className="w-5 h-5 ">
              <use href="#home"></use>
            </svg>
            <a href="index.html"> صفحه اصلی</a>
          </li>
          <li className="text-red-500 hover:bg-red-500/20">
            <svg className="w-5 h-5 ">
              <use href="#arrow-left-start-on-rectangle"></use>
            </svg>
            <a href="index.html">خروج از حساب </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
