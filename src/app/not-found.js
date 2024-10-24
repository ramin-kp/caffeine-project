import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateMetadata() {
  const title = "قهوه تلخ | 404";
  const description = " قهوه تلخ - صفحه 404";
  return { title, description };
}
// export const metadata = {
//   title: "قهوه تلخ | 404",
//   description: "قهوه تلخ - صفحه 404",
// };

function notFound() {
  return (
    <main className="container mt-14">
      <section className="flex flex-col gap-y-2 items-center justify-center w-full text-center">
        <Image
          src="/Images/not-found.png"
          className="h-28 sm:h-36 lg:h-60"
          width={700}
          height={400}
          alt="notFound img"
          style={{ animation: "float 3s ease-in-out infinite;" }}
        />
        <h2 className="text-xl lg:text-2xl font-DanaMedium mt-4 dark:text-gray-300">
          صفحه‌ای که به دنبال آن هستید یافت نشد !
        </h2>
        <p className="text-gray-500 mt-2 text-center">
          لطفاً آدرس اینترنتی را بررسی کنید یا به صفحه اصلی برگردید.
        </p>
        <Link
          href="/"
          className="flex items-center justify-center mt-8 px-4 lg:px-8 py-2 lg:py-3 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
        >
          بازگشت به صفحه اصلی
          <svg className="w-5 h-5 ">
            <use href="#chevron-left"></use>
          </svg>
        </Link>
      </section>
    </main>
  );
}

export default notFound;
