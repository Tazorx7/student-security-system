import React from 'react';
import {
    Shield,
    LayoutDashboard,
    History,
    Phone,
    UserCheck,
    Bell,
    Settings
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col hidden lg:flex">
            <div className="p-6">
                <div className="flex items-center gap-3 mb-8">
                    <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                        <Shield className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold leading-none">GuardianLink</h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Lincoln Elementary</p>
                    </div>
                </div>
                <nav className="space-y-1">
                    <Link
                        to="/dashboard"
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg font-semibold transition-colors ${isActive('/dashboard')
                                ? 'bg-primary/10 text-primary'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        <span>Dashboard</span>
                    </Link>
                    <Link
                        to="/dashboard/history"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <History className="w-5 h-5" />
                        <span>Pickup History</span>
                    </Link>
                    <Link
                        to="/dashboard/contacts"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        <span>Emergency Contacts</span>
                    </Link>
                    <Link
                        to="/dashboard/guardians"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <UserCheck className="w-5 h-5" />
                        <span>Authorized Guardians</span>
                    </Link>
                    <Link
                        to="/dashboard/alerts"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <Bell className="w-5 h-5" />
                        <span className="flex-1">Alerts</span>
                        <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold leading-none">1</span>
                    </Link>
                </nav>
            </div>
            <div className="mt-auto p-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-slate-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAq0mgy-b-VU3X3t_ryVIAP2MUIK6mfolCTFfxfZOLxbSQD5UkrUGcDLb6O2M7wij-SVvCmdyK_lpZYG7oJnFEbflY-gAlvgsHM0qwe29k7HQKRjBcFxc7EnEiTaGMeu4vNtME7pUb1QsrAmY_kDEePb2FQWoYNpFZ5FPaJ7VkT6ND_MgW6tTvTBRDBhhujngLIaeiOz8K-cJAZ4h_deuFfWkrh3b2QKmEhaZxoECogDu8P35NIVOl2-SIdtTuxqQ5JAsPQRBzJg_A')" }}></div>
                    <div className="flex flex-col overflow-hidden">
                        <p className="text-sm font-bold truncate">Sarah Johnson</p>
                        <p className="text-xs text-slate-500 truncate">parent.id_4429</p>
                    </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Settings className="w-4 h-4" />
                    Settings
                </button>
            </div>
        </aside>
    );
};
