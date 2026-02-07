import React from 'react';
import { Filter, Download } from 'lucide-react';

export const AlertFilters = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 dark:border-slate-800 mb-6 gap-4">
            <div className="flex gap-8">
                <button className="border-b-2 border-primary text-primary pb-3 text-sm font-bold px-1 flex items-center gap-2">
                    All Notifications <span className="bg-primary/10 text-primary text-[10px] py-0.5 px-1.5 rounded-full">24</span>
                </button>
                <button className="border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 pb-3 text-sm font-medium px-1 transition-all">Security</button>
                <button className="border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 pb-3 text-sm font-medium px-1 transition-all">Pickups</button>
                <button className="border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 pb-3 text-sm font-medium px-1 transition-all">Check-ins</button>
            </div>
            <div className="pb-3 flex gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <Filter className="w-4 h-4" /> Filter
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <Download className="w-4 h-4" /> Export
                </button>
            </div>
        </div>
    );
};
