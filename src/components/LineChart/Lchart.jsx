import React from 'react';
import { LineChart, Line } from 'recharts';

const Lchart = () => {
  const students = [
    { id: 1, name: 'Alice Johnson', marks: 85 },
    { id: 2, name: 'Bob Smith', marks: 72 },
    { id: 3, name: 'Charlie Davis', marks: 90 },
    { id: 4, name: 'Diana Evans', marks: 66 },
    { id: 5, name: 'Ethan Brown', marks: 88 },
    { id: 6, name: 'Fiona Wilson', marks: 76 },
    { id: 7, name: 'George Harris', marks: 94 },
    { id: 8, name: 'Hannah Clark', marks: 69 },
    { id: 9, name: 'Ivy Lewis', marks: 82 },
    { id: 10, name: 'Jack Turner', marks: 78 },
  ];

  return (
    <div>
      <LineChart width={400} height={400} data={students}>
        <Line type="monotone" dataKey="marks" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Lchart;
