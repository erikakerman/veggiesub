import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const FirebaseTest = () => {
  const [status, setStatus] = useState({
    auth: "Testing...",
    firestore: "Testing...",
    products: [],
  });

  useEffect(() => {
    // Test Auth
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setStatus((prev) => ({
        ...prev,
        auth: user ? "Connected (User authenticated)" : "Connected (No user)",
      }));
    });

    // Test Firestore
    const testFirestore = async () => {
      try {
        const db = getFirestore();
        const productsSnapshot = await getDocs(collection(db, "products"));
        const products = [];
        productsSnapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() });
        });
        setStatus((prev) => ({
          ...prev,
          firestore: "Connected",
          products,
        }));
      } catch (error) {
        setStatus((prev) => ({
          ...prev,
          firestore: `Error: ${error.message}`,
          products: [],
        }));
      }
    };

    testFirestore();
    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Firebase Connection Test</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert>
            <AlertDescription>
              <div className="space-y-2">
                <div>Authentication Status: {status.auth}</div>
                <div>Firestore Status: {status.firestore}</div>
                <div>Products Found: {status.products.length}</div>
              </div>
            </AlertDescription>
          </Alert>

          {status.products.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">
                Sample Product Data:
              </h3>
              <pre className="bg-gray-100 p-2 rounded">
                {JSON.stringify(status.products[0], null, 2)}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FirebaseTest;
