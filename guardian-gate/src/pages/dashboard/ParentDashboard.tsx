import React from 'react';
import { DashboardHeader } from '../../components/dashboard/DashboardHeader';
import { PickupRequestAlert } from '../../components/dashboard/PickupRequestAlert';
import { ChildrenGrid } from '../../components/dashboard/ChildrenGrid';
import { RecentActivity } from '../../components/dashboard/RecentActivity';
import { EmergencyContacts } from '../../components/dashboard/EmergencyContacts';

const ParentDashboard = () => {
    return (
        <>
            <DashboardHeader />
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
                <PickupRequestAlert />
                <ChildrenGrid />
                <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <RecentActivity />
                    <EmergencyContacts />
                </section>
            </div>
        </>
    );
};

export default ParentDashboard;
