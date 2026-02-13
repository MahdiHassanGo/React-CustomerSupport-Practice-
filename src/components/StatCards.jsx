// src/components/StatCards.jsx
import React from "react";
import StatCard from "./StatCard";

export default function StatCards({ ticketsData = [] }) {
  const inProgressCount = ticketsData.filter(t => t.status ==='IN_PROGRESS').length
  const resolvedCount = ticketsData.filter(t => t.status === "RESOLVED").length;



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <StatCard title="In-Progress" value={inProgressCount} variant="purple" />
      <StatCard title="Resolved" value={resolvedCount} variant="green" />
    </div>
  );
}
