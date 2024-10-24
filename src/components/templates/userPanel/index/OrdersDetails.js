import React from "react";

function OrdersDetails() {
  return (
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
  );
}

export default OrdersDetails;
