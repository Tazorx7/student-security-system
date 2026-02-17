"use client";
import { Shield, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from '../common/ThemeToggle';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

export const StaffHeader = () => {
    const router = useRouter();
    const { userProfile, logout } = useAuth();
    const { showToast } = useToast();

    const handleLogout = async () => {
        try {
            await logout();
            showToast('Logged out successfully', 'success');
            router.push('/login');
        } catch {
            showToast('Failed to logout', 'error');
        }
    };

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { weekday: 'long' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 lg:px-10">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 text-primary">
                    <div className="size-8 text-primary">
                        <Shield className="w-8 h-8 fill-current" />
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">GuardianVerify</h2>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="/staff">Live Gate</Link>
                    <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="/staff/history">History</Link>
                    <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="/staff/roster">Student Roster</Link>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <div className="hidden sm:flex flex-col items-end">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {userProfile?.gateName || 'Gate Station'}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                        {dateStr}, {timeStr}
                    </span>
                </div>
                <ThemeToggle />
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <User className="w-6 h-6" />
                </div>
                <button
                    onClick={handleLogout}
                    className="size-10 flex items-center justify-center rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-400 hover:text-red-500 transition-colors"
                    title="Sign out"
                >
                    <LogOut className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
};
