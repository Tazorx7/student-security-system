"use client";
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { SettingsSidebar } from '../../components/admin/settings/SettingsSidebar';
import { ContactHierarchy } from '../../components/admin/settings/ContactHierarchy';
import { NotificationPreferences } from '../../components/admin/settings/NotificationPreferences';
import { DeviceManagement } from '../../components/admin/settings/DeviceManagement';
import ProtectedRoute from '../../components/protectedRoute';

export default function SecuritySettingsPage() {
    return (
        <ProtectedRoute>
            <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display">
                <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 lg:px-10 sticky top-0 z-10">
                    <div className="flex items-center gap-6">
                        <Link href="/admin" className="text-slate-500 hover:text-primary transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
                        <div className="flex items-center gap-3 text-primary">
                            <Shield className="w-7 h-7 fill-current" />
                            <h2 className="text-lg font-bold">Security Settings</h2>
                        </div>
                    </div>
                </header>
                <main className="p-4 lg:p-10 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-10">
                        <SettingsSidebar />
                        <div className="flex-1 space-y-8">
                            <ContactHierarchy />
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <NotificationPreferences />
                                <DeviceManagement />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </ProtectedRoute>
    );
}
