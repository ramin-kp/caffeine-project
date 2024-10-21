"use client";
import Sidebar from "@/components/modules/userPanel/Sidebar/Sidebar";
import Topbar from "@/components/modules/userPanel/Topbar/Topbar";
import React, { useState } from "react";

function UserPanelLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="flex flex-col xl:h-screen items-start lg:flex-row">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="lg:w-3/4 xl:w-4/5 lg:m-5 w-full">
        <Topbar setIsOpen={setIsOpen} />
        <div className="m-5 lg:m-0">
          <p className="font-DanaMedium block lg:hidden">
            رامین کریم‌پور عزیز؛ خوش اومدی 🙌{" "}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}

export default UserPanelLayout;
