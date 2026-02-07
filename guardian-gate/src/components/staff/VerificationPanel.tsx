import React from 'react';
import { School, DoorOpen, Users, Smartphone, ShieldCheck, AlertTriangle } from 'lucide-react';

export const VerificationPanel = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase mb-1">Status</span>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                        <span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
                        WAITING FOR PARENT
                    </span>
                </div>
                <div className="relative flex items-center justify-center">
                    <svg className="w-20 h-20 -rotate-90">
                        <circle className="text-slate-100 dark:text-slate-800" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeWidth="6"></circle>
                        <circle className="text-primary" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeDasharray="226" strokeDashoffset="60" strokeWidth="6"></circle>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                        <span className="text-xl font-black text-slate-900 dark:text-white leading-none">42</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase">sec</span>
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                {/* Student Profile */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background-light dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                    <div
                        className="h-20 w-20 rounded-xl bg-center bg-cover shadow-sm flex-shrink-0"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAP3nmtwR2mc73vHjDyNlmqmbV4IuPNHAAnjbLbuJdQk69wSbGu4LJM4qm3vgp-9ZeBcY4xA1ASEO-GFVxk-ScDxbZ2-FmyDkdCEiZWfx4DfkCmLG-DNKxUc3lpJCsT92QDdnai_QIdEWZdFwAURhSWyjvtSUC99ViD9rQn0msmpjeAjbniy3mRiKKj7blcOudrcdmuRYugNXD69o_nzpPZVMonPQ6whfTbfKRgAyZly_CTAHelpL2HY2pnvPYXnfUUliGtDw5_YVI')" }}
                    ></div>
                    <div className="flex-grow">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-xs font-bold text-primary uppercase">Student Profile</p>
                                <h4 className="text-xl font-black text-slate-900 dark:text-white">Jamie Thompson</h4>
                            </div>
                            <span className="bg-white dark:bg-slate-700 px-2 py-1 rounded text-[10px] font-black border border-slate-200 dark:border-slate-600">ID: #4421</span>
                        </div>
                        <div className="mt-2 flex gap-4 text-sm text-slate-600 dark:text-slate-400">
                            <span className="flex items-center gap-1"><School className="w-3 h-3" /> Grade 2</span>
                            <span className="flex items-center gap-1"><DoorOpen className="w-3 h-3" /> Room 204</span>
                        </div>
                    </div>
                </div>
                {/* Guardian Profile */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background-light dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                    <div
                        className="h-20 w-20 rounded-xl bg-center bg-cover shadow-sm flex-shrink-0"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdZvqGRHJ17DVeteA32V_x4xIeYhBNqnP-XbOvMSTtOuOtdjLXWsEPKehh2nV8AaiIZmqspTd0UL1N3jmzreAvhkRrgddhvX6wrJJuog372arS2s2QaGzYyylLKoJ-EgoVrNFWgm5geomJ0UwTTFWUxdBX67vXdZIIgqpsYMzWDBajSo8QjIDPd1Mmbspquna71vG6bOCfXMprhevIdBVcRZvR6doodHWm8SfdUgw1JqVi_jR0qNBxc4GII2sFYbthM-MMVbGD25Y')" }}
                    ></div>
                    <div className="flex-grow">
                        <p className="text-xs font-bold text-green-600 dark:text-green-400 uppercase">Authorized Guardian</p>
                        <h4 className="text-xl font-black text-slate-900 dark:text-white">Sarah Thompson</h4>
                        <div className="mt-2 space-y-1">
                            <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                <Users className="w-3 h-3" /> Mother
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                <Smartphone className="w-3 h-3" /> +1 (555) 012-3456
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Actions */}
            <div className="mt-6 flex flex-col gap-3">
                <button className="w-full py-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    MANUAL OVERRIDE VERIFICATION
                </button>
                <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    FLAG SECURITY INCIDENT
                </button>
                <p className="text-center text-[11px] text-slate-400 font-medium px-8 leading-tight">
                    Flagging an incident will immediately alert campus security and lock the gate controls. Use only for unauthorized pickup attempts.
                </p>
            </div>
        </div>
    );
};
