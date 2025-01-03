// lib/auth.js
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updateProfile
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './config';

/**
 * Creates a new user account and profile
 * @param {string} email 
 * @param {string} password 
 * @param {Object} userData - Contains username
 */
export const registerUser = async (email, password, userData) => {
    try {
        // Create the user account
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update the user's display name
        await updateProfile(user, {
            displayName: userData.username
        });

        // Create the user profile document in Firestore
        await setDoc(doc(db, 'users', user.uid), {
            email: user.email,
            username: userData.username,
            created: new Date().toISOString()
        });

        return user;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

/**
 * Signs in an existing user
 * @param {string} email 
 * @param {string} password 
 */
export const signInUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

/**
 * Signs out the current user
 */
export const signOutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

/**
 * Sends a password reset email
 * @param {string} email 
 */
export const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

/**
 * Creates or signs in with a test account
 */
export const createTestAccount = async () => {
    const testEmail = 'admin@test.com';
    const testPassword = 'test123';

    try {
        // Try to sign in first
        return await signInUser(testEmail, testPassword);
    } catch (error) {
        // If user doesn't exist, create it
        if (error.message.includes('user-not-found')) {
            return await registerUser(testEmail, testPassword, {
                username: 'admin'
            });
        }
        throw error;
    }
};

/**
 * Returns a user-friendly error message
 * @param {Error} error 
 */
const getErrorMessage = (error) => {
    switch (error.code) {
        case 'auth/email-already-in-use':
            return 'This email is already registered. Please sign in or use a different email.';
        case 'auth/weak-password':
            return 'Password should be at least 6 characters long.';
        case 'auth/invalid-email':
            return 'Please enter a valid email address.';
        case 'auth/user-not-found':
        case 'auth/wrong-password':
            return 'Invalid email or password.';
        case 'auth/too-many-requests':
            return 'Too many unsuccessful attempts. Please try again later.';
        default:
            return error.message || 'An error occurred. Please try again.';
    }
};