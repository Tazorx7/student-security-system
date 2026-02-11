import React from 'react';
import { Users, CheckCircle, Hourglass, AlertTriangle } from 'lucide-react';

export const QuickStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Total Students</span>
                    <Users className="text-primary w-6 h-6" />
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">1,240</span>
                    <span className="text-xs text-slate-400">Enrollment</span>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Picked Up</span>
                    <CheckCircle className="text-green-500 w-6 h-6" />
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-green-600 dark:text-green-500">85%</span>
                    <span className="text-xs text-green-500 font-medium">+5% vs avg</span>
                </div>
                <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Pending Release</span>
                    <Hourglass className="text-amber-500 w-6 h-6" />
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-amber-600 dark:text-amber-500">186</span>
                    <span className="text-xs text-slate-400">In Classrooms</span>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-red-200 dark:border-red-900/30 ring-4 ring-red-50 dark:ring-red-900/10">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Flagged Incidents</span>
                    <AlertTriangle className="text-red-500 w-6 h-6" />
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-red-600">2</span>
                    <span className="text-xs text-red-500 font-medium font-bold">Needs Review</span>
                </div>
            </div>
        </div>
    );
};
