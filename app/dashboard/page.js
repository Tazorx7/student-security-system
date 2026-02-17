"use client";
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { PickupRequestAlert } from '../components/dashboard/PickupRequestAlert';
import { ChildrenGrid } from '../components/dashboard/ChildrenGrid';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { EmergencyContacts } from '../components/dashboard/EmergencyContacts';
import { Sidebar } from '../components/dashboard/Sidebar';
import { MobileNav } from '../components/dashboard/MobileNav';
import ProtectedRoute from '../components/protectedRoute';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden relative">
          <DashboardHeader />
          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            <PickupRequestAlert />
            <ChildrenGrid />
            <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
              <RecentActivity />
              <EmergencyContacts />
            </section>
          </div>
        </main>
        <MobileNav />
      </div>
    </ProtectedRoute>
  );
}
