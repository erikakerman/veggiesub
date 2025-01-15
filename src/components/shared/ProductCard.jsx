import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Filename mapping for special cases
const IMAGE_MAPPING = {
  "Brussels Sprouts": "brussel-sprouts",
  "Organic Carrots": "carrot",
  "Regular Potatoes": "potatoes",
};

function ProductCard({ product, setShowLoginModal }) {
  const [selectedSize, setSelectedSize] = useState("single");
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart, PRICING_TIERS } = useCart();
  const { user } = useAuth();

  // Use mapping for special cases, otherwise convert name to filename
  const imageBase =
    IMAGE_MAPPING[product.name] ||
    product.name.toLowerCase().replace(/\s+/g, "-");
  const imagePath = new URL(`../../assets/${imageBase}.jpg`, import.meta.url)
    .href;

  const handleAddToCart = async () => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    setIsLoading(true);
    try {
      await addToCart(product, selectedSize);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="flex flex-col">
      <CardContent className="flex-grow p-4">
        <img
          src={imagePath}
          alt={product.name}
          className="mb-4 h-48 w-full rounded-lg object-cover"
          onError={(e) => {
            console.error("Image load error:", {
              name: product.name,
              path: imagePath,
              mappedName: imageBase,
            });
            e.target.src = "/api/placeholder/400/300";
          }}
        />

        <h2 className="mb-2 text-xl font-semibold text-shadow">
          {product.name}
        </h2>

        <div className="mb-2 text-sm">
          <p>Grower: {product.grower}</p>
          <p>Method: {product.growingMethod}</p>
          <p>Season: {product.harvestPeriod}</p>
        </div>

        <p className="text-lg font-semibold">
          {(product.price * PRICING_TIERS[selectedSize]).toFixed(2)} kr/week
        </p>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 p-4">
        <Select value={selectedSize} onValueChange={setSelectedSize}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="single">Single</SelectItem>
            <SelectItem value="double">Double (10% off)</SelectItem>
            <SelectItem value="family">Family (17% off)</SelectItem>
          </SelectContent>
        </Select>

        <Button
          onClick={handleAddToCart}
          className="w-full bg-sheen hover:bg-sheen/90"
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Add Subscription"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
