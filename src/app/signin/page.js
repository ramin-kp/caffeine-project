import Link from "next/link";
import React from "react";

export function generateMetadata() {
  const title = "قهوه‌تلخ | ورود";
  return { title };
}

function SignIn() {
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
            <form method="POST" action="#" className="mt-8 space-y-6">
              <div className="flex w-full items-center bg-gray-100 dark:bg-zinc-500/30 rounded-lg  px-3">
                <input
                  placeholder="ایمیل یا نام کاربری"
                  className="appearance-none bg-transparent w-full py-3 "
                  required=""
                  autoComplete="email"
                  type="email"
                />
                <svg className="h-5 w-5 text-gray-500 dark:text-gray-200">
                  <use href="#envelope"></use>
                </svg>
              </div>
              <div className="flex w-full items-center bg-gray-100 dark:bg-zinc-500/30 rounded-lg  px-3">
                <input
                  placeholder="رمز عبور"
                  className="appearance-none bg-transparent w-full py-3"
                  required=""
                  autoComplete="password"
                  type="password"
                />
                <svg className="h-5 w-5 text-gray-500 dark:text-gray-200">
                  <use href="#lock"></use>
                </svg>
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
                >
                  وارد شوید
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
