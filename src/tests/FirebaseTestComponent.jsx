import { useState } from "react";
import { testProductSeeding } from "../tests/firebaseIntegration";
import { seedProducts } from "../lib/seedProducts";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const FirebaseTestComponent = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runTests = async () => {
    console.log("Starting Firebase integration tests...");
    setLoading(true);
    setError(null);
    try {
      // First seed test products
      const seededProducts = await seedProducts();
      console.log("Seeded products:", seededProducts);

      // Wait for Firestore to update
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Then test the seeding results
      const seedResults = await testProductSeeding();
      setResults({ seeding: seedResults });
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Firebase Integration Tests</h2>

      <button
        onClick={runTests}
        disabled={loading}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {loading ? "Testing..." : "Test Product Seeding"}
      </button>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {results?.seeding && (
        <div
          className={`p-4 rounded ${
            results.seeding.success ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <h3 className="font-bold">Seeding Results</h3>
          {results.seeding.success ? (
            <div>
              <p>Products Count: {results.seeding.productsCount}</p>
              {results.seeding.products && (
                <div className="mt-2">
                  <p className="font-semibold">Sample Products:</p>
                  <pre className="bg-gray-100 p-2 rounded mt-1 text-sm overflow-auto">
                    {JSON.stringify(results.seeding.products, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ) : (
            <p>{results.seeding.message}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FirebaseTestComponent;
