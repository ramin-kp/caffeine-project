"use client";
import React, { useEffect, useState } from "react";
import { showSwal } from "@/utils/helpers";

function SendTicketForm() {
  const [departments, setDepartments] = useState([]);
  const [departmentID, setDepartmentID] = useState("-1");
  const [subDepartments, setSubDepartments] = useState([]);
  const [subDepartmentID, setSubDepartmentID] = useState("-1");
  const [priority, setPriority] = useState("1");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    const fetchDepartments = async () => {
      const res = await fetch("/api/departments");
      const resData = await res.json();
      if (res.status === 200) {
        setDepartments(resData);
      }
    };
    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchSubDepartments = async () => {
      if (departmentID === "-1") return;
      const res = await fetch(`/api/departments/sub/${departmentID}`);
      const resData = await res.json();
      if (res.status === 200) {
        setSubDepartments(resData);
      }
    };
    fetchSubDepartments();
  }, [departmentID]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      departmentID === "-1" &&
      subDepartmentID === "-1" &&
      !title.trim() &&
      !body.trim()
    ) {
      return showSwal("لطفا همه فیلد‌ها رو کامل کنید", "error", "تایید");
    }
    if (departmentID === "-1") {
      return showSwal("لطفا دپارتمان را انتخاب کنید", "error", "تأیید");
    }
    if (subDepartmentID === "-1") {
      return showSwal("لطفا نوع تیکت را انتخاب کنید", "error", "تأیید");
    }
    if (!title || title.length < 5 || title.length > 25) {
      return showSwal(" عنوان وارد شده معتبر نمی باشد", "error", "تأیید");
    }
    if (!body) {
      return showSwal(" متن تیکت وارد شده معتبر نمی باشد", "error", "تأیید");
    }
    setIsLoader(true);
    const res = await fetch("/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        departmentID,
        subDepartmentID,
        priority,
        title,
        body,
      }),
    });
    const data = await res.json();
    if (res.status === 201) {
      setIsLoader(false);
      return showSwal(`${data.message}`, "success", "تایید").then(() =>
        location.replace("/u-panel/tickets")
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
          دپارتمان :
        </label>
        <select
          value={departmentID}
          onChange={(e) => setDepartmentID(e.target.value)}
          className="tailwind-input outline-none"
        >
          <option value={"-1"}>دپارتمان مورد نظر خود را انتخاب کنید</option>
          {departments.map((department) => (
            <option key={department._id} value={department._id}>
              {department.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="" className="mb-2">
          نوع تیکت :
        </label>
        <select
          value={subDepartmentID}
          onChange={(e) => setSubDepartmentID(e.target.value)}
          className="tailwind-input outline-none"
        >
          <option value={"-1"}>نوع تیکت مورد نظر خود را انتخاب کنید</option>
          {departmentID !== "-1" &&
            subDepartments.map((subDepartment) => (
              <option key={subDepartment._id} value={subDepartment._id}>
                {subDepartment.title}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label htmlFor="" className="mb-2">
          عنوان تیکت :
        </label>
        <input
          type="text"
          placeholder="عنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="tailwind-input"
        />
      </div>
      <div>
        <label htmlFor="" className="mb-2">
          سطح الویت تیکت :
        </label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="tailwind-input outline-none"
        >
          <option value={"-1"}>
            سطح الویت تیکت مورد نظر خود را انتخاب کنید
          </option>
          <option value={"1"}>کم </option>
          <option value={"2"}>متوسط </option>
          <option value={"3"}>زیاد </option>
        </select>
      </div>
      <div className="!col-span-12">
        <label htmlFor="" className="mb-2">
          متن تیکت :
        </label>
        <textarea
          type="text"
          placeholder="متن"
          rows={5}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="tailwind-input"
        />
      </div>

      <button className="main-btn w-[40%] py-2" disabled={isLoader}>
        {isLoader ? <span className="loader"></span> : "ارسال تیکت"}
      </button>
    </form>
  );
}

export default SendTicketForm;
