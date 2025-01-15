import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/shared/ProductCard";
import SignIn from "../../pages/Auth/SignIn";
import { X } from "lucide-react";

function Browse() {
  const { products, loading } = useProducts();
  const [showLoginModal, setShowLoginModal] = useState(false);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="animate-pulse text-lg text-gray-600">
          Loading products...
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen">
        <header className="mt-8 mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Our Products
          </h1>
          <p className="text-base text-gray-600">
            Discover our carefully curated collection
          </p>
        </header>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="transform transition duration-200 hover:scale-102"
              >
                <ProductCard
                  product={product}
                  setShowLoginModal={setShowLoginModal}
                  className="h-full rounded-lg bg-white shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
            <div className="flex justify-end">
              <button
                onClick={() => setShowLoginModal(false)}
                className="rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <SignIn isModal={true} onClose={() => setShowLoginModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default Browse;
