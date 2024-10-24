import React from "react";

function OrdersInfo() {
  return (
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
  );
}

export default OrdersInfo;
