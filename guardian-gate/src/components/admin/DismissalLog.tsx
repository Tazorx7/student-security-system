import React from 'react';
import { List } from 'lucide-react';

export const DismissalLog = () => {
    return (
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h3 className="font-bold flex items-center gap-2">
                    <List className="text-slate-400 w-5 h-5" />
                    Real-Time Dismissal Log
                </h3>
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300"></div>
                        <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-400"></div>
                        <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-500"></div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">12 Active Staff</span>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[11px] uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-3 font-bold">Student</th>
                            <th className="px-6 py-3 font-bold">Guardian</th>
                            <th className="px-6 py-3 font-bold">Status</th>
                            <th className="px-6 py-3 font-bold">Location</th>
                            <th className="px-6 py-3 font-bold">Time</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr className="text-sm">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                                    <span className="font-semibold">Leo Richardson</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">James Richardson</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Verified</span>
                            </td>
                            <td className="px-6 py-4 text-slate-500">East Gate</td>
                            <td className="px-6 py-4 text-slate-500">03:42 PM</td>
                        </tr>
                        {/* More rows... */}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
