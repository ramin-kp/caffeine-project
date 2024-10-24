import React from "react";
import Link from "next/link";
import ticketsModel from "@/models/Ticket";
import UserPanelLayout from "@/components/Layouts/UserPanelLayout/UserPanelLayout";
import { authUser } from "@/utils/serverHelpers";
import TicketBox from "@/components/templates/userPanel/tickets/TicketBox";

async function page() {
  const user = await authUser();
  const tickets = await ticketsModel
    .find({ user: user._id })
    .populate("department", "title")
    .lean();
  return (
    <UserPanelLayout>
      <div className="grid grid-cols-12 gap-6 lg:gap-12 mt-6">
        <div className="col-span-12">
          <div className="flex items-center justify-between">
            <p className="text-lg"> تیکت‌های من :</p>
            <Link
              href="/u-panel/tickets/sendTicket"
              className="main-btn p-2 gap-x-1 shadow"
            >
              تیکت جدید
              <svg className="w-5 h-5">
                <use href="#add"></use>
              </svg>
            </Link>
          </div>
          <div className="relative mt-4 overflow-x-auto shadow rounded-lg">
            <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-zinc-700 dark:text-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3.5">
                    موضوع
                  </th>
                  <th scope="col" className="px-6 py-3.5">
                    تاریخ
                  </th>
                  <th scope="col" className="px-6 py-3.5">
                    دپارتمان
                  </th>
                  <th scope="col" className="px-6 py-3.5">
                    الویت
                  </th>
                  <th scope="col" className="px-6 py-3.5">
                    وضعیت
                  </th>
                  <th scope="col" className="px-6 py-3.5 text-center">
                    مشاهده
                  </th>
                </tr>
              </thead>
              <tbody>
                {tickets.length > 0 ? (
                  tickets.map((ticket) => (
                    <TicketBox key={ticket._id} {...ticket} />
                  ))
                ) : (
                  <p className="text-red-500">تیکتی ثبت نشده است</p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
}

export default page;
