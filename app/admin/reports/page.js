"use client";
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { PrincipalHeader } from '../../components/admin/PrincipalHeader';
import { TrendingUp, TrendingDown, Shield, FileText, Download } from 'lucide-react';
import ProtectedRoute from '../../components/protectedRoute';

export default function ComplianceReportsPage() {
    return (
        <ProtectedRoute>
            <div className="flex h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
                <AdminSidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <PrincipalHeader />
                    <main className="flex-1 overflow-y-auto p-8 space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold">Compliance Reports</h1>
                                <p className="text-sm text-slate-500">Security metrics and dismissal analytics</p>
                            </div>
                            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                                <Download className="w-4 h-4" /> Generate PDF
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <p className="text-xs font-bold text-slate-400 uppercase">Total Pickups (Month)</p>
                                <p className="text-3xl font-black mt-2">8,420</p>
                                <p className="text-xs text-green-500 font-semibold mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +12% vs last month</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <p className="text-xs font-bold text-slate-400 uppercase">Avg Verification Time</p>
                                <p className="text-3xl font-black mt-2">1.8s</p>
                                <p className="text-xs text-green-500 font-semibold mt-1 flex items-center gap-1"><TrendingDown className="w-3 h-3" /> -0.3s improvement</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <p className="text-xs font-bold text-slate-400 uppercase">Security Incidents</p>
                                <p className="text-3xl font-black mt-2 text-red-600">7</p>
                                <p className="text-xs text-slate-500 mt-1">All resolved within SLA</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <p className="text-xs font-bold text-slate-400 uppercase">Compliance Score</p>
                                <p className="text-3xl font-black mt-2 text-green-600">98.2%</p>
                                <div className="mt-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '98.2%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h3 className="font-bold mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /> Verification Distribution</h3>
                                <div className="space-y-4">
                                    <div><div className="flex justify-between text-sm mb-1"><span>FaceID</span><span className="font-bold">72%</span></div><div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2"><div className="bg-primary h-2 rounded-full" style={{ width: '72%' }}></div></div></div>
                                    <div><div className="flex justify-between text-sm mb-1"><span>QR Code</span><span className="font-bold">18%</span></div><div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{ width: '18%' }}></div></div></div>
                                    <div><div className="flex justify-between text-sm mb-1"><span>Manual Override</span><span className="font-bold">10%</span></div><div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full" style={{ width: '10%' }}></div></div></div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h3 className="font-bold mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-primary" /> Recent Reports</h3>
                                <div className="space-y-3">
                                    {['Weekly Safety Summary', 'Monthly Compliance Audit', 'Incident Report #2847', 'Quarterly Analytics'].map((report, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                                            <span className="text-sm font-medium">{report}</span>
                                            <Download className="w-4 h-4 text-slate-400" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    );
}
