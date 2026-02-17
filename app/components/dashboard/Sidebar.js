"use client";
import {
    Shield,
    LayoutDashboard,
    History,
    Phone,
    UserCheck,
    Bell,
    Settings,
    LogOut
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

export const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { userProfile, logout } = useAuth();
    const { showToast } = useToast();
    const isActive = (path) => pathname === path;

    const initials = userProfile?.displayName
        ? userProfile.displayName.split(' ').map(n => n[0]).join('').toUpperCase()
        : '??';

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
        <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col hidden lg:flex">
            <div className="p-6">
                <div className="flex items-center gap-3 mb-8">
                    <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                        <Shield className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold leading-none">GuardianLink</h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            {userProfile?.schoolName || 'School Portal'}
                        </p>
                    </div>
                </div>
                <nav className="space-y-1">
                    <Link
                        href="/dashboard"
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg font-semibold transition-colors ${isActive('/dashboard')
                            ? 'bg-primary/10 text-primary'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        <span>Dashboard</span>
                    </Link>
                    <Link
                        href="/dashboard/history"
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg font-semibold transition-colors ${isActive('/dashboard/history')
                            ? 'bg-primary/10 text-primary'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                    >
                        <History className="w-5 h-5" />
                        <span>Pickup History</span>
                    </Link>
                    <Link
                        href="/dashboard/contacts"
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg font-semibold transition-colors ${isActive('/dashboard/contacts')
                            ? 'bg-primary/10 text-primary'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                    >
                        <Phone className="w-5 h-5" />
                        <span>Emergency Contacts</span>
                    </Link>
                    <Link
                        href="/dashboard/guardians"
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg font-semibold transition-colors ${isActive('/dashboard/guardians')
                            ? 'bg-primary/10 text-primary'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                    >
                        <UserCheck className="w-5 h-5" />
                        <span>Authorized Guardians</span>
                    </Link>
                    <Link
                        href="/dashboard/alerts"
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg font-semibold transition-colors ${isActive('/dashboard/alerts')
                            ? 'bg-primary/10 text-primary'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                    >
                        <Bell className="w-5 h-5" />
                        <span className="flex-1">Alerts</span>
                    </Link>
                </nav>
            </div>
            <div className="mt-auto p-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">{initials}</div>
                    <div className="flex flex-col overflow-hidden">
                        <p className="text-sm font-bold truncate">{userProfile?.displayName || 'User'}</p>
                        <p className="text-xs text-slate-500 truncate">{userProfile?.email || ''}</p>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 hover:border-red-200 transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </button>
            </div>
        </aside>
    );
};
