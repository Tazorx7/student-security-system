import React from 'react';
import { Unlock, ShieldAlert, Shield, Info } from 'lucide-react';

export const EmergencyOverride = () => {
    return (
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border-2 border-red-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-2">
                <Unlock className="text-red-500/20 w-16 h-16" />
            </div>
            <div className="p-6">
                <h3 className="text-lg font-extrabold text-red-600 mb-2 flex items-center gap-2">
                    <ShieldAlert className="w-6 h-6" />
                    Emergency Override
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 font-medium">
                    Authorized for Principals only. Overrides all facial recognition and status blocks for a manual student release.
                </p>
                <div className="space-y-4">
                    <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Override Reason</label>
                        <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-red-500">
                            <option>Select valid reason...</option>
                            <option>Emergency Evacuation</option>
                            <option>Medical Emergency</option>
                            <option>Verified Custody Update (Paperwork)</option>
                            <option>System Hardware Failure</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Authorization Signature</label>
                        <div className="h-24 w-full border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-300 dark:text-slate-700 pointer-events-none bg-slate-50 dark:bg-slate-800/50">
                            <span className="text-xs font-medium italic">Sign here to authorize release</span>
                        </div>
                    </div>
                    <button className="w-full bg-red-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-red-700 transition-all flex items-center justify-center gap-2 group">
                        <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Confirm Manual Release
                    </button>
                </div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/10 px-6 py-3 flex items-center gap-2">
                <Info className="text-red-600 w-4 h-4" />
                <span className="text-[10px] text-red-600 font-bold uppercase tracking-tight">Requires high-friction confirmation</span>
            </div>
        </section>
    );
};
