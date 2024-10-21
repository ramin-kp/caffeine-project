"use client";
import React, { useState } from "react";

function Topbar({ setIsOpen }) {
  const [isShowInfo, setIsShowInfo] = useState(false);
  return (
    <div className="bg-white dark:bg-zinc-700 p-5 lg:rounded-lg shadow flex items-center justify-between">
      <p className="font-DanaMedium text-lg hidden lg:block">
        {" "}
        رامین کریم‌پور عزیز؛ خوش اومدی 🙌{" "}
      </p>
      <button
        className="open-sidebar-btn flex lg:hidden items-center gap-x-1"
        onClick={() => setIsOpen(true)}
      >
        <svg className="w-6 h-6">
          <use href="#bars"></use>
        </svg>
        داشبورد
      </button>
      <div className="flex items-center gap-x-3">
        <button className="relative flex items-center justify-end notif-toggle-btn">
          <svg
            className="w-6 h-6"
            onClick={(e) => setIsShowInfo((prev) => !prev)}
          >
            <use href="#bell" />
          </svg>
          {/* <!-- BADGE --> */}
          <span className="absolute -top-1.5 -right-2 w-4 h-4 text-[10px] flex items-center justify-center bg-red-500 text-white rounded-full">
            2
          </span>
          {/* <!-- NOTIFICATION BOX --> */}
          <div
            className={`${
              isShowInfo ? "inline-block" : "hidden"
            } absolute -left-7 z-40 dark:border-none border border-gray-100 w-72 p-4 bg-white text-zinc-900 dark:text-white top-8 transition-all delay-100 dark:bg-zinc-800 rounded shadow child:transition-all`}
          >
            <span className="justify-between flex items-center border-b border-gray-200 pb-2">
              <p> اعلان ها</p>
              <p className="text-green-500 flex text-sm items-center gap-x-0.5">
                همه
                <svg className="w-3 h-3">
                  <use href="#chevron-left"></use>
                </svg>
              </p>
            </span>
            <ul className="mt-4 child:flex child:items-center child:gap-x-1 child:w-full child:rounded-lg child:bg-zinc-100 child:p-2 space-y-3 dark:child:bg-zinc-700">
              <li>
                <svg className="w-5 h-5 text-green-500 ">
                  <use href="#check"></use>
                </svg>
                <p className="font-Dan aMedium text-green-500">پرداخت شده</p>
              </li>
              <li>
                <svg className="w-5 h-5 text-red-500 ">
                  <use href="#x-close"></use>
                </svg>
                <p className="font-Dan aMedium text-red-500">پرداخت لغو شد</p>
              </li>
            </ul>
          </div>
        </button>
        {/* <!-- TOGGLE BTN --> */}
        <button className="toggle-theme">
          <svg className="inline-block dark:hidden w-6 h-6">
            <use href="#moon" />
          </svg>
          <svg className="hidden dark:inline w-6 h-6">
            <use href="#sun" />
          </svg>
        </button>
        <a
          href="index.html"
          className="hidden lg:flex items-center gap-x-0.5 text-green-500"
        >
          صفحه اصلی
          <svg className="w-4 h-4">
            <use href="#chevron-left"></use>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Topbar;
