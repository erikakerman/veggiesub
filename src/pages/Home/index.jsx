// src/pages/Home/index.jsx
import { ProductCard } from "@/components/shared/ProductCard";
import { addTestProducts } from "../../lib/addTestProducts";
import { Button } from "@/components/ui/button";
import { useProducts } from "../../hooks/useProducts";
import FirebaseTest from "../../components/FirebaseTest";
import { useState } from "react";

const Home = () => {
  const { products, loading, error } = useProducts();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddTestProducts = async () => {
    try {
      setIsAdding(true);
      await addTestProducts();
      alert("Test products added successfully!");
    } catch (error) {
      console.error("Error adding test products:", error);
      alert("Failed to add test products: " + error.message);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Firebase Test Component */}
      <FirebaseTest />

      {/* Test products button */}
      <Button
        onClick={handleAddTestProducts}
        className="mb-4"
        disabled={isAdding}
      >
        {isAdding ? "Adding..." : "Add Test Products"}
      </Button>

      <h1 className="text-2xl font-bold mb-6">Local Produce Subscriptions</h1>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Home;
