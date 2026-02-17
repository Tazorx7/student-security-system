"use client";
import { User, Shield, Smartphone, Bell, Lock } from 'lucide-react';
import Link from 'next/link';

export const SettingsSidebar = () => {
    return (
        <aside className="w-full md:w-64 flex flex-col gap-2">
            <div className="mb-4">
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Settings</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Manage account &amp; safety</p>
            </div>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Account Info</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border border-primary/20 transition-all" href="#">
                <Shield className="w-5 h-5 fill-current" />
                <span className="text-sm font-bold">Security &amp; Hierarchy</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm font-medium">Device Management</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
                <Bell className="w-5 h-5" />
                <span className="text-sm font-medium">Notifications</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
                <Lock className="w-5 h-5" />
                <span className="text-sm font-medium">Privacy Policy</span>
            </Link>

            <div className="mt-8 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Security Score</span>
                    <span className="text-green-500 text-xs font-bold">+5%</span>
                </div>
                <div className="flex items-end gap-2 mb-3">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">85%</span>
                    <span className="text-sm text-slate-500 mb-1">Excellent</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-4">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <button className="w-full py-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors">
                    Improve Score
                </button>
            </div>
        </aside>
    );
};
