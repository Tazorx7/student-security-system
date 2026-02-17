"use client";
import Link from 'next/link';
import { AlertStats } from '../../components/alerts/AlertStats';
import { AlertFilters } from '../../components/alerts/AlertFilters';
import { AlertFeed } from '../../components/alerts/AlertFeed';
import { Shield, ArrowLeft, Search, Bell } from 'lucide-react';
import ProtectedRoute from '../../components/protectedRoute';

export default function AlertsCenterPage() {
    return (
        <ProtectedRoute>
            <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display">
                <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 lg:px-10 sticky top-0 z-10">
                    <div className="flex items-center gap-6">
                        <Link href="/admin" className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="flex items-center gap-3 text-primary">
                            <Shield className="w-7 h-7 fill-current" />
                            <h2 className="text-lg font-bold">Alerts &amp; Notifications</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <input className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64" placeholder="Search alerts..." />
                        </div>
                        <button className="relative p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                            <Bell className="w-5 h-5 text-slate-500" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                    </div>
                </header>
                <main className="p-4 lg:p-10 max-w-7xl mx-auto">
                    <AlertStats />
                    <AlertFilters />
                    <AlertFeed />
                </main>
            </div>
        </ProtectedRoute>
    );
}
