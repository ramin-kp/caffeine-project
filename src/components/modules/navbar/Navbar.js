"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar({ user }) {
  const [isStickyNavbar, setIsStickyNavbar] = useState(false);
  useEffect(() => {
    const currentScroll = () =>
      window.scrollY > 5 ? setIsStickyNavbar(true) : setIsStickyNavbar(false);
    window.addEventListener("scroll", currentScroll);
    return () => window.removeEventListener("scroll", currentScroll);
  }, []);
  return (
    <header
      className={`${
        isStickyNavbar ? "sticky inset-0 z-50" : ""
      } transition-all duration-150`}
    >
      {/* <!-- NAV BAR  --> */}
      <nav className="w-full hidden md:flex shadow py-5 bg-white dark:bg-zinc-700">
        <div className="container flex items-center justify-between">
          {/* <!-- LOGO --> */}
          <Link
            href="/"
            className="flex items-center gap-x-1 dark:text-brown-300 text-brown-600 font-MorabbaMedium text-lg lg:text-2xl"
          >
            <Image
              src="/Images/logo.png"
              width={24}
              height={24}
              alt="logo"
              className="w-6 h-6 "
            />
            <h1>قهوه تلخ</h1>
          </Link>
          {/* <!-- MENU --> */}
          <ul className="mt-2 flex items-center gap-x-4 lg:gap-x-10 font-DanaMedium lg:mr-30 xl:mr-32 child:z-30">
            <li className="nav-item text-green-500">
              <Link href="/">صفحه اصلی</Link>
            </li>
            {/* <!-- ITEM HASE SUBMENU --> */}
            <li className="relative group">
              <div className="flex items-center flex-row gap-x-1">
                <Link href="#">فروشگاه</Link>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180">
                  <use href="#chevron-down"></use>
                </svg>
              </div>
              {/* <!-- SUBMENU --> */}
              <div className="absolute bg-white flex flex-col gap-y-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-10 transition-all delay-100 dark:bg-zinc-700 top-20 w-52 rounded border-t-2 border-green-500 p-5 text-base shadow-md child-hover:text-green-500 child:transition-all">
                <Link href="#">اسپرسو</Link>
                <Link href="#">قهوه ترک</Link>
                <Link href="#">قهوه فرانسه</Link>
                <Link href="#">کپسول اسپرسو</Link>
                <Link href="#">لوازم و تجهیزات</Link>
              </div>
            </li>
            {/* <!-- ITEM HASE SUBMENU --> */}
            <li className="relative group">
              <div className="flex items-center flex-row gap-x-1">
                <Link href="#">مقالات</Link>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180">
                  <use href="#chevron-down"></use>
                </svg>
              </div>
              {/* <!-- SUBMENU --> */}
              <div className="absolute bg-white flex flex-col gap-y-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-10 transition-all delay-100 dark:bg-zinc-700 top-20 w-52 rounded border-t-2 border-green-500 p-5 text-base shadow-md child-hover:text-green-500 child:transition-all">
                <Link href="#">سلامتی</Link>
                <Link href="#">اخبار قهوه</Link>
                <Link href="#">روش‌های دم‌آوری قهوه</Link>
                <Link href="#">لوازم و تجهیزات قهوه</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact-us">تماس با ما</Link>
            </li>
            <li className="nav-item">
              <Link href="about-us">درباره ما</Link>
            </li>
          </ul>
          {/* <!-- ACTION BTN --> */}
          <div className="flex items-center gap-x-3 child:z-30">
            {/* <!-- TOGGLE BTN --> */}
            <button className="toggle-theme">
              <svg className="inline-block dark:hidden w-6 h-6">
                <use href="#moon" />
              </svg>
              <svg className="hidden dark:inline w-6 h-6">
                <use href="#sun" />
              </svg>
            </button>
            {/* <!-- SHOPPING CART BTN --> */}
            <button className="open-shopping-cart__btn relative">
              <svg className="w-6 h-6">
                <use href="#shopping-cart" />
              </svg>
              {/* <!-- BADGE --> */}
              <span className="absolute -top-2 -right-2 w-4 h-4 text-[10px] flex items-center justify-center bg-red-500 text-white rounded-full">
                2
              </span>
            </button>
            {/* <!-- SEARCH BTN --> */}
            <button className="group relative flex justify-end">
              <svg className="w-6 h-6">
                <use href="#search" />
              </svg>
              <div className="absolute top-20 flex items-center w-[350px] bg-white dark:bg-zinc-600 rounded-full opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-10 transition-all delay-100 child:rounded-full px-2 border dark:border-none border-gray-100 shadow py-1">
                <input
                  type="text"
                  placeholder="نام محصول..."
                  className="bg-transparent w-full p-2"
                />
                <Link
                  href="#"
                  className="bg-green-500  text-white text-sm py-2 px-3"
                >
                  جستجو
                </Link>
              </div>
            </button>

            {user ? (
              <>
                {/* <!-- USER ACCOUNE BOX  --> */}
                <button className="group relative px-2 lg:px-3 py-2 flex items-center justify-end gap-x-1 text-white transition-colors bg-green-500 hover:bg-green-600 rounded-lg">
                  <svg className="h-5 w-5 hidden lg:flex">
                    <use href="#user"></use>
                  </svg>
                  <Link href="#"> حساب کاربری</Link>
                  {/* <!-- SUB MENU  --> */}
                  <div className="absolute dark:border-none border border-gray-100 w-52 p-4 bg-white text-zinc-900 dark:text-white flex flex-col gap-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-12 transition-all delay-100 dark:bg-zinc-800 top-20 rounded text-base shadow child:transition-all child:py-1 child:px-2">
                    <Link
                      href="#"
                      className="flex items-center gap-x-3 w-full hover:bg-green-500/20 hover:text-green-500 rounded"
                    >
                      <svg className="h-5 w-5">
                        <use href="#user"></use>
                      </svg>
                      سفارشات من
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-x-3 w-full hover:bg-green-500/20 hover:text-green-500 rounded"
                    >
                      <svg className="h-5 w-5">
                        <use href="#envelope"></use>
                      </svg>
                      لیست پیام ها
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-x-3 w-full hover:bg-green-500/20 hover:text-green-500 rounded"
                    >
                      <svg className="h-5 w-5">
                        <use href="#cog"></use>
                      </svg>
                      اطلاعات کاربری
                    </Link>
                    {/* <!--BORDER  --> */}
                    <span className="border-t dark:border-gray-100/20 border-gray-100-gray-100"></span>
                    <Link
                      href="#"
                      className="flex items-center gap-x-3 w-full hover:bg-red-400/20 dark:hover:bg-rose-500/20 rounded hover:text-rose-400"
                    >
                      <svg className="h-5 w-5">
                        <use href="#arrow-left-start-on-rectangle"></use>
                      </svg>
                      خروج از حساب
                    </Link>
                  </div>
                </button>
              </>
            ) : (
              <Link
                href="/signin"
                className="flex relative px-2 lg:px-3 py-2 items-center justify-end gap-x-1 text-white transition-colors bg-green-500 hover:bg-green-600 rounded-lg"
              >
                <svg className="h-5 w-5 flex rotate-180">
                  <use href="#arrow-left-start-on-rectangle"></use>
                </svg>
                ورود | ثبت نام
              </Link>
            )}
          </div>
        </div>
      </nav>
      {/* <!-- SHOPPING CART --> */}
      <div className="shopping-cart fixed -left-72 top-0 bottom-0 w-72 bg-white dark:bg-zinc-700 z-50 shadow transition-all duration-300 px-4">
        <div className="flex items-center justify-between mt-4">
          <h2 className="font-DanaMedium">سبد خرید</h2>
          <Link href="#" className="close-shopping-cart__btn">
            <svg className="w-6 h-6">
              <use href="#close" />
            </svg>
          </Link>
        </div>
        {/* <!-- BORDER --> */}
        <span className="flex w-full border-t dark:border-white/10 border-gray-200 my-5"></span>
        {/* <!-- ITEMS CART --> */}
        <div className="flex flex-col gap-y-4">
          {/* <!-- ITEM --> */}
          <div className="flex items-center gap-x-3 border-b border-gray-200 pb-4 dark:border-white/10">
            {/* <!-- IMAGE --> */}
            <Image
              className="w-20 h-20 object-cover rounded-lg"
              src="/Images/products/p3.png"
              width={80}
              height={80}
              alt=""
            />
            {/* <!-- TEXT --> */}
            <div className="flex flex-col gap-y-1">
              <h2 className="font-DanaMedium line-clamp-2 text-sm">
                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
              </h2>
              <p className="text-xs text-green-600 dark:text-green-500">
                14.500 تومان تخفیف
              </p>
              <p className="font-DanaDemiBold text-sm">
                175,000
                <span className="font-Dana">تومان</span>
              </p>
            </div>
          </div>
          {/* <!-- ITEM --> */}
          <div className="flex items-center gap-x-3 border-b border-gray-200 pb-4 dark:border-white/10">
            {/* <!-- IMAGE --> */}
            <Image
              className="w-20 h-20 object-cover rounded-lg"
              src="/Images/products/p4.png"
              width={80}
              height={80}
              alt=""
            />
            {/* <!-- TEXT --> */}
            <div className="flex flex-col gap-y-1">
              <h2 className="font-DanaMedium line-clamp-2 text-sm">
                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
              </h2>
              <p className="text-xs text-green-600 dark:text-green-500">
                14.500 تومان تخفیف
              </p>
              <p className="font-DanaDemiBold text-sm">
                175,000
                <span className="font-Dana">تومان</span>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- EMPITY SHOPPING CART --> */}
        <div className="flex flex-col">
          <span className="w-full hidden justify-center gap-x-2 items-center text-red-500">
            <p>سبد خرید شما خالی میباشد</p>
            <svg className="w-4 h-5">
              <use href="#shopping-cart"></use>
            </svg>
          </span>
        </div>
        {/* <!-- PRICE BTN --> */}
        <div className="w-full absolute bottom-4 flex items-center gap-x-10">
          {/* <!-- BORDER --> */}
          <Link
            href="#"
            className="py-2 px-3 rounded-lg transition-colors bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 text-white"
          >
            ثبت سفارش
          </Link>
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm">مبلغ قابل پرداخت</span>
            <h2 className="font-DanaDemiBold">
              350,000
              <span className="text-sm font-Dana">تومان</span>
            </h2>
          </div>
        </div>
      </div>
      {/* <!-- MOBILE NAVBAR --> */}
      <nav className="dark:bg-zinc-800 bg-white flex justify-between items-center md:hidden h-16 shadow-md py-5 px-4">
        <div>
          <svg className="w-6 h-6 mobile-menu__open-icon cursor-pointer">
            <use href="#bars"></use>
          </svg>
        </div>
        {/* <!-- SIDE BAR MENU --> */}
        <div className="mobile-menu fixed -right-64 top-0 bottom-0 w-64 bg-white dark:bg-zinc-700 z-50 shadow transition-all duration-300 px-4">
          {/* <!-- HEAADER --> */}
          <div className="mt-3 flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center gap-x-1 dark:text-brown-300 text-brown-600 font-MorabbaMedium text-xl"
            >
              <Image
                src="/Images/logo.png"
                width={24}
                height={24}
                alt="logo"
                className="w-6 h-6"
              />
              <h1>قهوه تلخ</h1>
            </Link>
            <svg className="mobile-menu__close-icon w-6 h-6 cursor-pointer">
              <use href="#close"></use>
            </svg>
          </div>
          {/* <!-- BORDER --> */}
          <span className="flex w-full border-t dark:border-white/10 border-gray-200 my-5"></span>
          {/* <!-- SEARCH BAR --> */}
          <input
            type="text"
            placeholder="جستجو..."
            className="dark:bg-zinc-600 dark:text-white bg-gray-200 text-zinc-900 rounded w-full pr-4 py-1.5 mb-3"
          />
          {/* <!-- MENU  --> */}
          <ul className="flex flex-col gap-y-6 text-zinc-700 dark:text-white">
            <li>
              <Link href="#" className="flex items-center gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#home"></use>
                </svg>
                صفحه اصلی
              </Link>
            </li>
            <li className="">
              <div className="open-submenu flex w-full items-center justify-between">
                <Link
                  href="#"
                  className="transition-all flex items-center gap-x-2"
                >
                  <svg className="w-5 h-5">
                    <use href="#shopping-bag"></use>
                  </svg>
                  فروشگاه
                </Link>
                <svg className="w-3 h-3 arrow-submenu -rotate-90">
                  <use href="#chevron-left"></use>
                </svg>
              </div>
              <div className="submenu hidden flex-col gap-y-3 mt-3 child:text-sm mr-7">
                <Link href="#">اسپرسو</Link>
                <Link href="#">قهوه ترک</Link>
                <Link href="#">قهوه فرانسه</Link>
                <Link href="#">کپسول اسپرسو</Link>
                <Link href="#">لوازم و تجهیزات</Link>
              </div>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#document"></use>
                </svg>
                مقالات
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="flex items-center gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#phone"></use>
                </svg>
                تماس با ما
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="flex items-center gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#check"></use>
                </svg>
                درباره ما
              </Link>
            </li>
          </ul>
          {/* <!-- BORDER --> */}
          <span className="flex w-full border-t dark:border-white/10 border-gray-200 my-8"></span>
          {/* <!-- ACTION BTNS --> */}
          <div className="flex items-start flex-col gap-y-5 child:flex child:items-center child:gap-x-2 child:font-DanaMedium">
            <Link href="#">
              <svg className="w-5 h-5">
                <use href="#user"></use>
              </svg>
              حساب کاربری
            </Link>
            {/* <!-- <Link href="login.html" className="">
                        <svg className="w-5 h-5">
                            <use href="#arrow-left-start-on-rectangle"></use>
                        </svg>
                        ورود | ثبت نام 
                    </Link> --> */}
            <button className="toggle-theme">
              <span className="flex dark:hidden gap-x-1 items-center">
                <svg className="w-6 h-6">
                  <use href="#moon" />
                </svg>
                تم تیره
              </span>
              <span className="hidden dark:flex gap-x-1 items-center">
                <svg className="w-6 h-6">
                  <use href="#sun" />
                </svg>
                تم روشن
              </span>
            </button>
          </div>
        </div>
        <Link
          href="#"
          className="flex items-center gap-x-1 dark:text-brown-300 text-brown-600 font-MorabbaMedium text-xl"
        >
          <Image
            src="/Images/logo.png"
            width={24}
            height={24}
            alt="logo"
            className="w-6 h-6"
          />
          <h1>قهوه تلخ</h1>
        </Link>
        {/* <!-- OPEN SHOPPING CART BTN  --> */}
        <button className="open-shopping-cart__btn">
          <svg className="w-6 h-6">
            <use href="#shopping-cart" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
