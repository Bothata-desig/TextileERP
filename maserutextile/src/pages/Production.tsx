import React, { useState } from "react";

export default function Production() {
  const [productions, setProductions] = useState([
    { id: 1, orderId: "ORD-1023", product: "Men’s Cotton Shirt", progress: "85%", supervisor: "Lerato M.", status: "In Progress" },
    { id: 2, orderId: "ORD-1024", product: "Ladies’ Wool Sweater", progress: "100%", supervisor: "Tebello K.", status: "Completed" },
    { id: 3, orderId: "ORD-1025", product: "Children’s T-Shirt", progress: "45%", supervisor: "Nthabiseng R.", status: "Ongoing" },
  ]);

  const [newProduction, setNewProduction] = useState({
    orderId: "",
    product: "",
    progress: "",
    supervisor: "",
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewProduction({ ...newProduction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduction.orderId || !newProduction.product) return;
    setProductions([...productions, { id: productions.length + 1, ...newProduction }]);
    setNewProduction({ orderId: "", product: "", progress: "", supervisor: "", status: "" });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Production Overview</h1>

      {/* Production Table */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Current Production Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Order ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Product</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Progress</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Supervisor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {productions.map((prod) => (
                <tr key={prod.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{prod.orderId}</td>
                  <td className="border border-gray-300 px-4 py-2">{prod.product}</td>
                  <td className="border border-gray-300 px-4 py-2">{prod.progress}</td>
                  <td className="border border-gray-300 px-4 py-2">{prod.supervisor}</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-700 font-medium">{prod.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Production Entry */}
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 max-w-2xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">Add New Production Record</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="orderId"
              placeholder="Order ID"
              value={newProduction.orderId}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
            />
            <input
              type="text"
              name="product"
              placeholder="Product Name"
              value={newProduction.product}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
            />
            <input
              type="text"
              name="progress"
              placeholder="Progress (%)"
              value={newProduction.progress}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
            />
            <input
              type="text"
              name="supervisor"
              placeholder="Supervisor Name"
              value={newProduction.supervisor}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
            />
            <select
              name="status"
              value={newProduction.status}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
            >
              <option value="">Select Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              ➕ Add Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
