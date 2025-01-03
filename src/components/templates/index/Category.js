import Image from "next/image";
import Link from "next/link";
import React from "react";

function Category() {
  return (
    <section className="container mt-14" data-aos="fade-up">
      <div className="w-full text-center">
        <Link href="#" className="inline-flex items-center justify-center">
          <span className="cursor-pointer transition-colors gap-x-2 flex items-center justify-center">
            <h2 className="text-xl lg:text-3xl font-MorabbaMedium">
              محبوب ترین دسته ها
            </h2>
            <svg className="w-8 h-8">
              <use href="#arrow-down-circle"></use>
            </svg>
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-evenly lg:justify-between flex-wrap mt-10 child:mb-8 gap-x-8 child:flex child:items-center child:flex-col child-hover:-translate-y-5 child:duration-300 child:cursor-pointer child:gap-y-2.5">
        <Link href="#">
          <Image
            src="/images/categories/category1.png"
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-cover"
            width={200}
            height={200}
            alt="category1"
          />
          <p className="font-DanaMedium text-sm lg:text-lg line-clamp-1">
            قهوه دمی و اسپرسو
          </p>
        </Link>
        <Link href="#">
          <Image
            src="/images/categories/category2.png"
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-cover"
            width={200}
            height={200}
            alt="category1"
          />
          <p className="font-DanaMedium text-sm lg:text-lg line-clamp-1">
            لوازم جانبی و تجهیزات
          </p>
        </Link>
        <Link href="#">
          <Image
            src="/images/categories/category3.png"
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-cover"
            width={200}
            height={200}
            alt="category1"
          />
          <p className="font-DanaMedium text-sm lg:text-lg line-clamp-1">
            اسپرسو ساز
          </p>
        </Link>
        <Link href="#">
          <Image
            src="/images/categories/category4.png"
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-cover"
            width={200}
            height={200}
            alt="category1"
          />
          <p className="font-DanaMedium text-sm lg:text-lg line-clamp-1">
            پک تستر قهوه
          </p>
        </Link>
        <Link href="#">
          <Image
            src="/images/categories/category5.png"
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-cover"
            width={200}
            height={200}
            alt="category1"
          />
          <p className="font-DanaMedium text-sm lg:text-lg line-clamp-1">
            قهوه ترک
          </p>
        </Link>
      </div>
    </section>
  );
}

export default Category;
