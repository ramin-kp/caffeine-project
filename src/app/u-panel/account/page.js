import React from "react";
import UserPanelLayout from "@/components/Layouts/UserPanelLayout/UserPanelLayout";
import Form from "@/components/templates/userPanel/account/Form";

function Account() {
  return (
    <UserPanelLayout>
      <div className="grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-12">
          <p className="text-lg"> جزییات حساب کاربری :</p>
          <Form />
        </div>
      </div>
    </UserPanelLayout>
  );
}

export default Account;
