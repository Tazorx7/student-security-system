"use client";
import { Lock, Phone, MessageSquare, Info, Clock, ShieldCheck } from 'lucide-react';

export const PermissionsManager = ({ student }) => {
    // Determine authorized parents from student data or default to empty array
    // In a real app we might fetch subcollection `students/{id}/guardians`
    const guardians = student?.authorizedGuardians || [];

    return (
        <section className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm min-h-full">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Authorized Pickups</h2>
                    <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
                        <Lock className="w-4 h-4" /> Edit Permissions
                    </button>
                </div>

                {(!guardians || guardians.length === 0) ? (
                    <div className="text-center p-8 text-slate-500 italic">No authorized guardians listed.</div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {guardians.map((guardian, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-slate-300 border-2 border-white dark:border-slate-700 shadow-sm flex items-center justify-center text-lg font-bold text-slate-500">
                                        {guardian.name ? guardian.name[0] : '?'}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white">{guardian.name}</p>
                                        <p className="text-xs text-primary font-medium">{guardian.relation} &bull; Authorized</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:text-primary transition-colors"><Phone className="w-5 h-5" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-8 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-dashed border-slate-200 dark:border-slate-700 flex items-start gap-4">
                    <ShieldCheck className="text-primary w-6 h-6" />
                    <div>
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Security Verification Enabled</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Permission changes require 2-Factor Authentication from a lead administrator or verified parent account.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
