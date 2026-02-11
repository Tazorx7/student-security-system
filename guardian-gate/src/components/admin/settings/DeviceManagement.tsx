import React from 'react';
import { Smartphone, LogOut, Laptop, Phone } from 'lucide-react';

export const DeviceManagement = () => {
    return (
        <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <span className="text-primary bg-primary/10 p-2 rounded-lg">
                        <Smartphone className="w-5 h-5" />
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Active Devices</h3>
                </div>
                <button className="text-xs font-bold text-red-500 hover:bg-red-50 px-2 py-1 rounded transition-colors">Logout All</button>
            </div>
            <div className="flex flex-col gap-4">
                {/* Device 1 */}
                <div className="flex items-center gap-4">
                    <div className="size-10 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                        <Smartphone className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">iPhone 15 Pro (This Device)</p>
                        <p className="text-[10px] text-slate-500">New York, US • Last active 2 mins ago</p>
                    </div>
                    <span className="size-2 rounded-full bg-green-500"></span>
                </div>
                {/* Device 2 */}
                <div className="flex items-center gap-4">
                    <div className="size-10 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                        <Laptop className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">MacBook Pro 16"</p>
                        <p className="text-[10px] text-slate-500">Chrome Browser • Yesterday at 10:42 PM</p>
                    </div>
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
                {/* Device 3 */}
                <div className="flex items-center gap-4">
                    <div className="size-10 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Pixel 7 Pro</p>
                        <p className="text-[10px] text-slate-500">San Francisco, US • Oct 24, 2023</p>
                    </div>
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};
