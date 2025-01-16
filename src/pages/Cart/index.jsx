import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
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

  if (!user) {
    navigate("/signin");
    return null;
  }

  return (
    <div className="min-h-screen bg-cream/50">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-forest">Your Cart</h1>

        {cart.items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <p className="text-moss mb-6">Your cart is empty</p>
            <Button variant="outline" onClick={() => navigate("/browse")}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {cart.items.map((item, index) => (
                <div
                  key={item.productId}
                  className={`p-6 ${
                    index !== cart.items.length - 1
                      ? "border-b border-sage/10"
                      : ""
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-forest">
                          {item.name}
                        </h3>
                        <p className="text-sm text-moss">
                          Grown by {item.grower}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-medium text-forest">
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
                        <p className="text-sm text-moss">
                          Base: {item.price} kr/week
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Select
                        defaultValue={item.size}
                        onValueChange={(value) =>
                          updateCartItem(item.productId, value)
                        }
                      >
                        <SelectTrigger className="w-[140px] bg-white border-sage/20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-sage/20">
                          <SelectItem
                            value="single"
                            className="hover:bg-sage/5"
                          >
                            Single (1x)
                          </SelectItem>
                          <SelectItem
                            value="double"
                            className="hover:bg-sage/5"
                          >
                            Double (1.8x)
                          </SelectItem>
                          <SelectItem
                            value="family"
                            className="hover:bg-sage/5"
                          >
                            Family (2.5x)
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <Button
                        variant="ghost"
                        className="text-sm text-moss hover:text-accent"
                        onClick={() => removeFromCart(item.productId)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-baseline mb-6">
                <div>
                  <h3 className="text-lg font-medium text-forest">
                    Total Weekly Cost
                  </h3>
                  <p className="text-sm text-moss">
                    {cart.items.length} subscription(s)
                  </p>
                </div>
                <p className="text-2xl font-bold text-forest">
                  {calculateTotal().toFixed(1)} kr/week
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="w-1/2 border-sage/20 hover:bg-sage/5"
                  onClick={() => navigate("/browse")}
                >
                  Add More
                </Button>
                <Button
                  className="w-1/2 bg-forest text-cream hover:bg-forest/90"
                  onClick={() => navigate("/checkout")}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
