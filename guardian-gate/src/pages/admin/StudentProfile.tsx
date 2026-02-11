import React from 'react';
import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { IdentityCard } from '../../components/profile/IdentityCard';
import { PermissionsManager } from '../../components/profile/PermissionsManager';
import { AuditTimeline } from '../../components/profile/AuditTimeline';

const StudentProfile = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display">
            <ProfileHeader />
            <main className="max-w-[1440px] mx-auto p-6 grid grid-cols-12 gap-6">
                <IdentityCard />
                <PermissionsManager />
                <AuditTimeline />
            </main>
        </div>
    );
};

export default StudentProfile;
