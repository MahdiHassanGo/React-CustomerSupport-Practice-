import React, { useEffect, useState } from "react";
import StatCards from "./StatCards";
import Sidebar from './SideBar';
import TicketsSection from './TicketSection';
import ticketsData from "../data.json";
export default function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(ticketsData);
  }, []);

  const updateTicketStatus = (ticketId, newStatus) => {
    setTickets((prevTickets) => prevTickets.map((ticket) => ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
      )
    );
  };


  return (
    <div className="min-h-screen bg-base-100">

      <div className="px-4 md:px-8 pt-6">
        <StatCards ticketsData={tickets} />
      </div>

      <div className="px-4 md:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9">
          <TicketsSection ticketsData={tickets} />
        </div>

        <div className="lg:col-span-3">
          <Sidebar ticketsData={tickets} onUpdateStatus={updateTicketStatus} />
        </div>
      </div>


    </div>
  );
}
