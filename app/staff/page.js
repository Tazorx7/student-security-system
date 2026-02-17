"use client";
import { StaffHeader } from '../components/staff/StaffHeader';
import { CameraFeed } from '../components/staff/CameraFeed';
import { VerificationPanel } from '../components/staff/VerificationPanel';
import { RecentApprovals } from '../components/staff/RecentApprovals';
import ProtectedRoute from '../components/protectedRoute';

export default function StaffDashboardPage() {
    return (
        <ProtectedRoute>
            <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display">
                <StaffHeader />
                <main className="p-4 lg:p-10 max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-3">
                            <CameraFeed />
                        </div>
                        <div className="lg:col-span-2">
                            <VerificationPanel />
                        </div>
                    </div>
                    <RecentApprovals />
                </main>
            </div>
        </ProtectedRoute>
    );
}
