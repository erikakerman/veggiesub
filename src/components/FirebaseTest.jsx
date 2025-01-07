// src/components/FirebaseTest.jsx
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/config";
import { Button } from "@/components/ui/button";

const FirebaseTest = () => {
  const [testResult, setTestResult] = useState("");

  const testFirestore = async () => {
    try {
      setTestResult("Testing connection...");

      // Try to get the products collection
      const querySnapshot = await getDocs(collection(db, "products"));

      // Log the number of documents found
      const count = querySnapshot.size;
      setTestResult(
        `Connection successful! Found ${count} documents in products collection.`
      );

      // Log each document for debugging
      querySnapshot.forEach((doc) => {
        console.log("Document found:", doc.id, doc.data());
      });
    } catch (error) {
      console.error("Firestore test error:", error);
      setTestResult("Error: " + error.message);
    }
  };

  return (
    <div className="p-4">
      <Button onClick={testFirestore} className="mb-2">
        Test Firestore Connection
      </Button>
      <p className="mt-2">{testResult}</p>
    </div>
  );
};

export default FirebaseTest;
