// src/lib/addTestProducts.js
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './config';

// Create a single test product for testing
const testProduct = {
    name: "Test Product",
    description: "This is a test product",
    price: 199,
    seasonStart: new Date(), // Current date
    seasonEnd: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days from now
    growingMethod: "Organic",
    grower: "Bengt",
    imageUrl: "/test.jpg"
};

export const addTestProducts = async () => {
    try {
        // Log the database reference to verify we're connected to the right database
        console.log('Database reference:', db);

        // Create a reference to the 'products' collection
        const productsRef = collection(db, 'products');
        console.log('Collection reference:', productsRef);

        // Convert dates to Firestore Timestamps
        const productToAdd = {
            ...testProduct,
            seasonStart: Timestamp.fromDate(testProduct.seasonStart),
            seasonEnd: Timestamp.fromDate(testProduct.seasonEnd),
            created: Timestamp.now()
        };

        // Add the document and get the reference
        const docRef = await addDoc(productsRef, productToAdd);
        console.log('Document written with ID:', docRef.id);
        console.log('Full document path:', docRef.path);

        // Alert success with the document path
        alert(`Product added successfully!\nDocument ID: ${docRef.id}\nPath: ${docRef.path}`);

        return docRef.id;
    } catch (error) {
        console.error('Error adding product:', error);
        alert('Error adding product: ' + error.message);
        throw error;
    }
};