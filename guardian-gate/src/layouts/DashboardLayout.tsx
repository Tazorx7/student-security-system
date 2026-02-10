import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/dashboard/Sidebar';
import { MobileNav } from '../components/dashboard/MobileNav';

const DashboardLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden relative">
                <Outlet />
            </main>
            <MobileNav />
        </div>
    );
};

export default DashboardLayout;
