import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Header */}
      <header className="pb-4 border-b border-gray-300 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold text-gray-800">Maseru Textile Dashboard</h1>
        <p className="text-gray-600 mt-1 max-w-xl">
          Overview of factory operations, workforce, and production progress.
        </p>
        <div className="flex gap-3 mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            ➕ Add Record
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            📊 Generate Report
          </button>
        </div>
      </header>

      {/* KPI Cards with separators */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-gray-300 divide-y divide-gray-300 lg:divide-y-0 lg:divide-x">
        {[
          { title: "Total Orders", value: "120", info: "+12% from last month", color: "text-green-600" },
          { title: "Inventory Stock", value: "2,430 units", info: "Stable", color: "text-yellow-600" },
          { title: "Active Employees", value: "45", info: "+3 this month", color: "text-blue-600" },
          { title: "Revenue", value: "M23,000", info: "+5% growth", color: "text-green-600" },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white p-5 flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-sm font-medium text-gray-600">{card.title}</h2>
            <p className="text-3xl font-bold mt-2 text-gray-800">{card.value}</p>
            <p className={`text-sm ${card.color}`}>{card.info}</p>
          </div>
        ))}
      </section>

      {/* Charts Row */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6 border-b border-gray-300">
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2 w-full">
            Production Output
          </h3>
          <div className="h-48 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg w-full">
            📈 Chart Placeholder
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2 w-full">
            Inventory Levels
          </h3>
          <div className="h-48 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg w-full">
            📊 Chart Placeholder
          </div>
        </div>
      </section>

      {/* Production + Workforce */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6 border-b border-gray-300">
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2 w-full">
            Production Status
          </h3>
          <ul className="space-y-2 text-gray-700 divide-y divide-gray-200 w-full">
            <li className="py-1">🧵 Cotton Usage: <strong>78%</strong></li>
            <li className="py-1">🧶 Wool Usage: <strong>52%</strong></li>
            <li className="py-1">👕 Orders in Progress: <strong>36</strong></li>
            <li className="py-1">🏭 Completed Batches: <strong>84</strong></li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2 w-full">
            Workforce Performance
          </h3>
          <ul className="space-y-2 text-gray-700 divide-y divide-gray-200 w-full">
            <li className="py-1">🧍 Workers on Duty: <strong>38</strong></li>
            <li className="py-1">📦 Avg Output/Worker: <strong>56 units/day</strong></li>
            <li className="py-1">📈 Efficiency: <strong>91%</strong></li>
          </ul>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="bg-white shadow-md rounded-2xl p-6 divide-y divide-gray-200 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2 w-full">
          Recent Activity
        </h3>
        <ul className="w-full">
          <li className="py-2">👕 Order #1234 — <span className="text-green-600">Completed</span></li>
          <li className="py-2">🧶 Wool batch #77 — <span className="text-blue-600">In progress</span></li>
          <li className="py-2">📦 New material stock received — <span className="text-gray-700">200kg Cotton</span></li>
          <li className="py-2">🧍 Shift B — <span className="text-yellow-600">Pending Attendance</span></li>
        </ul>
      </section>
    </div>
  );
}
