import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'Jan',
    rating: 3.6,
  },
  {
    month: 'Feb',
    rating: 3.8,
  },
  {
    month: 'Mar',
    rating: 4.2,
  },
  {
    month: 'Apr',
    rating: 4.0,
  },
  {
    month: 'May',
    rating: 4.4,
  },
  {
    month: 'Jun',
    rating: 4.7,
  },
  {
    month: 'Jul',
    rating: 4.5,
  },
];

export default function RatingsChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md ">
      <h2 className="text-xl font-bold mb-4">Customer Ratings Trend</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e0e0e0' }}
              tickLine={false}
            />
            <YAxis 
              domain={[3, 5]}
              axisLine={{ stroke: '#e0e0e0' }}
              tickLine={false}
              tickCount={5}
            />
            <Tooltip 
              formatter={(value) => [`${value}`, 'Rating']}
              contentStyle={{ borderRadius: '4px' }}
            />
            <Area 
              type="monotone" 
              dataKey="rating" 
              stroke="#FD8E1F" 
              fill="#FFF2E5" 
              strokeWidth={2}
              dot={{ stroke: '#FD8E1F', strokeWidth: 2, r: 4, fill: 'white' }}
              activeDot={{ r: 6, stroke: '#FD8E1F', strokeWidth: 2, fill: 'white' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}