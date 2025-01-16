// src/tests/firebaseIntegration.js
import { db } from '../lib/config';  // Fixed import path
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc
} from 'firebase/firestore';

export const testFirebaseConnection = async () => {
    try {
        const testCollection = collection(db, 'test_connection');
        const testDoc = await addDoc(testCollection, {
            timestamp: new Date(),
            test: true
        });

        await deleteDoc(testDoc);

        return {
            success: true,
            message: 'Firebase connection successful'
        };
    } catch (error) {
        return {
            success: false,
            message: `Firebase connection failed: ${error.message}`
        };
    }
};

export const testProductSeeding = async () => {
    console.log('Starting product seeding test...');
    try {
        const productsRef = collection(db, 'products');
        const existingProducts = await getDocs(productsRef);
        console.log('Existing products found:', existingProducts.docs.length);

        const products = existingProducts.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return {
            success: true,
            productsCount: products.length,
            products: products
        };
    } catch (error) {
        return {
            success: false,
            message: `Product seeding test failed: ${error.message}`
        };
    }
};