import React from "react";

export default function TicketCard({ ticket }) {
  const ticketData = ticket;
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm">
      <div className="card-body p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-snug">
          {ticketData.title}
          </h3>
          <span className="badge badge-success badge-sm">{ticketData.status}</span>
        </div>

        <p className="text-sm opacity-70 mt-2 leading-relaxed line-clamp-2">
         {ticketData.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3 text-xs opacity-80">
          <div className="flex items-center gap-2">
            <span className="opacity-70">#{ticketData.id}</span>
            <span className="font-semibold text-error">{ticketData.priority}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">{ticketData.customer}</span>
            <span className="flex items-center gap-1 opacity-80">
              {ticketData.createdAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
