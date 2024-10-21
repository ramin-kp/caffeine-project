import React from "react";
import UserPanelLayout from "@/components/Layouts/UserPanelLayout/UserPanelLayout";
import { authUser } from "@/utils/serverHelpers";
import wishModel from "@/models/Wishlist";
import WishCard from "@/components/templates/userPanel/wishlist/WishCard";
import connectToDB from "@/configs/connectToDB";

async function Wishlist() {
  connectToDB();
  const user = await authUser();
  const data = await wishModel
    .find({ userID: user._id }, "productID")
    .populate("productID", "nameFa score price");
  const wishData = JSON.parse(JSON.stringify(data));

  return (
    <UserPanelLayout>
      <div className="grid grid-cols-12 gap-6 lg:gap-12 mt-6">
        <div className="col-span-12">
          <p className="text-lg">محصولات مورد علاقه من:</p>
          {wishData.length > 0 ? (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-8 child:cursor-pointer child:overflow-hidden child:rounded-lg child:bg-white child:dark:bg-zinc-700 child:shadow  child:relative">
              {wishData.map((wish) => (
                <WishCard key={wish._id} {...wish.productID} />
              ))}
            </div>
          ) : (
            <p className="w-full text-center my-5 text-red-500 font-DanaMedium">
              محصولی ثبت نشده است
            </p>
          )}
          {/* <!-- PAGINATION --> */}
          {/* <div className="mt-10 w-full flex items-center justify-center">
            <ul className="flex items-center gap-x-3 child:flex child:items-center child:justify-center child:w-8 child:h-8 child:cursor-pointer child:shadow child:rounded-lg child:transition-all child:duration-300">
              <li className="bg-white dark:bg-zinc-700 hover:bg-green-500 hover:text-white">
                <svg className="w-5 h-5 rotate-180">
                  <use href="#chevron-left"></use>
                </svg>
              </li>
              <li className="text-white bg-green-500">
                <a href="#">1</a>
              </li>
              <li className="bg-white dark:bg-zinc-700 hover:bg-green-500 hover:text-white">
                <a href="#">2</a>
              </li>
              <li className="bg-white dark:bg-zinc-700 hover:bg-green-500 hover:text-white">
                <a href="#">...</a>
              </li>
              <li className="bg-white dark:bg-zinc-700 hover:bg-green-500 hover:text-white">
                <svg className="w-5 h-5">
                  <use href="#chevron-left"></use>
                </svg>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </UserPanelLayout>
  );
}

export default Wishlist;
