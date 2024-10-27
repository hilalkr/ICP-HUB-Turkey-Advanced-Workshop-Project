import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductUpdate from './components/ProductUpdate';
import { createActor } from '../../declarations/shopping_backend';
import { HttpAgent } from '@dfinity/agent';
import Dashboard from './components/Dashboard';

const canisterId = import.meta.env.VITE_CANISTER_ID;
const host = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:4943' : 'https://ic0.app';
const agent = new HttpAgent({ host });

if (process.env.NODE_ENV === 'development') {
  agent.fetchRootKey().catch(err => {
    console.warn('Unable to fetch root key. Check to ensure that your local replica is running');
    console.error(err);
  });
}

const backend = createActor(canisterId, { agent });

function App() {
  const [products, setProducts] = useState([]);
  const [updateProductId, setUpdateProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const fetchProducts = async () => {
    try {
      const result = await backend.getAllProducts();
      setProducts(result);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (productData) => {
    try {
      await backend.createProduct({
        id: 0,
        name: productData.name,
        price: productData.price,
        description: productData.description,
        inStock: true
      });
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    try {
      console.log("Updating product:", id, updatedProduct); // Debug için
      const result = await backend.updateProduct(
        BigInt(id), // ID'yi BigInt'e çevirin
        {
          id: BigInt(id),
          name: updatedProduct.name,
          price: BigInt(updatedProduct.price),
          description: updatedProduct.description,
          inStock: updatedProduct.inStock
        }
      );
      console.log("Update result:", result); // Debug için
      setShowUpdateModal(false);
      await fetchProducts(); // Ürünleri yeniden yükle
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update product: " + error.message);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await backend.deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Product Management</h1>
        
        <div className="mb-8">
          <Dashboard products={products} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <ProductForm onAddProduct={handleAddProduct} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <ProductList
            products={products}
            onUpdateProduct={(product) => {
              setSelectedProduct(product);
              setShowUpdateModal(true);
            }}
            onDeleteProduct={handleDeleteProduct}
          />
        </div>

        {showUpdateModal && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <ProductUpdate
                product={selectedProduct}
                onUpdateProduct={handleUpdateProduct}
                onCancel={() => setShowUpdateModal(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
