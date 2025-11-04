import React, { useState } from "react";

const HR = () => {
  const [employees, setEmployees] = useState<{ name: string; position: string; department: string }[]>([]);
  const [formData, setFormData] = useState({ name: "", position: "", department: "" });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.position || !formData.department) return;

    if (editingIndex !== null) {
      const updated = [...employees];
      updated[editingIndex] = formData;
      setEmployees(updated);
      setEditingIndex(null);
    } else {
      setEmployees([...employees, formData]);
    }

    setFormData({ name: "", position: "", department: "" });
  };

  const handleEdit = (index: number) => {
    const emp = employees[index];
    setFormData(emp);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Human Resources</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded focus:ring focus:ring-green-200"
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded focus:ring focus:ring-green-200"
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded focus:ring focus:ring-green-200"
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition sm:col-span-3"
        >
          {editingIndex !== null ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      {/* Display Table */}
      {employees.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-3 border-b text-gray-600">Name</th>
                <th className="text-left px-6 py-3 border-b text-gray-600">Position</th>
                <th className="text-left px-6 py-3 border-b text-gray-600">Department</th>
                <th className="text-center px-6 py-3 border-b text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition border-b last:border-none">
                  <td className="px-6 py-3 text-gray-800">{emp.name}</td>
                  <td className="px-6 py-3 text-gray-800">{emp.position}</td>
                  <td className="px-6 py-3 text-gray-800">{emp.department}</td>
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
        <p className="text-gray-500">No employee records yet.</p>
      )}
    </div>
  );
};

export default HR;
