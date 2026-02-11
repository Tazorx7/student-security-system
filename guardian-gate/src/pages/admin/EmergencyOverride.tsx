import React, { useState } from 'react';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { PrincipalHeader } from '../../components/admin/PrincipalHeader';
import { Siren, ShieldAlert, Lock, Unlock, Zap, AlertTriangle, Key, Shield } from 'lucide-react';

const EmergencyOverride = () => {
    const [armState, setArmState] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark flex flex-col">
                <PrincipalHeader />
                <div className="p-8 space-y-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-black tracking-tight text-red-600 dark:text-red-500 flex items-center gap-3">
                                <Siren className="w-8 h-8" />
                                Emergency Security Console
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">Critical system overrides. High-priority security authorization required.</p>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-black uppercase tracking-widest text-slate-500">
                            System Health: 100% Secure
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Primary Override Control */}
                        <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-red-500 shadow-2xl shadow-red-500/10 overflow-hidden">
                            <div className="p-8 space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="size-16 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                                        <ShieldAlert className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-red-600 dark:text-red-500">Global Campus Lockdown</h3>
                                        <p className="text-slate-500 text-sm">Immediately locks all gates and prevents all pickups.</p>
                                    </div>
                                </div>

                                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-100 dark:border-red-900/30">
                                    <p className="text-red-800 dark:text-red-300 text-sm font-bold leading-relaxed">
                                        WARNING: Activating global lockdown will trigger silent alarms and notify local law enforcement. This action cannot be undone from this terminal once initiated.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                                        <div className="flex items-center gap-3">
                                            <Key className="w-5 h-5 text-slate-400" />
                                            <span className="font-bold text-sm">Arm System Override</span>
                                        </div>
                                        <button
                                            onClick={() => setArmState(!armState)}
                                            className={`relative w-14 h-8 rounded-full transition-colors ${armState ? 'bg-red-500' : 'bg-slate-300 dark:bg-slate-600'}`}
                                        >
                                            <div className={`absolute top-1 size-6 bg-white rounded-full shadow-md transition-all ${armState ? 'left-7' : 'left-1'}`} />
                                        </button>
                                    </div>

                                    <button
                                        disabled={!armState}
                                        className={`w-full py-6 rounded-2xl font-black text-xl uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${armState ? 'bg-red-600 text-white shadow-xl shadow-red-500/30 hover:bg-red-700 active:scale-95' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'}`}
                                    >
                                        <Lock className="w-6 h-6" />
                                        ACTIVATE LOCKDOWN
                                    </button>
                                </div>
                            </div>
                            <div className="bg-red-600 p-2 text-center text-white text-[10px] font-black tracking-widest uppercase">
                                Restricted to principal and school resource officer Level 5
                            </div>
                        </div>

                        {/* Secondary Controls */}
                        <div className="space-y-8">
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                                <div className="flex items-center gap-3">
                                    <Unlock className="text-amber-500 w-6 h-6" />
                                    <h4 className="font-black text-xl uppercase tracking-tight">Manual Gate Release</h4>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {['North Gate', 'South (Main)', 'East Gate', 'Gym Entrance'].map((gate) => (
                                        <button key={gate} className="p-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm hover:border-amber-500 hover:text-amber-600 transition-all text-left flex justify-between items-center group">
                                            {gate}
                                            <Zap className="w-4 h-4 text-slate-300 group-hover:text-amber-500" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                                <div className="flex items-center gap-3">
                                    <Shield className="text-primary w-6 h-6" />
                                    <h4 className="font-black text-xl uppercase tracking-tight">System Reset Protocols</h4>
                                </div>
                                <div className="space-y-3">
                                    <button className="w-full p-4 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold text-sm flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                        Re-calibrate Facial Scanners
                                        <AlertTriangle className="w-4 h-4 text-slate-400" />
                                    </button>
                                    <button className="w-full p-4 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold text-sm flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-red-600">
                                        Wipe Temporary Verification Cache
                                        <Zap className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EmergencyOverride;
