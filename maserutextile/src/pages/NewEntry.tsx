import React, { useState } from "react";

export default function NewEntry() {
  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    department: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entries = JSON.parse(localStorage.getItem("maseru_entries") || "[]");
    entries.push(formData);
    localStorage.setItem("maseru_entries", JSON.stringify(entries));
    alert("✅ New entry saved!");
    setFormData({ product: "", quantity: "", department: "", date: "" });
  };

  return (
    <div className="module-panel">
      <h2>New Production Entry</h2>
      <form onSubmit={handleSubmit} className="entry-form">
        <label>Product:</label>
        <input
          type="text"
          value={formData.product}
          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
        />

        <label>Quantity:</label>
        <input
          type="number"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
        />

        <label>Department:</label>
        <select
          value={formData.department}
          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
        >
          <option value="">Select</option>
          <option value="production">Production</option>
          <option value="inventory">Inventory</option>
          <option value="sales">Sales</option>
        </select>

        <label>Date:</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />

        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
}
