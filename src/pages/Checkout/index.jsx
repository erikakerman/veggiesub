import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cart, calculateTotal } = useCart();

  // Redirect if not logged in
  if (!user) {
    navigate("/signin");
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would handle payment processing
    alert("This is a demo checkout page. No actual payment will be processed.");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-[#2D3A1B]">Checkout</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Order Summary */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#2D3A1B] mb-4">
            Order Summary
          </h2>
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6 space-y-4">
              {cart.items.map((item) => (
                <div key={item.productId} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                  </div>
                  <p className="font-medium">
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
                </div>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-bold">
                  <p>Total</p>
                  <p>{calculateTotal().toFixed(1)} kr/week</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Checkout Form */}
        <div>
          <h2 className="text-xl font-semibold text-[#2D3A1B] mb-4">
            Payment Details
          </h2>
          <Card className="bg-white shadow-sm">
            <form onSubmit={handleSubmit}>
              <CardContent className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-2 border rounded-md"
                    disabled
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full p-2 border rounded-md"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full p-2 border rounded-md"
                      disabled
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    placeholder="J. Smith"
                    className="w-full p-2 border rounded-md"
                    disabled
                  />
                </div>
              </CardContent>
              <CardFooter className="p-6 border-t">
                <div className="w-full space-y-4">
                  <Button
                    type="submit"
                    className="w-full bg-[#2D3A1B] hover:bg-[#2D3A1B]/90"
                  >
                    Place Order
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate("/cart")}
                  >
                    Back to Cart
                  </Button>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
