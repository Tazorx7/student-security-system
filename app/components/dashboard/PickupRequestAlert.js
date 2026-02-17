"use client";
import { AlertCircle, Timer, X, Check, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRealtimeCollection } from '../../hooks/useFirestore';
import { useFirestoreActions } from '../../hooks/useFirestore';
import { useToast } from '../../context/ToastContext';
import { where } from 'firebase/firestore';

export const PickupRequestAlert = () => {
    const { user } = useAuth();
    const { showToast } = useToast();
    const { updateDocument } = useFirestoreActions();
    const [processing, setProcessing] = useState(null);

    const { data: requests } = useRealtimeCollection(
        user ? 'pickupRequests' : null,
        user ? [where('parentId', '==', user.uid), where('status', '==', 'pending')] : []
    );

    const handleAction = async (requestId, action) => {
        setProcessing(requestId);
        try {
            await updateDocument(`pickupRequests/${requestId}`, {
                status: action,
                respondedAt: new Date(),
                respondedBy: user.uid,
            });
            showToast(
                action === 'approved' ? 'Pickup approved successfully!' : 'Pickup denied.',
                action === 'approved' ? 'success' : 'warning'
            );
        } catch (err) {
            showToast('Failed to process request. Please try again.', 'error');
        } finally {
            setProcessing(null);
        }
    };

    if (!requests || requests.length === 0) return null;

    return (
        <section className="max-w-4xl mx-auto space-y-4">
            {requests.map((request) => {
                const initials = request.guardianName
                    ? request.guardianName.split(' ').map(n => n[0]).join('').toUpperCase()
                    : '??';

                return (
                    <div key={request.id} className="bg-white dark:bg-slate-900 border-2 border-primary rounded-xl shadow-xl overflow-hidden">
                        <div className="bg-primary px-6 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-white">
                                <AlertCircle className="fill-current w-5 h-5" />
                                <span className="font-bold text-sm uppercase tracking-wider">Urgent Action Required</span>
                            </div>
                            <div className="bg-white/20 px-3 py-1 rounded flex items-center gap-2 text-white font-mono font-bold">
                                <Timer className="w-4 h-4" />
                                Pending
                            </div>
                        </div>
                        <div className="p-6 md:flex items-center gap-8">
                            <div className="flex-1 flex items-center gap-6">
                                <div className="size-24 rounded-lg bg-slate-200 flex items-center justify-center text-slate-400 text-xl font-bold shrink-0 border-4 border-slate-50 dark:border-slate-800 shadow-sm">{initials}</div>
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-black leading-tight">Pickup Request</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-snug">
                                        <span className="font-bold text-slate-900 dark:text-slate-100">{request.guardianName}</span>
                                        {request.guardianRelation && ` (${request.guardianRelation})`} is requesting to pick up{' '}
                                        <span className="font-bold text-slate-900 dark:text-slate-100">{request.studentName}</span>.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => handleAction(request.id, 'denied')}
                                    disabled={processing === request.id}
                                    className="flex-1 sm:w-40 h-14 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-200 dark:shadow-none transition-transform active:scale-95 disabled:opacity-60"
                                >
                                    {processing === request.id ? <Loader2 className="w-5 h-5 animate-spin" /> : <X className="w-5 h-5" />}
                                    Deny
                                </button>
                                <button
                                    onClick={() => handleAction(request.id, 'approved')}
                                    disabled={processing === request.id}
                                    className="flex-1 sm:w-40 h-14 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-200 dark:shadow-none transition-transform active:scale-95 disabled:opacity-60"
                                >
                                    {processing === request.id ? <Loader2 className="w-5 h-5 animate-spin" /> : <Check className="w-5 h-5" />}
                                    Approve
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
