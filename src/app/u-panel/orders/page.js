import UserPanelLayout from "@/components/Layouts/UserPanelLayout/UserPanelLayout";
import React from "react";

function Orders() {
  return (
    <UserPanelLayout>
      <div className="grid grid-cols-12 gap-6 lg:gap-12 mt-6">
        <div className="col-span-12">
          <p className="text-lg"> سفارش های من :</p>
          <div className="relative mt-4 overflow-x-auto shadow rounded-lg">
            <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-zinc-700 dark:text-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3.5">
                    نام محصول
                  </th>
                  <th scope="col" className="px-6 py-3.5">
                    تاریخ
                  </th>
                  <th scope="col" className="px-6 py-3.5">
                    قیمت
                  </th>
                  <th scope="col" className="px-6 py-3.5">
                    وضعیت
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-zinc-600">
                  <th
                    scope="row"
                    className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    قهوه 200 گرمی بن مانو
                  </th>
                  <td className="px-6 py-5">1402/11/11</td>
                  <td className="px-6 py-5">42,000 تومان</td>
                  <td className="px-6 py-5 text-red-500">لغو شده</td>
                </tr>
                <tr className="bg-white border-b dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-zinc-600">
                  <th
                    scope="row"
                    className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    قهوه 200 گرمی بن مانو
                  </th>
                  <td className="px-6 py-5">1402/11/11</td>
                  <td className="px-6 py-5">660,000 تومان</td>
                  <td className="px-6 py-5 text-yellow-500">درانتظار پرداخت</td>
                </tr>
                <tr className="bg-white border-b dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-zinc-600">
                  <th
                    scope="row"
                    className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    قهوه 200 گرمی بن مانو
                  </th>
                  <td className="px-6 py-5">1402/11/11</td>
                  <td className="px-6 py-5">742,000 تومان</td>
                  <td className="px-6 py-5 text-green-500">پرداخت شده</td>
                </tr>
                <tr className="bg-white border-b dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-zinc-600">
                  <th
                    scope="row"
                    className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    قهوه 200 گرمی بن مانو
                  </th>
                  <td className="px-6 py-5">1402/11/11</td>
                  <td className="px-6 py-5">42,000 تومان</td>
                  <td className="px-6 py-5 text-red-500">لغو شده</td>
                </tr>
                <tr className="bg-white border-b dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-zinc-600">
                  <th
                    scope="row"
                    className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    قهوه 200 گرمی بن مانو
                  </th>
                  <td className="px-6 py-5">1402/11/11</td>
                  <td className="px-6 py-5">660,000 تومان</td>
                  <td className="px-6 py-5 text-yellow-500">درانتظار پرداخت</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
}

export default Orders;
