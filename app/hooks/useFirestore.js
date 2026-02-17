"use client";
import { useState, useEffect, useCallback } from "react";
import { db } from "../../lib/firebase";
import {
    collection,
    query,
    getDocs,
    getDoc,
    doc,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc,
    serverTimestamp,
} from "firebase/firestore";

/**
 * Fetch a Firestore collection once.
 * @param {string} path - collection path
 * @param {Array} queryConstraints - Firestore query constraints (where, orderBy, limit, etc.)
 */
export function useCollection(path, queryConstraints = []) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        if (!path) return;
        setLoading(true);
        setError(null);
        try {
            const ref = collection(db, path);
            const q = queryConstraints.length > 0 ? query(ref, ...queryConstraints) : ref;
            const snapshot = await getDocs(q);
            const results = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
            setData(results);
        } catch (err) {
            console.error("useCollection error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
}

/**
 * Fetch a single Firestore document once.
 * @param {string} path - document path (e.g. "users/abc123")
 */
export function useDocument(path) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        if (!path) return;
        setLoading(true);
        setError(null);
        try {
            const ref = doc(db, path);
            const snap = await getDoc(ref);
            if (snap.exists()) {
                setData({ id: snap.id, ...snap.data() });
            } else {
                setData(null);
            }
        } catch (err) {
            console.error("useDocument error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [path]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
}

/**
 * Subscribe to a Firestore collection in real-time.
 * @param {string} path - collection path
 * @param {Array} queryConstraints - Firestore query constraints
 */
export function useRealtimeCollection(path, queryConstraints = []) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!path) return;
        setLoading(true);
        setError(null);

        const ref = collection(db, path);
        const q = queryConstraints.length > 0 ? query(ref, ...queryConstraints) : ref;

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const results = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
                setData(results);
                setLoading(false);
            },
            (err) => {
                console.error("useRealtimeCollection error:", err);
                setError(err.message);
                setLoading(false);
            }
        );

        return () => unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    return { data, loading, error };
}

/**
 * Firestore CRUD helper functions.
 */
export function useFirestoreActions() {
    const addDocument = async (collectionPath, data) => {
        const ref = collection(db, collectionPath);
        const docRef = await addDoc(ref, {
            ...data,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });
        return docRef.id;
    };

    const updateDocument = async (documentPath, data) => {
        const ref = doc(db, documentPath);
        await updateDoc(ref, {
            ...data,
            updatedAt: serverTimestamp(),
        });
    };

    const deleteDocument = async (documentPath) => {
        const ref = doc(db, documentPath);
        await deleteDoc(ref);
    };

    return { addDocument, updateDocument, deleteDocument };
}
