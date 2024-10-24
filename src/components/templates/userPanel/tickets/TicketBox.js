import Link from "next/link";
import React from "react";

function TicketBox({ _id, title, createdAt, department, priority, hasAnswer }) {
  return (
    <tr className="bg-white border-b dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-zinc-600">
      <th
        scope="row"
        className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {title}
      </th>
      <td className="px-6 py-5">
        {new Date(createdAt).toLocaleDateString("fa-IR")}
      </td>
      <td className="px-6 py-5">{department.title}</td>
      {priority === 1 && <td className="px-6 py-5">کم</td>}
      {priority === 2 && <td className="px-6 py-5">متوسط</td>}
      {priority === 3 && <td className="px-6 py-5">زیاد</td>}
      {hasAnswer ? (
        <td className="px-6 py-5 text-green-500">پاسخ داده شده</td>
      ) : (
        <td className="px-6 py-5 text-red-500">منتظر پاسخ</td>
      )}
      <td className="px-6 py-5 text-white">
        <Link
          href={`/u-panel/tickets/${_id}`}
          className="main-btn p-2 gap-x-1 shadow"
        >
          مشاهده
        </Link>
      </td>
    </tr>
  );
}

export default TicketBox;
