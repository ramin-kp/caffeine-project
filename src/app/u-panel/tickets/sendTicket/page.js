import UserPanelLayout from "@/components/Layouts/UserPanelLayout/UserPanelLayout";
import SendTicketForm from "@/components/templates/userPanel/tickets/SendTicketForm";
import React from "react";

function SendTicket() {
  return (
    <UserPanelLayout>
      <SendTicketForm />
    </UserPanelLayout>
  );
}

export default SendTicket;
