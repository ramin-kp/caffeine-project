"use client";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function GrowChart() {
  const data = [
    { date: "فروردین", current: 4500, prev: 5000 },
    { date: "اردیبهشت", current: 5000, prev: 4500 },
    { date: "خرداد", current: 4000, prev: 5000 },
    { date: "تیر", current: 6000, prev: 4000 },
    { date: "مرداد", current: 7000, prev: 6000 },
    { date: "شهریور", current: 8000, prev: 7000 },
    { date: "مهر", current: 4500, prev: 8000 },
  ];
  return (
    <ResponsiveContainer width="100%" height={700}>
      <h3 className="mt-2.5">نمودار برسی تغییرات</h3>
      <AreaChart margin={{ top: 30, left: 30, right: 30 }} data={data}>
        <defs>
          <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPrev" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fca5a5" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#fca5a5" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"date"} />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="current"
          stroke="#22c55e"
          fillOpacity={1}
          fill="url(#colorCurrent)"
        />
        <Area
          type="monotone"
          dataKey="prev"
          stroke="#fca5a5"
          fillOpacity={1}
          fill="url(#colorPrev)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default GrowChart;
