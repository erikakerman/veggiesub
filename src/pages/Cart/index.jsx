import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cart, removeFromCart, updateCartItem, calculateTotal } = useCart();

  // Redirect if not logged in
  if (!user) {
    navigate("/signin");
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-[#2D3A1B]">Your Cart</h1>

      {cart.items.length === 0 ? (
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <p className="text-center text-gray-500">Your cart is empty</p>
            <Button
              variant="outline"
              className="mt-4 mx-auto block"
              onClick={() => navigate("/browse")}
            >
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {/* Cart Items */}
          {cart.items.map((item) => (
            <Card key={item.productId} className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-[#2D3A1B]">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">Grower: {item.grower}</p>
                      <p className="text-gray-600">
                        Base Price: {item.price} kr/week
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right flex flex-col items-end gap-2">
                      <p className="text-xl font-semibold text-[#2D3A1B]">
                        {(
                          item.price *
                          (item.size === "double"
                            ? 1.8
                            : item.size === "family"
                            ? 2.5
                            : 1)
                        ).toFixed(1)}{" "}
                        kr/week
                      </p>
                      <Select
                        defaultValue={item.size}
                        onValueChange={(value) => {
                          if (updateCartItem) {
                            updateCartItem(item.productId, value);
                          }
                        }}
                      >
                        <SelectTrigger className="w-[140px] bg-white border-gray-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="single">Single (1x)</SelectItem>
                          <SelectItem value="double">Double (1.8x)</SelectItem>
                          <SelectItem value="family">Family (2.5x)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-gray-600 hover:text-red-600"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Cart Summary */}
          <Card className="bg-white shadow-sm mt-6">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-[#2D3A1B]">
                    Total
                  </h3>
                  <p className="text-gray-600">{cart.items.length} item(s)</p>
                </div>
                <p className="text-2xl font-bold text-[#2D3A1B]">
                  {calculateTotal().toFixed(1)} kr/week
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-6 flex justify-between border-t">
              <Button variant="outline" onClick={() => navigate("/browse")}>
                Continue Shopping
              </Button>
              <Button
                className="bg-[#2D3A1B] hover:bg-[#2D3A1B]/90"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Cart;
