import React, { useEffect, useState } from "react";

export default function Reports() {
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("maseru_entries") || "[]");
    setEntries(stored);
  }, []);

  return (
    <div className="module-panel">
      <h2>📋 Production Reports</h2>
      {entries.length === 0 ? (
        <p>No reports found. Create new entries to see them here.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Department</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((e, i) => (
              <tr key={i}>
                <td>{e.product}</td>
                <td>{e.quantity}</td>
                <td>{e.department}</td>
                <td>{e.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
