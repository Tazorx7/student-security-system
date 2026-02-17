"use client";
import { LayoutDashboard, History, QrCode, Users, UserCircle } from 'lucide-react';
import Link from 'next/link';

export const MobileNav = () => {
    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 h-16 flex items-center justify-around z-50 px-4">
            <Link href="/dashboard" className="flex flex-col items-center gap-1 text-primary">
                <LayoutDashboard className="w-6 h-6" />
                <span className="text-[10px] font-bold">Home</span>
            </Link>
            <Link href="/dashboard/history" className="flex flex-col items-center gap-1 text-slate-400">
                <History className="w-6 h-6" />
                <span className="text-[10px] font-bold">History</span>
            </Link>
            <div className="relative -mt-8 size-14 bg-primary rounded-full shadow-lg flex items-center justify-center text-white border-4 border-background-light dark:border-background-dark">
                <QrCode className="w-8 h-8" />
            </div>
            <Link href="/dashboard/guardians" className="flex flex-col items-center gap-1 text-slate-400">
                <Users className="w-6 h-6" />
                <span className="text-[10px] font-bold">Guardians</span>
            </Link>
            <Link href="/dashboard/profile" className="flex flex-col items-center gap-1 text-slate-400">
                <UserCircle className="w-6 h-6" />
                <span className="text-[10px] font-bold">Profile</span>
            </Link>
        </nav>
    );
};
