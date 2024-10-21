import UserPanelLayout from "@/components/Layouts/UserPanelLayout/UserPanelLayout";
import React from "react";

function Account() {
  return (
    <UserPanelLayout>
      <div className="grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-12">
          <p className="text-lg"> جزییات حساب کاربری :</p>
          <form className="grid grid-cols-12 child:col-span-12 md:child:col-span-6 gap-5 bg-white shadow child:flex child:flex-col child:gap-x-2 mt-4 p-4 dark:bg-zinc-700 rounded-lg ">
            <div>
              <label htmlFor="" className="mb-2">
                {" "}
                نام , نام خانوادگی :
              </label>
              <input
                type="text"
                placeholder="نام , نام خانوادگی "
                value="پارسا وصالی"
                className="tailwind-input"
              />
            </div>
            <div>
              <label htmlFor="" className="mb-2">
                {" "}
                نام کاربری :
              </label>
              <input
                type="text"
                placeholder="نام کاربری"
                value="parsa vesali"
                className="tailwind-input"
              />
            </div>
            <div>
              <label htmlFor="" className="mb-2">
                شماره موبایل :
              </label>
              <input
                type="text"
                placeholder="شماره موبایل"
                value="09378183464"
                className="tailwind-input"
              />
            </div>
            <div>
              <label htmlFor="" className="mb-2">
                {" "}
                ایمیل :
              </label>
              <input
                type="text"
                placeholder="ایمیل"
                value="parsa@gmail.com"
                className="tailwind-input"
              />
            </div>
            <div>
              <label htmlFor="" className="mb-2">
                {" "}
                رمز عبور :
              </label>
              <input
                type="password"
                placeholder="رمز عبور "
                value="1211212"
                className="tailwind-input"
              />
            </div>
            <div>
              <label htmlFor="" className="mb-2">
                {" "}
                تاریخ تولد :
              </label>
              <input
                type="text"
                placeholder="تاریخ تولد "
                value="1384/7/12"
                className="tailwind-input"
              />
            </div>
            <button className="main-btn w-[40%] py-2">ثبت اطلاعات</button>
          </form>
        </div>
      </div>
    </UserPanelLayout>
  );
}

export default Account;
