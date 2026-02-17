"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../lib/firebase";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                try {
                    const profileSnap = await getDoc(doc(db, "users", firebaseUser.uid));
                    if (profileSnap.exists()) {
                        const profile = profileSnap.data();
                        setUserProfile(profile);
                        setRole(profile.role || "parent");
                    } else {
                        setUserProfile({ displayName: firebaseUser.displayName || firebaseUser.email });
                        setRole("parent");
                    }
                } catch (err) {
                    console.warn("Could not fetch user profile:", err.message);
                    setUserProfile({ displayName: firebaseUser.displayName || firebaseUser.email });
                    setRole("parent");
                }
            } else {
                setUser(null);
                setUserProfile(null);
                setRole(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        const credential = await signInWithEmailAndPassword(auth, email, password);
        return credential;
    };

    const logout = async () => {
        await signOut(auth);
        setUser(null);
        setUserProfile(null);
        setRole(null);
    };

    const resetPassword = async (email) => {
        await sendPasswordResetEmail(auth, email);
    };

    const value = {
        user,
        userProfile,
        role,
        loading,
        login,
        logout,
        resetPassword,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
