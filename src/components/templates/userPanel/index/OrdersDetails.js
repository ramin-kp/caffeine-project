import InfoBox from "@/components/modules/infoBox/InfoBox";
import React from "react";

function OrdersDetails() {
  return (
    <div className="col-span-12 xl:col-span-7">
      <p className="text-lg">جزییات سفارش ها :</p>
      <div className="w-full grid grid-cols-12 child:col-span-12 child:sm:col-span-6 child:md:col-span-4 gap-5 child:p-2 mt-4 child:rounded-lg child:flex child:gap-x-4 child:items-center child:text-white">
        <InfoBox
          text={"تکمیل شده"}
          value={10}
          bgColor={"bg-amber-500"}
          icon={"check"}
        />
        <InfoBox
          text={"در انتظار بررسی "}
          value={6}
          bgColor={"bg-sky-500"}
          icon={"ellipsis"}
        />

        <InfoBox
          text={"لغو شده"}
          value={4}
          bgColor={"bg-rose-500"}
          icon={"x-close"}
        />
        <InfoBox
          text={"منتظر پرداخت"}
          value={2}
          bgColor={"bg-violet-500"}
          icon={"wallet"}
        />
        <InfoBox
          text={"در حال انجام"}
          value={0}
          bgColor={"bg-emerald-500"}
          icon={"clock"}
        />
      </div>
    </div>
  );
}

export default OrdersDetails;
