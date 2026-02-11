import React from 'react';
import { AlertCircle, Timer, X, Check } from 'lucide-react';

export const PickupRequestAlert = () => {
    return (
        <section className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 border-2 border-primary rounded-xl shadow-xl overflow-hidden">
                <div className="bg-primary px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white">
                        <AlertCircle className="fill-current w-5 h-5" />
                        <span className="font-bold text-sm uppercase tracking-wider">Urgent Action Required</span>
                    </div>
                    <div className="bg-white/20 px-3 py-1 rounded flex items-center gap-2 text-white font-mono font-bold">
                        <Timer className="w-4 h-4" />
                        02:45
                    </div>
                </div>
                <div className="p-6 md:flex items-center gap-8">
                    <div className="flex-1 flex items-center gap-6">
                        <div
                            className="size-24 rounded-lg bg-slate-200 bg-cover bg-center shrink-0 border-4 border-slate-50 dark:border-slate-800 shadow-sm"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYN7qCNhNmWlG0G3R-zCxDxSAy5gA18b3KqFf_T81B_OXxDk-FS4yLOMuFzstieF_0NEyUHYJrbsLNuQ4wIfI_dEOWD60zasXivexjrJZ41jeRrTm-MV183FOQabeIaS4HpyMtmqrbIFXdOdeHXH0YjCt4e1n97hG1EvekzVu-WoMfuCYU4qUxHNMogrAWSjWU-eVVAt4C2l7z5ergL9SYHVOxl8O22kx_Vcmy0EzbQhnPvekzPIXEHfjdIoTrseky59A4WUXJjMs')" }}
                        ></div>
                        <div className="space-y-1">
                            <h3 className="text-2xl font-black leading-tight">Pickup Request</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-snug">
                                <span className="font-bold text-slate-900 dark:text-slate-100">David Smith</span> (Authorized Uncle) is requesting to pick up <span className="font-bold text-slate-900 dark:text-slate-100">Jamie Johnson</span>.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3">
                        <button className="flex-1 sm:w-40 h-14 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-200 dark:shadow-none transition-transform active:scale-95">
                            <X className="w-5 h-5" />
                            Deny
                        </button>
                        <button className="flex-1 sm:w-40 h-14 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-200 dark:shadow-none transition-transform active:scale-95">
                            <Check className="w-5 h-5" />
                            Approve
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
