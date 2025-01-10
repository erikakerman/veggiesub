import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../lib/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuth } from "./AuthContext";

const PRICING_TIERS = {
  single: 1,
  double: 1.8,
  family: 2.5,
};

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({ items: [] });
  const { user } = useAuth();

  // Fetch cart from Firebase
  useEffect(() => {
    if (!user) {
      setCart({ items: [] });
      return;
    }

    const fetchCart = async () => {
      try {
        const cartDoc = await getDoc(doc(db, "carts", user.uid));
        setCart(cartDoc.exists() ? cartDoc.data() : { items: [] });
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };

    fetchCart();
  }, [user]);

  // Update Firebase whenever cart changes
  const updateFirebase = async (items) => {
    if (!user) return;

    try {
      await setDoc(doc(db, "carts", user.uid), {
        items,
        lastUpdated: new Date(),
      });
    } catch (err) {
      console.error("Error updating cart:", err);
    }
  };

  const addToCart = async (product, size = "single") => {
    if (!user) return;

    const newItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      size,
      imageUrl: product.imageUrl,
      grower: product.grower,
    };

    const newItems = [...cart.items, newItem];
    setCart({ items: newItems });
    await updateFirebase(newItems);
  };

  const removeFromCart = async (productId) => {
    const newItems = cart.items.filter((item) => item.productId !== productId);
    setCart({ items: newItems });
    await updateFirebase(newItems);
  };

  const calculateTotal = () =>
    cart.items.reduce(
      (total, item) => total + item.price * PRICING_TIERS[item.size],
      0
    );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        calculateTotal,
        PRICING_TIERS,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
