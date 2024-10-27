import React from 'react';

function ProductList({ products, onDeleteProduct, onUpdateProduct }) {
  return (
    <div className="space-y-6">
      {products.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
          <p className="text-gray-500 text-lg font-medium">No products added yet</p>
          <p className="text-gray-400 mt-2">Add your first product using the form above</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-md border border-gray-200 
                       hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ${Number(product.price).toFixed(2)}
                  </p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                    ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <div className="flex justify-end space-x-3 mt-4">
                  <button
                    onClick={() => onUpdateProduct(product)}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg 
                             hover:bg-blue-200 transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => onDeleteProduct(product.id)}
                    className="px-4 py-2 bg-red-100 text-red-700 rounded-lg 
                             hover:bg-red-200 transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
