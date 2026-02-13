// src/components/StatCard.jsx
import React from "react";
import WavePattern from "./WavePattern";

export default function StatCard({ title, value, variant = "purple" }) {
  const bg =
    variant === "green"
      ? "from-emerald-400 to-teal-600"
      : "from-violet-500 to-purple-600";

  return (
    <div
      className={`relative overflow-hidden rounded-lg p-6 bg-gradient-to-r ${bg}`}
    >
      <WavePattern />
      <div className="relative z-10 text-white text-center">
        <p className="text-lg md:text-xl opacity-90">{title}</p>
        <p className="text-4xl md:text-5xl font-semibold mt-2">{value}</p>
      </div>
    </div>
  );
}
