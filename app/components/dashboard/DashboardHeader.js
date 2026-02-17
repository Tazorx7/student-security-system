"use client";
import { Search, HelpCircle } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';

export const DashboardHeader = () => {
    return (
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-8 shrink-0">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-400">
                    <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                    System Live
                </div>
                <button className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Search className="w-5 h-5" />
                </button>
                <button className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <HelpCircle className="w-5 h-5" />
                </button>
                <ThemeToggle />
            </div>
        </header>
    );
};
