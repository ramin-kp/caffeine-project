"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import { showSwal } from "@/utils/helpers";
import {
  verifyEmail,
  verifyPassword,
  verifyPhoneNumber,
  verifyUsername,
} from "@/utils/auth";

function Form() {
  const [userData, setUserData] = useState({
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [userDate, setUserDate] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/me");
      const resData = await res.json();
      if (res.status === 200) {
        setUserData({
          lastName: resData.data.lastName ? resData.data.lastName : "",
          username: resData.data.username ? resData.data.username : "",
          email: resData.data.email ? resData.data.email : "",
          phone: resData.data.phone ? resData.data.phone : "",
          password: resData.data.password ? resData.data.password : "",
        });
        setUserDate(resData.data.date ? resData.data.date : "");
      }
    };
    fetchUser();
  }, []);
  const [isLoader, setIsLoader] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { lastName, username, email, phone, password } = userData;
    if (
      !lastName.trim() &&
      !username.trim() &&
      !email.trim() &&
      !phone.trim() &&
      !password.trim() &&
      !userDate
    ) {
      return showSwal("لطفا همه فیلد‌ها رو کامل کنید", "error", "تایید");
    }
    if (!lastName || lastName.length < 3 || lastName.length > 25) {
      return showSwal(" نام وارد شده معتبر نمی باشد", "error", "تأیید");
    }
    if (!userDate) {
      return showSwal(" تاریخ وارد شده معتبر نمی باشد", "error", "تأیید");
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
    const verifiedPhone = verifyPhoneNumber(phone);
    if (!verifiedPhone) {
      return showSwal("شماره موبایل وارد شده معتبر نمی باشد", "error", "تایید");
    }
    setIsLoader(true);
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...userData,
        date: userDate,
      }),
    });
    const data = await res.json();
    if (res.status === 200) {
      setIsLoader(false);
      return showSwal(`${data.message}`, "success", "تایید").then(() =>
        location.reload()
      );
    } else {
      setIsLoader(false);
      return showSwal(`${data.message}`, "error", "تایید");
    }
  };
  return (
    <form
      className="grid grid-cols-12 child:col-span-12 md:child:col-span-6 gap-5 bg-white shadow child:flex child:flex-col child:gap-x-2 mt-4 p-4 dark:bg-zinc-700 rounded-lg "
      onSubmit={submitHandler}
    >
      <div>
        <label htmlFor="" className="mb-2">
          نام , نام خانوادگی :
        </label>
        <input
          type="text"
          placeholder="نام , نام خانوادگی "
          value={userData.lastName}
          name="lastName"
          onChange={changeHandler}
          className="tailwind-input"
        />
      </div>
      <div>
        <label htmlFor="" className="mb-2">
          نام کاربری :
        </label>
        <input
          type="text"
          placeholder="نام کاربری"
          value={userData.username}
          name="username"
          onChange={changeHandler}
          className="tailwind-input ltr__input"
        />
      </div>
      <div>
        <label htmlFor="" className="mb-2">
          شماره موبایل :
        </label>
        <input
          type="text"
          placeholder="شماره موبایل"
          value={userData.phone}
          name="phone"
          onChange={changeHandler}
          className="tailwind-input ltr__input"
        />
      </div>
      <div>
        <label htmlFor="" className="mb-2">
          ایمیل :
        </label>
        <input
          type="email"
          placeholder="ایمیل"
          value={userData.email}
          name="email"
          onChange={changeHandler}
          className="tailwind-input ltr__input"
        />
      </div>
      <div>
        <label htmlFor="" className="mb-2">
          رمز عبور جدید :
        </label>
        <input
          type="text"
          placeholder="رمز عبور "
          onChange={changeHandler}
          value={userData.password}
          name="password"
          className="tailwind-input ltr__input"
        />
      </div>
      <div>
        <label htmlFor="" className="mb-2">
          تاریخ تولد :
        </label>
        <DatePicker
          inputClass="tailwind-input"
          value={userDate}
          onChange={setUserDate}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-center"
          animations={[transition()]}
        ></DatePicker>
      </div>
      <button className="main-btn w-[40%] py-2" disabled={isLoader}>
        {isLoader ? <span className="loader"></span> : "ثبت اطلاعات"}
      </button>
    </form>
  );
}

export default Form;
