import React from 'react';

function Dashboard({ products }) {
  const totalProducts = products.length;
  const outOfStock = products.filter(p => !p.inStock).length;
  const totalValue = products.reduce((sum, p) => sum + Number(p.price), 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="p-4 bg-blue-100 rounded shadow hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-blue-800">Total Products</h3>
        <p className="text-2xl font-bold text-blue-600">{totalProducts}</p>
      </div>
      <div className="p-4 bg-red-100 rounded shadow hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-red-800">Out of Stock</h3>
        <p className="text-2xl font-bold text-red-600">{outOfStock}</p>
      </div>
      <div className="p-4 bg-green-100 rounded shadow hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-green-800">Total Value</h3>
        <p className="text-2xl font-bold text-green-600">${totalValue}</p>
      </div>
    </div>
  );
}

export default Dashboard;
