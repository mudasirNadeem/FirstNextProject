import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen w-[100%]  p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Total Customers</h2>
          <p className="text-3xl font-bold text-blue-600">120</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Sales Today</h2>
          <p className="text-3xl font-bold text-green-600">$2,450</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Active Users</h2>
          <p className="text-3xl font-bold text-purple-600">35</p>
        </div>
      </div>
    </div>
  );
}
