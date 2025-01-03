// src/pages/Home/index.jsx
import { ProductCard } from "@/components/shared/ProductCard";

const Home = () => {
  // Sample products data - this would typically come from your Firebase store
  const sampleProducts = [
    {
      id: 1,
      name: "Seasonal Vegetables",
      price: 299,
      seasonStart: new Date("2024-05-01"),
      seasonEnd: new Date("2024-09-30"),
      growingMethod: "Organic",
      grower: "Bengt",
      imageUrl: "/api/placeholder/400/300", // Using placeholder for now
    },
    // Add more sample products as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Local Produce Subscriptions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
