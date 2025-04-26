import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    date: 'Aug 1',
    revenue: 4200,
  },
  {
    date: 'Aug 5',
    revenue: 5800,
  },
  {
    date: 'Aug 10',
    revenue: 9200,
  },
  {
    date: 'Aug 15',
    revenue: 7400,
  },
  {
    date: 'Aug 20',
    revenue: 8600,
  },
  {
    date: 'Aug 25',
    revenue: 11200,
  },
  {
    date: 'Aug 31',
    revenue: 13500,
  },
];

export default function RevenueChart() {
  return (
    <div className="w-full h-96">
      <h2 className="text-xl font-bold mb-4 text-center">Revenue for August 2024</h2>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis 
            label={{ 
              value: 'Revenue (EGP)', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle' }
            }} 
          />
          <Tooltip formatter={(value) => [`EGP ${value}`, 'Revenue']} />
          <Area 
            type="monotone" 
            dataKey="revenue" 
            stroke="#564FFD" 
            fill="#4f83fd" 
            fillOpacity={0.8} 
            name="Revenue"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}