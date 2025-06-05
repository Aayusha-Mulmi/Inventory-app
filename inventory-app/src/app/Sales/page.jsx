import React from 'react';


const Sales = () => {
  const salesData = [
    { id: 1, product: "Laptop", quantity: 5, cp: 40000, sp: 50000, profit: 50000 },
    { id: 2, product: "Phone", quantity: 10, cp: 15000, sp: 20000, profit: 50000 },
    { id: 3, product: "Tablet", quantity: 3, cp: 20000, sp: 22000, profit: 6000 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Sales</h2>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Cost Price (₹)</th>
              <th className="px-4 py-2 text-left">Selling Price (₹)</th>
              <th className="px-4 py-2 text-left">Profit/Loss (₹)</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale) => (
              <tr key={sale.id} className="border-t">
                <td className="px-4 py-2">{sale.product}</td>
                <td className="px-4 py-2">{sale.quantity}</td>
                <td className="px-4 py-2">{sale.cp.toLocaleString()}</td>
                <td className="px-4 py-2">{sale.sp.toLocaleString()}</td>
                <td className={`px-4 py-2 ${sale.profit >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  {sale.profit.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
