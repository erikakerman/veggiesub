import { seedProducts } from "../lib/seedProducts";
import { Button } from "@/components/ui/button";

export function ProductSeeder() {
  const handleSeed = async () => {
    try {
      await seedProducts();
      alert("Products seeded successfully!");
    } catch (error) {
      console.error("Error seeding products:", error);
      alert("Error seeding products. Check console for details.");
    }
  };

  return (
    <Button
      onClick={handleSeed}
      className="bg-sheen hover:bg-sheen/90 text-white"
    >
      Seed Products
    </Button>
  );
}
