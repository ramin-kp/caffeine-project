"use client";
import { verifyEmail, verifyPassword, verifyUsername } from "@/utils/auth";
import { showSwal } from "@/utils/helpers";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export function generateMetadata() {
  const title = "قهوه‌تلخ | ورود";
  const description = " ورود - قهوه تلخ";
  return { title, description };
}

function SignIn() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";
  const router = useRouter();

  //Fn
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      return showSwal("فیلد هارو پر کنید", "error", "تأیید");
    }
    const isValidUsername = verifyUsername(identifier);
    const isValidEmail = verifyEmail(identifier);
    if (!isValidUsername && !isValidEmail) {
      return showSwal(
        "نام کاربر یا ایمیل وارد شده صحیح نمی باشد",
        "error",
        "تأیید"
      );
    }

    const isValidPassword = verifyPassword(password);
    if (!isValidPassword) {
      return showSwal("رمز عبور وارد شده صحیح نمی باشد", "error", "تأیید");
    }
    setIsLoader(true);
    const userData = { identifier, password };

    const res = await fetch("api/auth/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    if (res.status === 200) {
      setIsLoader(false);
      return showSwal(
        "با موفقیت وارد حساب کاربری خود شدید",
        "success",
        "تأیید"
      ).then(() => router.push(redirectUrl));
    } else {
      setIsLoader(false);
      return showSwal(`${data.message}`, "error", "تأیید");
    }
  };
  return (
    <main className="container flex items-center flex-col justify-center mt-8">
      <div className="max-w-lg w-full shadow">
        <div className="bg-white dark:bg-zinc-700 rounded-lg overflow-hidden">
          <div className="p-3 lg:p-8">
            <h2 className="text-center text-xl lg:text-3xl font-DanaMedium">
              خوش آمدید
            </h2>
            <p className="mt-2 lg:mt-4 text-center text-gray-400">
              ورود به حساب کاربری
            </p>
            <form className="mt-8 space-y-6" onSubmit={submitHandler}>
              <div className="flex w-full items-center bg-gray-100 dark:bg-zinc-500/30 rounded-lg px-3">
                <input
                  placeholder="ایمیل یا نام کاربری"
                  className="appearance-none bg-transparent w-full py-3 ltr__input"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  type="text"
                />
                <svg className="h-5 w-5 text-gray-500 dark:text-gray-200">
                  <use href="#envelope"></use>
                </svg>
              </div>
              <div className="flex w-full items-center bg-gray-100 dark:bg-zinc-500/30 rounded-lg  px-3">
                <input
                  placeholder="رمز عبور"
                  className="appearance-none bg-transparent w-full py-3 ltr__input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={isShowPassword ? "text" : "password"}
                />
                {isShowPassword ? (
                  <svg
                    className="h-5 w-5 text-gray-500 dark:text-gray-200 cursor-pointer"
                    onClick={() => setIsShowPassword(false)}
                  >
                    <use href="#lock"></use>
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 text-gray-500 dark:text-gray-200 cursor-pointer"
                    onClick={() => setIsShowPassword(true)}
                  >
                    <use href="#eye"></use>
                  </svg>
                )}
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm">
                  <a
                    className="font-medium text-green-500 hover:text-green-600"
                    href="#"
                  >
                    فراموشی رمز عبور
                  </a>
                </div>
              </div>
              <div>
                <button
                  className="group transition-colors relative w-full flex justify-center py-3 px-4 border border-transparent font-DanaMedium rounded-lg text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  type="submit"
                  disabled={isLoader}
                >
                  {isLoader ? <span className="loader"></span> : "وارد شوید"}
                </button>
              </div>
            </form>
          </div>
          <div className="px-8 py-4 text-center">
            <span className="text-gray-400">حساب کاربری ندارید؟ </span>
            <Link
              className="font-medium text-green-500 hover:text-green-400"
              href="/signup"
            >
              ثبت نام کنید
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
