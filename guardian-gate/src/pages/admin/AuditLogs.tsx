import React from 'react';
import { ShieldCheck, FileText, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LogStats } from '../../components/admin/logs/LogStats';
import { LogFilters } from '../../components/admin/logs/LogFilters';
import { LogTable } from '../../components/admin/logs/LogTable';
import { LogDetail } from '../../components/admin/logs/LogDetail';

const AuditLogs = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display flex flex-col">
            <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary text-white p-1.5 rounded-lg">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">PCRS Dashboard</h2>
                        </div>
                        <nav className="hidden md:flex items-center gap-6">
                            <Link className="text-sm font-medium hover:text-primary transition-colors text-slate-600 dark:text-slate-400" to="/admin">Dashboard</Link>
                            <Link className="text-sm font-semibold text-primary" to="/admin/audit">Logs</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors text-slate-600 dark:text-slate-400" to="/admin/students">Students</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors text-slate-600 dark:text-slate-400" to="/admin/guardians">Guardians</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors text-slate-600 dark:text-slate-400" to="/admin/staff">Staff</Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex gap-2 mr-4 border-r pr-4 border-slate-200 dark:border-slate-700">
                            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300">
                                <FileText className="w-4 h-4" />
                                CSV
                            </button>
                            <button className="flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
                                <FileText className="w-4 h-4" />
                                PDF Report
                            </button>
                        </div>
                        <div
                            className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7fVrR11osKmePHfvYBjkQeaO8cba7yazmGwyE5zk_CjUFcR6IzJuobDjtxdQkBV8dEeOIDeLTqXevcQrmnCQXk29-b8yvF1CPRpSoBv0k7wtbQIU58_yJXWUYcAb2XhaSHFesmIKoBGnFRgJGh-Q78SDVodDYauIAO0CGoUlOvNh83VUvP2viDCGjv3GErnRz-f1nHWOWB8hlkhnlo6jSwprIAZVKcLmWlIhJ9S0fgutpsfsyILxh_vn4lohkbB8GVT8nTbe9GeE")' }}
                        ></div>
                    </div>
                </div>
            </header>

            <main className="max-w-[1400px] mx-auto w-full px-6 py-8 flex-1">
                <LogStats />
                <LogFilters />
                <LogTable />
                <LogDetail />
            </main>

            <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 py-10 bg-white dark:bg-slate-900">
                <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Lock className="w-4 h-4" />
                        All logs are encrypted and cryptographically signed (SHA-256).
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <a className="hover:text-primary" href="#">Terms of Audit</a>
                        <a className="hover:text-primary" href="#">Privacy Policy</a>
                        <a className="hover:text-primary" href="#">System Status</a>
                    </div>
                    <p className="text-sm text-slate-400">© 2023 PCRS Security Suite. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AuditLogs;
