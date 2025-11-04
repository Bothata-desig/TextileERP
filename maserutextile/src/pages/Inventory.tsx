import React, { useState } from "react";

const Inventory = () => {
  const [items, setItems] = useState<{ name: string; quantity: number; category: string }[]>([]);
  const [formData, setFormData] = useState({ name: "", quantity: "", category: "" });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.quantity || !formData.category) return;

    if (editingIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editingIndex] = { ...formData, quantity: Number(formData.quantity) };
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
      setItems([...items, { ...formData, quantity: Number(formData.quantity) }]);
    }

    setFormData({ name: "", quantity: "", category: "" });
  };

  const handleEdit = (index: number) => {
    const item = items[index];
    setFormData({
      name: item.name,
      quantity: item.quantity.toString(),
      category: item.category,
    });
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Inventory Management</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded focus:ring focus:ring-blue-200"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded focus:ring focus:ring-blue-200"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded focus:ring focus:ring-blue-200"
        >
          <option value="">Select Category</option>
          <option value="Raw Material">Raw Material</option>
          <option value="Finished Product">Finished Product</option>
          <option value="Packaging">Packaging</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition sm:col-span-3"
        >
          {editingIndex !== null ? "Update Item" : "Add Item"}
        </button>
      </form>

      {/* Display Table */}
      {items.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-3 border-b text-gray-600">Item Name</th>
                <th className="text-left px-6 py-3 border-b text-gray-600">Quantity</th>
                <th className="text-left px-6 py-3 border-b text-gray-600">Category</th>
                <th className="text-center px-6 py-3 border-b text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition border-b last:border-none"
                >
                  <td className="px-6 py-3 text-gray-800">{item.name}</td>
                  <td className="px-6 py-3 text-gray-800">{item.quantity}</td>
                  <td className="px-6 py-3 text-gray-800">{item.category}</td>
                  <td className="px-6 py-3 flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(idx)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(idx)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No inventory items recorded yet.</p>
      )}
    </div>
  );
};

export default Inventory;