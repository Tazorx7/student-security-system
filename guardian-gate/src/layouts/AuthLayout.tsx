import React from 'react';
import { Shield, ShieldCheck, HelpCircle } from 'lucide-react';
import { Outlet } from 'react-router-dom';

export const AuthHeader = () => {
    return (
        <header className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-2">
                <div className="bg-primary p-1.5 rounded-lg text-white">
                    <Shield className="w-6 h-6" />
                </div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">PCRS <span className="text-primary font-medium text-base">SecurePortal</span></h1>
            </div>
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full border border-green-100 dark:border-green-800">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">System Operational</span>
                </div>
                <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                    <HelpCircle className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
};

export const AuthFooter = () => {
    return (
        <footer className="w-full py-8 text-center px-4">
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-1">
                        <Shield className="w-5 h-5" />
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">AES-256</span>
                    </div>
                    {/* Add more footer items if needed */}
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-600 max-w-lg">
                    © 2024 Parent-Child Recognition System. All rights reserved.
                    Designed for speed and uncompromising safety in school environments.
                </p>
            </div>
        </footer>
    );
};

const AuthLayout = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display transition-colors duration-300">
            <AuthHeader />
            <main className="flex-grow flex items-center justify-center p-4 md:p-8">
                <Outlet />
            </main>
            <AuthFooter />
        </div>
    );
};

export default AuthLayout;
