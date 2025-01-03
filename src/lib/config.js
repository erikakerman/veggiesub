// lib/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFy1BTmMvRuMU63N7hBpMQCZy6llDdONE",
    authDomain: "veggiesub-6d82d.firebaseapp.com",
    projectId: "veggiesub-6d82d",
    storageBucket: "veggiesub-6d82d.firebasestorage.app",
    messagingSenderId: "175889739257",
    appId: "1:175889739257:web:54d8392132edeee0306128",
    measurementId: "G-3KNXKL2VMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;