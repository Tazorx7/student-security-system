import React from 'react';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { PrincipalHeader } from '../../components/admin/PrincipalHeader';
import { QuickStats } from '../../components/admin/QuickStats';
import { IncidentReview } from '../../components/admin/IncidentReview';
import { DismissalLog } from '../../components/admin/DismissalLog';
import { EmergencyOverride } from '../../components/admin/EmergencyOverride';

const PrincipalDashboard = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark flex flex-col">
                <PrincipalHeader />
                <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
                    <QuickStats />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <IncidentReview />
                            <DismissalLog />
                        </div>
                        <div className="space-y-8">
                            <EmergencyOverride />
                            {/* SystemHealth and AuditShortcut could be added here if needed */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PrincipalDashboard;
