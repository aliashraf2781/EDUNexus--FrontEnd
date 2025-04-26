import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

const data = [
  {
    name: 'Jan',
    earnings: 680,
  },
  {
    name: 'Feb',
    earnings: 920,
  },
  {
    name: 'Mar',
    earnings: 1100,
  },
  {
    name: 'Apr',
    earnings: 890,
  },
  {
    name: 'May',
    earnings: 1240,
  },
  {
    name: 'Jun',
    earnings: 1290,
  },
  {
    name: 'Jul',
    earnings: 1323,
  },
];

export default function EarningsChart() {

  const totalEarnings = data.reduce((sum, item) => sum + item.earnings, 0);
  
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md w-full">
      <div className="h-64 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data}
            barSize={18} 
            barGap={2} 
            barCategoryGap={4} 
          >
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
            />
            <Tooltip formatter={(value) => [`EGP ${value}`, 'Earnings']} />
            <Bar dataKey="earnings" fill="#2563eb" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center">
        <p className="text-gray-600 mb-1">Money Earned</p>
        <p className="text-3xl font-bold text-blue-700">EGP {totalEarnings.toLocaleString()}</p>
      </div>
    </div>
  );
}