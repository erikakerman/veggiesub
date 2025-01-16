import { db } from './config';
import { collection, addDoc } from 'firebase/firestore';

const GROWERS = ['Bengt', 'Stina', 'Hamid', 'Joy'];
const getRandomGrower = () => GROWERS[Math.floor(Math.random() * GROWERS.length)];

const TEST_PRODUCTS = [
    {
        name: "Apple",
        description: "Fresh, crisp apples from local orchards",
        price: 35,
        harvestPeriod: "Autumn",
        growingMethod: "Organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/apple.jpg"
    },
    {
        name: "Beetroot",
        description: "Rich, earthy beetroots perfect for roasting",
        price: 25,
        harvestPeriod: "Autumn",
        growingMethod: "Organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/beetroot.jpg"
    },
    {
        name: "Black Currant",
        description: "Tart and juicy black currants",
        price: 45,
        harvestPeriod: "Summer",
        growingMethod: "Organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/black-currant.jpg"
    },
    {
        name: "Brussels Sprouts",
        description: "Tender, nutty Brussels sprouts",
        price: 30,
        harvestPeriod: "Winter",
        growingMethod: "Non-organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/brussel-sprouts.jpg"
    },
    {
        name: "Cabbage",
        description: "Crisp, versatile cabbage heads",
        price: 25,
        harvestPeriod: "Winter",
        growingMethod: "Non-organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/cabbage.jpg"
    },
    {
        name: "Carrot",
        description: "Sweet, crunchy carrots",
        price: 28,
        harvestPeriod: "Summer",
        growingMethod: "Organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/carrot.jpg"
    },
    {
        name: "Cauliflower",
        description: "Fresh, tender cauliflower",
        price: 32,
        harvestPeriod: "Spring",
        growingMethod: "Non-organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/cauliflower.jpg"
    },
    {
        name: "Cucumber",
        description: "Cool, refreshing cucumbers",
        price: 30,
        harvestPeriod: "Summer",
        growingMethod: "Organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/cucumber.jpg"
    },
    {
        name: "Kale",
        description: "Nutrient-rich, leafy kale",
        price: 35,
        harvestPeriod: "Winter",
        growingMethod: "Organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/kale.jpg"
    },
    {
        name: "Leeks",
        description: "Mild, versatile leeks",
        price: 28,
        harvestPeriod: "Winter",
        growingMethod: "Non-organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/leeks.jpg"
    },
    {
        name: "Onions",
        description: "Essential cooking onions",
        price: 25,
        harvestPeriod: "All-year",
        growingMethod: "Non-organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/onions.jpg"
    },
    {
        name: "Parsnips",
        description: "Sweet, earthy parsnips",
        price: 30,
        harvestPeriod: "Winter",
        growingMethod: "Organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/parsnips.jpg"
    },
    {
        name: "Pear",
        description: "Sweet, juicy local pears",
        price: 40,
        harvestPeriod: "Autumn",
        growingMethod: "Organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/pear.jpg"
    },
    {
        name: "Peas",
        description: "Fresh garden peas",
        price: 35,
        harvestPeriod: "Spring",
        growingMethod: "Organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/peas.jpg"
    },
    {
        name: "Plums",
        description: "Sweet, ripe plums",
        price: 42,
        harvestPeriod: "Summer",
        growingMethod: "Organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/plums.jpg"
    },
    {
        name: "Potatoes",
        description: "Versatile cooking potatoes",
        price: 25,
        harvestPeriod: "All-year",
        growingMethod: "Non-organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/potatoes.jpg"
    },
    {
        name: "Red Currant",
        description: "Bright, tart red currants",
        price: 45,
        harvestPeriod: "Summer",
        growingMethod: "Organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/red-currant.jpg"
    },
    {
        name: "Strawberries",
        description: "Sweet, juicy strawberries",
        price: 48,
        harvestPeriod: "Summer",
        growingMethod: "Organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/strawberries.jpg"
    },
    {
        name: "Sugar Beets",
        description: "Sweet, natural sugar beets",
        price: 28,
        harvestPeriod: "Autumn",
        growingMethod: "Non-organic",
        grower: getRandomGrower(),
        imageUrl: "/assets/sugar-beets.jpg"
    }
];

export const seedProducts = async () => {
    console.log('Starting to seed test products...');
    console.log('TEST_PRODUCTS to be added:', TEST_PRODUCTS);

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