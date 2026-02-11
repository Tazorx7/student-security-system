import React from 'react';
import { AlertOctagon, CheckCircle, LogIn, MoreVertical, ChevronDown } from 'lucide-react';

export const AlertFeed = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* UNAUTHORIZED ATTEMPT (RED ALERT) */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-red-50 dark:bg-red-950/30 p-5 rounded-xl border-l-4 border-red-600 shadow-sm ring-1 ring-red-100 dark:ring-red-900/20">
                <div className="flex-shrink-0 flex items-center justify-center rounded-xl bg-red-600 text-white size-14 shadow-lg shadow-red-200 dark:shadow-none">
                    <AlertOctagon className="w-8 h-8" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded">Security Alert</span>
                        <span className="text-slate-500 dark:text-slate-400 text-xs">14:32:10 • East Gate Camera 04</span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-none mb-1">Unauthorized Pickup Attempt</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Student:</span> Sarah Jenkins (Grade 2-B) |
                        <span className="font-semibold text-slate-800 dark:text-slate-200"> Alert:</span> Unknown individual attempted verification. Person does not match authorized guardian database.
                    </p>
                </div>
                <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
                    <button className="flex-1 md:flex-none px-6 py-2.5 bg-red-600 text-white rounded-lg text-sm font-bold hover:bg-red-700 transition-all shadow-md shadow-red-200 dark:shadow-none">
                        View Security Feed
                    </button>
                    <button className="flex items-center justify-center p-2.5 bg-white dark:bg-slate-800 text-red-600 border border-red-200 dark:border-red-900 rounded-lg hover:bg-red-50 transition-colors">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* PICKUP APPROVED (GREEN ALERT) */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white dark:bg-slate-900 p-5 rounded-xl border-l-4 border-green-500 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
                <div className="flex-shrink-0 flex items-center justify-center rounded-xl bg-green-500 text-white size-14">
                    <CheckCircle className="w-8 h-8" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded">Success</span>
                        <span className="text-slate-500 dark:text-slate-400 text-xs">14:28:45 • Main Lobby Exit</span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-none mb-1">Pickup Approved</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Student:</span> Leo Thompson |
                        <span className="font-semibold text-slate-800 dark:text-slate-200"> Guardian:</span> Michael Thompson (Father) verified via FaceID.
                    </p>
                </div>
                <div className="w-full md:w-auto mt-4 md:mt-0">
                    <button className="w-full md:w-auto px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        View Details
                    </button>
                </div>
            </div>

            {/* CHILD CHECKED IN (BLUE ALERT) */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white dark:bg-slate-900 p-5 rounded-xl border-l-4 border-primary border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
                <div className="flex-shrink-0 flex items-center justify-center rounded-xl bg-primary text-white size-14">
                    <LogIn className="w-8 h-8" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded">Information</span>
                        <span className="text-slate-500 dark:text-slate-400 text-xs">08:15:02 • Student Entrance B</span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-none mb-1">Child Checked In</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Student:</span> Amara Okafor |
                        <span className="font-semibold text-slate-800 dark:text-slate-200"> Status:</span> Arrived via School Bus #12. Temperature scan: 36.6°C.
                    </p>
                </div>
                <div className="w-full md:w-auto mt-4 md:mt-0">
                    <button className="w-full md:w-auto px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        View Profile
                    </button>
                </div>
            </div>

            {/* Load More */}
            <div className="py-8 flex justify-center">
                <button className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
                    <ChevronDown className="w-5 h-5" /> Load Previous Notifications
                </button>
            </div>
        </div>
    );
};
