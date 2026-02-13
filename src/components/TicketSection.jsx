// src/components/dashboard/TicketsSection.jsx
import React from "react";
import TicketCard from './TicketCard';


export default function TicketsSection({ ticketsData = [] }) {

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Customer Tickets</h2>

      <div className="grid grid-cols-3 sm:grid-cols-1 gap-4">
        <div className="space-y-4">
          {ticketsData.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>

      
    
      </div>
    </div>
  );
}
