import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SettingsSidebar } from '../../components/admin/settings/SettingsSidebar';
import { ContactHierarchy } from '../../components/admin/settings/ContactHierarchy';
import { NotificationPreferences } from '../../components/admin/settings/NotificationPreferences';
import { DeviceManagement } from '../../components/admin/settings/DeviceManagement';

const SecuritySettings = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display flex flex-col">
            {/* Top Navigation Bar - Reusing similar style */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 py-3 sticky top-0 z-50">
                <div className="flex items-center gap-4 text-primary">
                    <div className="size-8">
                        <ShieldCheck className="w-8 h-8 fill-current" />
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Safeguard Portal</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <nav className="flex items-center gap-6">
                        <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/admin">Dashboard</Link>
                        <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/admin/students/profile">Student Profile</Link>
                        <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/admin/audit">Pickup Log</Link>
                        <Link className="text-primary text-sm font-bold border-b-2 border-primary pb-1" to="/admin/settings">Settings</Link>
                    </nav>
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-200 dark:border-slate-700"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeERrtK_kZEnn2i6absIJlF4qiMVdj4r0mKbIHdyYozc7jyR5KzMCc2qFN2LPM1swfiEHLIgLjfXpOFxd8onRziho-C80X8tzFJdWdNmmxM5j9jEZwKT0WHJMrsW36W7GNo2a58jMkM_5Uak2SVY5huZ9j14JhB8Z0-hDj9QqB2JUxdDPjUzoJin9PszZ0CCQowvIktDCC3IXntIxnvt_8CG31oiD1QarHUUzF_XWJu-lNPq8YG8yTRxVmgpglEzFfKAvlljsysBI")' }}
                    ></div>
                </div>
            </header>

            {/* Content Area */}
            <main className="flex-1 flex justify-center py-10 px-6">
                <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-8">
                    <SettingsSidebar />

                    {/* Main Section */}
                    <div className="flex-1 flex flex-col gap-8">
                        {/* Title Section */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Security & Hierarchy Config</h2>
                            <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
                                Customize your pickup authority priority and manage how your family receives secure notifications when a child is ready for collection.
                            </p>
                        </div>

                        <ContactHierarchy />

                        {/* Two Column Grid for Devices & Notifications */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <NotificationPreferences />
                            <DeviceManagement />
                        </div>

                        {/* Actions Bar */}
                        <div className="flex items-center justify-end gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                            <button className="px-6 py-2.5 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">Discard Changes</button>
                            <button className="px-8 py-2.5 rounded-lg text-sm font-bold bg-primary text-white shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">Save Configuration</button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-800 py-10 px-6 mt-auto">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 opacity-50 grayscale">
                        <div className="size-5 bg-primary rounded-sm"></div>
                        <span className="text-xs font-bold uppercase tracking-widest">Safeguard Portal v2.4.1</span>
                    </div>
                    <div className="flex gap-8 text-xs font-medium text-slate-400">
                        <a className="hover:text-primary" href="#">Help Center</a>
                        <a className="hover:text-primary" href="#">Terms of Service</a>
                        <a className="hover:text-primary" href="#">Privacy Policy</a>
                        <a className="hover:text-primary" href="#">Emergency Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SecuritySettings;
