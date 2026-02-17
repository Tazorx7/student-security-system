"use client";
import { School, DoorOpen, Users, Smartphone, ShieldCheck, AlertTriangle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useRealtimeCollection } from '../../hooks/useFirestore';
import { useFirestoreActions } from '../../hooks/useFirestore';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { LoadingSpinner, EmptyState } from '../common/LoadingSpinner';
import { where, orderBy, limit } from 'firebase/firestore';

export const VerificationPanel = () => {
    const { user } = useAuth();
    const { showToast } = useToast();
    const { updateDocument, addDocument } = useFirestoreActions();
    const [flagging, setFlagging] = useState(false);

    // Get the next pending verification for this gate staff member
    const { data: queue, loading } = useRealtimeCollection(
        'verifications',
        [where('status', '==', 'pending'), orderBy('timestamp', 'asc'), limit(1)]
    );

    const current = queue?.[0];

    const handleFlag = async () => {
        if (!current) return;
        setFlagging(true);
        try {
            await addDocument('incidents', {
                type: 'unauthorized',
                title: `Security Flag: ${current.guardianName}`,
                description: `Staff flagged verification for ${current.studentName} by ${current.guardianName} at gate.`,
                status: 'pending',
                verificationId: current.id,
                flaggedBy: user?.uid,
            });
            await updateDocument(`verifications/${current.id}`, { status: 'flagged' });
            showToast('Security incident flagged. Campus security notified.', 'warning');
        } catch {
            showToast('Failed to flag incident.', 'error');
        } finally {
            setFlagging(false);
        }
    };

    const handleOverride = async () => {
        if (!current) return;
        try {
            await updateDocument(`verifications/${current.id}`, {
                status: 'approved',
                overriddenBy: user?.uid,
                verifiedAt: new Date(),
            });
            showToast('Manual verification override applied.', 'success');
        } catch {
            showToast('Override failed.', 'error');
        }
    };

    if (loading) return <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border p-8"><LoadingSpinner message="Loading verification queue..." /></div>;

    if (!current) return (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <EmptyState icon={ShieldCheck} title="Queue Empty" description="No pending verifications. Waiting for next arrival..." />
        </div>
    );

    const studentInitials = current.studentName ? current.studentName.split(' ').map(n => n[0]).join('').toUpperCase() : '??';
    const guardianInitials = current.guardianName ? current.guardianName.split(' ').map(n => n[0]).join('').toUpperCase() : '??';

    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase mb-1">Status</span>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                        <span className="w-2 h-2 rounded-full bg-amber-500 mr-2 animate-pulse"></span>
                        WAITING FOR PARENT
                    </span>
                </div>
            </div>
            <div className="space-y-6">
                {/* Student Profile */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background-light dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                    <div className="h-20 w-20 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-2xl font-bold text-slate-500 flex-shrink-0">{studentInitials}</div>
                    <div className="flex-grow">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-xs font-bold text-primary uppercase">Student Profile</p>
                                <h4 className="text-xl font-black text-slate-900 dark:text-white">{current.studentName}</h4>
                            </div>
                            {current.studentId && (
                                <span className="bg-white dark:bg-slate-700 px-2 py-1 rounded text-[10px] font-black border border-slate-200 dark:border-slate-600">ID: #{current.studentId}</span>
                            )}
                        </div>
                        <div className="mt-2 flex gap-4 text-sm text-slate-600 dark:text-slate-400">
                            {current.grade && <span className="flex items-center gap-1"><School className="w-3 h-3" /> {current.grade}</span>}
                            {current.room && <span className="flex items-center gap-1"><DoorOpen className="w-3 h-3" /> {current.room}</span>}
                        </div>
                    </div>
                </div>
                {/* Guardian Profile */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background-light dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                    <div className="h-20 w-20 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-2xl font-bold text-slate-500 flex-shrink-0">{guardianInitials}</div>
                    <div className="flex-grow">
                        <p className="text-xs font-bold text-green-600 dark:text-green-400 uppercase">
                            {current.guardianAuthorized !== false ? 'Authorized Guardian' : 'Unverified Guardian'}
                        </p>
                        <h4 className="text-xl font-black text-slate-900 dark:text-white">{current.guardianName}</h4>
                        <div className="mt-2 space-y-1">
                            {current.guardianRelation && (
                                <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                    <Users className="w-3 h-3" /> {current.guardianRelation}
                                </p>
                            )}
                            {current.guardianPhone && (
                                <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                    <Smartphone className="w-3 h-3" /> {current.guardianPhone}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex flex-col gap-3">
                <button
                    onClick={handleOverride}
                    className="w-full py-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                    <ShieldCheck className="w-5 h-5" />
                    MANUAL OVERRIDE VERIFICATION
                </button>
                <button
                    onClick={handleFlag}
                    disabled={flagging}
                    className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                    {flagging ? <Loader2 className="w-5 h-5 animate-spin" /> : <AlertTriangle className="w-5 h-5" />}
                    FLAG SECURITY INCIDENT
                </button>
                <p className="text-center text-[11px] text-slate-400 font-medium px-8 leading-tight">
                    Flagging an incident will immediately alert campus security and lock gate controls.
                </p>
            </div>
        </div>
    );
};
