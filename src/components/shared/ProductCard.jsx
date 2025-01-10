import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState("single");
  const { addToCart, PRICING_TIERS } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
  };

  return (
    <Card className="flex flex-col">
      <CardContent className="flex-grow p-4">
        <img
          src={product.imageUrl || "/api/placeholder/400/300"}
          alt={product.name}
          className="mb-4 h-48 w-full rounded-lg object-cover"
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
        >
          Add Subscription
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
