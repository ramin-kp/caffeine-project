"use client";
import Sidebar from "@/components/modules/userPanel/Sidebar/Sidebar";
import Topbar from "@/components/modules/userPanel/Topbar/Topbar";
import React, { useEffect, useState } from "react";

function AdminPanelLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/me");
      const userData = await res.json();
      console.log("data", res, userData);
      if (res.status === 200) {
        setUser(userData.data);
      } else {
        return location.replace("/");
      }
    };
    fetchUser();
  }, []);

  return (
    <section className="flex flex-col xl:h-screen items-start lg:flex-row">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="lg:w-3/4 xl:w-4/5 lg:m-5 w-full">
        <Topbar setIsOpen={setIsOpen} />
        <div className="m-5 lg:m-0">
          <p className="font-DanaMedium block lg:hidden">
            {user.lastName ? user.lastName : user.username} عزیز؛ خوش اومدی 🙌
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}

export default AdminPanelLayout;
