// src/context/ProductContext.jsx
import { createContext, useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore"; // Change this import
import { db } from "../lib/config";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Set up real-time listener
    const productsCollection = collection(db, "products");

    const unsubscribe = onSnapshot(
      productsCollection,
      (snapshot) => {
        // Success handler
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          // Convert Firestore Timestamps to JavaScript Dates
          seasonStart: doc.data().seasonStart?.toDate(),
          seasonEnd: doc.data().seasonEnd?.toDate(),
        }));

        setProducts(productsList);
        setLoading(false);
        setError(null);
      },
      (err) => {
        // Error handler
        console.error("Error fetching products:", err);
        setError("Failed to fetch products");
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Empty dependency array is fine here as we want to set up the listener once

  const value = {
    products,
    loading,
    error,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export { ProductContext };
