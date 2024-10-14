import Link from "next/link";
import React from "react";
import BlogCard from "@/components/modules/blogs/BlogCard";

function Blog() {
  return (
    <section className="container mt-14" data-aos="fade-up">
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col gap-y-2">
          <h2 className="font-MorabbaMedium text-xl lg:text-3xl">
            مطالب خواندنی
          </h2>
        </div>
        <Link
          href="#"
          className="flex items-center px-2 py-1 rounded-lg gap-x-2 text-green-500 hover:ml-2 duration-300 transition-all"
        >
          مشاهده همه
          <svg className="w-4 h-4">
            <use href="#chevron-left"></use>
          </svg>
        </Link>
      </div>
      <div
        className="flex items-center justify-center lg:justify-between flex-wrap gap-4 child-hover:-translate-y-2 child:duration-300
                child:bg-white child:dark:bg-zinc-700  child:w-[90%] child:sm:w-56 child:lg:w-72 child:rounded-lg child:p-2 child:cursor-pointer child:shadow
                "
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}

export default Blog;
