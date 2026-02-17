"use client";
import { AdminSidebar } from '../components/admin/AdminSidebar';
import { PrincipalHeader } from '../components/admin/PrincipalHeader';
import { QuickStats } from '../components/admin/QuickStats';
import { IncidentReview } from '../components/admin/IncidentReview';
import { DismissalLog } from '../components/admin/DismissalLog';
import { EmergencyOverride } from '../components/admin/EmergencyOverride';
import ProtectedRoute from '../components/protectedRoute';

export default function AdminDashboardPage() {
    return (
        <ProtectedRoute>
            <div className="flex h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
                <AdminSidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <PrincipalHeader />
                    <main className="flex-1 overflow-y-auto p-8 space-y-8">
                        <QuickStats />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <DismissalLog />
                            </div>
                            <div className="space-y-8">
                                <IncidentReview />
                                <EmergencyOverride />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    );
}
