import React from "react";

function ShopInfo() {
  return (
    <ul className="w-full lg:w-2/4 space-y-4 lg:space-y-8 mt-5 lg:mt-0">
      <li>
        <span className="flex items-center gap-x-2 font-DanaMedium dark:text-gray-200 text-gray-500">
          <svg className="w-4 h-4 mb-1">
            <use href="#envelope"></use>
          </svg>
          آدرس ایمیل :
        </span>
        <p className="text-lg  text-green-500 mt-1.5">coffein@info.com</p>
      </li>
      <li>
        <span className="flex items-center gap-x-2 font-DanaMedium dark:text-gray-200 text-gray-500">
          <svg className="w-5 h-5 mb-1">
            <use href="#phone"></use>
          </svg>
          تلفن :
        </span>
        <p className="text-lg  text-green-500 mt-1.5">0926-002-2737</p>
      </li>
      <li>
        <span className="flex items-center gap-x-2 font-DanaMedium dark:text-gray-200 text-gray-500">
          <svg className="w-5 h-5 mb-1">
            <use href="#map"></use>
          </svg>
          آدرس :
        </span>
        <p className="text-green-500 mt-1.5">
          بلوار آزادی، خیابان استاد معین، کوچه گلستان، پلاک ۱۰
        </p>
      </li>
    </ul>
  );
}

export default ShopInfo;
