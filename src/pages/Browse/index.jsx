import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/shared/ProductCard";
import SignIn from "../../pages/Auth/SignIn";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Browse() {
  const { products, loading } = useProducts();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [sortBy, setSortBy] = useState("none");

  const sortProducts = (products) => {
    if (sortBy === "none") return products;

    return [...products].sort((a, b) => {
      switch (sortBy) {
        case "grower":
          return a.grower.localeCompare(b.grower);
        case "method":
          return a.growingMethod.localeCompare(b.growingMethod);
        case "season":
          return a.harvestPeriod.localeCompare(b.harvestPeriod);
        default:
          return 0;
      }
    });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="animate-pulse text-lg text-gray-600">
          Loading products...
        </div>
      </div>
    );
  }

  const sortedProducts = sortProducts(products);

  return (
    <>
      <div className="min-h-screen">
        <header className="mt-8 mb-8 px-4 container mx-auto">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Our Products
          </h1>
        </header>

        <div className="container mx-auto px-4">
          {/* Sorting Controls */}
          <div className="mb-6 flex items-center justify-end">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">
                Sort by:
              </span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select sort criteria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="grower">Grower Name</SelectItem>
                  <SelectItem value="method">Growing Method</SelectItem>
                  <SelectItem value="season">Harvest Season</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {sortedProducts.map((product) => (
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
