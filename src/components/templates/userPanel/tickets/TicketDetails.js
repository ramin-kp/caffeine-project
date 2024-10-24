import { roles } from "@/utils/constant";
import React from "react";

function TicketDetails({
  title,
  body,
  user,
  createdAt,
  hasAnswer,
  mainAnswer,
}) {
  return (
    <section className="mt-14 p-5 text-xl text-gray-700 bg-gray-50 dark:bg-zinc-700 dark:text-gray-200 rounded-lg shadow-lg">
      <h3 className="p-2.5 border-b border-gray-200">{title}</h3>
      <div
        className={`${
          user.role === roles.ADMIN
            ? "bg-sky-500/30"
            : "bg-gray-200/40 dark:bg-gray-700"
        } w-full sm:w-2/3 my-5  text-zinc-700 dark:text-white p-4 rounded-2xl rounded-tr-sm`}
      >
        <div
          className={`${
            user.role === roles.ADMIN ? "text-left" : "text-right"
          } w-full text-lg font-DanaDemiBold`}
        >
          <h4>{user.lastName ? user.lastName : user.username}</h4>
          <span className="text-xs font-Dana">
            {new Date(createdAt).toLocaleDateString("fa-IR")}
          </span>
        </div>
        <p className="mt-2.5 text-base font-Dana">{body}</p>
      </div>
      {hasAnswer ? (
        ""
      ) : (
        <p className="text-red-400 text-center w-full">منتظر پاسخ مدیر سایت</p>
      )}
    </section>
  );
}

export default TicketDetails;
