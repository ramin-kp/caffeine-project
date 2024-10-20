import Link from "next/link";
import React from "react";

function Breadcrumb({ productDetails, href }) {
  return (
    <section>
      <ul className="flex items-center gap-x-2 text-gray-400 text-sm lg:text-base">
        <li className="flex items-center gap-x-2">
          <Link href="/">صفحه اصلی</Link>
          <svg className="w-4 h-4">
            <use href="#chevron-left"></use>
          </svg>
        </li>
        <li className="flex items-center gap-x-2">
          <Link href="/products"> فروشگاه</Link>
          <svg className="w-4 h-4">
            <use href="#chevron-left"></use>
          </svg>
        </li>
        {productDetails && (
          <li className="flex items-center gap-x-2">
            <Link href={`/products/${href}`}>جزییات محصول</Link>
          </li>
        )}
      </ul>
    </section>
  );
}

export default Breadcrumb;
