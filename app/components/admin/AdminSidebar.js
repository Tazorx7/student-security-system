"use client";
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
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

export const AdminSidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { userProfile, logout } = useAuth();
    const { showToast } = useToast();

    const isActive = (path) => pathname === path;

    const handleLogout = async () => {
        try {
            await logout();
            showToast('Logged out successfully', 'success');
            router.push('/login');
        } catch {
            showToast('Failed to logout', 'error');
        }
    };

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
                    href="/admin"
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-semibold transition-colors ${isActive('/admin')
                        ? 'bg-primary/10 text-primary'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                >
                    <LayoutDashboard className="w-5 h-5" />
                    Dashboard
                </Link>
                <Link href="/admin/alerts" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${isActive('/admin/alerts') ? 'bg-primary/10 text-primary' : ''}`}>
                    <Siren className="w-5 h-5" />
                    Alerts Center
                </Link>
                <Link href="/admin/students/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Users className="w-5 h-5" />
                    Student Profile
                </Link>
                <Link href="/admin/pickup-approval" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <UserCheck className="w-5 h-5" />
                    Live Verification
                </Link>
                <Link href="/admin/guardians" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Users className="w-5 h-5" />
                    Guardian Database
                </Link>
                <Link href="/admin/audit" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${isActive('/admin/audit') ? 'bg-primary/10 text-primary' : ''}`}>
                    <History className="w-5 h-5" />
                    Audit Trails
                </Link>
                <Link href="/admin/reports" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <BarChart className="w-5 h-5" />
                    Compliance Reports
                </Link>
                <div className="pt-6 pb-2 px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Security Controls</div>
                <Link href="/admin/emergency" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                    <Siren className="w-5 h-5" />
                    Emergency Override
                </Link>
                <Link href="/admin/settings" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${isActive('/admin/settings') ? 'bg-primary/10 text-primary' : ''}`}>
                    <Settings className="w-5 h-5" />
                    System Settings
                </Link>
            </nav>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                        {userProfile?.displayName
                            ? userProfile.displayName.split(' ').map(n => n[0]).join('').toUpperCase()
                            : 'A'}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-xs font-bold truncate">{userProfile?.displayName || 'Admin'}</p>
                        <p className="text-[10px] text-slate-500 truncate">{userProfile?.schoolName || 'School Admin'}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="text-slate-400 hover:text-red-500 transition-colors"
                        title="Sign out"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </aside>
    );
};
