"use client";
import React, { useState } from "react";

function AllComments({ comments }) {
  const [isShowMoreComments, setIsShowMoreComments] = useState(false);
  const [commentQuantity, setCommentQuantity] = useState(5);

  const handleToggleComments = () => {
    if (isShowMoreComments) {
      setCommentQuantity(5);
    } else {
      setCommentQuantity(comments.length);
    }
    setIsShowMoreComments((prev) => !prev);
  };
  return (
    <>
      {comments.length > 0 ? (
        <ul className={`lg:w-3/4 flex flex-col gap-y-2 child:w-full`}>
          {comments.slice(0, commentQuantity).map((comment) => (
            <li
              key={comment._id}
              className="child:flex py-4 border-b border-gray-200 child:border-white/20"
            >
              <div className="flex items-center gap-x-2">
                <h2 className="font-DanaMedium text-lg mb-1">
                  {comment.title}{" "}
                </h2>
                <span className="px-2 py-1 mb-2 rounded-lg bg-green-500 text-white text-xs">
                  خریدار
                </span>
              </div>
              <div className="flex-col">
                {comment.recommend === "true" ? (
                  <h2 className="flex items-center gap-x-1 text-green-500 mb-4">
                    <svg className="w-4 h-4">
                      <use href="#hand-up"></use>
                    </svg>
                    پیشنهاد میشود
                  </h2>
                ) : (
                  <h2 className="flex items-center gap-x-1 text-red-500 mb-4">
                    <svg className="w-4 h-4">
                      <use href="#hand-down"></use>
                    </svg>
                    پیشنهاد نمیشود
                  </h2>
                )}

                <p className="text-gray-500 dark:text-gray-200 mb-2 line-clamp-2">
                  {comment.body}
                </p>
              </div>
              <div className="mt-2 lg:mt-0 flex-col lg:flex-row gap-y-2 lg:items-center justify-between">
                <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                  <p>{new Date(comment.date).toLocaleDateString("fa-IR")}</p>
                  <p>{comment.username}</p>
                </div>
                <div className="flex items-center gap-x-2 flex-wrap mt-2">
                  <p className="text-gray-400 text-sm">
                    آیا این دیدگاه برایتان مفید بود؟
                  </p>
                  <div
                    className="flex items-center gap-x-2 child:flex child:items-center child:gap-x-1 child:rounded-lg child:p-2 child:font-DanaMedium child:duration-300 
                          child:transition-all child:text-sm"
                  >
                    <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600  dark:focus:ring-green-600">
                      {comment.useful}
                      <svg className="w-4 h-4">
                        <use href="#hand-up"></use>
                      </svg>
                    </button>
                    <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343]  dark:focus:ring-[#EF4343]">
                      {comment.unhelpful}
                      <svg className="w-4 h-4">
                        <use href="#hand-down"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
          {comments.length > 5 && (
            <button
              className="more-comment-btn w-full flex items-center justify-center gap-x-1 my-4 text-green-600 font-DanaMedium"
              onClick={handleToggleComments}
            >
              <p className="more-comment-text">
                {isShowMoreComments ? "مشاهده کمتر" : "مشاهده بیشتر"}
              </p>
              <svg className="w-4 h-4 more-comment-icon">
                <use href="#chevron-down"></use>
              </svg>
            </button>
          )}
        </ul>
      ) : (
        <p className="w-full text-center my-4 text-red-500 font-DanaMedium">
          دیدگاهی برای این محصول ثبت نشده است
        </p>
      )}
    </>
  );
}

export default AllComments;
