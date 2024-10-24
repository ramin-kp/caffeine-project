import React from "react";
import TicketModel from "@/models/Ticket";

import UserPanelLayout from "@/components/Layouts/UserPanelLayout/UserPanelLayout";
import LatestOrders from "@/components/templates/userPanel/index/LatestOrders";
import OrdersDetails from "@/components/templates/userPanel/index/OrdersDetails";
import OrdersInfo from "@/components/templates/userPanel/index/OrdersInfo";
import TicketsBox from "@/components/templates/userPanel/index/TicketsBox";
import connectToDB from "@/configs/connectToDB";
import { authUser } from "@/utils/serverHelpers";

async function UserPanel() {
  connectToDB();
  const user = await authUser();
  const allTickets = await TicketModel.find({ user: user._id });
  const ClosedTickets = await TicketModel.find({
    user: user._id,
    hasAnswer: true,
  });
  return (
    <UserPanelLayout>
      <div className="grid grid-cols-12 gap-6 lg:gap-12 mt-6">
        <OrdersInfo />
        <OrdersDetails />
        <TicketsBox
          tickets={allTickets.length}
          ClosedTickets={ClosedTickets.length}
        />
        <LatestOrders />
      </div>
    </UserPanelLayout>
  );
}

export default UserPanel;
