import React from 'react';
import { FileText, Users, Lock, Smartphone, CheckCircle } from 'lucide-react';

export const Security = () => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Enterprise-Grade <br className="hidden lg:block" />Security Foundation</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            Built on zero-trust principles, our architecture ensures student data remains private and operational logs remain immutable.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                                <CheckCircle className="text-green-500 w-5 h-5" />
                                GDPR & COPPA Compliant
                            </div>
                            <div className="flex items-center gap-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                                <CheckCircle className="text-green-500 w-5 h-5" />
                                AES-256 End-to-End Encryption
                            </div>
                            <div className="flex items-center gap-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                                <CheckCircle className="text-green-500 w-5 h-5" />
                                99.9% Uptime SLA
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Feature 1 */}
                        <div className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="text-primary mb-4">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Live Audit Trails</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Every pickup is logged with a permanent, digital signature for accountability and historical review.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="text-primary mb-4">
                                <Users className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Role-Based Access</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Granular permission settings ensure only authorized staff can access student records or edit pickup lists.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="text-primary mb-4">
                                <Lock className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Encrypted Data</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">All data in transit and at rest is protected with military-grade encryption standards.</p>
                        </div>
                        {/* Feature 4 */}
                        <div className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="text-primary mb-4">
                                <Smartphone className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Cross-Device Sync</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Seamless synchronization between gate tablets, administrator desktops, and parent mobile apps.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
