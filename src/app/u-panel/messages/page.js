import UserPanelLayout from "@/components/Layouts/UserPanelLayout/UserPanelLayout";
import React from "react";

function Messages() {
  return (
    <UserPanelLayout>
      <div className="grid grid-cols-12 gap-6 lg:gap-12 mt-6">
        <div className="col-span-12">
          <div className="flex items-center justify-between">
            <p className="text-lg"> پیام های من :</p>
            <button className="main-btn bg-red-500 hover:bg-red-600 p-2 gap-x-1 shadow">
              حذف همه
              <svg className="w-5 h-5 mb-1">
                <use href="#x-close"></use>
              </svg>
            </button>
          </div>
          <div className="bg-white shadow child:flex child:items-center child:gap-x-2 mt-4 p-4 dark:bg-zinc-700 rounded-lg flex flex-col space-y-4">
            <span className="font-DanaMedium text-blue-400 lg:text-lg">
              پارسا وصالی عزیز سفارش شما با شماره پیگیری #1222 ارسال شد
            </span>
            <div className="flex items-center justify-between flex-wrap gap-y-5">
              <span className="text-gray-400 flex items-center gap-x-2 mt-2">
                1403/6/29 | 12:50
                <svg className="w-5 h-5 mb-1">
                  <use href="#calendar"></use>
                </svg>
              </span>
              <div className="flex items-center gap-x-4">
                <button className="bg-green-500/20 text-green-500 flex items-center gap-x-1 rounded-lg p-2">
                  <p>پیگیری سفارش</p>
                  <svg className="w-5 h-5">
                    <use href="#chevron-left"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow child:flex child:items-center child:gap-x-2 mt-4 p-4 dark:bg-zinc-700 rounded-lg flex flex-col space-y-4">
            <span className="font-DanaMedium text-green-500 lg:text-lg">
              پارسا وصالی عزیز سفارش شما در حال پیگیری میباشد
            </span>
            <div className="flex items-center justify-between flex-wrap gap-y-5">
              <span className="text-gray-400 flex items-center gap-x-2 mt-2">
                1403/6/29 | 12:50
                <svg className="w-5 h-5 mb-1">
                  <use href="#calendar"></use>
                </svg>
              </span>
              <div className="flex items-center gap-x-4">
                <button className="bg-green-500/20 text-green-500 flex items-center gap-x-1 rounded-lg p-2">
                  <p>پیگیری سفارش</p>
                  <svg className="w-5 h-5">
                    <use href="#chevron-left"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
}

export default Messages;
