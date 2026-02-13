import React from "react";

export default function Sidebar({ ticketsData = [], onUpdateStatus = () => {} }) {
  const openTickets = ticketsData.filter((t) => t.status === "OPEN");
  const resolvedTickets = ticketsData.filter((t) => t.status === "RESOLVED");

  const handleComplete = (ticketId) => {
    onUpdateStatus(ticketId, "RESOLVED");
  };

  return (
    <div className="space-y-4">
      <div className="card bg-base-100 border border-base-200">
        <div className="card-body">
          <h3 className="font-semibold">Open Tasks ({openTickets.length})</h3>

          <div className="mt-2 space-y-3 max-h-64 overflow-y-auto">
            { openTickets.map((ticket) => (
                <div key={ticket.id} className="border-b pb-3 last:border-b-0">
                  <p className="text-sm opacity-80 mb-2 font-medium">
                    {ticket.title}
                  </p>
                  <button
                    onClick={() => handleComplete(ticket.id)}
                    className="btn btn-success btn-sm w-full rounded-md"
                  >
                    Complete
                  </button>
                </div>
              ))
         }
          </div>
        </div>
      </div>

      <div className="card bg-base-100 border border-base-200">
        <div className="card-body">
          <h3 className="font-semibold">Resolved Tasks ({resolvedTickets.length})</h3>

          <div className="mt-2 space-y-2 max-h-64 overflow-y-auto">
            {resolvedTickets.length > 0 ? (
              resolvedTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-primary/10 text-primary rounded-md px-3 py-2 text-sm font-medium"
                >
                  {ticket.title}
                </div>
              ))
            ) : (
              <p className="text-sm opacity-60">No resolved tasks</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}