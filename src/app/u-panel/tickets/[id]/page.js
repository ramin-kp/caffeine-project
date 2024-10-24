import React from "react";
import UserPanelLayout from "@/components/Layouts/UserPanelLayout/UserPanelLayout";
import TicketDetails from "@/components/templates/userPanel/tickets/TicketDetails";
import ticketsModel from "@/models/Ticket";
import connectToDB from "@/configs/connectToDB";
async function Ticket({ params }) {
  connectToDB();
  const ticketData = await ticketsModel
    .findOne({ _id: params.id })
    .populate("user", "username role lastName")
    .populate("mainAnswer")
    .lean();
  return (
    <UserPanelLayout>
      <TicketDetails {...ticketData} />
    </UserPanelLayout>
  );
}

export default Ticket;
