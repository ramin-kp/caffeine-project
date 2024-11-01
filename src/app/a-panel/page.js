import React from "react";
import AdminPanelLayout from "@/components/Layouts/AdminPanelLayout/AdminPanelLayout";
import InfoBox from "@/components/modules/infoBox/InfoBox";
import GrowChart from "@/components/templates/adminPanel/index/GrowChart";
import SaleChart from "@/components/templates/adminPanel/index/SaleChart";
import connectToDB from "@/configs/connectToDB";
import { roles } from "@/utils/constant";
import { authUser } from "@/utils/serverHelpers";
import { redirect } from "next/navigation";
import ticketModel from "@/models/Ticket";
import productModel from "@/models/Product";
import userModel from "@/models/User";

async function AdminPanel() {
  connectToDB();
  const user = await authUser();
  if (user.role !== roles.ADMIN) {
    redirect("/");
  }
  const tickets = await ticketModel.find({}).lean();
  const products = await productModel.find({}).lean();
  const users = await userModel.find({}).lean();

  return (
    <AdminPanelLayout>
      <section className="mt-2.5">
        <p className="text-lg">جزییات کلی سایت:</p>

        <div className="w-full grid grid-cols-12 child:col-span-12 child:sm:col-span-6 child:md:col-span-4 gap-5 child:p-2 mt-4 child:rounded-lg child:flex child:gap-x-4 child:items-center child:text-white">
          <InfoBox
            text={"مجموع تیکت های دریافتی"}
            value={tickets.length}
            bgColor={"bg-amber-500"}
            icon={"check"}
          />
          <InfoBox
            text={"مجموع محصولات سایت"}
            value={products.length}
            bgColor={"bg-sky-500"}
            icon={"ellipsis"}
          />

          <InfoBox
            text={"مجموع سفارشات"}
            value={4}
            bgColor={"bg-rose-500"}
            icon={"x-close"}
          />
          <InfoBox
            text={"مجموع کاربر های سایت"}
            value={users.length}
            bgColor={"bg-violet-500"}
            icon={"wallet"}
          />
          <InfoBox
            text={" سفارشات لغو شده"}
            value={0}
            bgColor={"bg-emerald-500"}
            icon={"clock"}
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-2.5 mt-5 mb-16">
        <GrowChart />
        <SaleChart />
      </section>
    </AdminPanelLayout>
  );
}

export default AdminPanel;
