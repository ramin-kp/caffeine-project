"use client";
import React from "react";
import SendComments from "./SendComments";
import AllComments from "./AllComments";

function ProductComments({ productId, comments, userData }) {
  return (
    <section className="w-full rounded-lg bg-white dark:bg-zinc-700 shadow p-5">
      <div className="flex items-center gap-x-2 mb-6">
        <h2 className="font-MorabbaMedium text-2xl ">دیدگاه ها</h2>
        <p className="text-sm text-blue-500">({comments.length} دیدگاه)</p>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10">
        <SendComments productId={productId} userData={userData} />
        <AllComments comments={comments} />
      </div>
    </section>
  );
}

export default ProductComments;
