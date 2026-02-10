import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Shield className="text-primary w-8 h-8" />
                        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">GuardianGate</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Features</a>
                        <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Security</a>
                        <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Case Studies</a>
                        <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Pricing</a>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link to="/login" className="hidden sm:flex px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                            Login
                        </Link>
                        <Link to="/login" className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
