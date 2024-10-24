import Link from "next/link";
import React from "react";
import SignOut from "./SignOut";

function TicketsBox({ tickets, ClosedTickets }) {
  return (
    <div className="col-span-12 xl:col-span-5">
      <p className="text-lg"> تیکت های شما :</p>
      <div className="bg-white shadow child:flex child:items-center child:gap-x-2 mt-4 px-4 py-7 dark:bg-zinc-700 rounded-lg flex flex-col">
        <span>
          <svg className="w-5 h-5 mb-1">
            <use href="#ticket"></use>
          </svg>
          <p>
            تعداد کل تیکت ها :{" "}
            <span className="font-DanaMedium text-blue-500">{tickets}</span>
          </p>
        </span>
        <span className="border-t-2 border-dashed border-gray-200 dark:border-white/20 my-5"></span>
        <span>
          <svg className="w-5 h-5 mb-1">
            <use href="#check"></use>
          </svg>
          <p>
            تیکت های بسته شده :{" "}
            <span className="font-DanaMedium text-green-500">
              {ClosedTickets}
            </span>
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
          <Link
            href="/u-panel/address"
            className="flex w-[75%] justify-between items-center gap-x-2"
          >
            <p>آدرس های من</p>
            <svg className="w-5 h-5">
              <use href="#arrow-left"></use>
            </svg>
          </Link>
        </div>
        <div className=" shadow justify-start col-span-6 sm:col-span-2 p-2  rounded-lg flex gap-x-4 items-center sm:justify-center">
          <Link
            href="/u-panel/account"
            className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-green-500">
              <use href="#cog"></use>
            </svg>
          </Link>
          <p className="block sm:hidden">تنطیمات</p>
        </div>
        <SignOut />
      </div>
    </div>
  );
}

export default TicketsBox;
