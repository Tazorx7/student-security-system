import React from 'react';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { PrincipalHeader } from '../../components/admin/PrincipalHeader';
import { BarChart3, PieChart, FileText, Download, TrendingUp, ShieldAlert, CheckCircle, Calendar } from 'lucide-react';

const ComplianceReports = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark flex flex-col">
                <PrincipalHeader />
                <div className="p-8 space-y-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-black tracking-tight">Compliance & Analytics</h1>
                            <p className="text-slate-500 dark:text-slate-400">Detailed security audits and campus dismissal performance metrics.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-lg font-bold text-sm shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                <Calendar className="w-4 h-4" />
                                Oct 1 - Oct 31
                            </button>
                            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all text-center">
                                <Download className="w-4 h-4" />
                                Generate PDF
                            </button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Verification Rate</p>
                            <div className="flex items-center justify-between">
                                <h3 className="text-3xl font-black">99.9%</h3>
                                <div className="size-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                            </div>
                            <p className="text-xs text-green-500 font-bold mt-2 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" /> +0.2% this month
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Avg Dismissal Time</p>
                            <div className="flex items-center justify-between">
                                <h3 className="text-3xl font-black">12.5m</h3>
                                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 font-bold mt-2">-1.4m faster vs avg</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Gate Incidents</p>
                            <div className="flex items-center justify-between">
                                <h3 className="text-3xl font-black">4</h3>
                                <div className="size-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                                    <ShieldAlert className="w-6 h-6" />
                                </div>
                            </div>
                            <p className="text-xs text-amber-600 font-bold mt-2">All resolved at gate</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">PDF Exports</p>
                            <div className="flex items-center justify-between">
                                <h3 className="text-3xl font-black">12</h3>
                                <div className="size-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                                    <FileText className="w-6 h-6" />
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 font-bold mt-2">Auto-sent to district</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Mock Chart Area 1 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="font-black text-lg">Dismissal Volume by Gate</h3>
                                <PieChart className="text-slate-300 w-5 h-5" />
                            </div>
                            <div className="h-64 bg-slate-50 dark:bg-slate-800/50 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-100 dark:border-slate-700">
                                <span className="text-sm font-bold text-slate-400">[Dismissal Distribution Visualization]</span>
                            </div>
                        </div>

                        {/* Mock Chart Area 2 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="font-black text-lg">Peak Dismissal Times (Hourly)</h3>
                                <TrendingUp className="text-slate-300 w-5 h-5" />
                            </div>
                            <div className="h-64 bg-slate-50 dark:bg-slate-800/50 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-100 dark:border-slate-700">
                                <span className="text-sm font-bold text-slate-400">[Peak Flow Trends Visualization]</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ComplianceReports;
