import React from 'react';
import { StaffHeader } from '../../components/staff/StaffHeader';
import { CameraFeed } from '../../components/staff/CameraFeed';
import { VerificationPanel } from '../../components/staff/VerificationPanel';
import { RecentApprovals } from '../../components/staff/RecentApprovals';

const StaffDashboard = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display">
            <StaffHeader />
            <main className="p-4 lg:p-6 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <CameraFeed />
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <VerificationPanel />
                    </div>
                </div>
                <RecentApprovals />
            </main>
        </div>
    );
};

export default StaffDashboard;
