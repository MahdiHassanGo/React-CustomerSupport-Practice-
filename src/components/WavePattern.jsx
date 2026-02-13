// src/components/WavePattern.jsx
import React from "react";

export default function WavePattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-25"
      viewBox="0 0 800 260"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wave" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="white" stopOpacity="0.15" />
          <stop offset="1" stopColor="white" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M0,180 C120,140 180,240 320,200 C460,160 520,120 640,150 C720,170 760,210 800,230 L800,260 L0,260 Z"
        fill="url(#wave)"
      />
      <path
        d="M0,120 C140,70 200,170 340,130 C480,90 560,40 680,80 C740,105 770,140 800,155"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M0,90 C140,35 220,120 360,95 C500,70 580,20 700,55 C760,75 780,105 800,120"
        stroke="white"
        strokeOpacity="0.12"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
