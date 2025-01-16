// src/lib/addTestProducts.js
import { db } from './config';
import { collection, addDoc } from 'firebase/firestore';

const TEST_PRODUCTS = [
    {
        name: "Organic Carrots",
        description: "Fresh organic carrots from local farms",
        price: 35,
        harvestPeriod: "Summer",
        growingMethod: "Organic",
        grower: "Bengt",
        imageUrl: "/api/placeholder/400/300"
    },
    {
        name: "Regular Potatoes",
        description: "Classic potatoes for all your cooking needs",
        price: 25,
        harvestPeriod: "Autumn",
        growingMethod: "Non-organic",
        grower: "Stina",
        imageUrl: "/api/placeholder/400/300"
    }
];

export const seedTestProducts = async () => {
    const productsRef = collection(db, 'products');
    const results = [];

    for (const product of TEST_PRODUCTS) {
        try {
            const docRef = await addDoc(productsRef, {
                ...product,
                created: new Date()
            });
            results.push({ id: docRef.id, ...product });
        } catch (error) {
            console.error('Error adding product:', error);
        }
    }

    return results;
};