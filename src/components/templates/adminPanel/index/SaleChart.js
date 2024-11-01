"use client";
import React from "react";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
function SaleChart() {
  const data = [
    { date: "فروردین", price: 4500 },
    { date: "اردیبهشت", price: 5000 },
    { date: "خرداد", price: 4000 },
    { date: "تیر", price: 6000 },
    { date: "مرداد", price: 7000 },
    { date: "شهریور", price: 8000 },
    { date: "مهر", price: 4500 },
  ];
  return (
    <ResponsiveContainer width="100%" height={700}>
      <h3 className="mt-2.5">نمودار فروش ماه جاری</h3>

      <LineChart  margin={{ top: 30, left: 30, right: 30 }} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"date"} />
        <YAxis dataKey={"price"} />
        <Line type="monotone" dataKey="price" stroke="#22c55e" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SaleChart;
