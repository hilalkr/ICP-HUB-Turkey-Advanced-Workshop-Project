import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !description) {
      alert('Lütfen tüm alanları doldurun');
      return;
    }

    onAddProduct({
      id: 0, // Backend'de yeni ID atanacak
      name,
      price: Number(price),
      description,
      inStock: true // Varsayılan olarak stokta olarak işaretliyoruz
    });

    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="w-full h-12 px-4 rounded-lg border border-gray-200 
                     focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                     transition-all duration-200"
        />
      </div>
      <div>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price ($)"
          className="w-full h-12 px-4 rounded-lg border border-gray-200 
                     focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                     transition-all duration-200"
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows="4"
          className="w-full p-4 rounded-lg border border-gray-200 
                     focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                     transition-all duration-200"
        ></textarea>
      </div>
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg 
                   hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Product
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
