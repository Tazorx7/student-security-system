import React from 'react';
import { QrCode, Bell, CheckCircle } from 'lucide-react';

export const Features = () => {
    return (
        <section className="py-20 bg-white dark:bg-background-dark/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Secure Three-Step Dismissal</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Our streamlined process ensures every child goes home with the right person, every time.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="group p-8 bg-background-light dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <QrCode className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Scan</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">Rapid QR, Face, or ID check at the school gate for instant, error-free identification of guardians.</p>
                    </div>
                    {/* Step 2 */}
                    <div className="group p-8 bg-background-light dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <Bell className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Notify</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">Real-time alerts sent to administrators and secondary guardians the moment a check-in occurs at any terminal.</p>
                    </div>
                    {/* Step 3 */}
                    <div className="group p-8 bg-background-light dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <CheckCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">3. Approve</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">A digital handshake confirming the student is authorized to leave, closing the loop with a timestamped record.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
