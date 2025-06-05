import React from 'react';

const Reports = () => {
  const reportData = [
    { month: "January", sales: 50000, profit: 10000, loss: 2000 },
    { month: "February", sales: 60000, profit: 12000, loss: 1500 },
    { month: "March", sales: 40000, profit: 8000, loss: 3000 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Sales Reports</h2>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Month</th>
              <th className="px-4 py-2 text-left">Total Sales (₹)</th>
              <th className="px-4 py-2 text-left">Profit (₹)</th>
              <th className="px-4 py-2 text-left">Loss (₹)</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((report, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{report.month}</td>
                <td className="px-4 py-2">{report.sales.toLocaleString()}</td>
                <td className="px-4 py-2 text-emerald-600">{report.profit.toLocaleString()}</td>
                <td className="px-4 py-2 text-red-600">{report.loss.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
