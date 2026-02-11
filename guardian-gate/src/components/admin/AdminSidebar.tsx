import React from 'react';
import {
    ShieldCheck,
    LayoutDashboard,
    UserCheck,
    Users,
    History,
    BarChart,
    Siren,
    Settings,
    LogOut
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const AdminSidebar = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col hidden lg:flex">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="bg-primary p-1.5 rounded-lg text-white">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                    <h1 className="font-bold text-sm leading-none">GuardiaScan</h1>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-semibold">Admin Center</p>
                </div>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                <Link
                    to="/admin"
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-semibold transition-colors ${isActive('/admin')
                        ? 'bg-primary/10 text-primary'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                >
                    <LayoutDashboard className="w-5 h-5" />
                    Dashboard
                </Link>
                <Link to="/admin/alerts" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${isActive('/admin/alerts') ? 'bg-primary/10 text-primary' : ''}`}>
                    <Siren className="w-5 h-5" />
                    Alerts Center
                </Link>
                <Link to="/admin/students/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Users className="w-5 h-5" />
                    Student Profile (Demo)
                </Link>
                <Link to="/admin/verification" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <UserCheck className="w-5 h-5" />
                    Live Verification
                </Link>
                <Link to="/admin/database" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Users className="w-5 h-5" />
                    Guardian Database
                </Link>
                <Link to="/admin/audit" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${isActive('/admin/audit') ? 'bg-primary/10 text-primary' : ''}`}>
                    <History className="w-5 h-5" />
                    Audit Trails
                </Link>
                <Link to="/admin/reports" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <BarChart className="w-5 h-5" />
                    Compliance Reports
                </Link>
                <div className="pt-6 pb-2 px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Security Controls</div>
                <Link to="/admin/override" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                    <Siren className="w-5 h-5" />
                    Emergency Override
                </Link>
                <Link to="/admin/settings" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${isActive('/admin/settings') ? 'bg-primary/10 text-primary' : ''}`}>
                    <Settings className="w-5 h-5" />
                    System Settings
                </Link>
            </nav>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm bg-cover bg-center"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3pfmdXugLjLGez24GykmKMNlyjW1GsLH0QwloUn16jtiZS5i4vOh9-kycua_EXgDcAXVY3WMg49Mx99D258B_f6CekjKadD3dE6KVbf1r-w7z0Q_82xdPoCeZasA4pcqmxzqbnqtOEj7a2A7rTDkGJEHx9MJFWVcYqn2AWP_17nUdgikw02_jwK3OIMcGFsfY_mAANqbRZSS73IoanAkz015Pyib3A41dZMia3xvLMt07q-7nvwzGuuj_BA-COXgP8F8ady6AapM')" }}
                    ></div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-xs font-bold truncate">Dr. Robert Miller</p>
                        <p className="text-[10px] text-slate-500 truncate">St. Mary's Academy</p>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600">
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </aside>
    );
};
