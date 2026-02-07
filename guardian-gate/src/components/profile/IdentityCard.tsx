import React from 'react';
import { AlertTriangle, UserCheck, PhoneCall, BadgeCheck } from 'lucide-react';

export const IdentityCard = () => {
    return (
        <aside className="col-span-12 lg:col-span-3 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm overflow-hidden">
                <div className="relative mb-6">
                    <div
                        className="aspect-square w-full rounded-lg bg-center bg-cover border-4 border-slate-50 dark:border-slate-800 shadow-md"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3w8PF6ycLCaF5BggvT8AfwKWdzeO8GxNivB1--WIO6nAQ_i5PcEs9PrGhINEuPVZv3fMNOjAfGYCvd5SssPU85Zg04z97QwjpfUBcHfCuDV1oa6SworVjxei5dIDVq3edA4sjhJun96jt7_fmhlRx3mqZSuABA1CoXx0vZOGPdBW1M3PuK_vKr44F1PRCTqSldkkNZWcBa55b3twvfjFBJikFHyt8Q55a8TIrGICX94dDmb0NbkCLDoVSsHzcFIAquZB5qVFnac4")' }}
                    ></div>
                    <div className="absolute bottom-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Checked In</div>
                </div>
                <div className="space-y-4">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white leading-none">Alex Johnson</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Student ID: #88291</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100 dark:border-slate-800">
                        <div>
                            <p className="text-xs text-slate-400 uppercase font-semibold">Grade</p>
                            <p className="text-sm font-medium">Grade 2 (B)</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase font-semibold">DOB</p>
                            <p className="text-sm font-medium">05/12/2016</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase font-semibold">Classroom</p>
                            <p className="text-sm font-medium">Room 204</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase font-semibold">Teacher</p>
                            <p className="text-sm font-medium">Ms. Rivera</p>
                        </div>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-1">
                            <AlertTriangle className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">Emergency Alert</span>
                        </div>
                        <p className="text-sm font-semibold text-red-800 dark:text-red-300">Allergies: Peanuts (Severe)</p>
                        <p className="text-xs text-red-700 dark:text-red-400 mt-1 italic">Carry EpiPen at all times in backpack.</p>
                    </div>
                    <div className="pt-4">
                        <button className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 py-2 rounded-lg font-semibold text-sm transition-colors">
                            <BadgeCheck className="w-5 h-5" />
                            View Full Digital ID
                        </button>
                    </div>
                </div>
            </div>
            {/* Side Quick Actions */}
            <div className="flex flex-col gap-2">
                <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white shadow-md shadow-primary/20" href="#">
                    <UserCheck className="w-5 h-5" />
                    <span className="text-sm font-medium">Identity Verified</span>
                </a>
                <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all" href="#">
                    <PhoneCall className="w-5 h-5" />
                    <span className="text-sm font-medium">Contact Parent Directly</span>
                </a>
            </div>
        </aside>
    );
};
