import React from 'react';
import { MoreHorizontal, Car, User, Bus } from 'lucide-react';

export const RecentActivity = () => {
    return (
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h3 className="font-bold">Recent Pickup Events</h3>
                <MoreHorizontal className="text-slate-400 w-5 h-5 cursor-pointer" />
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {/* History Item 1 */}
                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Car className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold">Maya Picked Up</p>
                            <p className="text-xs text-slate-500">Dismissal Loop B • Sarah Johnson</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-medium">02:30 PM</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Today</p>
                    </div>
                </div>
                {/* History Item 2 */}
                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                            <User className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold">Jamie Dismissed</p>
                            <p className="text-xs text-slate-500">After School Club • Coach Miller</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-medium">03:45 PM</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Yesterday</p>
                    </div>
                </div>
                {/* History Item 3 */}
                <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                            <Bus className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold">Bus Departure</p>
                            <p className="text-xs text-slate-500">Route 14A • Terminal Gate 4</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-medium">03:15 PM</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Oct 24</p>
                    </div>
                </div>
            </div>
            <button className="w-full py-3 bg-slate-50 dark:bg-slate-800/50 text-xs font-bold text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors uppercase">
                View All History
            </button>
        </div>
    );
};
