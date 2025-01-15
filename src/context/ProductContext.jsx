import { createContext, useState, useEffect, useContext } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../lib/config";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Set up real-time listener for products
    const unsubscribe = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products");
        setLoading(false);
      }
    );

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within ProductProvider");
  }
  return context;
};

export { ProductContext };
