"use client";
import { useState } from 'react';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { PrincipalHeader } from '../../components/admin/PrincipalHeader';
import { ShieldAlert, Lock, Unlock, Radio, DoorOpen, AlertTriangle, Shield, Info, Loader2 } from 'lucide-react';
import ProtectedRoute from '../../components/protectedRoute';
import { useDocument, useFirestoreActions } from '../../hooks/useFirestore';
import { useToast } from '../../context/ToastContext';

export default function EmergencyOverridePage() {
    const { showToast } = useToast();
    const { updateDocument, setDocument } = useFirestoreActions();

    // Fetch global system status
    const { data: systemStatus, loading } = useDocument('system/status');
    const armed = systemStatus?.lockdownActive || false;
    const [toggling, setToggling] = useState(false);

    const handleLockdown = async () => {
        setToggling(true);
        const newState = !armed;
        try {
            // Check if document exists, if not create it
            if (!systemStatus) {
                await setDocument('system/status', { lockdownActive: newState, lastUpdated: new Date() });
            } else {
                await updateDocument('system/status', { lockdownActive: newState, lastUpdated: new Date() });
            }
            showToast(newState ? 'GLOBAL LOCKDOWN INITIATED' : 'Lockdown deactivated.', newState ? 'error' : 'success');
        } catch (err) {
            console.error(err);
            showToast('Failed to update system status.', 'error');
        } finally {
            setToggling(false);
        }
    };

    return (
        <ProtectedRoute allowedRoles={['admin']}>
            <div className="flex h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
                <AdminSidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <PrincipalHeader />
                    <main className="flex-1 overflow-y-auto p-8 space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-red-600 flex items-center gap-3">
                                    <ShieldAlert className="w-7 h-7" /> Emergency Override Console
                                </h1>
                                <p className="text-sm text-slate-500 mt-1">Critical system controls — authorized personnel only.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                {loading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold ${armed ? 'bg-red-100 text-red-700 dark:bg-red-900/30 animate-pulse' : 'bg-green-100 text-green-700 dark:bg-green-900/30'}`}>
                                        <span className={`w-2 h-2 rounded-full mr-2 ${armed ? 'bg-red-500' : 'bg-green-500'}`}></span>
                                        {armed ? 'SYSTEM ARMED' : 'NORMAL OPERATIONS'}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-red-600 text-white rounded-xl">
                                    <Lock className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-red-700 dark:text-red-400">Global Campus Lockdown</h2>
                                    <p className="text-sm text-red-600 dark:text-red-300 mt-1">Locks all gates, disables QR/FaceID, alerts all staff and security.</p>
                                    <div className="mt-4 flex items-center gap-4">
                                        <button
                                            onClick={handleLockdown}
                                            disabled={toggling || loading}
                                            className={`px-6 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all flex items-center gap-2 ${armed ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-200 dark:shadow-none'}`}
                                        >
                                            {toggling && <Loader2 className="w-4 h-4 animate-spin" />}
                                            {armed ? 'DISARM LOCKDOWN' : 'ARM LOCKDOWN'}
                                        </button>
                                        <span className="text-[10px] text-red-500 font-bold">Requires confirmation</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg"><DoorOpen className="w-5 h-5 text-amber-600" /></div>
                                    <h3 className="font-bold">Manual Gate Release</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-4">Manually open a specific gate for authorized release.</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Gate A', 'Gate B', 'Gate C', 'Gate D'].map((gate) => (
                                        <button key={gate} className="py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:border-primary/50 transition-colors">
                                            {gate}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg"><Radio className="w-5 h-5 text-blue-600" /></div>
                                    <h3 className="font-bold">PA System Broadcast</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-4">Send an announcement to all campus speakers.</p>
                                <textarea className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm resize-none h-20" placeholder="Type message..."></textarea>
                                <button className="mt-2 w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">Broadcast Now</button>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg"><AlertTriangle className="w-5 h-5 text-red-600" /></div>
                                    <h3 className="font-bold">Silent Alarm</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-4">Alert security team without triggering audible alarms.</p>
                                <button className="w-full py-3 bg-red-100 dark:bg-red-900/20 text-red-600 border border-red-200 dark:border-red-800 rounded-lg text-sm font-bold hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors flex items-center justify-center gap-2">
                                    <Shield className="w-4 h-4" /> Trigger Silent Alarm
                                </button>
                            </div>
                        </div>

                        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-4 flex items-center gap-3">
                            <Info className="w-5 h-5 text-amber-600" />
                            <p className="text-sm text-amber-700 dark:text-amber-400">All emergency actions are logged and require post-incident review within 24 hours.</p>
                        </div>
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    );
}
