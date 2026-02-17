"use client";
import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext({});

export const useToast = () => useContext(ToastContext);

let toastId = 0;

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, type = "info") => {
        const id = ++toastId;
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 4000);
    }, []);

    const dismissToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {/* Toast container */}
            <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-3 pointer-events-none">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl border text-sm font-semibold animate-slide-in backdrop-blur-md transition-all max-w-sm
              ${toast.type === "success" ? "bg-green-50 dark:bg-green-950/80 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200" : ""}
              ${toast.type === "error" ? "bg-red-50 dark:bg-red-950/80 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200" : ""}
              ${toast.type === "warning" ? "bg-amber-50 dark:bg-amber-950/80 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200" : ""}
              ${toast.type === "info" ? "bg-blue-50 dark:bg-blue-950/80 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200" : ""}
            `}
                    >
                        <span className="flex-1">{toast.message}</span>
                        <button
                            onClick={() => dismissToast(toast.id)}
                            className="text-current opacity-50 hover:opacity-100 transition-opacity text-lg leading-none"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}
