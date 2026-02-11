import React from 'react';
import { Users, TrendingUp, Hourglass, AlertTriangle, Badge } from 'lucide-react';

export const AlertStats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Pickups Today</p>
                    <Users className="text-primary w-5 h-5" />
                </div>
                <p className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold">412</p>
                <p className="text-green-600 dark:text-green-400 text-xs font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +12% from yesterday
                </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Verifications</p>
                    <Hourglass className="text-amber-500 w-5 h-5" />
                </div>
                <p className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold">3</p>
                <p className="text-slate-500 text-xs">Awaiting facial recognition</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900 shadow-sm ring-1 ring-red-100 dark:ring-red-900/30">
                <div className="flex items-center justify-between">
                    <p className="text-red-600 dark:text-red-400 text-sm font-bold">Critical Alerts</p>
                    <AlertTriangle className="text-red-600 w-5 h-5" />
                </div>
                <p className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold">1</p>
                <p className="text-red-500 text-xs font-semibold">Immediate action required</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Staff on Duty</p>
                    <Badge className="text-slate-400 w-5 h-5" />
                </div>
                <p className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold">18</p>
                <p className="text-slate-500 text-xs">Across 4 checkpoints</p>
            </div>
        </div>
    );
};
