"use client";
import { verifyEmail, verifyPassword, verifyUsername } from "@/utils/auth";
import { showSwal } from "@/utils/helpers";
import Link from "next/link";
import React, { useState } from "react";
import swal from "sweetalert";

export function generateMetadata() {
  const title = "قهوه‌تلخ | ثبت نام";
  const description = "ثبت نام - قهوه تلخ";
  return { title, description };
}

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      return swal({
        title: "فیلد هارو کامل کنید",
        icon: "error",
        buttons: "تایید",
      });
    }
    const isValidUserName = verifyUsername(username);
    if (!isValidUserName) {
      return showSwal("نام کاربری وارد شده معتبر نمی باشد", "error", "تأیید");
    }
    const isValidEmail = verifyEmail(email);
    if (!isValidEmail) {
      return showSwal("ایمیل وارد شده معتبر نمی باشد", "error", "تأیید");
    }
    const isValidPassword = verifyPassword(password);
    if (!isValidPassword) {
      return showSwal(
        "رمز عبور وارد شده معتبر نمی باشد(ازحرف بزرگ و اعداد و از کارکترهایی مثل @ و... استفاده کنید)",
        "error",
        "تأیید"
      );
    }
    const data = { username, email, password };
    const res = await fetch("api/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const userData = await res.json();
    if (res.status === 201) {
      showSwal("ثبت نام شما با موفقیت انجام شد", "success", "تأیید");
    } else {
      showSwal(`${userData.message}`, "error", "تلاش مجدد");
    }
  };
  return (
    <main className="container flex items-center flex-col justify-center h-screen">
      <div className="max-w-lg w-full shadow">
        <div className="bg-white dark:bg-zinc-700 rounded-lg overflow-hidden">
          <div className="p-3 lg:p-8">
            <h2 className="text-center text-xl lg:text-3xl font-DanaMedium">
              خوش آمدید
            </h2>
            <p className="mt2 lg:mt-4 text-center text-gray-400">
              ایجاد حساب کاربری
            </p>

            <form className="mt-8 space-y-6" onSubmit={submitHandler}>
              <div className="flex w-full items-center bg-gray-100 dark:bg-zinc-500/30 rounded-lg  px-3">
                <input
                  placeholder="نام کاربری"
                  className="appearance-none bg-transparent w-full py-3 ltr__input "
                  required=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="username"
                />
                <svg className="h-5 w-5 text-gray-500 dark:text-gray-200">
                  <use href="#user"></use>
                </svg>
              </div>
              <div className="flex w-full items-center bg-gray-100 dark:bg-zinc-500/30 rounded-lg  px-3">
                <input
                  placeholder="ایمیل"
                  className="appearance-none bg-transparent w-full py-3  ltr__input"
                  required=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
                <svg className="h-5 w-5 text-gray-500 dark:text-gray-200">
                  <use href="#envelope"></use>
                </svg>
              </div>
              <div className="flex w-full items-center bg-gray-100 dark:bg-zinc-500/30 rounded-lg  px-3">
                <input
                  placeholder="رمز عبور"
                  className="appearance-none bg-transparent w-full py-3 ltr__input"
                  required=""
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

              <div>
                <button
                  className="group transition-colors relative w-full flex justify-center py-3 px-4 border border-transparent font-DanaMedium rounded-lg text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  type="submit"
                  disabled={isLoader}
                >
                  {isLoader ? <span className="loader"></span> : "عضویت"}
                </button>
              </div>
            </form>
          </div>
          <div className="px-8 py-4 text-center">
            <span className="text-gray-400">قبلا ثبت نام کرده اید؟</span>
            <Link
              className="font-medium text-green-500 hover:text-green-400"
              href="/signin"
            >
              {" "}
              وارد شوید
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
