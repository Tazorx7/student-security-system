import React from 'react';
import { Shield, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StaffHeader = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 lg:px-10">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 text-primary">
                    <div className="size-8 text-primary">
                        <Shield className="w-8 h-8 fill-current" />
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">GuardianVerify</h2>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/staff">Live Gate</Link>
                    <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/staff/history">History</Link>
                    <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/staff/roster">Student Roster</Link>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <div className="hidden sm:flex flex-col items-end">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Gate 4 South</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Monday, 3:15 PM</span>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <User className="w-6 h-6" />
                </div>
            </div>
        </header>
    );
};
