import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/shared/ProductCard";

function Browse() {
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-shadow">Our Products</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Browse;
