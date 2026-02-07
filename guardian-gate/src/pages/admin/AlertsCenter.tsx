import React from 'react';
import { PrincipalHeader } from '../../components/admin/PrincipalHeader'; // Reusing header or create new one if needed
import { AlertStats } from '../../components/alerts/AlertStats';
import { AlertFilters } from '../../components/alerts/AlertFilters';
import { AlertFeed } from '../../components/alerts/AlertFeed';
import { HelpCircle, FileText, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const AlertsCenter = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display flex flex-col">
            {/* Custom Header for Alerts Center as per design */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 py-3 sticky top-0 z-50">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 text-primary">
                        <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
                            <ShieldCheck className="text-primary w-6 h-6" />
                        </div>
                        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">GuardianNet Admin</h2>
                    </div>
                    <nav className="flex items-center gap-6">
                        <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" to="/admin">Dashboard</Link>
                        <Link className="text-primary text-sm font-bold leading-normal border-b-2 border-primary pb-1" to="/admin/alerts">Alerts</Link>
                        <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" to="/admin/students/profile">Student Profile</Link>
                        <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" to="/admin/guardians">Guardians</Link>
                    </nav>
                </div>
                <div className="flex flex-1 justify-end gap-4">
                    {/* Reuse PrincipalHeader components or logic here if desired, simplifying for valid compilation */}
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-white dark:border-slate-700 shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_udkwWIdaXKASxMIYEbCpHEbF5QJ0uE5lSHTLRZ8G5DpUEVVeK5XKJv0Bp-ffatllHbp8V_V_SRC4RuD-O5DYrssLeqXneO49j3MK8IoOuVUC-t1C0EDk7-EkOKg2ImLTLNCD9w7i-H0zvJB3jlH1yKEdFajtIIRbtCIeXO2DO2VI98CKac6G0_hwIfb4pwJRvIcwkUABMZOC_YkwyqizRIEVZaoPUA2CX_IfaMAoxW7u210ec5jurM4gdXZR-_-rFm559aOHpwo")' }}></div>
                </div>
            </header>

            <main className="flex-1 px-4 md:px-10 lg:px-20 xl:px-40 py-8">
                <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Notification Center</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Monitor secure campus entries and pickup authorizations in real-time.</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-green-700 dark:text-green-400 text-sm font-bold">System Live: Active Monitoring</span>
                    </div>
                </div>

                <AlertStats />
                <AlertFilters />
                <AlertFeed />
            </main>

            <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-10 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3 overflow-hidden">
                            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 bg-slate-300"></div>
                            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 bg-slate-400"></div>
                            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 bg-slate-500"></div>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm"><span className="font-bold text-slate-800 dark:text-slate-200">12 Security Personnel</span> currently active across campus</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                            <HelpCircle className="w-5 h-5" /> Help Center
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                            <FileText className="w-5 h-5" /> View Reports
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AlertsCenter;
