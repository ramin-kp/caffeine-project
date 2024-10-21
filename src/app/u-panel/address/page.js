import UserPanelLayout from "@/components/Layouts/UserPanelLayout/UserPanelLayout";
import React from "react";

function Address() {
  return (
    <UserPanelLayout>
      {" "}
      <div className="grid grid-cols-12 gap-6 lg:gap-12 mt-6">
        <div className="col-span-12">
          <div className="flex items-center justify-between">
            <p className="text-lg"> آدرس های من :</p>
            <button className="main-btn p-2 gap-x-1 shadow">
              آدرس جدید
              <svg className="w-5 h-5">
                <use href="#add"></use>
              </svg>
            </button>
          </div>
          <div className="bg-white shadow child:flex child:items-center child:gap-x-2 mt-4 p-4 dark:bg-zinc-700 rounded-lg flex flex-col space-y-5">
            <span>
              استان تهران-بلوار آزادی، خیابان استاد معین، کوچه گلستان، پلاک ۱۰
            </span>
            <div className="flex items-center justify-between">
              <p className="text-gray-400">پارسا وصالی</p>
              <div className="flex items-center gap-x-4">
                <button className="bg-red-500/20 text-red-400 flex items-center gap-x-1 rounded-lg p-2">
                  <p>حذف</p>
                  <svg className="w-5 h-5">
                    <use href="#x-close"></use>
                  </svg>
                </button>
                <button className="bg-green-500/20 text-green-500 flex items-center gap-x-1 rounded-lg p-2">
                  <p>ویرایش</p>
                  <svg className="w-5 h-5">
                    <use href="#edit"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow child:flex child:items-center child:gap-x-2 mt-4 p-4 dark:bg-zinc-700 rounded-lg flex flex-col space-y-5">
            <span>
              استان تهران-بلوار آزادی، خیابان استاد معین، کوچه 5 پلاک 33
            </span>
            <div className="flex items-center justify-between">
              <p className="text-gray-400">پارسا وصالی</p>
              <div className="flex items-center gap-x-4">
                <button className="bg-red-500/20 text-red-400 flex items-center gap-x-1 rounded-lg p-2">
                  <p>حذف</p>
                  <svg className="w-5 h-5">
                    <use href="#x-close"></use>
                  </svg>
                </button>
                <button className="bg-green-500/20 text-green-500 flex items-center gap-x-1 rounded-lg p-2">
                  <p>ویرایش</p>
                  <svg className="w-5 h-5">
                    <use href="#edit"></use>
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

export default Address;
